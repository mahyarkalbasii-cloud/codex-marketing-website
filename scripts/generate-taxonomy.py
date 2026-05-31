from __future__ import annotations

import json
import re
from pathlib import Path

from docx import Document
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P
from docx.table import Table
from docx.text.paragraph import Paragraph


REPO_ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = Path(
    r"C:\Users\mahya\Desktop\Files\New Desktop\Persiansaze\405\Docs"
)
OUTPUT_PATH = REPO_ROOT / "src" / "data" / "taxonomy.ts"

PERSIAN_DIGITS = str.maketrans("۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩", "01234567890123456789")

CATEGORY_SLUGS = {
    1: "building-materials",
    2: "steel-and-metals",
    3: "blocks-walls-and-roof-systems",
    4: "construction-chemicals-adhesives-sealants",
    5: "thermal-moisture-sound-insulation",
    6: "mechanical-piping",
    7: "hvac-heating-cooling",
    8: "electrical-lighting",
    9: "smart-building-and-safety-systems",
    10: "doors-windows-and-facade",
    11: "flooring-tiles-and-ceramics",
    12: "interior-and-exterior-finishes",
    13: "sanitary-fixtures-and-faucets",
    14: "kitchen-and-millwork",
    15: "vertical-transportation",
    16: "workshop-tools",
    17: "heavy-machinery-transport-concrete",
    18: "hse-safety-equipment",
    19: "engineering-and-consulting",
    20: "contracting-and-execution",
}

ALL_MAIN_STAGES = [
    "pre-construction",
    "demolition",
    "foundation",
    "structure",
    "wall-building",
    "plaster",
    "installations",
    "early-finishing",
    "finishing",
    "completion",
]

TRANSLIT = {
    "آ": "a",
    "ا": "a",
    "ب": "b",
    "پ": "p",
    "ت": "t",
    "ث": "s",
    "ج": "j",
    "چ": "ch",
    "ح": "h",
    "خ": "kh",
    "د": "d",
    "ذ": "z",
    "ر": "r",
    "ز": "z",
    "ژ": "zh",
    "س": "s",
    "ش": "sh",
    "ص": "s",
    "ض": "z",
    "ط": "t",
    "ظ": "z",
    "ع": "a",
    "غ": "gh",
    "ف": "f",
    "ق": "gh",
    "ک": "k",
    "ك": "k",
    "گ": "g",
    "ل": "l",
    "م": "m",
    "ن": "n",
    "و": "v",
    "ه": "h",
    "ی": "y",
    "ي": "y",
    "ئ": "y",
    "ء": "",
    "أ": "a",
    "إ": "e",
    "ؤ": "v",
    "‌": "-",
}


def normalize_digits(text: str) -> str:
    return text.translate(PERSIAN_DIGITS)


def clean_text(text: str) -> str:
    text = text.replace("\u200c", "‌")
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"(?<=[\.\)\]،؛\u0600-\u06FF])\s*[0-9۰-۹]{1,2}(?=$|[،؛,.])", "", text)
    text = re.sub(r"\s+([،؛,.])", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def slugify_fa(text: str, fallback: str) -> str:
    normalized = normalize_digits(text)
    chars: list[str] = []
    for char in normalized.lower():
        if char.isascii() and char.isalnum():
            chars.append(char)
        elif char in TRANSLIT:
            chars.append(TRANSLIT[char])
        else:
            chars.append("-")

    slug = "".join(chars)
    slug = re.sub(r"[^a-z0-9-]+", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    slug = slug[:64].strip("-")
    return slug or fallback


def normalize_sales_types(raw: str) -> list[str]:
    types: list[str] = []

    def add(value: str) -> None:
        if value not in types:
            types.append(value)

    if any(term in raw for term in ["سریع", "تراکنشی", "کالامحور", "برندمحور", "قرقره‌ای"]):
        add("fast")
    if any(term in raw for term in ["مشاوره", "مهندسی", "فنی", "تخصص", "پیمانکاری", "قراردادی", "طراحی", "محاسبات", "نظام مهندسی", "ارجاع"]):
        add("consultative")
    if any(term in raw for term in ["محاسبات", "مهندسی", "طراحی", "ناظر", "مجری", "ژئوتکنیک", "BIM", "نرم‌افزاری"]):
        add("engineering")
    if any(term in raw for term in ["سفارشی", "ابعادی", "اندازه"]):
        add("custom")
    if "تهاتر" in raw or "تهاتری" in raw:
        add("barter")
    if "اجاره" in raw or "اجاره‌ای" in raw:
        add("rental")

    if not types:
        add("consultative" if "خدمات" in raw else "fast")

    return types


def ordered_unique(items: list[str]) -> list[str]:
    result: list[str] = []
    for item in items:
        if item not in result:
            result.append(item)
    return result


def map_stage_phrase(phrase: str) -> list[str]:
    if "کلیه مراحل" in phrase or "همه مراحل" in phrase:
        return ALL_MAIN_STAGES

    stages: list[str] = []
    if "طراحی" in phrase or "مجوز" in phrase or "فاز صفر" in phrase:
        stages.append("pre-construction")
    if "گودبرداری" in phrase or "خاک" in phrase or "تجهیز کارگاه" in phrase:
        stages.append("demolition")
    if "فونداسیون" in phrase or "پی" in phrase:
        stages.append("foundation")
    if "اسکلت" in phrase or "ستون" in phrase:
        stages.append("structure")
    if "سفت" in phrase or "دیوار" in phrase:
        stages.extend(["wall-building", "plaster"])
    if "تاسیسات" in phrase or "تأسیسات" in phrase:
        stages.append("installations")
    if "نازک" in phrase or "نما" in phrase:
        stages.extend(["early-finishing", "finishing"])
    if "پایان" in phrase or "تحویل" in phrase:
        stages.append("completion")

    return ordered_unique(stages)


def parse_stage_timing(raw: str) -> dict[str, list[str]]:
    timing = {"negotiate": [], "buy": [], "execute": []}
    role_map = {
        "مذاکره": "negotiate",
        "خرید": "buy",
        "اجرا": "execute",
    }
    for part in re.split(r"\s*/\s*", raw):
        if ":" not in part:
            continue
        label, phrase = part.split(":", 1)
        role = next((value for key, value in role_map.items() if key in label), None)
        if role:
            timing[role] = map_stage_phrase(phrase)
    return timing


def category_heading(text: str) -> tuple[int, str] | None:
    match = re.match(r"^\s*([۰-۹0-9]+)\.\s+(.+?)\s*$", text)
    if not match:
        return None
    return int(normalize_digits(match.group(1))), clean_text(match.group(2))


def iter_blocks(document: Document):
    for child in document.element.body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, document)
        elif isinstance(child, CT_Tbl):
            yield Table(child, document)


def find_docx() -> Path:
    files = list(DOCS_DIR.glob("*.docx"))
    if not files:
        raise FileNotFoundError(f"No docx found in {DOCS_DIR}")
    return files[0]


def extract_categories(path: Path) -> list[dict]:
    doc = Document(str(path))
    categories: list[dict] = []
    current: dict | None = None

    for block in iter_blocks(doc):
        if isinstance(block, Paragraph):
            raw_text = re.sub(r"\s+", " ", block.text).strip()
            text = clean_text(block.text)
            if not text:
                continue
            heading = category_heading(raw_text)
            if heading:
                index, name = heading
                current = {"index": index, "faName": name, "introParts": []}
            elif current is not None and not text.startswith("بخش "):
                current["introParts"].append(text)
            continue

        if current is None:
            continue

        category_index = current["index"]
        slug = CATEGORY_SLUGS[category_index]
        subcategories = []
        seen_slugs: set[str] = set()
        for row in block.rows[1:]:
            raw_cells = [cell.text.strip() for cell in row.cells]
            cells = [clean_text(cell) for cell in raw_cells]
            if len(cells) < 7 or not cells[0] or not cells[1]:
                continue
            item_id = normalize_digits(raw_cells[0]).replace("٫", ".").strip()
            base_slug = slugify_fa(cells[1], f"item-{item_id.replace('.', '-')}")
            child_slug = f"{base_slug}-{item_id.replace('.', '-')}"
            if child_slug in seen_slugs:
                child_slug = f"{child_slug}-{len(seen_slugs) + 1}"
            seen_slugs.add(child_slug)

            subcategories.append(
                {
                    "id": item_id,
                    "slug": child_slug,
                    "categorySlug": slug,
                    "faName": cells[1],
                    "description": cells[2],
                    "salesTypes": normalize_sales_types(cells[3]),
                    "salesTypeRaw": cells[3],
                    "stageTiming": parse_stage_timing(cells[4]),
                    "builderValues": cells[5],
                    "trustCriteria": cells[6],
                }
            )

        categories.append(
            {
                "slug": slug,
                "faName": current["faName"],
                "intro": " ".join(current["introParts"])
                or f"این دسته از سند جامع محصولات و خدمات ساختمانی برای {current['faName']} استخراج شده است.",
                "subcategories": subcategories,
            }
        )
        current = None

    return categories


def build_ts(categories: list[dict], source_name: str) -> str:
    category_json = json.dumps(categories, ensure_ascii=False, indent=2)
    return f'''// Generated from "{source_name}" by scripts/generate-taxonomy.py.
// Edit the source DOCX or generator, then rerun the script.

export type SalesType =
  | "fast"
  | "consultative"
  | "custom"
  | "barter"
  | "rental"
  | "engineering";

export type StageSlug =
  | "pre-construction"
  | "demolition"
  | "foundation"
  | "structure"
  | "wall-building"
  | "plaster"
  | "installations"
  | "early-finishing"
  | "finishing"
  | "completion";

export type StageTiming = {{
  negotiate: StageSlug[];
  buy: StageSlug[];
  execute: StageSlug[];
}};

export type Subcategory = {{
  id: string;
  slug: string;
  categorySlug: string;
  faName: string;
  description: string;
  salesTypes: SalesType[];
  salesTypeRaw: string;
  stageTiming: StageTiming;
  builderValues: string;
  trustCriteria: string;
}};

export type Category = {{
  slug: string;
  faName: string;
  intro: string;
  subcategories: Subcategory[];
}};

export const TAXONOMY_CATEGORIES: Category[] = {category_json};

export const TAXONOMY_SUBCATEGORIES = TAXONOMY_CATEGORIES.flatMap(
  (category) => category.subcategories,
);

export const TAXONOMY_STAGE_RECONCILIATION = [
  {{ sourcePhase: "طراحی و اخذ مجوزها", stageSlugs: ["pre-construction"] }},
  {{ sourcePhase: "گودبرداری و تجهیز کارگاه", stageSlugs: ["demolition"] }},
  {{ sourcePhase: "فونداسیون و اسکلت", stageSlugs: ["foundation", "structure"] }},
  {{ sourcePhase: "سفت‌کاری", stageSlugs: ["wall-building", "plaster"] }},
  {{ sourcePhase: "تاسیسات", stageSlugs: ["installations"] }},
  {{ sourcePhase: "نازک‌کاری و نما", stageSlugs: ["early-finishing", "finishing"] }},
  {{ sourcePhase: "تحویل و پایان‌کار", stageSlugs: ["completion"] }},
] as const;

export const TAXONOMY_CATEGORY_RECONCILIATION = [
  {{ oldSlug: "cement-and-basic-materials", newSlug: "building-materials" }},
  {{ oldSlug: "steel-metals", newSlug: "steel-and-metals" }},
  {{ oldSlug: "mechanical-electrical", newSlug: "mechanical-piping" }},
  {{ oldSlug: "doors-windows", newSlug: "doors-windows-and-facade" }},
  {{ oldSlug: "doors-windows-facade", newSlug: "doors-windows-and-facade" }},
  {{ oldSlug: "interior-finishing", newSlug: "interior-and-exterior-finishes" }},
  {{ oldSlug: "interior-exterior-coatings", newSlug: "interior-and-exterior-finishes" }},
  {{ oldSlug: "machinery-equipment", newSlug: "heavy-machinery-transport-concrete" }},
  {{ oldSlug: "safety-security", newSlug: "hse-safety-equipment" }},
  {{ oldSlug: "smart-building", newSlug: "smart-building-and-safety-systems" }},
  {{ oldSlug: "elevator", newSlug: "vertical-transportation" }},
  {{ oldSlug: "elevators-escalators", newSlug: "vertical-transportation" }},
  {{ oldSlug: "engineering-consulting", newSlug: "engineering-and-consulting" }},
  {{ oldSlug: "contracting-services", newSlug: "contracting-and-execution" }},
  {{ oldSlug: "facade", newSlug: "doors-windows-and-facade" }},
  {{ oldSlug: "business-services", newSlug: "engineering-and-consulting" }},
  {{ oldSlug: "general-support", newSlug: "contracting-and-execution" }},
  {{ oldSlug: "after-sales-maintenance", newSlug: "contracting-and-execution" }},
  {{ oldSlug: "landscape", newSlug: "contracting-and-execution" }},
  {{ oldSlug: "interior-decoration", newSlug: "kitchen-and-millwork" }},
] as const;
'''


def main() -> None:
    source = find_docx()
    categories = extract_categories(source)
    OUTPUT_PATH.write_text(build_ts(categories, source.name), encoding="utf-8")
    total = sum(len(category["subcategories"]) for category in categories)
    print(f"wrote {OUTPUT_PATH} with {len(categories)} categories and {total} subcategories")


if __name__ == "__main__":
    main()
