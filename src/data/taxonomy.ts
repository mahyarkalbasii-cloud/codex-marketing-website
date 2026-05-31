// Generated from "بررسی جامع محصولات و خدمات ساختمانی.docx" by scripts/generate-taxonomy.py.
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
  | "early-finishing"
  | "finishing"
  | "completion";

export type StageTiming = {
  negotiate: StageSlug[];
  buy: StageSlug[];
  execute: StageSlug[];
};

export type Subcategory = {
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
};

export type Category = {
  slug: string;
  faName: string;
  intro: string;
  subcategories: Subcategory[];
};

export const TAXONOMY_CATEGORIES: Category[] = [
  {
    "slug": "building-materials",
    "faName": "مصالح پایه، سیمانی و سنگدانه‌ها",
    "intro": "این دسته، استخوان‌بندی اولیه هر سازه‌ای را تشکیل می‌دهد و از نخستین مراحل شکل‌گیری کارگاه تا پایان سفت‌کاری حضور پررنگی دارد.",
    "subcategories": [
      {
        "id": "1.1",
        "slug": "syman-prtlnd-typ-1-ta-5-1-1",
        "categorySlug": "building-materials",
        "faName": "سیمان پرتلند (تیپ ۱ تا ۵)",
        "description": "اصلی‌ترین ماده چسباننده در تولید بتن و ملات.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی (کالامحور)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "wall-building"
          ],
          "execute": [
            "foundation",
            "wall-building"
          ]
        },
        "builderValues": "تطابق با استاندارد ملی، عدم کلوخه شدن و قیمت رقابتی",
        "trustCriteria": "در دسترس بودن و سرعت پاسخگویی، لجستیک قدرتمند، قابلیت تهاتر"
      },
      {
        "id": "1.2",
        "slug": "syman-pvzvlany-v-zdsvlfat-1-2",
        "categorySlug": "building-materials",
        "faName": "سیمان پوزولانی و ضدسولفات",
        "description": "کاربرد در محیط‌های خورنده و سازه‌های در معرض رطوبت.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی (نیازمند استعلام تخصصی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "مقاومت شیمیایی اثبات‌شده، حفظ کیفیت در دپو",
        "trustCriteria": "تخصص و شناخت استانداردهای محصولات"
      },
      {
        "id": "1.3",
        "slug": "syman-sfyd-v-rngy-1-3",
        "categorySlug": "building-materials",
        "faName": "سیمان سفید و رنگی",
        "description": "کاربرد دکوراتیو در بندکشی کاشی‌ها و نماسازی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "خلوص رنگ، نرمی پودر، عدم ترک‌خوردگی",
        "trustCriteria": "تحویل دقیق و به موقع، تامین کالای اصیل"
      },
      {
        "id": "1.4",
        "slug": "btn-amadh-sazh-ay-1-4",
        "categorySlug": "building-materials",
        "faName": "بتن آماده سازه‌ای",
        "description": "بتن با عیار مشخص جهت اجرای فونداسیون، ستون و سقف.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (زمان‌بندی حساس)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "عیار دقیق، اسلامپ مناسب، مقاومت فشاری تضمین‌شده",
        "trustCriteria": "تجهیزات مکفی (تعداد تراک‌میکسر و پمپ)، تعهد قطعی به زمان‌بندی"
      },
      {
        "id": "1.5",
        "slug": "btn-mgr-nzaft-1-5",
        "categorySlug": "building-materials",
        "faName": "بتن مگر (نظافت)",
        "description": "بتن با عیار پایین جهت آماده‌سازی بستر خاک پیش از آرماتوربندی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (سریع)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "روانی مناسب، قیمت ارزان",
        "trustCriteria": "سرعت در پاسخگویی و ارسال فوری"
      },
      {
        "id": "1.6",
        "slug": "shn-v-mash-tbyay-v-shksth-1-6",
        "categorySlug": "building-materials",
        "faName": "شن و ماسه طبیعی و شکسته",
        "description": "سنگدانه‌های درشت و ریز جهت ملات‌سازی و بتن.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی (حجم بالا)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure",
            "wall-building"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "دانه‌بندی دقیق، فقدان خاک رس مضر، حجم دقیق بار",
        "trustCriteria": "ناوگان حمل‌ونقل اختصاصی، امانت‌داری در حجم تحویلی"
      },
      {
        "id": "1.7",
        "slug": "mash-bady-v-khak-rs-1-7",
        "categorySlug": "building-materials",
        "faName": "ماسه بادی و خاک رس",
        "description": "استفاده در ملات‌های سنتی، بندکشی و تثبیت بستر لوله‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster",
            "finishing"
          ]
        },
        "builderValues": "نرمی، خلوص و عدم وجود ناخالصی",
        "trustCriteria": "در دسترس بودن محلی، خوش‌قولی در ارسال"
      },
      {
        "id": "1.8",
        "slug": "pvkh-madny-v-snaty-prlyt-1-8",
        "categorySlug": "building-materials",
        "faName": "پوکه معدنی و صنعتی (پرلیت)",
        "description": "مصالح سبک وزن جهت شیب‌بندی بام و کف‌سازی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "وزن مخصوص بسیار پایین، عایق حرارتی",
        "trustCriteria": "ظرفیت تامین در حجم بالا، قیمت مناسب، تحویل یکپارچه"
      },
      {
        "id": "1.9",
        "slug": "gch-sfydkary-v-zyrkar-1-9",
        "categorySlug": "building-materials",
        "faName": "گچ سفیدکاری و زیرکار",
        "description": "پودر میکرونیزه برای اندودکاری دیوارهای داخلی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سفیدی، گیرش مناسب، عدم ترک‌خوردگی",
        "trustCriteria": "تامین مستمر، جلوگیری از رطوبت‌زدگی در انبار"
      },
      {
        "id": "1.10",
        "slug": "pvdr-sng-v-khak-sng-1-10",
        "categorySlug": "building-materials",
        "faName": "پودر سنگ و خاک‌سنگ",
        "description": "پرکننده در ملات‌های نماسازی و بندکشی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "دانه‌بندی یکنواخت، رنگ روشن",
        "trustCriteria": "سرعت ارسال"
      },
      {
        "id": "1.11",
        "slug": "ahk-zndh-v-hydrath-1-11",
        "categorySlug": "building-materials",
        "faName": "آهک زنده و هیدراته",
        "description": "کاربرد در شفته‌ریزی و تثبیت خاک‌های سست.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "خلوص بالا، واکنش‌پذیری سریع",
        "trustCriteria": "ایمنی در بسته‌بندی، تامین سریع"
      },
      {
        "id": "1.12",
        "slug": "khak-nsvz-1-12",
        "categorySlug": "building-materials",
        "faName": "خاک نسوز",
        "description": "ماده اولیه آجرهای مقاوم در برابر حرارت (شومینه و کوره).",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (خرید تخصصی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "مقاومت حرارتی بالا، خلوص",
        "trustCriteria": "مشاوره فنی و دلسوزانه خریدار"
      },
      {
        "id": "1.13",
        "slug": "afzvdny-hay-shymyayy-btn-1-13",
        "categorySlug": "building-materials",
        "faName": "افزودنی‌های شیمیایی بتن",
        "description": "شامل روان‌کننده‌ها و ضدیخ‌ها جهت کنترل خواص بتن.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (فنی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "سازگاری با سیمان مصرفی، عدم افت مقاومت بتن",
        "trustCriteria": "داشتن گواهینامه و تاییدیه، خدمات پس از فروش و مشاوره در سایت"
      },
      {
        "id": "1.14",
        "slug": "grvt-payh-symany-1-14",
        "categorySlug": "building-materials",
        "faName": "گروت پایه سیمانی",
        "description": "ملات‌های بدون انقباض جهت پر کردن زیر بیس‌پلیت‌ها.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "عدم انقباض، روانی عالی، مقاومت فشاری زودهنگام",
        "trustCriteria": "دانش فنی بالا در معرفی کالای استاندارد"
      },
      {
        "id": "1.15",
        "slug": "ab-snaty-v-kargahy-1-15",
        "categorySlug": "building-materials",
        "faName": "آب صنعتی و کارگاهی",
        "description": "آب فاقد املاح مضر برای اختلاط بتن و کیورینگ.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "عدم وجود سولفات و کلر",
        "trustCriteria": "پاسخگویی فوری در شرایط بحرانی کارگاه"
      }
    ]
  },
  {
    "slug": "steel-and-metals",
    "faName": "مقاطع فولادی، فلزات و آرماتور",
    "intro": "مقاطع فولادی شریان‌های تحمل بار در سازه‌ها هستند. به دلیل نوسانات شدید بازار، خرید این اقلام نیازمند رصد مستمر بورس کالا و مدیریت نقدینگی (یا تهاتر) است.",
    "subcategories": [
      {
        "id": "2.1",
        "slug": "mylgrd-ajdar-gryd-a2-a3-2-1",
        "categorySlug": "steel-and-metals",
        "faName": "میلگرد آجدار (گرید A2, A3)",
        "description": "آرماتورهای اصلی جهت تسلیح بتن در فونداسیون و ستون‌ها.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی کلان / تهاتری",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "وزن استاندارد (نزدیک به جدول اشتال)، اصالت کارخانه",
        "trustCriteria": "مناسبات مالی منعطف (امکان تهاتر با ملک)، شفافیت مالی و خوش‌قولی"
      },
      {
        "id": "2.2",
        "slug": "mylgrd-sadh-v-klaf-2-2",
        "categorySlug": "steel-and-metals",
        "faName": "میلگرد ساده و کلاف",
        "description": "تولید خاموت و رابیتس‌بندی سقف.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "نرمی و قابلیت خم‌کاری بدون شکستگی",
        "trustCriteria": "تامین دقیق سایزهای درخواستی"
      },
      {
        "id": "2.3",
        "slug": "tyrahn-ipe-ipb-2-3",
        "categorySlug": "steel-and-metals",
        "faName": "تیرآهن (IPE, IPB)",
        "description": "مقاطع استاندارد برای ساخت ستون و شاه‌تیر در اسکلت فلزی.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی کلان / تهاتری",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "شاغول بودن، وزن استاندارد، برند معتبر (نظیر ذوب‌آهن)",
        "trustCriteria": "توانایی تامین احجام بالا، پذیرش معاملات تهاتری"
      },
      {
        "id": "2.4",
        "slug": "vrgh-syah-nvrd-grm-2-4",
        "categorySlug": "steel-and-metals",
        "faName": "ورق سیاه (نورد گرم)",
        "description": "تولید بیس‌پلیت، سخت‌کننده‌ها و مقاطع دست‌ساز.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی / شرکتی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "ضخامت یکنواخت، جوش‌پذیری بالا",
        "trustCriteria": "امکان برش‌کاری سفارشی، تامین سریع"
      },
      {
        "id": "2.5",
        "slug": "vrgh-galvanyzh-v-rvghny-2-5",
        "categorySlug": "steel-and-metals",
        "faName": "ورق گالوانیزه و روغنی",
        "description": "ساخت کانال‌های کولر و سینی کابل.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "مقاومت در برابر زنگ‌زدگی (کوتینگ استاندارد)",
        "trustCriteria": "سابقه کار و داشتن تجربیات مرتبط"
      },
      {
        "id": "2.6",
        "slug": "vrgh-rngy-v-shyrvany-2-6",
        "categorySlug": "steel-and-metals",
        "faName": "ورق رنگی و شیروانی",
        "description": "ورق‌های فرم‌داده‌شده برای سقف‌های شیب‌دار.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی و ابعادی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "ثبات رنگ، عدم تاب‌خوردگی در طول فرمینگ",
        "trustCriteria": "دقت در برش ابعاد سفارشی، ارسال بدون آسیب"
      },
      {
        "id": "2.7",
        "slug": "ghvty-v-prvfyl-fvlady-2-7",
        "categorySlug": "steel-and-metals",
        "faName": "قوطی و پروفیل فولادی",
        "description": "ساخت چارچوب در و پنجره و نرده‌کشی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "گوشه‌های گونیا، ضخامت واقعی",
        "trustCriteria": "جور بودن سایزهای مختلف در انبار"
      },
      {
        "id": "2.8",
        "slug": "nbshy-navdany-v-spry-2-8",
        "categorySlug": "steel-and-metals",
        "faName": "نبشی، ناودانی و سپری",
        "description": "اتصالات در اسکلت فلزی و کلاف‌کشی دیوارهای پیرامونی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "ابعاد دقیق هندسی، تاب نداشتن",
        "trustCriteria": "سرعت بالا در تامین کسری‌های کارگاه"
      },
      {
        "id": "2.9",
        "slug": "lvlh-hay-darbsty-v-bst-ha-2-9",
        "categorySlug": "steel-and-metals",
        "faName": "لوله‌های داربستی و بست‌ها",
        "description": "سازه‌های موقت فولادی جهت دسترسی به ارتفاع.",
        "salesTypes": [
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای / خدماتی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ضخامت ایمن لوله، بست‌های چدنی نشکن",
        "trustCriteria": "رعایت ایمنی، سرعت در نصب و جمع‌آوری"
      },
      {
        "id": "2.10",
        "slug": "arshh-fvlady-mtal-dk-2-10",
        "categorySlug": "steel-and-metals",
        "faName": "عرشه فولادی (متال دک)",
        "description": "قالب ماندگار در سقف‌های کامپوزیت.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (ابعاد دقیق)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "گام و فرم استاندارد، ضخامت ورق گالوانیزه",
        "trustCriteria": "داشتن سیستم برنامه‌ریزی تولید و کنترل کیفیت"
      },
      {
        "id": "2.11",
        "slug": "rabyts-v-tvry-mrghy-2-11",
        "categorySlug": "steel-and-metals",
        "faName": "رابیتس و توری مرغی",
        "description": "ایجاد سطح درگیری ملات در سقف‌های کاذب و نما.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "وزن دقیق هر برگ، کیفیت گالوانیزه",
        "trustCriteria": "در دسترس بودن مستمر"
      },
      {
        "id": "2.12",
        "slug": "sym-armatvrbndy-2-12",
        "categorySlug": "steel-and-metals",
        "faName": "سیم آرماتوربندی",
        "description": "اتصال قطعات قالب‌بندی و گره‌های آرماتور.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "نرمی بالا (آنیل شدن مناسب)",
        "trustCriteria": "تامین در بسته‌بندی مناسب و وزن دقیق"
      },
      {
        "id": "2.13",
        "slug": "kabl-hay-pysh-tnydgy-2-13",
        "categorySlug": "steel-and-metals",
        "faName": "کابل‌های پیش‌تنیدگی",
        "description": "کابل‌های مقاومت بالا جهت سقف‌های پس‌کشیده.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مهندسی و مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "مقاومت کششی نهایی تاییدشده",
        "trustCriteria": "تاییدیه فنی، گواهینامه معتبر، ارائه خدمات مهندسی"
      },
      {
        "id": "2.14",
        "slug": "plyt-v-sfhh-stvn-2-14",
        "categorySlug": "steel-and-metals",
        "faName": "پلیت و صفحه ستون",
        "description": "صفحات فولادی توزیع بار روی فونداسیون.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (برش‌کاری)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "دقت در ابعاد برش و سوراخ‌کاری",
        "trustCriteria": "تجهیزات و ماشین‌آلات برش مدرن"
      },
      {
        "id": "2.15",
        "slug": "pych-v-mhrh-sazh-ay-2-15",
        "categorySlug": "steel-and-metals",
        "faName": "پیچ و مهره سازه‌ای",
        "description": "اتصالات با گرید بالا در اسکلت فلزی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (تست‌شده)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "گرید آلیاژی استاندارد (نظیر.9)",
        "trustCriteria": "ارائه گواهینامه تست متالورژی (سرتفیکیت)"
      }
    ]
  },
  {
    "slug": "blocks-walls-and-roof-systems",
    "faName": "مصالح بلوک، دیوارچینی و سیستم‌های سقف",
    "intro": "رسالت این دسته تفکیک فضاهای معماری و عایق‌بندی پوسته خارجی است.",
    "subcategories": [
      {
        "id": "3.1",
        "slug": "ajr-fshary-v-gry-3-1",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "آجر فشاری و گری",
        "description": "کرسی‌چینی و شمع‌بندی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "پخت کامل، مقاومت فشاری بالا، ابعاد گونیا",
        "trustCriteria": "عدم ارسال بار شکسته، تحویل سریع"
      },
      {
        "id": "3.2",
        "slug": "ajr-sfal-tyghh-ay-3-2",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "آجر سفال (تیغه‌ای)",
        "description": "اجرای تیغه‌های جداکننده داخلی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "وزن سبک، عدم وجود شوره، ابعاد استاندارد",
        "trustCriteria": "لجستیک قوی برای تخلیه ایمن بار در طبقات"
      },
      {
        "id": "3.3",
        "slug": "ajr-nsvz-v-dkvratyv-nma-3-3",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "آجر نسوز و دکوراتیو نما",
        "description": "پوشش نهایی نمای ساختمان.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (انتخاب طرح)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ثبات رنگ، مقاومت در برابر یخ‌زدگی",
        "trustCriteria": "ارسال کاتالوگ و سمپل، تضمین یکدست بودن سورت"
      },
      {
        "id": "3.4",
        "slug": "ajr-sngfrsh-3-4",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "آجر سنگفرش",
        "description": "محوطه‌سازی و کف‌سازی پیاده‌روها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "جذب آب پایین، مقاومت سایشی",
        "trustCriteria": "تنوع در طرح و رنگ، تحویل به موقع"
      },
      {
        "id": "3.5",
        "slug": "blvk-symany-3-5",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "بلوک سیمانی",
        "description": "ساخت دیوارهای حائل و حصارکشی محوطه.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "تراکم مناسب بتن، لبه‌های سالم",
        "trustCriteria": "تولید مستمر و دپوی کافی"
      },
      {
        "id": "3.6",
        "slug": "blvk-sbk-gazy-aac-hblks-3-6",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "بلوک سبک گازی (AAC/هبلکس)",
        "description": "بلوک‌های متخلخل با عایق بالا برای دیوارچینی مدرن.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (مهندسی ارزش)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "عایق حرارتی بالا، وزن بسیار سبک، دقت ابعادی",
        "trustCriteria": "دارای گواهینامه مرکز تحقیقات، آموزش به اکیپ نصاب"
      },
      {
        "id": "3.7",
        "slug": "blvk-hay-lyka-3-7",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "بلوک‌های لیکا",
        "description": "بلوک‌های رس منبسط شده، مقاوم در برابر حریق.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای / تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "مقاومت حرارتی، عایق صوت، عدم شکستگی",
        "trustCriteria": "ارسال به موقع و بسته‌بندی پالتی"
      },
      {
        "id": "3.8",
        "slug": "tyrchh-btny-pashnh-btny-3-8",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "تیرچه بتنی (پاشنه بتنی)",
        "description": "عنصر اصلی سقف‌های تیرچه‌بلوک.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (تولید به طول)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "جوش استاندارد زیگزاگ، بتن پاشنه متراکم",
        "trustCriteria": "سیستم کنترل کیفیت در کارگاه، تحویل دقیق طبق نقشه"
      },
      {
        "id": "3.9",
        "slug": "tyrchh-krvmyt-flzy-3-9",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "تیرچه کرومیت (فلزی)",
        "description": "تیرچه‌های فولادی با قابلیت اجرای بدون شمع‌بندی.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "جوشکاری CO2، ورق با ضخامت واقعی",
        "trustCriteria": "رزومه و داشتن تجربیات مرتبط"
      },
      {
        "id": "3.10",
        "slug": "tyrchh-pysh-tnydh-3-10",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "تیرچه پیش‌تنیده",
        "description": "کاهش مصرف بتن و امکان دهانه‌های بلند.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "مشاوره‌ای و سفارشی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "خیز منفی استاندارد، کیفیت کابل کششی",
        "trustCriteria": "ارائه محاسبات سازه‌ای، تاییدیه نظام مهندسی"
      },
      {
        "id": "3.11",
        "slug": "fvm-ply-astayrn-yvnvlyt-3-11",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "فوم پلی‌استایرن (یونولیت)",
        "description": "پرکننده پلاستیکی بین تیرچه‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (حجم بالا)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "کندسوز بودن (الزام قانونی)، دانسیته واقعی",
        "trustCriteria": "ارائه گواهی استاندارد حریق، صداقت در دانسیته"
      },
      {
        "id": "3.12",
        "slug": "sandvych-panl-3-12",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "ساندویچ پانل",
        "description": "پوشش سریع سوله‌ها و سردخانه‌ها.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "مشاوره‌ای و سفارشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "چسبندگی فوم به ورق، عایق حرارتی، کلاس حریق",
        "trustCriteria": "توانایی تولید سفارشی، گارانتی محصول"
      },
      {
        "id": "3.13",
        "slug": "pnl-hay-gchy-dray-val-knaf-3-13",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "پنل‌های گچی (درای‌وال/کناف)",
        "description": "اجرای دیوارهای کاذب با سرعت بالا.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (طراحی دکور)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سبکی، اجرای خشک، مقاومت در برابر رطوبت (بر حسب نوع)",
        "trustCriteria": "تامین پکیج کامل (پنل، سازه، پیچ)، برند معتبر"
      },
      {
        "id": "3.14",
        "slug": "blvk-hay-shyshh-ay-3-14",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "بلوک‌های شیشه‌ای",
        "description": "پارتیشن‌های دکوراتیو با قابلیت عبور نور.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (دکوراتیو)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "شفافیت، عبور نور، مقاومت ضربه‌ای",
        "trustCriteria": "بسته‌بندی ایمن، تنوع رنگ"
      },
      {
        "id": "3.15",
        "slug": "ghalb-hay-mjvf-yvbvt-vafl-3-15",
        "categorySlug": "blocks-walls-and-roof-systems",
        "faName": "قالب‌های مجوف (یوبوت/وافل)",
        "description": "ایجاد فضاهای خالی در دال‌های بتنی.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (محاسباتی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "عدم شکستگی زیر بار کارگر، ابعاد استاندارد",
        "trustCriteria": "امکان اجاره قالب، ارائه خدمات مشاوره طراحی"
      }
    ]
  },
  {
    "slug": "construction-chemicals-adhesives-sealants",
    "faName": "مواد شیمیایی، چسب‌ها و درزگیرهای صنعتی",
    "intro": "این دسته از سند جامع محصولات و خدمات ساختمانی برای مواد شیمیایی، چسب‌ها و درزگیرهای صنعتی استخراج شده است.",
    "subcategories": [
      {
        "id": "4.1",
        "slug": "drzgyrha-v-sylykvn-mastyk-4-1",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "درزگیرها و سیلیکون (ماستیک)",
        "description": "آب‌بندی شیشه‌ها و چارچوب‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (برندمحور)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "انعطاف‌پذیری طولانی‌مدت، عدم تغییر رنگ در برابر UV",
        "trustCriteria": "اصالت کالا، تاریخ انقضای معتبر"
      },
      {
        "id": "4.2",
        "slug": "chsb-ply-avrtan-svsysy-4-2",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب پلی‌اورتان (سوسیسی)",
        "description": "پر کردن درزهای انبساطی و نماهای خشک.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "چسبندگی فوق‌العاده، قابلیت رنگ‌آمیزی",
        "trustCriteria": "مشاوره دلسوزانه در انتخاب گرید مناسب"
      },
      {
        "id": "4.3",
        "slug": "chsb-kashy-v-sramyk-4-3",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب کاشی و سرامیک",
        "description": "جایگزین ملات برای نصب پرسلان.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (حجم بالا)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "قدرت چسبندگی بالا، زمان کارپذیری (Open Time)",
        "trustCriteria": "رضایت خریداران قبلی، امکان تست سمپل"
      },
      {
        "id": "4.4",
        "slug": "chsb-hay-py-vy-sy-pvc-4-4",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب‌های پی‌وی‌سی (PVC)",
        "description": "اتصال لوله‌های پلاستیکی فاضلاب.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "جوش سرد کامل پلاستیک، آب‌بندی قطعی",
        "trustCriteria": "برندهای معتبر، در دسترس بودن سریع"
      },
      {
        "id": "4.5",
        "slug": "chsb-hay-fvry-123-4-5",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب‌های فوری (۱۲۳)",
        "description": "اتصالات سریع سنگ، چوب و MDF.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "گیرش ثانیه‌ای، اسپری فعال‌کننده باکیفیت",
        "trustCriteria": "قیمت رقابتی، تامین مستمر کارتن"
      },
      {
        "id": "4.6",
        "slug": "drzgyrhay-akrylyk-4-6",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "درزگیرهای اکریلیک",
        "description": "ترمیم ترک‌های گچ و دیوارهای داخلی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سنباده‌خوری خوب، قابلیت پذیرش رنگ",
        "trustCriteria": "تضمین کیفیت و عدم افت حجم پس از خشک شدن"
      },
      {
        "id": "4.7",
        "slug": "chsb-btn-4-7",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب بتن",
        "description": "افزایش چسبندگی ملات و آب‌بندی استخرها.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای / تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "آب‌بندی 100%، سازگاری با سیمان",
        "trustCriteria": "داشتن دانش فنی شیمی ساختمان"
      },
      {
        "id": "4.8",
        "slug": "chsb-aynh-v-shyshh-hay-khas-4-8",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب آینه و شیشه‌های خاص",
        "description": "چسب بدون اسید برای جلوگیری از خوردگی جیوه آینه.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تخصصی (تراکنشی)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "خنثی بودن (بدون اسید)، چسبندگی بالا",
        "trustCriteria": "تعهد به تامین کالای تخصصی"
      },
      {
        "id": "4.9",
        "slug": "chsb-sng-v-mga-astvn-4-9",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "چسب سنگ و مگا استون",
        "description": "اتصال سنگ‌های نما و کاشت میلگرد.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "تخصصی و مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "تحمل بار کششی بالا، مقاومت دمایی",
        "trustCriteria": "ارائه تاییدیه تست کشش (Pull-off)"
      },
      {
        "id": "4.10",
        "slug": "mastyk-hay-ghyry-4-10",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "ماستیک‌های قیری",
        "description": "پر کردن درزهای اجرایی فونداسیون.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "چسبندگی به بتن سرد، انعطاف‌پذیری",
        "trustCriteria": "تامین سریع و آموزش نحوه اجرا"
      },
      {
        "id": "4.11",
        "slug": "rzyn-hay-apvksy-v-ply-avrtan-4-11",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "رزین‌های اپوکسی و پلی‌اورتان",
        "description": "اجرای کف‌پوش‌های بدون درز پارکینگ.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای و پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مقاومت سایشی، ضدخش بودن، یکپارچگی",
        "trustCriteria": "تخصص تیم اجرایی وابسته به تامین‌کننده"
      },
      {
        "id": "4.12",
        "slug": "mvad-ab-gryz-v-nanv-nma-4-12",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "مواد آب‌گریز و نانو نما",
        "description": "ضدآب کردن نمای آجری و سنگی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (فنی)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "نفوذ عمقی، عدم تغییر رنگ نما، دوام",
        "trustCriteria": "ارائه تضمین و خدمات پس از فروش"
      },
      {
        "id": "4.13",
        "slug": "hlal-ha-v-tynrha-4-13",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "حلال‌ها و تینرها",
        "description": "چربی‌زدایی سطوح و رقیق‌سازی رنگ.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "خلوص بالا، عدم آسیب به رنگ پایه",
        "trustCriteria": "ایمنی در ارسال، بسته‌بندی استاندارد"
      },
      {
        "id": "4.14",
        "slug": "aaygh-hay-sfyd-alastvmry-4-14",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "عایق‌های سفید الاستومری",
        "description": "پوشش مایع جایگزین ایزوگام روی بام.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای / پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "انعکاس نور خورشید، طول عمر بالا",
        "trustCriteria": "گارانتی طولانی‌مدت محصول"
      },
      {
        "id": "4.15",
        "slug": "afzvdny-mkml-svkht-kargahy-4-15",
        "categorySlug": "construction-chemicals-adhesives-sealants",
        "faName": "افزودنی مکمل سوخت کارگاهی",
        "description": "بهبود عملکرد دیزل‌ژنراتورها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "محافظت از موتور ژنراتور، کاهش آلایندگی",
        "trustCriteria": "برند معتبر وارداتی"
      }
    ]
  },
  {
    "slug": "thermal-moisture-sound-insulation",
    "faName": "سیستم‌های عایق‌بندی حرارتی، رطوبتی و صوتی",
    "intro": "این دسته از سند جامع محصولات و خدمات ساختمانی برای سیستم‌های عایق‌بندی حرارتی، رطوبتی و صوتی استخراج شده است.",
    "subcategories": [
      {
        "id": "5.1",
        "slug": "ayzvgam-v-ghyrgvny-5-1",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "ایزوگام و قیرگونی",
        "description": "عایق‌کاری رطوبتی بام، پی و سرویس‌ها.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی / پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ضخامت و وزن استاندارد، عدم ترک‌خوردگی در سرما",
        "trustCriteria": "ارائه بیمه‌نامه کتبی و گارانتی 10 ساله"
      },
      {
        "id": "5.2",
        "slug": "pshm-sng-rockwool-5-2",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "پشم سنگ (Rockwool)",
        "description": "عایق حرارتی و صوتی نسوز (کلاس حریق A1).",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "غیرقابل اشتعال بودن (کلاس A1)، دانسیته بالا",
        "trustCriteria": "داشتن تاییدیه‌های استاندارد حریق"
      },
      {
        "id": "5.3",
        "slug": "pshm-shyshh-fiberglass-5-3",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "پشم شیشه (Fiberglass)",
        "description": "عایق حرارتی سقف‌های کاذب و سوله.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "روکش آلومینیومی مقاوم، قیمت اقتصادی",
        "trustCriteria": "تامین سریع، اصالت برند"
      },
      {
        "id": "5.4",
        "slug": "fvm-hay-alastvmry-5-4",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "فوم‌های الاستومری",
        "description": "عایق پوشش لوله‌های تاسیساتی و کانال‌ها.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (محاسبات بار)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "ضریب انتقال حرارت پایین، مقاومت در برابر پارگی",
        "trustCriteria": "ارائه مشاوره در محاسبه ضخامت لازم"
      },
      {
        "id": "5.5",
        "slug": "fvm-ply-avrtan-pashshy-5-5",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "فوم پلی‌اورتان (پاششی)",
        "description": "لایه عایق یکپارچه در دیوارهای پیرامونی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "خدمات پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "پوشش بدون درز، سرعت اجرای بالا",
        "trustCriteria": "داشتن دستگاه‌های مدرن پاشش"
      },
      {
        "id": "5.6",
        "slug": "fvm-hay-ply-atyln-5-6",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "فوم‌های پلی‌اتیلن",
        "description": "عایق‌های اقتصادی زیر پارکت.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "فشردگی مناسب، عایق رطوبت",
        "trustCriteria": "در دسترس بودن فوری"
      },
      {
        "id": "5.7",
        "slug": "zhyvmmbran-v-zhyvtkstayl-5-7",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "ژئوممبران و ژئوتکستایل",
        "description": "آب‌بندی فونداسیون‌های عمیق و استخرها.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (مهندسی خاک)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "مقاومت کششی بالا، نفوذناپذیری مطلق",
        "trustCriteria": "تخصص اجرایی و ارائه گارانتی آب‌بندی"
      },
      {
        "id": "5.8",
        "slug": "aaygh-hay-svty-akvstyk-5-8",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "عایق‌های صوتی آکوستیک",
        "description": "جذب ارتعاشات صوتی اتاق آسانسور و دیزل.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ضریب جذب صوت (NRC) بالا",
        "trustCriteria": "دانش فنی در زمینه آکوستیک"
      },
      {
        "id": "5.9",
        "slug": "praymrhay-ghyry-5-9",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "پرایمرهای قیری",
        "description": "پوشش آستر پیش از نصب ایزوگام.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "نفوذ و چسبندگی عالی به بتن",
        "trustCriteria": "تامین همراه با عایق اصلی"
      },
      {
        "id": "5.10",
        "slug": "nvar-typ-v-chsb-aaygh-5-10",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "نوار تیپ و چسب عایق",
        "description": "درزبندی نقاط اتصال عایق‌های الاستومری.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "چسبندگی بالا در دمای متفاوت",
        "trustCriteria": "تامین پکیج کامل ملزومات نصب"
      },
      {
        "id": "5.11",
        "slug": "aaygh-hay-nanv-zhl-v-ayrvzhl-5-11",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "عایق‌های نانو ژل و آئروژل",
        "description": "پیشرفته‌ترین عایق‌های حرارتی با ضخامت کم.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (فناوری بالا)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "نازک بودن و عدم اشغال فضای مفید",
        "trustCriteria": "ارتباطات بین‌المللی برای تامین محصولات نوین"
      },
      {
        "id": "5.12",
        "slug": "aaygh-hay-hrarty-lvlh-hay-khty-5-12",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "عایق‌های حرارتی لوله‌های خطی",
        "description": "پوشش‌های استوانه‌ای پیش‌ساخته پایپینگ.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (سایزینگ)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "نصب سریع و آسان، کلاس حریق مناسب",
        "trustCriteria": "تنوع کامل سایزبندی در انبار"
      },
      {
        "id": "5.13",
        "slug": "vatrastap-waterstop-5-13",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "واتراستاپ (Waterstop)",
        "description": "نوارهای پلیمری جلوگیری از نفوذ آب در درزهای بتن.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تخصصی (تراکنشی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "انعطاف‌پذیری بالا، مقاومت پارگی",
        "trustCriteria": "مشاوره فنی برای انتخاب عرض و ضخامت"
      },
      {
        "id": "5.14",
        "slug": "btvnh-hay-aaygh-v-drzgyr-5-14",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "بتونه‌های عایق و درزگیر",
        "description": "آب‌بندی موضعی شکاف‌ها و محل عبور لوله‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "آب‌بندی 100%، دوام در محیط‌های مرطوب",
        "trustCriteria": "سرعت در تامین"
      },
      {
        "id": "5.15",
        "slug": "aaygh-hay-baztaby-fvyl-5-15",
        "categorySlug": "thermal-moisture-sound-insulation",
        "faName": "عایق‌های بازتابی (فویل)",
        "description": "مانع از انتقال حرارت تابشی به داخل ساختمان.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "ضریب انعکاس بالا، مقاومت پارگی",
        "trustCriteria": "کیفیت بسته‌بندی و تحویل سالم"
      }
    ]
  },
  {
    "slug": "mechanical-piping",
    "faName": "تاسیسات مکانیکی: لوله‌کشی آب و فاضلاب (پایپینگ)",
    "intro": "تاسیسات به منزله شریان‌های حیاتی بنا هستند.",
    "subcategories": [
      {
        "id": "6.1",
        "slug": "lvlh-hay-pnj-layh-6-1",
        "categorySlug": "mechanical-piping",
        "faName": "لوله‌های پنج‌لایه",
        "description": "شبکه‌های آبرسانی و گرمایش از کف.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (برندمحور)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "مقاومت فشاری و دمایی، عدم رسوب‌گیری",
        "trustCriteria": "نمایندگی رسمی برند، موجودی کامل اتصالات"
      },
      {
        "id": "6.2",
        "slug": "lvlh-ply-prvpyln-sbz-sfyd-6-2",
        "categorySlug": "mechanical-piping",
        "faName": "لوله پلی‌پروپیلن (سبز/سفید)",
        "description": "توزیع آب سرد و گرم بهداشتی داخل واحدها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "جوش‌پذیری عالی، استاندارد آب شرب",
        "trustCriteria": "مناسبات مالی خوب و روان بودن در فروش"
      },
      {
        "id": "6.3",
        "slug": "lvlh-pvsh-fyt-push-fit-6-3",
        "categorySlug": "mechanical-piping",
        "faName": "لوله پوش‌فیت (Push-Fit)",
        "description": "سیستم نوین فاضلاب با نصب سریع و سایلنت.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (آنالیز نقشه)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "عایق صوت (سوپرسایلنت)، نصب بدون چسب",
        "trustCriteria": "متره دقیق نقشه‌ها، تضمین تامین کسری‌ها"
      },
      {
        "id": "6.4",
        "slug": "lvlh-plyka-u-pvc-6-4",
        "categorySlug": "mechanical-piping",
        "faName": "لوله پلیکا (U-PVC)",
        "description": "انتقال فاضلاب سنتی و شبکه‌های هواکش.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "ضخامت استاندارد، مقاومت ضربه‌ای",
        "trustCriteria": "سرعت بالای ارسال و قیمت رقابتی"
      },
      {
        "id": "6.5",
        "slug": "lvlh-hay-ply-atyln-hdpe-6-5",
        "categorySlug": "mechanical-piping",
        "faName": "لوله‌های پلی‌اتیلن (HDPE)",
        "description": "خطوط اصلی آبرسانی شهری و انتقال گاز.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای / تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "تحمل فشار خاک، عمر طولانی",
        "trustCriteria": "تاییدیه شرکت گاز (برای لوله گاز)، گواهی استاندارد"
      },
      {
        "id": "6.6",
        "slug": "lvlh-hay-fvlady-v-galvanyzh-6-6",
        "categorySlug": "mechanical-piping",
        "faName": "لوله‌های فولادی و گالوانیزه",
        "description": "رایزرهای اصلی، موتورخانه‌ها و سیستم آتش‌نشانی.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی کلان / تهاتری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "تحمل فشار بالا (آتش‌نشانی)، کوتینگ قوی",
        "trustCriteria": "امکان تهاتر، تامین از کارخانجات معتبر"
      },
      {
        "id": "6.7",
        "slug": "shyralat-snaty-kshvyy-6-7",
        "categorySlug": "mechanical-piping",
        "faName": "شیرآلات صنعتی (کشویی)",
        "description": "کنترل جریان در کلکتورها و موتورخانه‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "کیفیت آب‌بند، متریال بدنه (چدن/برنج)",
        "trustCriteria": "گارانتی تعویض کالا، مشاوره دلسوزانه"
      },
      {
        "id": "6.8",
        "slug": "pmp-hay-abrsany-v-bvstr-6-8",
        "categorySlug": "mechanical-piping",
        "faName": "پمپ‌های آبرسانی و بوستر",
        "description": "تامین فشار شبکه آب در ساختمان‌های بلند.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (محاسبه هد)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "کارکرد بی‌صدا، راندمان بالا، مصرف کم",
        "trustCriteria": "خدمات پس از فروش و تامین قطعات یدکی"
      },
      {
        "id": "6.9",
        "slug": "mkhazn-zkhyrh-ab-6-9",
        "categorySlug": "mechanical-piping",
        "faName": "مخازن ذخیره آب",
        "description": "منابع ذخیره بهداشتی و ذخایر آتش‌نشانی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (حجم و ابعاد)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "آنتی‌باکتریال بودن، ضدجلبک، ابعاد مناسب",
        "trustCriteria": "کیفیت بالای تولید، گارانتی نشتی"
      },
      {
        "id": "6.10",
        "slug": "lvlh-hay-chdny-klavs-6-10",
        "categorySlug": "mechanical-piping",
        "faName": "لوله‌های چدنی کلاوس",
        "description": "فاضلاب ساختمان‌های بلندمرتبه مقاوم به حریق.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (وارداتی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "نسوز بودن (کلاس A)، عایق صوت عالی",
        "trustCriteria": "تامین به‌موقع کالای وارداتی، تضمین اصالت"
      },
      {
        "id": "6.12",
        "slug": "klktvrhay-tvzya-ab-6-12",
        "categorySlug": "mechanical-piping",
        "faName": "کلکتورهای توزیع آب",
        "description": "توزیع یکنواخت سیال در گرمایش از کف.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی (فنی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "آلیاژ برنج باکیفیت، دقت در رزوه‌ها",
        "trustCriteria": "فروش پکیج کامل تجهیزات"
      },
      {
        "id": "6.12",
        "slug": "aaygh-lvlh-tasysaty-6-12",
        "categorySlug": "mechanical-piping",
        "faName": "عایق لوله تاسیساتی",
        "description": "جلوگیری از اتلاف انرژی لوله‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "ضریب عایق بالا، عمر طولانی",
        "trustCriteria": "تامین هماهنگ با سایز لوله‌ها"
      },
      {
        "id": "6.13",
        "slug": "jabh-klktvr-6-13",
        "categorySlug": "mechanical-piping",
        "faName": "جعبه کلکتور",
        "description": "محفظه‌های توکار فلزی جهت تجمیع شیرآلات.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "ضخامت ورق مناسب، رنگ الکترواستاتیک",
        "trustCriteria": "در دسترس بودن و سرعت ارسال"
      },
      {
        "id": "6.14",
        "slug": "skhty-gyr-v-tsfyh-ab-6-14",
        "categorySlug": "mechanical-piping",
        "faName": "سختی‌گیر و تصفیه آب",
        "description": "تجهیزات فیلتراسیون رسوبات دیگ‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تاسیساتی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "رزین باکیفیت، اتوماسیون شستشو",
        "trustCriteria": "نصب و راه‌اندازی، ارائه خدمات پس از فروش"
      },
      {
        "id": "6.15",
        "slug": "atsalat-jvshy-v-dndh-ay-6-15",
        "categorySlug": "mechanical-piping",
        "faName": "اتصالات جوشی و دنده‌ای",
        "description": "زانو و فلنج برای لوله‌های سیاه و گالوانیزه.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "ضخامت استاندارد، رزوه‌کاری دقیق",
        "trustCriteria": "سبد کالایی کامل (Full Vendor)"
      }
    ]
  },
  {
    "slug": "hvac-heating-cooling",
    "faName": "تاسیسات مکانیکی: تهویه مطبوع، گرمایش و سرمایش (HVAC)",
    "intro": "این دسته از سند جامع محصولات و خدمات ساختمانی برای تاسیسات مکانیکی: تهویه مطبوع، گرمایش و سرمایش (HVAC) استخراج شده است.",
    "subcategories": [
      {
        "id": "7.1",
        "slug": "chylrha-trakmy-jzby-7-1",
        "categorySlug": "hvac-heating-cooling",
        "faName": "چیلرها (تراکمی/جذبی)",
        "description": "قلب برودتی مجتمع‌های بزرگ.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "کاملاً مشاوره‌ای و سفارشی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "راندمان بالا (COP)، کمپرسور معتبر، مصرف کم",
        "trustCriteria": "سابقه درخشان، خدمات پس از فروش و گارانتی بلندمدت"
      },
      {
        "id": "7.2",
        "slug": "dyg-hay-fvlady-v-chdny-7-2",
        "categorySlug": "hvac-heating-cooling",
        "faName": "دیگ‌های فولادی و چدنی",
        "description": "تجهیزات تولید آب گرم و بخار.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (محاسبات بار)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "ضخامت ورق کوره، راندمان حرارتی",
        "trustCriteria": "داشتن سیستم کنترل کیفیت تولید"
      },
      {
        "id": "7.3",
        "slug": "fn-kvyl-ha-7-3",
        "categorySlug": "hvac-heating-cooling",
        "faName": "فن‌کویل‌ها",
        "description": "مبدل‌های حرارتی محلی در سقف یا کف.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (برندمحور)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "کارکرد بی‌صدا (Super Quiet)، طراحی زیبا",
        "trustCriteria": "پاسخگویی سریع، تعهد به زمان‌بندی تحویل"
      },
      {
        "id": "7.4",
        "slug": "dakt-asplyt-v-vrf-7-4",
        "categorySlug": "hvac-heating-cooling",
        "faName": "داکت اسپلیت و VRF",
        "description": "سیستم‌های تهویه مطبوع تراکمی مستقل.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (مهندسی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster",
            "finishing"
          ]
        },
        "builderValues": "اینورتر بودن، مصرف برق پایین",
        "trustCriteria": "مشاوره فنی پیش از فروش، نصب شرکتی"
      },
      {
        "id": "7.5",
        "slug": "pkyj-hay-grmayshy-dyvary-7-5",
        "categorySlug": "hvac-heating-cooling",
        "faName": "پکیج‌های گرمایشی دیواری",
        "description": "تامین مستقل آب گرم بهداشتی و رادیاتورها.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی / مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "دو مبدله بودن، فن‌دار، گارانتی معتبر",
        "trustCriteria": "شبکه گسترده خدمات پس از فروش"
      },
      {
        "id": "7.6",
        "slug": "radyatvrha-pnly-prh-ay-7-6",
        "categorySlug": "hvac-heating-cooling",
        "faName": "رادیاتورها (پنلی/پره‌ای)",
        "description": "پایانه‌های حرارتی توزیع گرما در اتاق‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ضریب حرارتی بالا، رنگ کوره‌ای ضدخش",
        "trustCriteria": "قابلیت تامین در متراژ/تعداد بالا، تحویل سالم"
      },
      {
        "id": "7.7",
        "slug": "dstgah-hay-hvasaz-ahu-7-7",
        "categorySlug": "hvac-heating-cooling",
        "faName": "دستگاه‌های هواساز (AHU)",
        "description": "یونیت‌های تامین هوای تازه سالن‌های اجتماعات.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (ابعاد دقیق)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "فیلتراسیون قوی، بدنه دوجداره عایق",
        "trustCriteria": "مهندسی سفارشی بر اساس نیاز پروژه"
      },
      {
        "id": "7.8",
        "slug": "kanal-hay-galvanyzh-v-aspyral-7-8",
        "categorySlug": "hvac-heating-cooling",
        "faName": "کانال‌های گالوانیزه و اسپیرال",
        "description": "مجاری انتقال هوا از دستگاه به اتاق‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (ساخت در محل)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "عایق‌بندی صحیح، عدم نشتی هوا، ورق باکیفیت",
        "trustCriteria": "سرعت اجرای بالا، تعهد به کیفیت نصب"
      },
      {
        "id": "7.9",
        "slug": "agzast-fn-ha-v-santryfyvzh-7-9",
        "categorySlug": "hvac-heating-cooling",
        "faName": "اگزاست فن‌ها و سانتریفیوژ",
        "description": "هواکش‌های تخلیه هوای آلوده پارکینگ‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (محاسبه CFM)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "قدرت مکش بالا، موتور کم‌صدا (دینام معتبر)",
        "trustCriteria": "مشاوره دلسوزانه در محاسبه ظرفیت"
      },
      {
        "id": "7.10",
        "slug": "brj-hay-khnk-knndh-7-10",
        "categorySlug": "hvac-heating-cooling",
        "faName": "برج‌های خنک‌کننده",
        "description": "تجهیزات دفع حرارت چیلرهای آب‌خنک.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "بدنه فایبرگلاس مقاوم به UV، پکینگ مرغوب",
        "trustCriteria": "تولید با ماشین‌آلات و تجهیزات مناسب"
      },
      {
        "id": "7.11",
        "slug": "mshal-hay-gazy-v-dvganh-svz-7-11",
        "categorySlug": "hvac-heating-cooling",
        "faName": "مشعل‌های گازی و دوگانه‌سوز",
        "description": "دستگاه ایجاد احتراق جهت تامین انرژی حرارتی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "احتراق کامل، ایمنی بالا",
        "trustCriteria": "پشتیبانی و تنظیم مشعل حین راه‌اندازی"
      },
      {
        "id": "7.12",
        "slug": "pmp-hay-syrkvlatvr-khty-7-12",
        "categorySlug": "hvac-heating-cooling",
        "faName": "پمپ‌های سیرکولاتور خطی",
        "description": "گردش مداوم آب در مدارهای بسته.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "کیفیت سیل مکانیکی، کارکرد بدون لرزش",
        "trustCriteria": "گارانتی رسمی، برند شناخته‌شده"
      },
      {
        "id": "7.13",
        "slug": "mbdl-hay-hrarty-sfhh-ay-7-13",
        "categorySlug": "hvac-heating-cooling",
        "faName": "مبدل‌های حرارتی صفحه‌ای",
        "description": "تولید آب گرم مصرفی از آب بویلر.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "صفحات استیل ۳، راندمان بالا",
        "trustCriteria": "مشاوره مهندسی در انتخاب ظرفیت"
      },
      {
        "id": "7.14",
        "slug": "trmvstat-ha-v-shyrhay-brghy-7-14",
        "categorySlug": "hvac-heating-cooling",
        "faName": "ترموستات‌ها و شیرهای برقی",
        "description": "حسگرهای کنترلی تنظیم خودکار دما.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (هوشمندسازی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "دقت سنسور، رابط کاربری هوشمند",
        "trustCriteria": "هماهنگی با پروتکل‌های هوشمندسازی"
      },
      {
        "id": "7.15",
        "slug": "drychh-hay-tnzym-hva-7-15",
        "categorySlug": "hvac-heating-cooling",
        "faName": "دریچه‌های تنظیم هوا",
        "description": "پایانه‌های خروجی کانال‌های تهویه.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (ابعادبرداری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "زیبایی ظاهری، پره‌های قابل تنظیم",
        "trustCriteria": "دقت در ابعادبرداری و ساخت"
      }
    ]
  },
  {
    "slug": "electrical-lighting",
    "faName": "تاسیسات الکتریکی، کابل‌کشی و روشنایی",
    "intro": "این دسته از سند جامع محصولات و خدمات ساختمانی برای تاسیسات الکتریکی، کابل‌کشی و روشنایی استخراج شده است.",
    "subcategories": [
      {
        "id": "8.1",
        "slug": "kabl-hay-ghdrt-v-frman-8-1",
        "categorySlug": "electrical-lighting",
        "faName": "کابل‌های قدرت و فرمان",
        "description": "انتقال انرژی الکتریکی از شبکه به تابلوها.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی کلان / تهاتری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "خلوص مس، روکش عایق استاندارد (نسوز)",
        "trustCriteria": "داشتن تاییدیه اداره برق، امکان تهاتر"
      },
      {
        "id": "8.2",
        "slug": "sym-hay-brgh-nyaf-8-2",
        "categorySlug": "electrical-lighting",
        "faName": "سیم‌های برق (NYAF)",
        "description": "سیم‌کشی توکار مدارات روشنایی و پریزها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (قرقره‌ای)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "سطح مقطع واقعی، انعطاف‌پذیری",
        "trustCriteria": "تامین برندهای تاییدشده نظام مهندسی"
      },
      {
        "id": "8.3",
        "slug": "lvlh-hay-brgh-pvc-nsvz-8-3",
        "categorySlug": "electrical-lighting",
        "faName": "لوله‌های برق (PVC/نسوز)",
        "description": "مجاری محافظ عبور ایمن سیم‌ها در دیوارها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "خاصیت نسوز بودن، مقاومت ضربه‌ای",
        "trustCriteria": "جور بودن سبد کالا (لوله و اتصالات)"
      },
      {
        "id": "8.4",
        "slug": "syny-kabl-v-trankyng-8-4",
        "categorySlug": "electrical-lighting",
        "faName": "سینی کابل و ترانکینگ",
        "description": "مسیرهای فلزی هدایت کابل‌ها در پارکینگ‌ها.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (ساختنی)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "ضخامت ورق گالوانیزه گرم، لبه‌های بدون پلیسه",
        "trustCriteria": "تعهد به زمان‌های تحویل"
      },
      {
        "id": "8.5",
        "slug": "tablvhay-brgh-mdp-8-5",
        "categorySlug": "electrical-lighting",
        "faName": "تابلوهای برق (MDP)",
        "description": "محفظه‌های توزیع ایمن برق و کنترل مدارها.",
        "salesTypes": [
          "consultative",
          "engineering",
          "custom"
        ],
        "salesTypeRaw": "کاملاً سفارشی و مهندسی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ایمنی بالا، لیبل‌گذاری دقیق، قطعات اورجینال",
        "trustCriteria": "داشتن تاییدیه توانیر، مهندسی نقشه‌های تابلوسازی"
      },
      {
        "id": "8.6",
        "slug": "klydhay-mynyatvry-mcb-8-6",
        "categorySlug": "electrical-lighting",
        "faName": "کلیدهای مینیاتوری (MCB)",
        "description": "قطع‌کننده‌های خودکار مدار جهت حفاظت افراد.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (برندمحور)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "قطع دقیق و به موقع، دوام کنتاکت‌ها",
        "trustCriteria": "تضمین اصالت کالا و جلوگیری از کالای فیک"
      },
      {
        "id": "8.7",
        "slug": "klyd-v-pryzhay-tvkar-8-7",
        "categorySlug": "electrical-lighting",
        "faName": "کلید و پریزهای توکار",
        "description": "رابط‌های کاربری دکوراتیو روشنایی.",
        "salesTypes": [
          "fast",
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "تراکنشی (طراحی معماری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "طراحی زیبا، مکانیزم نرم و ایمن",
        "trustCriteria": "تنوع رنگ و مدل، تامین کسری‌ها"
      },
      {
        "id": "8.8",
        "slug": "mnaba-nvry-led-halvzhn-8-8",
        "categorySlug": "electrical-lighting",
        "faName": "منابع نوری (LED، هالوژن)",
        "description": "تامین روشنایی عمومی و دکوراتیو.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "لومن بالا، طول عمر، عدم چشمک‌زدن",
        "trustCriteria": "ارائه گارانتی تعویض کتبی"
      },
      {
        "id": "8.9",
        "slug": "chragh-hay-sghfy-v-lvstr-8-9",
        "categorySlug": "electrical-lighting",
        "faName": "چراغ‌های سقفی و لوستر",
        "description": "قاب‌ها و نگهدارنده منابع نوری.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (دکوراتیو)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "طراحی لوکس، کیفیت آبکاری بدنه",
        "trustCriteria": "ارائه کاتالوگ و تنوع بالا"
      },
      {
        "id": "8.10",
        "slug": "prvzhktvrha-v-val-vashr-8-10",
        "categorySlug": "electrical-lighting",
        "faName": "پروژکتورها و وال‌واشر",
        "description": "نورپردازی محوطه و زیباسازی نمای خارجی.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (طراحی نور)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "IP بالا (ضدآب)، پرتاب نور دقیق",
        "trustCriteria": "تخصص در نورپردازی نما و مشاوره"
      },
      {
        "id": "8.11",
        "slug": "chragh-hay-aztrary-8-11",
        "categorySlug": "electrical-lighting",
        "faName": "چراغ‌های اضطراری",
        "description": "تامین حداقل روشنایی هنگام قطع برق.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "کیفیت باتری پشتیبان، تاییدیه آتش‌نشانی",
        "trustCriteria": "داشتن مجوزهای مرتبط با حریق"
      },
      {
        "id": "8.12",
        "slug": "tjhyzat-chah-art-8-12",
        "categorySlug": "electrical-lighting",
        "faName": "تجهیزات چاه ارت",
        "description": "ایجاد مسیر ایمن برای جریان نشتی و صاعقه.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "خلوص مس صفحه و سیم ارت",
        "trustCriteria": "تامین پکیج کامل (صفحه، سیم، بنتونیت)"
      },
      {
        "id": "8.13",
        "slug": "dyzl-zhnratvr-v-ups-8-13",
        "categorySlug": "electrical-lighting",
        "faName": "دیزل‌ژنراتور و UPS",
        "description": "تولید برق پشتیبان برای آسانسورها و سرورها.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (وارداتی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "استارت سریع، کارکرد پایدار، ژنراتور معتبر",
        "trustCriteria": "خدمات پس از فروش فوری و قدرتمند"
      },
      {
        "id": "8.14",
        "slug": "transfvrmatvr-tvzya-8-14",
        "categorySlug": "electrical-lighting",
        "faName": "ترانسفورماتور توزیع",
        "description": "کاهنده ولتاژ برای مجتمع‌های بزرگ.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (اخذ انشعاب)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "تلفات بی‌باری کم، کیفیت روغن خنک‌کننده",
        "trustCriteria": "توانایی پیگیری امور از اداره برق"
      },
      {
        "id": "8.15",
        "slug": "dakt-v-jabh-tghsym-8-15",
        "categorySlug": "electrical-lighting",
        "faName": "داکت و جعبه تقسیم",
        "description": "پوشش‌های روکار سیم‌کشی‌های ترمیمی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "پلاستیک منعطف، درب قفل‌شونده",
        "trustCriteria": "در دسترس بودن و سرعت ارسال"
      }
    ]
  },
  {
    "slug": "smart-building-and-safety-systems",
    "faName": "سیستم‌های جریان ضعیف، هوشمندسازی و ایمنی",
    "intro": "این دسته از سند جامع محصولات و خدمات ساختمانی برای سیستم‌های جریان ضعیف، هوشمندسازی و ایمنی استخراج شده است.",
    "subcategories": [
      {
        "id": "9.1",
        "slug": "dvrbyn-mdarbsth-cctv-9-1",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "دوربین مداربسته (CCTV)",
        "description": "نظارت تصویری مشاعات و پارکینگ‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (پیمانکاری)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "کیفیت تصویر (رزولوشن)، دید در شب",
        "trustCriteria": "تخصص در نصب و اجرای شبکه"
      },
      {
        "id": "9.2",
        "slug": "systm-aalam-hrygh-9-2",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "سیستم اعلام حریق",
        "description": "دتکتورهای تشخیص زودهنگام آتش‌سوزی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (مورد تایید آتش‌نشانی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "عدم هشدار کاذب، سرعت عمل",
        "trustCriteria": "تاییدیه سازمان آتش‌نشانی"
      },
      {
        "id": "9.3",
        "slug": "atfa-hrygh-khvdkar-9-3",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "اطفاء حریق خودکار",
        "description": "شبکه‌ای از افشانک‌های حساس (اسپرینکلر).",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای / پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "حساسیت دقیق دمایی (بالب)، عدم نشتی",
        "trustCriteria": "اجرای مهندسی و اخذ تاییدیه"
      },
      {
        "id": "9.4",
        "slug": "fayrbaks-v-kpsvl-9-4",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "فایرباکس و کپسول",
        "description": "تجهیزات دستی واکنش سریع در مشاعات.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "کیفیت ورق جعبه، شیلنگ مقاوم",
        "trustCriteria": "استاندارد معتبر، شارژ دوره‌ای کپسول‌ها"
      },
      {
        "id": "9.5",
        "slug": "mdyryt-sakhtman-bms-9-5",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "مدیریت ساختمان (BMS)",
        "description": "کنترل هوشمند روشنایی، سرمایش و امنیت.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "کاملاً مشاوره‌ای و مهندسی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "پایداری نرم‌افزار، رابط کاربری آسان، لوکس بودن",
        "trustCriteria": "دانش فنی بالا و توجه به یادگیری، پشتیبانی بلندمدت"
      },
      {
        "id": "9.6",
        "slug": "dzdgyr-v-snsvr-hrkty-9-6",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "دزدگیر و سنسور حرکتی",
        "description": "سیستم‌های هشداردهنده نفوذ غیرمجاز.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "دقت سنسورها، اتصال به موبایل",
        "trustCriteria": "گارانتی تعویض کالا"
      },
      {
        "id": "9.7",
        "slug": "ayfvn-tsvyry-v-akss-kntrl-9-7",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "آیفون تصویری و اکسس کنترل",
        "description": "مدیریت تردد افراد با اثر انگشت یا تگ.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (پکیج)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "وضوح تصویر، کیفیت صدای دوطرفه، دوام پنل",
        "trustCriteria": "خدمات پس از فروش و تامین قطعات یدکی"
      },
      {
        "id": "9.8",
        "slug": "antn-v-mahvarh-mrkzy-9-8",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "آنتن و ماهواره مرکزی",
        "description": "توزیع سیگنال تلویزیونی به تمامی واحدها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (پیمانکاری)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "کیفیت سیگنال بالا بدون افت در طبقات",
        "trustCriteria": "تخصص و حسن سابقه در کارهای قبلی"
      },
      {
        "id": "9.9",
        "slug": "kabl-hay-shbkh-v-fybr-nvry-9-9",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "کابل‌های شبکه و فیبر نوری",
        "description": "بسترهای ارتباطی پرسرعت دیتا.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی (تخصصی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "پهنای باند بالا (Cat6/Cat7)، شیلد مقاوم",
        "trustCriteria": "تست فلوک کابل‌ها و اصالت برند"
      },
      {
        "id": "9.10",
        "slug": "rk-shbkh-v-svyych-ha-9-10",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "رک شبکه و سوئیچ‌ها",
        "description": "محفظه مدیریت ارتباطات در اتاق کنترل.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "تهویه مناسب رک، کیفیت سوئیچ",
        "trustCriteria": "مشاوره در طراحی اتاق سرور"
      },
      {
        "id": "9.11",
        "slug": "kabl-zvjy-mkhabraty-9-11",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "کابل زوجی مخابراتی",
        "description": "انتقال خطوط تلفن.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "عدم نویزپذیری",
        "trustCriteria": "اصالت برند کابل"
      },
      {
        "id": "9.12",
        "slug": "snsvr-nsht-gaz-9-12",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "سنسور نشت گاز",
        "description": "قطع خودکار گاز هنگام نشتی (الزام مبحث ۱۷).",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (ایمنی الزامی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "حساسیت دقیق (جلوگیری از انفجار)، شیر برقی مطمئن",
        "trustCriteria": "تاییدیه ایمنی و استاندارد ملی"
      },
      {
        "id": "9.13",
        "slug": "systm-svty-v-pyjyng-9-13",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "سیستم صوتی و پیجینگ",
        "description": "اطلاع‌رسانی و پخش موسیقی در لابی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "تفکیک صدا، کیفیت اسپیکرها",
        "trustCriteria": "طراحی آکوستیک، خدمات پس از فروش"
      },
      {
        "id": "9.14",
        "slug": "jk-brghy-parkyng-9-14",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "جک برقی پارکینگ",
        "description": "اتوماسیون درب‌های ورودی وسایل نقلیه.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (اجرایی)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "قدرت موتور، تردد نامحدود، عدم خرابی در سرما",
        "trustCriteria": "نصب حرفه‌ای و خدمات سرویس دوره‌ای"
      },
      {
        "id": "9.15",
        "slug": "tjhyzat-hzvr-v-ghyab-9-15",
        "categorySlug": "smart-building-and-safety-systems",
        "faName": "تجهیزات حضور و غیاب",
        "description": "کنترل تردد پرسنل اداری.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "دقت سنسور بیومتریک، نرم‌افزار جامع",
        "trustCriteria": "پشتیبانی نرم‌افزاری مداوم"
      }
    ]
  },
  {
    "slug": "doors-windows-and-facade",
    "faName": "درب، پنجره، نما و یراق‌آلات",
    "intro": "پوسته خارجی و تفکیک‌کننده‌های داخلی نیازمند سفارش‌سازی دقیق و برداشت ابعاد (As-Built) هستند.",
    "subcategories": [
      {
        "id": "10.1",
        "slug": "pnjrh-upvc-alvmynyvm-10-1",
        "categorySlug": "doors-windows-and-facade",
        "faName": "پنجره UPVC/آلومینیوم",
        "description": "پروفیل‌های عایق حرارتی و صوتی.",
        "salesTypes": [
          "custom",
          "barter"
        ],
        "salesTypeRaw": "کاملاً سفارشی (تهاتری)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "عایق بودن، عدم تغییر رنگ پروفیل، یراق‌آلات روان",
        "trustCriteria": "دقت در برداشت ابعاد، کیفیت مونتاژ کارخانه، قابلیت تهاتر"
      },
      {
        "id": "10.2",
        "slug": "drb-hay-zdsrght-10-2",
        "categorySlug": "doors-windows-and-facade",
        "faName": "درب‌های ضدسرقت",
        "description": "درب‌های ورودی واحدها با استراکچر فولادی.",
        "salesTypes": [
          "fast",
          "custom"
        ],
        "salesTypeRaw": "سفارشی / تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ورق فولادی داخلی، قفل گاوصندوقی، روکش زیبا",
        "trustCriteria": "تحویل به موقع، نصب تراز و بدون نقص"
      },
      {
        "id": "10.3",
        "slug": "drb-hay-dakhly-mdf-chvb-10-3",
        "categorySlug": "doors-windows-and-facade",
        "faName": "درب‌های داخلی (MDF/چوب)",
        "description": "درب‌های اتاق‌ها و سرویس‌ها.",
        "salesTypes": [
          "consultative",
          "engineering",
          "custom"
        ],
        "salesTypeRaw": "سفارشی (طراحی دکور)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ضدآب بودن (برای سرویس‌ها)، زیبایی روکش",
        "trustCriteria": "اندازه‌گیری دقیق، تحویل در بسته‌بندی ایمن"
      },
      {
        "id": "10.4",
        "slug": "drb-hay-zd-hrygh-10-4",
        "categorySlug": "doors-windows-and-facade",
        "faName": "درب‌های ضد حریق",
        "description": "مسدودسازی مسیر دود در راه‌پله فرار.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تاییدیه آتش‌نشانی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "مقاومت حریق (مثلاً 120 دقیقه)، جک آرام‌بند",
        "trustCriteria": "تاییدیه رسمی سازمان آتش‌نشانی"
      },
      {
        "id": "10.5",
        "slug": "drb-hay-shyshh-ay-atvmatyk-10-5",
        "categorySlug": "doors-windows-and-facade",
        "faName": "درب‌های شیشه‌ای اتوماتیک",
        "description": "درب‌های سنسوردار لابی و فروشگاه.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "سفارشی و پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "موتور بی‌صدا و قدرتمند، سنسور دقیق",
        "trustCriteria": "گارانتی معتبر و تیم نصب حرفه‌ای"
      },
      {
        "id": "10.6",
        "slug": "vrgh-kampvzyt-alvmynyvm-10-6",
        "categorySlug": "doors-windows-and-facade",
        "faName": "ورق کامپوزیت آلومینیوم",
        "description": "پنل‌های سه‌لایه نماهای مدرن.",
        "salesTypes": [
          "fast",
          "consultative",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی (تهاتری) / پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "مقاومت رنگ در برابر UV، کلاس حریق ورق",
        "trustCriteria": "امکان تهاتر، تامین برندهای معتبر"
      },
      {
        "id": "10.7",
        "slug": "nmay-krtyn-val-v-aspaydr-10-7",
        "categorySlug": "doors-windows-and-facade",
        "faName": "نمای کرتین وال و اسپایدر",
        "description": "نمای شیشه‌ای پیوسته با استراکچر مستقل.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای و مهندسی نما",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "آب‌بندی مطلق، زیبایی بصری، ایمنی شیشه‌ها",
        "trustCriteria": "تیم مهندسی قوی برای طراحی شاپ دراوینگ"
      },
      {
        "id": "10.8",
        "slug": "shyshh-hay-dvjdarh-skvryt-10-8",
        "categorySlug": "doors-windows-and-facade",
        "faName": "شیشه‌های دوجداره/سکوریت",
        "description": "شیشه‌های عایق و ایمن پنجره‌ها و پارتیشن‌ها.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "گاز آرگون واقعی، عدم بخارگرفتگی، ایمنی",
        "trustCriteria": "تولید صنعتی (اسپیسر حرارتی) نه دستی"
      },
      {
        "id": "10.9",
        "slug": "prvfyl-hay-nma-lvvr-10-9",
        "categorySlug": "doors-windows-and-facade",
        "faName": "پروفیل‌های نما (لوور)",
        "description": "المان‌های معماری کنترل تابش آفتاب.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "کیفیت رنگ و آنادایز، سبکی",
        "trustCriteria": "دقت در تولید قطعات اکسترود"
      },
      {
        "id": "10.10",
        "slug": "dstgyrh-v-ghfl-10-10",
        "categorySlug": "doors-windows-and-facade",
        "faName": "دستگیره و قفل",
        "description": "یراق‌آلات مکانیکی و قفل‌های هوشمند.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (اکسسوری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "دوام آبکاری، امنیت مغزی، طراحی لوکس",
        "trustCriteria": "تنوع محصولات و تضمین کیفیت"
      },
      {
        "id": "10.11",
        "slug": "jk-hay-aram-bnd-10-11",
        "categorySlug": "doors-windows-and-facade",
        "faName": "جک‌های آرام‌بند",
        "description": "کنترل سرعت بسته شدن درب‌ها.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "completion"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "عدم روغن‌ریزی، تنظیم‌پذیری سرعت",
        "trustCriteria": "اصالت کالا و گارانتی تعویض"
      },
      {
        "id": "10.12",
        "slug": "hfaz-hay-pnjrh-v-frfvrzhh-10-12",
        "categorySlug": "doors-windows-and-facade",
        "faName": "حفاظ‌های پنجره و فرفورژه",
        "description": "مصنوعات فلزی افزایش امنیت فیزیکی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (آهنگری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "استحکام جوش، رنگ کوره‌ای ضدزنگ",
        "trustCriteria": "کیفیت ساخت و نصب تمیز"
      },
      {
        "id": "10.13",
        "slug": "krkrh-hay-brghy-10-13",
        "categorySlug": "doors-windows-and-facade",
        "faName": "کرکره‌های برقی",
        "description": "پوشش متحرک ورودی پارکینگ و تجاری.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (متراژ)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "تیغه‌های بی‌صدا (غضروف‌دار)، موتور باکیفیت",
        "trustCriteria": "نصب اصولی و گارانتی موتور"
      },
      {
        "id": "10.14",
        "slug": "sng-hay-tbyay-nma-10-14",
        "categorySlug": "doors-windows-and-facade",
        "faName": "سنگ‌های طبیعی نما",
        "description": "تراورتن و گرانیت برای نمای کلاسیک.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی کلان / تهاتری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "یکدست بودن سورت سنگ، رزین و ساب عالی",
        "trustCriteria": "قابلیت تامین در متراژ بالا، امکان تهاتر ملک"
      },
      {
        "id": "10.15",
        "slug": "ajr-nma-nsvz-rstyk-10-15",
        "categorySlug": "doors-windows-and-facade",
        "faName": "آجر نما (نسوز، رستیک)",
        "description": "متریال‌های دکوراتیو با تنوع بافت.",
        "salesTypes": [
          "fast",
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "تراکنشی (طراحی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "عدم شوره زدن، ثبات رنگ، ابعاد دقیق",
        "trustCriteria": "ارائه نمونه (سمپل) و تحویل مطابق نمونه"
      }
    ]
  },
  {
    "slug": "flooring-tiles-and-ceramics",
    "faName": "پوشش‌های کف، کاشی و سرامیک",
    "intro": "این اقلام جزو محبوب‌ترین کالاها در معاملات تهاتری هستند.",
    "subcategories": [
      {
        "id": "11.1",
        "slug": "sramyk-prslan-11-1",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "سرامیک پرسلان",
        "description": "کف‌سازی پذیرایی و نما با ابعاد بزرگ.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی کلان / تهاتری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "جذب آب صفر، گونیا بودن، لعاب ضدخش",
        "trustCriteria": "پذیرش تهاتر ملک، تامین یکدست سورت و کالیبر"
      },
      {
        "id": "11.2",
        "slug": "kashy-hay-dyvary-11-2",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "کاشی‌های دیواری",
        "description": "پوشش مقاوم در سرویس‌ها و آشپزخانه.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی / تهاتری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "زیبایی طرح، مقاومت لعاب در برابر شوینده‌ها",
        "trustCriteria": "تامین به موقع بدون شکستگی بار"
      },
      {
        "id": "11.3",
        "slug": "parkt-v-lmynt-11-3",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "پارکت و لمینت",
        "description": "کف‌پوش‌های چوبی با نصب کلیکی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی / دکوراسیون",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مقاومت سایشی (AC4/AC5)، کلیک‌های قوی",
        "trustCriteria": "ارائه خدمات نصب شرکتی، تنوع رنگ"
      },
      {
        "id": "11.4",
        "slug": "sng-hay-kf-11-4",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "سنگ‌های کف",
        "description": "تایل‌های سنگی مقاوم برای لابی و پله.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی / تهاتری",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ساب‌پذیری بالا، مقاومت فشاری",
        "trustCriteria": "تامین از معدن معتبر، قابلیت تهاتر"
      },
      {
        "id": "11.5",
        "slug": "mvzayyk-plymry-v-vash-btn-11-5",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "موزاییک پلیمری و واش‌بتن",
        "description": "کفسازی محوطه و پارکینگ.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مقاومت در برابر یخ‌زدگی و سرما",
        "trustCriteria": "کیفیت رزین مصرفی در تولید"
      },
      {
        "id": "11.6",
        "slug": "kf-pvsh-hay-apvksy-11-6",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "کف‌پوش‌های اپوکسی",
        "description": "پوشش رزینی بدون درز بیمارستان و پارکینگ.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری / مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "عدم لغزندگی، مقاومت شیمیایی بالا",
        "trustCriteria": "تخصص تیم اجرا، زیرسازی اصولی"
      },
      {
        "id": "11.7",
        "slug": "mvkt-hay-tayl-v-rvl-11-7",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "موکت‌های تایل و رول",
        "description": "پوشش نرم فضاهای اداری و هتل‌ها.",
        "salesTypes": [
          "fast",
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "تراکنشی (طراحی)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "کندسوز بودن، ضدالکتریسیته ساکن",
        "trustCriteria": "مشاوره در انتخاب نوع الیاف"
      },
      {
        "id": "11.8",
        "slug": "kf-pvsh-hay-pvc-lvt-11-8",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "کف‌پوش‌های PVC/LVT",
        "description": "پوشش‌های اقتصادی و ضدآب.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ضدآب بودن 100%، نصب سریع",
        "trustCriteria": "در دسترس بودن چسب و متریال مکمل"
      },
      {
        "id": "11.9",
        "slug": "ghrnyzhay-hashyh-11-9",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "قرنیزهای حاشیه",
        "description": "پوشش درز اتصال کف به دیوار.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "روکش ضدخش، مقاومت در برابر رطوبت",
        "trustCriteria": "تنوع رنگ بالا مطابق با کفپوش"
      },
      {
        "id": "11.10",
        "slug": "chmn-msnvay-11-10",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "چمن مصنوعی",
        "description": "زیباسازی روف‌گاردن و بالکن.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مقاومت به اشعه UV، تراکم بافت",
        "trustCriteria": "گارانتی عدم تغییر رنگ و پوسیدگی"
      },
      {
        "id": "11.11",
        "slug": "btn-astampy-11-11",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "بتن استامپی",
        "description": "اجرای بتن درجا با قالب طرح‌دار.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مقاومت سایشی، زیبایی بافت سنگ",
        "trustCriteria": "مهارت استادکاران تامین‌کننده"
      },
      {
        "id": "11.12",
        "slug": "trmvvvd-v-chvb-plast-11-12",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "ترمووود و چوب پلاست",
        "description": "کف‌سازی دور استخرها و تراس‌ها.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (طراحی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "مقاومت مطلق در برابر پوسیدگی و حشرات",
        "trustCriteria": "اصالت چوب فنلاندی یا کیفیت پلاستیک"
      },
      {
        "id": "11.13",
        "slug": "pvdr-bndkshy-nanv-11-13",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "پودر بندکشی نانو",
        "description": "پرکننده درزهای بین کاشی و سرامیک.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "آنتی‌باکتریال بودن، عدم ترک‌خوردگی، واترپروف",
        "trustCriteria": "تامین سریع همزمان با کاشی"
      },
      {
        "id": "11.14",
        "slug": "chsb-v-rzyn-kf-pvsh-11-14",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "چسب و رزین کف‌پوش",
        "description": "چسباندن پارکت و موکت.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "چسبندگی بالا، فاقد بوی نامطبوع",
        "trustCriteria": "تاریخ تولید جدید محصول"
      },
      {
        "id": "11.15",
        "slug": "prvfyl-hay-antghal-drz-11-15",
        "categorySlug": "flooring-tiles-and-ceramics",
        "faName": "پروفیل‌های انتقال درز",
        "description": "اتصال دو نوع کفپوش مختلف.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "آنادایز باکیفیت، مقاومت سایشی",
        "trustCriteria": "تنوع فرم و رنگ"
      }
    ]
  },
  {
    "slug": "interior-and-exterior-finishes",
    "faName": "نازک‌کاری دیوار، سقف و دکوراسیون داخلی",
    "intro": "عناصری که هویت معماری بنا را تکمیل می‌کنند و قضاوت نهایی کاربر را شکل می‌دهند.",
    "subcategories": [
      {
        "id": "12.1",
        "slug": "rng-hay-sakhtmany-12-1",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "رنگ‌های ساختمانی",
        "description": "پوشش اکریلیک/روغنی برای سقف و دیوار.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "قابلیت شستشو، پوشش‌دهی بالا، بی‌بو بودن",
        "trustCriteria": "اصالت برند، ماشین ترکیب رنگ کامپیوتری"
      },
      {
        "id": "12.2",
        "slug": "kaghz-dyvary-v-pvstr-12-2",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "کاغذ دیواری و پوستر",
        "description": "پوشش‌های رولی با طرح‌های متنوع.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (دکوراسیون)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "قابلیت شستشو، مقاومت در برابر پارگی",
        "trustCriteria": "ارائه آلبوم‌های جدید، نصب تضمینی"
      },
      {
        "id": "12.3",
        "slug": "sghf-kazb-knaf-12-3",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "سقف کاذب کناف",
        "description": "ساخت‌وساز خشک برای دکور و نورمخفی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری / مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سبکی، مقاومت رطوبتی (پنل MR)، ضدحریق",
        "trustCriteria": "نمایندگی مجاز کناف (کی‌پلاس)، تیم نصب حرفه‌ای"
      },
      {
        "id": "12.4",
        "slug": "tayl-hay-sghfy-60x6-12-4",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "تایل‌های سقفی ۶۰x۶",
        "description": "سقف‌های شبکه‌ای فضاهای اداری.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "دسترسی آسان به تاسیسات، آکوستیک بودن",
        "trustCriteria": "تامین سازه و تایل به صورت هماهنگ"
      },
      {
        "id": "12.5",
        "slug": "sghf-hay-kshsan-barysvl-12-5",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "سقف‌های کشسان (باریسول)",
        "description": "پوشش پلیمری نورگذر دکوراتیو.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (ابعادبرداری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "قابلیت نورپردازی، ضدآب، یکپارچگی",
        "trustCriteria": "کیفیت چاپ بالا، تخصص تیم حرارت‌دهی و نصب"
      },
      {
        "id": "12.6",
        "slug": "dyvarpvsh-hay-mdf-trmvval-12-6",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "دیوارپوش‌های MDF/ترمووال",
        "description": "پنل‌های پیش‌ساخته برای دیوارهای کانونی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (دکوراسیون)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "زیبایی چوب، نصب سریع",
        "trustCriteria": "کیفیت روکش و عدم تبله کردن"
      },
      {
        "id": "12.7",
        "slug": "gch-bry-pysh-sakhth-ply-yvrtan-12-7",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "گچ‌بری پیش‌ساخته (پلی‌یورتان)",
        "description": "جایگزین گچ‌بری دستی در سبک کلاسیک.",
        "salesTypes": [
          "fast",
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "تراکنشی (طراحی)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سبکی، رنگ‌پذیری عالی، نصب بدون کثیف‌کاری",
        "trustCriteria": "تنوع ابزارها و طراحی‌های کلاسیک"
      },
      {
        "id": "12.8",
        "slug": "pnl-hay-sh-bady-3d-panels-12-8",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "پنل‌های سه‌بعدی (3D Panels)",
        "description": "قطعات برجسته دکوراتیو.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ایجاد نمای مدرن، رنگ‌پذیری",
        "trustCriteria": "دقت در قالب‌گیری پنل‌ها"
      },
      {
        "id": "12.9",
        "slug": "sng-hay-antyk-v-dkvratyv-12-9",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "سنگ‌های آنتیک و دکوراتیو",
        "description": "تزئین شومینه و دیوار پشت تلویزیون.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "زیبایی طبیعی، تنوع بافت",
        "trustCriteria": "بسته‌بندی کارتنی ایمن"
      },
      {
        "id": "12.10",
        "slug": "aynh-kary-dkvratyv-12-10",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "آینه‌کاری دکوراتیو",
        "description": "استفاده از قطعات آینه پازلی در پذیرایی.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی (تراش لیزری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "انعکاس بالا، تراش دقیق CNC",
        "trustCriteria": "چسب مخصوص بدون اسید و تیم نصب دقیق"
      },
      {
        "id": "12.11",
        "slug": "btvnh-v-praymr-12-11",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "بتونه و پرایمر",
        "description": "خمیر زیرسازی پیش از رنگ‌آمیزی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سمباده‌خوری خوب، پرکنندگی شکاف‌ها",
        "trustCriteria": "در دسترس بودن فوری"
      },
      {
        "id": "12.12",
        "slug": "sghf-hay-chvby-v-alvar-12-12",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "سقف‌های چوبی و الوار",
        "description": "المان‌های دکوراتیو سبک روستیک.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (نجاری)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "خشک بودن چوب (جلوگیری از موریانه)",
        "trustCriteria": "تخصص نجاری و اشباع چوب"
      },
      {
        "id": "12.13",
        "slug": "rng-hay-snaty-apvksy-12-13",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "رنگ‌های صنعتی (اپوکسی)",
        "description": "پوشش ضدخوردگی سازه‌های فلزی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (ضخامت میکرون)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "مقاومت شیمیایی، چسبندگی به فلز",
        "trustCriteria": "مشاوره در اجرای پرایمر زینک‌ریچ"
      },
      {
        "id": "12.14",
        "slug": "shyshh-hay-astyn-gls-12-14",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "شیشه‌های استین گلس",
        "description": "شیشه‌های رنگی و سندبلاست دکوراتیو.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "هنری بودن، کیفیت لعاب",
        "trustCriteria": "هنرمندی و سابقه کار طراح"
      },
      {
        "id": "12.15",
        "slug": "mlzvmat-nghashy-12-15",
        "categorySlug": "interior-and-exterior-finishes",
        "faName": "ملزومات نقاشی",
        "description": "غلطک، قلم‌مو و سنباده.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "عدم ریزش موی قلم، دوام غلطک",
        "trustCriteria": "موجودی کامل ملزومات استادکار"
      }
    ]
  },
  {
    "slug": "sanitary-fixtures-and-faucets",
    "faName": "تجهیزات بهداشتی، حمام و شیرآلات",
    "intro": "این اقلام نیازمند کیفیت بالا در لعاب و مقاومت در برابر زنگ‌زدگی هستند.",
    "subcategories": [
      {
        "id": "13.1",
        "slug": "chyny-alat-tvalt-frngy-val-hng-13-1",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "چینی‌آلات (توالت فرنگی/وال‌هنگ)",
        "description": "تجهیزات دفع فاضلاب با لعاب آنتی‌باکتریال.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی / تهاتری",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "شوتینگ قوی، لعاب آنتی‌باکتریال، مکانیزم دوگانه",
        "trustCriteria": "گارانتی مکانیزم تخلیه، قابلیت تهاتر"
      },
      {
        "id": "13.2",
        "slug": "rvshvyy-kabynty-sngy-13-2",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "روشویی (کابینتی/سنگی)",
        "description": "تجهیزات شستشو با فضای ذخیره‌سازی.",
        "salesTypes": [
          "fast",
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "تراکنشی (طراحی)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مقاومت کابینت به آب (PVC)، زیبایی",
        "trustCriteria": "تنوع طرح و رنگ، یراق‌آلات استیل"
      },
      {
        "id": "13.3",
        "slug": "shyralat-bhdashty-tvkar-rvkar-13-3",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "شیرآلات بهداشتی توکار/روکار",
        "description": "مکانیزم‌های کنترل جریان آب.",
        "salesTypes": [
          "fast",
          "barter"
        ],
        "salesTypeRaw": "تراکنشی (تهاتری)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster",
            "completion"
          ]
        },
        "builderValues": "کارتریج سرامیکی باکیفیت، آبکاری مقاوم (PVD)",
        "trustCriteria": "اصالت برند، گارانتی 5 ساله، تامین قطعات توکار"
      },
      {
        "id": "13.4",
        "slug": "flash-tank-ha-tvkar-rvkar-13-4",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "فلاش تانک‌ها (توکار/روکار)",
        "description": "مخازن ذخیره آب برای تخلیه توالت.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "ضخامت بدنه (تحمل وزن دیوار در توکار)، بی‌صدا بودن",
        "trustCriteria": "برند معتبر، گارانتی نشت آب"
      },
      {
        "id": "13.5",
        "slug": "van-jkvzy-v-kabyn-dvsh-13-5",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "وان، جکوزی و کابین دوش",
        "description": "تجهیزات استحمام لوکس.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "سفارشی / مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "موتور قدرتمند، شاسی ضدزنگ، ورق اکریلیک",
        "trustCriteria": "نصب شرکتی و خدمات پس از فروش پمپ"
      },
      {
        "id": "13.6",
        "slug": "synk-zrfshvyy-13-6",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "سینک ظرفشویی",
        "description": "تجهیزات شستشو در آشپزخانه (استیل/گرانیت).",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ضخامت استیل (عدم قری)، ضدخش بودن، عمق لگن",
        "trustCriteria": "موجودی برندهای اصلی، بسته بندی سالم"
      },
      {
        "id": "13.7",
        "slug": "hvlh-khshk-kn-13-7",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "حوله‌خشک‌کن",
        "description": "رادیاتور دکوراتیو دیواری حمام.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ضدزنگ بودن (آلومینیوم/استیل)، ضریب حرارتی",
        "trustCriteria": "تنوع مدل و ابعاد"
      },
      {
        "id": "13.8",
        "slug": "akssvry-srvys-bhdashty-13-8",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "اکسسوری سرویس بهداشتی",
        "description": "تجهیزات رفاهی (آینه، شلف، جا مایع).",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "آبکاری ضدزنگ (برنج یا استیل ۳۰۴)",
        "trustCriteria": "جور بودن ست کامل اکسسوری"
      },
      {
        "id": "13.9",
        "slug": "kf-shvy-v-trnch-astyl-13-9",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "کف‌شوی و ترنچ استیل",
        "description": "دریچه هدایت آب به فاضلاب.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "سوپاپ سوسک‌گیر، استیل ضدزنگ",
        "trustCriteria": "کیفیت ساخت و جوشکاری"
      },
      {
        "id": "13.10",
        "slug": "tjhyzat-svna-hytr-dyg-bkhar-13-10",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "تجهیزات سونا (هیتر/دیگ بخار)",
        "description": "تجهیزات ایجاد حرارت و بخار سونا.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تاسیساتی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ایمنی بالا، ترموستات دقیق، المنت باکیفیت",
        "trustCriteria": "تخصص نصب، گارانتی سیستم‌های برقی"
      },
      {
        "id": "13.11",
        "slug": "partyshn-hay-shyshh-ay-hmam-13-11",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "پارتیشن‌های شیشه‌ای حمام",
        "description": "شیشه سکوریت تفکیک فضای تر و خشک.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "شیشه سکوریت ایمن، یراق ضدزنگ",
        "trustCriteria": "اندازه‌گیری دقیق و نصب آب‌بند"
      },
      {
        "id": "13.12",
        "slug": "hvaksh-srvys-bhdashty-13-12",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "هواکش سرویس بهداشتی",
        "description": "فن‌های بی‌صدا برای تهویه رطوبت.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "مکش بالا (CFM)، موتور سایلنت و ضدآب",
        "trustCriteria": "گارانتی تعویض"
      },
      {
        "id": "13.13",
        "slug": "shyralat-chshmy-v-alktrvnyky-13-13",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "شیرآلات چشمی و الکترونیکی",
        "description": "سیستم‌های بدون تماس اماکن عمومی.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای / تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "دقت سنسور، مصرف باتری پایین، صرفه‌جویی آب",
        "trustCriteria": "خدمات پشتیبانی سنسورها"
      },
      {
        "id": "13.14",
        "slug": "mkanyzm-hay-tkhlyh-v-syfvn-13-14",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "مکانیزم‌های تخلیه و سیفون",
        "description": "قطعات اتصالاتی پنهان سینک و توالت.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "پلاستیک مواد اول، واشرهای آب‌بند",
        "trustCriteria": "در دسترس بودن فوری"
      },
      {
        "id": "13.15",
        "slug": "pmp-v-fyltr-jkvzy-13-15",
        "categorySlug": "sanitary-fixtures-and-faucets",
        "faName": "پمپ و فیلتر جکوزی",
        "description": "تجهیزات الکترومکانیکی استخر.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "قدرت تصفیه، موتور کم‌صدا، دوام در کلر",
        "trustCriteria": "مشاوره فنی محاسبه ظرفیت استخر"
      }
    ]
  },
  {
    "slug": "kitchen-and-millwork",
    "faName": "دکوراسیون آشپزخانه و مبلمان ثابت (Millwork)",
    "intro": "این بخش نیازمند اندازه‌گیری‌های میلی‌متری، طراحی سه‌بعدی و نصب مهندسی است.",
    "subcategories": [
      {
        "id": "14.1",
        "slug": "vrgh-hay-bdnh-mdf-sfyd-14-1",
        "categorySlug": "kitchen-and-millwork",
        "faName": "ورق‌های بدنه (MDF سفید)",
        "description": "ساخت اسکلت داخلی کابینت و کمد.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "سفارشی (پیمانکاری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "تراکم مغزی ورق (پیچ‌خوری خوب)، روکش ضدآب",
        "trustCriteria": "برش و نوار لبه CNC دقیق"
      },
      {
        "id": "14.2",
        "slug": "drb-v-nmay-kabynt-mmbran-chvb-14-2",
        "categorySlug": "kitchen-and-millwork",
        "faName": "درب و نمای کابینت (ممبران/چوب)",
        "description": "پوسته ظاهری آشپزخانه.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "سفارشی (مشاوره‌ای)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "زیبایی طرح، مقاومت روکش در برابر حرارت و رطوبت",
        "trustCriteria": "طراحی 3D رایگان، تحویل طبق زمان‌بندی توافقی"
      },
      {
        "id": "14.3",
        "slug": "sfhat-rvyh-kvryn-kvartz-14-3",
        "categorySlug": "kitchen-and-millwork",
        "faName": "صفحات رویه (کورین/کوارتز)",
        "description": "سطوح کار افقی (کانترتاپ).",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "completion"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "آنتی‌باکتریال بودن، بدون درز شدن، ضدخش و لک",
        "trustCriteria": "اجرای یکپارچه و ساب عالی توسط اکیپ متخصص"
      },
      {
        "id": "14.4",
        "slug": "yragh-alat-kabynt-14-4",
        "categorySlug": "kitchen-and-millwork",
        "faName": "یراق‌آلات کابینت",
        "description": "لولا، ریل و جک‌های اتوبوسی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "حرکت نرم و آرام‌بند، تحمل وزن بالا (کشوها)",
        "trustCriteria": "تامین برندهای معتبر (بلوم، فانتونی)"
      },
      {
        "id": "14.5",
        "slug": "tjhyzat-tvkar-hvd-fr-gaz-14-5",
        "categorySlug": "kitchen-and-millwork",
        "faName": "تجهیزات توکار (هود، فر، گاز)",
        "description": "لوازم پخت‌وپز یکپارچه با دکوراسیون.",
        "salesTypes": [
          "fast",
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "تراکنشی (طراحی‌محور)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "ایمنی (ترموکوپل)، مکش هود، زیبایی ظاهری",
        "trustCriteria": "ضمانت‌نامه رسمی و نصب شرکتی"
      },
      {
        "id": "14.6",
        "slug": "kmd-dyvary-v-klvzt-rvm-14-6",
        "categorySlug": "kitchen-and-millwork",
        "faName": "کمد دیواری و کلوزت روم",
        "description": "سیستم‌های ذخیره‌سازی اتاق‌خواب.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "سفارشی (پیمانکاری)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "بهینه‌سازی فضا، استحکام طبقات، ریل‌های باکیفیت",
        "trustCriteria": "اجرای تمیز و هماهنگ با دیوارهای اتاق"
      },
      {
        "id": "14.7",
        "slug": "akssvry-v-nzm-dhndh-hay-kabynt-14-7",
        "categorySlug": "kitchen-and-millwork",
        "faName": "اکسسوری و نظم‌دهنده‌های کابینت",
        "description": "تجهیزات سیمی جهت بهینه‌سازی فضا (سوپری).",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "روکش کروم ضدزنگ، روانی حرکت ریل‌ها",
        "trustCriteria": "ارائه محصولات کاربردی و جدید"
      },
      {
        "id": "14.8",
        "slug": "ghrnyz-ab-bnd-v-pakhvr-14-8",
        "categorySlug": "kitchen-and-millwork",
        "faName": "قرنیز آب‌بند و پاخور",
        "description": "قطعات تکمیلی جلوگیری از نفوذ آب.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "completion"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "عایق‌بندی کامل صفحه کابینت، تناسب رنگ",
        "trustCriteria": "تامین همزمان با یراق‌آلات"
      },
      {
        "id": "14.9",
        "slug": "systm-hay-nvrprdazy-tvkar-14-9",
        "categorySlug": "kitchen-and-millwork",
        "faName": "سیستم‌های نورپردازی توکار",
        "description": "ریسه LED زیر کابینت‌های هوایی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "نور ملایم و کاربردی، مخفی بودن سیم‌کشی",
        "trustCriteria": "ارائه سنسورهای حرکتی و تاچ باکیفیت"
      },
      {
        "id": "14.10",
        "slug": "partyshn-adary-v-myz-kantr-14-10",
        "categorySlug": "kitchen-and-millwork",
        "faName": "پارتیشن اداری و میز کانتر",
        "description": "مبلمان ثابت چوبی و شیشه‌ای.",
        "salesTypes": [
          "consultative",
          "custom"
        ],
        "salesTypeRaw": "سفارشی (مشاوره‌ای)",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "completion"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "آکوستیک بودن، طراحی ارگونومیک، زیبایی",
        "trustCriteria": "قابلیت دمونتاژ و جابجایی پارتیشن‌ها"
      }
    ]
  },
  {
    "slug": "vertical-transportation",
    "faName": "سیستم‌های جابجایی عمودی (آسانسور و پله برقی)",
    "intro": "پیچیده‌ترین تجهیزات الکترومکانیکی ساختمان با الزامات سخت‌گیرانه استاندارد ملی و سندیکای آسانسور.",
    "subcategories": [
      {
        "id": "15.1",
        "slug": "mvtvr-asansvr-gyrbks-gyrls-15-1",
        "categorySlug": "vertical-transportation",
        "faName": "موتور آسانسور (گیربکس/گیرلس)",
        "description": "نیروی محرکه جابجایی کابین.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (محاسبات ترافیک)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "حرکت نرم (بدون شوک)، مصرف برق پایین، عمر بالا",
        "trustCriteria": "عضویت در سندیکا، گواهینامه معتبر، اصالت برند"
      },
      {
        "id": "15.2",
        "slug": "kabyn-asansvr-15-2",
        "categorySlug": "vertical-transportation",
        "faName": "کابین آسانسور",
        "description": "محفظه حمل مسافر با دکوراسیون استیل/شیشه.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "زیبایی دکوراسیون، عدم لرزش، تهویه مناسب",
        "trustCriteria": "کارگاه مجهز ورق‌کاری و مونتاژ دقیق"
      },
      {
        "id": "15.3",
        "slug": "tablv-frman-vvvf-15-3",
        "categorySlug": "vertical-transportation",
        "faName": "تابلو فرمان (VVVF)",
        "description": "مغز متفکر سیستم و کنترل درایو موتور.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (مهندسی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "پردازش سریع، نجات اضطراری (Blackout)، توقف نرم",
        "trustCriteria": "خدمات پشتیبانی نرم‌افزاری 24 ساعته"
      },
      {
        "id": "15.4",
        "slug": "ryl-hay-rahnma-t-profile-15-4",
        "categorySlug": "vertical-transportation",
        "faName": "ریل‌های راهنما (T-Profile)",
        "description": "مسیر حرکت عمودی کابین.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تراکنشی (پیمانکاری)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "ماشین‌کاری دقیق سرد (بدون تاب)، استحکام فولاد",
        "trustCriteria": "تضمین کیفیت ریل، اجرای شاقول و دقیق"
      },
      {
        "id": "15.5",
        "slug": "sym-bksl-v-travl-kabl-15-5",
        "categorySlug": "vertical-transportation",
        "faName": "سیم‌بکسل و تراول کابل",
        "description": "طناب‌های معلق و کابل‌های متحرک برق.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "مغزی فولادی مقاوم، انعطاف‌پذیری تراول کابل",
        "trustCriteria": "ارائه سرتفیکیت استاندارد کشش کابل"
      },
      {
        "id": "15.6",
        "slug": "drb-hay-tbghat-v-kabyn-15-6",
        "categorySlug": "vertical-transportation",
        "faName": "درب‌های طبقات و کابین",
        "description": "مکانیزم‌های ایمنی لولایی یا اتوماتیک.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "سفارشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "بسته شدن روان و بی‌صدا، سنسور پرده‌ای ایمن",
        "trustCriteria": "تنظیم دقیق مکانیزم درب‌ها حین نصب"
      },
      {
        "id": "15.7",
        "slug": "mkanyzm-hay-aymny-parashvt-gavrnr-15-7",
        "categorySlug": "vertical-transportation",
        "faName": "مکانیزم‌های ایمنی (پاراشوت/گاورنر)",
        "description": "تجهیزات توقف سقوط کابین.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مهندسی (الزام استاندارد)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "عملکرد 100% قطعی در مواقع بحران",
        "trustCriteria": "تضمین اخذ استاندارد ملی آسانسور از اداره استاندارد"
      },
      {
        "id": "15.8",
        "slug": "plh-brghy-escalator-15-8",
        "categorySlug": "vertical-transportation",
        "faName": "پله برقی (Escalator)",
        "description": "راه‌پله متحرک مجتمع‌های تجاری.",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "کاملاً سفارشی و وارداتی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "کارکرد مداوم و سنگین، ایمنی پله‌ها",
        "trustCriteria": "خدمات سرویس و نگهداری تضمینی"
      },
      {
        "id": "15.9",
        "slug": "rmp-hay-mthrk-15-9",
        "categorySlug": "vertical-transportation",
        "faName": "رمپ‌های متحرک",
        "description": "سطوح شیب‌دار متحرک (فروشگاه‌ها).",
        "salesTypes": [
          "custom"
        ],
        "salesTypeRaw": "کاملاً سفارشی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "completion"
          ]
        },
        "builderValues": "تردد ایمن با ترولی، شیب استاندارد",
        "trustCriteria": "رزومه قوی در پروژه‌های تجاری مشابه"
      },
      {
        "id": "15.10",
        "slug": "balabrhay-hydrvlyky-v-kargahy-15-10",
        "categorySlug": "vertical-transportation",
        "faName": "بالابرهای هیدرولیکی و کارگاهی",
        "description": "تجهیزات جابجایی مصالح حین ساخت.",
        "salesTypes": [
          "fast",
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای / تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing"
          ]
        },
        "builderValues": "قدرت وینچ بالا، ترمز ایمنی قوی، کابل سالم",
        "trustCriteria": "پشتیبانی سریع در صورت خرابی دستگاه"
      }
    ]
  },
  {
    "slug": "workshop-tools",
    "faName": "ابزارآلات کارگاهی: دستی، برقی و بادی",
    "intro": "این دسته از سند جامع محصولات و خدمات ساختمانی برای ابزارآلات کارگاهی: دستی، برقی و بادی استخراج شده است.",
    "subcategories": [
      {
        "id": "16.1",
        "slug": "dryl-ha-brghy-sharzhy-btn-kn-16-1",
        "categorySlug": "workshop-tools",
        "faName": "دریل‌ها (برقی، شارژی، بتن‌کن)",
        "description": "سوراخ‌کاری و تخریب موضعی بتن و فلز.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "قدرت موتور، عمر باتری (شارژی)، طراحی ارگونومیک",
        "trustCriteria": "داشتن خدمات گارانتی و تعمیرات"
      },
      {
        "id": "16.2",
        "slug": "chksh-tkhryb-pykvr-16-2",
        "categorySlug": "workshop-tools",
        "faName": "چکش تخریب (پیکور)",
        "description": "کنده‌کاری دیوارهای بتنی و مسیر تاسیسات.",
        "salesTypes": [
          "fast",
          "rental"
        ],
        "salesTypeRaw": "تراکنشی / اجاره‌ای",
        "stageTiming": {
          "negotiate": [
            "demolition",
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "قدرت ضربه بالا (ژول)، سیستم ضدلرزش",
        "trustCriteria": "ارائه ابزار جایگزین در زمان تعمیر دستگاه"
      },
      {
        "id": "16.3",
        "slug": "dstgah-hay-jvsh-aynvrtr-16-3",
        "categorySlug": "workshop-tools",
        "faName": "دستگاه‌های جوش (اینورتر)",
        "description": "اتصال ذوبی فلزات و لوله‌کشی گاز.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building",
            "plaster"
          ]
        },
        "builderValues": "آمپر واقعی، چرخه کاری بالا، سبکی",
        "trustCriteria": "اصالت برند و تامین قطعات الکترونیکی"
      },
      {
        "id": "16.4",
        "slug": "dstgah-hay-frz-sng-bry-ahngry-16-4",
        "categorySlug": "workshop-tools",
        "faName": "دستگاه‌های فرز (سنگ‌بری/آهنگری)",
        "description": "برش و پرداخت سطوح.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "دور بالا، گیربکس مقاوم، ایمنی صفحه",
        "trustCriteria": "تامین مستمر صفحات برش استاندارد"
      },
      {
        "id": "16.5",
        "slug": "arh-hay-brghy-amvdbr-dysky-16-5",
        "categorySlug": "workshop-tools",
        "faName": "اره‌های برقی (عمودبر/دیسکی)",
        "description": "برش دقیق چوب، پروفیل و MDF.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing",
            "completion"
          ]
        },
        "builderValues": "برش گونیا و بدون لب‌پَر شدن، موتور پرقدرت",
        "trustCriteria": "تنوع تیغه‌های تخصصی در انبار"
      },
      {
        "id": "16.6",
        "slug": "abzarhay-andazh-gyry-v-traz-lyzry-16-6",
        "categorySlug": "workshop-tools",
        "faName": "ابزارهای اندازه‌گیری و تراز لیزری",
        "description": "پیاده‌سازی نقشه‌ها و شاقول کردن دیوارها.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تخصصی (تراکنشی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "دقت میلی‌متری، خودترازی سریع، برد لیزر بالا",
        "trustCriteria": "خدمات کالیبراسیون و تعمیر"
      },
      {
        "id": "16.7",
        "slug": "abzarhay-bnayy-malh-kmchh-16-7",
        "categorySlug": "workshop-tools",
        "faName": "ابزارهای بنایی (ماله، کمچه)",
        "description": "ادوات دستی اجرای ملات و گچ‌کاری.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ],
          "execute": [
            "wall-building",
            "finishing"
          ]
        },
        "builderValues": "سبکی، جنس تیغه (ضدزنگ/فولادی)، خوش‌دستی",
        "trustCriteria": "در دسترس بودن فوری و قیمت ارزان"
      },
      {
        "id": "16.8",
        "slug": "abzarhay-kvbshy-chksh-ptk-dylm-16-8",
        "categorySlug": "workshop-tools",
        "faName": "ابزارهای کوبشی (چکش، پتک، دیلم)",
        "description": "تخریب دستی و آرماتوربندی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "دسته‌های نشکن (فایبرگلاس)، فولاد فورج‌شده",
        "trustCriteria": "تنوع در وزن و ابعاد"
      },
      {
        "id": "16.9",
        "slug": "abzarhay-tasysaty-achar-shlaghy-16-9",
        "categorySlug": "workshop-tools",
        "faName": "ابزارهای تاسیساتی (آچار شلاقی)",
        "description": "باز و بسته کردن اتصالات لوله‌کشی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "آلیاژ کروم‌وانادیوم، فک‌های مقاوم و ضدسایش",
        "trustCriteria": "ارائه برندهای شناخته‌شده ابزار دستی"
      },
      {
        "id": "16.10",
        "slug": "dstgah-snbadh-lrzan-16-10",
        "categorySlug": "workshop-tools",
        "faName": "دستگاه سنباده‌لرزان",
        "description": "صیقل دادن سطوح گچی پیش از نقاشی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "مکش گردوغبار، لرزش پایین دست کاربر",
        "trustCriteria": "موجودی پدهای سنباده یدکی"
      },
      {
        "id": "16.11",
        "slug": "dstgah-prs-lvlh-v-atv-sbz-16-11",
        "categorySlug": "workshop-tools",
        "faName": "دستگاه پرس لوله و اتو سبز",
        "description": "اتصال لوله‌های پلیمری با حرارت یا پرس.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "لقمه‌های نچسب (تفلون عالی)، پرس دقیق فک‌ها",
        "trustCriteria": "کیفیت المنت دستگاه، گارانتی شرکتی"
      },
      {
        "id": "16.12",
        "slug": "kmprsvr-bad-v-abzar-pnvmatyk-16-12",
        "categorySlug": "workshop-tools",
        "faName": "کمپرسور باد و ابزار پنوماتیک",
        "description": "هوای فشرده برای میخ‌کوب و پیستوله رنگ.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "پر شدن سریع مخزن، بی‌صدا بودن، کیفیت شیرآلات",
        "trustCriteria": "تست ایمنی مخزن فشار"
      },
      {
        "id": "16.13",
        "slug": "ghychy-v-khm-kn-armatvr-16-13",
        "categorySlug": "workshop-tools",
        "faName": "قیچی و خم‌کن آرماتور",
        "description": "برش و فرم‌دهی میلگرد در کارگاه.",
        "salesTypes": [
          "fast",
          "rental"
        ],
        "salesTypeRaw": "تراکنشی / اجاره‌ای",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "هیدرولیک قدرتمند، سرعت در خم‌کاری، استهلاک کم",
        "trustCriteria": "خدمات تعمیر و نگهداری سیار کارگاهی"
      },
      {
        "id": "16.14",
        "slug": "alk-v-srnd-16-14",
        "categorySlug": "workshop-tools",
        "faName": "الک و سرند",
        "description": "دانه‌بندی دقیق گچ، ماسه و سیمان.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "wall-building",
            "finishing"
          ]
        },
        "builderValues": "توری مقاوم به پاره شدن، چشمه‌های دقیق",
        "trustCriteria": "قیمت مناسب، تامین انواع سایزها"
      },
      {
        "id": "16.15",
        "slug": "mvlty-mtr-v-tjhyzat-tst-brgh-16-15",
        "categorySlug": "workshop-tools",
        "faName": "مولتی‌متر و تجهیزات تست برق",
        "description": "اندازه‌گیری ولتاژ و مقاومت شبکه‌ها.",
        "salesTypes": [
          "fast",
          "consultative"
        ],
        "salesTypeRaw": "تخصصی (تراکنشی)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "plaster",
            "completion"
          ]
        },
        "builderValues": "دقت اندازه‌گیری (True RMS)، ایمنی پراب‌ها",
        "trustCriteria": "ارائه تجهیزات کالیبره شده"
      }
    ]
  },
  {
    "slug": "heavy-machinery-transport-concrete",
    "faName": "ماشین‌آلات سنگین، تجهیزات حمل‌ونقل و بتن‌ریزی",
    "intro": "اسکلت‌بندی لجستیک کارگاه‌های ساختمانی که عمدتاً به صورت اجاره‌ای یا پیمانکاری تامین می‌شوند.",
    "subcategories": [
      {
        "id": "17.1",
        "slug": "byl-mkanyky-v-lvdr-17-1",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "بیل مکانیکی و لودر",
        "description": "خاک‌برداری و بارگیری نخاله‌ها.",
        "salesTypes": [
          "consultative",
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای / پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "راندمان بالا، عدم خرابی و روغن‌ریزی در سایت",
        "trustCriteria": "اپراتور ماهر و متعهد، جایگزینی سریع دستگاه خراب"
      },
      {
        "id": "17.2",
        "slug": "bvldvzr-v-grydr-17-2",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "بولدوزر و گریدر",
        "description": "تسطیح سایت و آماده‌سازی زمین.",
        "salesTypes": [
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "تیغه‌های مقاوم، قدرت موتور",
        "trustCriteria": "اعزام به موقع ماشین‌آلات به سایت"
      },
      {
        "id": "17.3",
        "slug": "tavr-kryn-jrsghyl-brjy-17-3",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "تاور کرین (جرثقیل برجی)",
        "description": "جابجایی عمودی بارها در ساختمان بلند.",
        "salesTypes": [
          "consultative",
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای / مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "طول فلش مناسب، تناژ باربرداری مطمئن، ایمنی مطلق",
        "trustCriteria": "بیمه‌نامه معتبر، تیم مونتاژ و نگهداری تخصصی"
      },
      {
        "id": "17.4",
        "slug": "jrsghyl-mashyny-bvm-trak-17-4",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "جرثقیل ماشینی (بوم‌تراک)",
        "description": "تخلیه بارهای سنگین و نصب اسکلت.",
        "salesTypes": [
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای (ساعتی)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "پایداری در باربرداری، طول بوم کافی",
        "trustCriteria": "گواهی سلامت جرثقیل، دقت اپراتور"
      },
      {
        "id": "17.5",
        "slug": "myksr-btn-trak-myksr-khlath-17-5",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "میکسر بتن (تراک میکسر/خلاطه)",
        "description": "حمل بتن آماده و تولید بتن محلی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "خدماتی (تراکنشی)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "چرخش مداوم جهت جلوگیری از گیرش بتن",
        "trustCriteria": "تامین ناوگان کافی برای بتن‌ریزی پیوسته"
      },
      {
        "id": "17.6",
        "slug": "pmp-btn-hvayy-zmyny-17-6",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "پمپ بتن (هوایی/زمینی)",
        "description": "پمپاژ بتن تازه به طبقات فوقانی.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "خدماتی (تراکنشی)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "فشار پمپاژ بالا، عدم گرفتگی لوله‌ها، طول دکل",
        "trustCriteria": "اپراتوری حرفه‌ای، شستشوی تمیز پس از کار"
      },
      {
        "id": "17.7",
        "slug": "shylng-v-vybratvr-btn-17-7",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "شیلنگ و ویبراتور بتن",
        "description": "تراکم بتن و جلوگیری از کرمو شدن.",
        "salesTypes": [
          "fast",
          "rental"
        ],
        "salesTypeRaw": "تراکنشی / اجاره‌ای",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "فرکانس لرزش بالا، شیلنگ مقاوم به سایش",
        "trustCriteria": "تامین سریع و تعویض در صورت خرابی موتور"
      },
      {
        "id": "17.8",
        "slug": "myny-lvdr-babkt-17-8",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "مینی لودر (بابکت)",
        "description": "خاک‌برداری چابک در فضاهای تنگ.",
        "salesTypes": [
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای (روزمزد)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "ابعاد کوچک، قدرت مانور بالا",
        "trustCriteria": "چابکی در اعزام به پروژه‌های مختلف"
      },
      {
        "id": "17.9",
        "slug": "frghvn-v-trvly-17-9",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "فرغون و ترولی",
        "description": "جابجایی دستی مصالح در طبقات.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "ورق ضخیم، لاستیک و بلبرینگ روان",
        "trustCriteria": "دوام بالا و قیمت رقابتی"
      },
      {
        "id": "17.10",
        "slug": "malh-prvanh-ay-mvtvry-17-10",
        "categorySlug": "heavy-machinery-transport-concrete",
        "faName": "ماله پروانه‌ای (موتوری)",
        "description": "تسطیح و صیقل دادن سطوح وسیع بتنی کف.",
        "salesTypes": [
          "consultative",
          "rental"
        ],
        "salesTypeRaw": "اجاره‌ای / پیمانکاری",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "تراز کردن بی‌نقص بتن، ماله صیقلی",
        "trustCriteria": "اجرای دقیق در زمان گیرش اولیه بتن (تخصص)"
      }
    ]
  },
  {
    "slug": "hse-safety-equipment",
    "faName": "تجهیزات ایمنی کارگاه و حفاظت فردی (HSE)",
    "intro": "تامین این محصولات پیش‌شرط قانونی آغاز هرگونه عملیات اجرایی است.",
    "subcategories": [
      {
        "id": "18.1",
        "slug": "klah-hay-aymny-hard-ht-18-1",
        "categorySlug": "hse-safety-equipment",
        "faName": "کلاه‌های ایمنی (هارد هت)",
        "description": "محافظت از سر در برابر سقوط مصالح.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "ضربه‌پذیری بالا، سبکی و ارگونومی، یراق داخل راحت",
        "trustCriteria": "ارائه کلاه‌های دارای استاندارد معتبر ایمنی"
      },
      {
        "id": "18.2",
        "slug": "kfsh-v-pvtyn-aymny-18-2",
        "categorySlug": "hse-safety-equipment",
        "faName": "کفش و پوتین ایمنی",
        "description": "پنجه فولادی برای جلوگیری از آسیب پا.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (سایزبندی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "مقاومت پنجه در برابر سقوط وزن، زیره ضدلغزش",
        "trustCriteria": "تامین سایزبندی کامل و تحویل سریع"
      },
      {
        "id": "18.3",
        "slug": "dstksh-hay-aymny-18-3",
        "categorySlug": "hse-safety-equipment",
        "faName": "دستکش‌های ایمنی",
        "description": "ضدبرش برای آرماتوربندی و جوشکاری.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "مقاومت در برابر پارگی و سایش، حفظ حس لامسه",
        "trustCriteria": "قیمت اقتصادی در خرید عمده"
      },
      {
        "id": "18.4",
        "slug": "kmrbnd-aymny-harns-18-4",
        "categorySlug": "hse-safety-equipment",
        "faName": "کمربند ایمنی (هارنس)",
        "description": "تجهیزات توقف سقوط در کار در ارتفاع.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (استاندارد)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing"
          ]
        },
        "builderValues": "تحمل وزن بالا، لنیارد شوک‌دار استاندارد",
        "trustCriteria": "ارائه گواهی استاندارد EN برای تجهیزات کار در ارتفاع"
      },
      {
        "id": "18.5",
        "slug": "aynk-aymny-v-shyld-svrt-18-5",
        "categorySlug": "hse-safety-equipment",
        "faName": "عینک ایمنی و شیلد صورت",
        "description": "محافظ چشم حین جوشکاری و فرزکاری.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "ضدبخار بودن، مقاومت لنز در برابر برخورد پلیسه",
        "trustCriteria": "کیفیت طلق و عدم ایجاد خطای دید"
      },
      {
        "id": "18.6",
        "slug": "mask-hay-tnfsy-fyltrdar-18-6",
        "categorySlug": "hse-safety-equipment",
        "faName": "ماسک‌های تنفسی (فیلتردار)",
        "description": "جلوگیری از استنشاق ذرات سیمان و رنگ.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "سریع و تراکنشی",
        "stageTiming": {
          "negotiate": [
            "early-finishing"
          ],
          "buy": [
            "early-finishing"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "فیلتراسیون قوی (N95 به بالا)، سوپاپ تخلیه هوا",
        "trustCriteria": "تامین مستمر مواد مصرفی و فیلترها"
      },
      {
        "id": "18.7",
        "slug": "lbas-kar-v-jlyghh-shbrng-18-7",
        "categorySlug": "hse-safety-equipment",
        "faName": "لباس کار و جلیقه شبرنگ",
        "description": "شناسایی پرسنل و جلوگیری از حوادث.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "پارچه مقاوم، دوخت قوی، شبرنگ‌های باکیفیت",
        "trustCriteria": "امکان چاپ لوگوی کارفرما، تحویل سریع"
      },
      {
        "id": "18.8",
        "slug": "nvar-khtr-v-mkhrvt-trafyky-18-8",
        "categorySlug": "hse-safety-equipment",
        "faName": "نوار خطر و مخروط ترافیکی",
        "description": "محصورسازی محیط و هشدار.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "رنگ‌های هشداردهنده (High-Vis)، مقاومت به UV",
        "trustCriteria": "موجودی کامل تجهیزات ترافیکی"
      },
      {
        "id": "18.9",
        "slug": "jabh-kmk-hay-avlyh-18-9",
        "categorySlug": "hse-safety-equipment",
        "faName": "جعبه کمک‌های اولیه",
        "description": "رسیدگی فوری به مصدومیت‌های حین کار.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی (دارویی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "کامل بودن اقلام دارویی، تاریخ انقضای معتبر",
        "trustCriteria": "خدمات شارژ دوره‌ای کیف امداد"
      },
      {
        "id": "18.10",
        "slug": "tvry-aymny-v-hfaz-lbh-18-10",
        "categorySlug": "hse-safety-equipment",
        "faName": "توری ایمنی و حفاظ لبه",
        "description": "شبکه‌های توری جلوگیری از سقوط مصالح.",
        "salesTypes": [
          "fast"
        ],
        "salesTypeRaw": "تراکنشی",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "مقاومت کششی بالا، دوام در برابر آفتاب",
        "trustCriteria": "ارائه مشاوره‌های ایمنی کارگاه"
      }
    ]
  },
  {
    "slug": "engineering-and-consulting",
    "faName": "خدمات حقوقی، بیمه، مطالعات پایه و طراحی (فاز صفر و یک)",
    "intro": "این بخش، فاز نرم‌افزاری، حقوقی و دانشی پروژه است. استفاده از متخصصین برای رعایت مباحث نظام مهندسی، اخذ مجوزات و کنترل ریسک‌های مالی و جانی در این بخش الزامی است.",
    "subcategories": [
      {
        "id": "19.1",
        "slug": "trahy-mamary-faz-1-v-2-19-1",
        "categorySlug": "engineering-and-consulting",
        "faName": "طراحی معماری (فاز ۱ و ۲)",
        "description": "تهیه پلان‌ها، مقاطع و جزئیات اجرایی منطبق بر ضوابط شهرداری.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (قراردادی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction"
          ]
        },
        "builderValues": "بهره‌وری فضا، زیبایی نما، تاییدیه شهرداری",
        "trustCriteria": "سابقه کار (رزومه قوی)، خلاقیت و آشنایی با ضوابط"
      },
      {
        "id": "19.2",
        "slug": "mhasbat-v-trahy-sazh-19-2",
        "categorySlug": "engineering-and-consulting",
        "faName": "محاسبات و طراحی سازه",
        "description": "طراحی ابعاد فونداسیون، ستون‌ها و مقاومت لرزه‌ای.",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (نرم‌افزاری)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction"
          ]
        },
        "builderValues": "ایمنی سازه، بهینه‌سازی اقتصادی آهن‌آلات",
        "trustCriteria": "تخصص نظام مهندسی، تسلط بر استاندارد 2800 26"
      },
      {
        "id": "19.3",
        "slug": "trahy-tasysat-mkanyk-brgh-19-3",
        "categorySlug": "engineering-and-consulting",
        "faName": "طراحی تاسیسات (مکانیک/برق)",
        "description": "سایزینگ لوله‌ها، بار حرارتی و مدارات الکتریکی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction"
          ]
        },
        "builderValues": "کاهش مصرف انرژی (مبحث ۱۹)، داکت‌گذاری دقیق",
        "trustCriteria": "توجه به یادگیری و استانداردهای روز"
      },
      {
        "id": "19.4",
        "slug": "mtalaat-zhyvtknyk-mkanyk-khak-19-4",
        "categorySlug": "engineering-and-consulting",
        "faName": "مطالعات ژئوتکنیک (مکانیک خاک)",
        "description": "گمانه‌زنی و تعیین تیپ خاک (الزامی برای ساختمان‌های خاص).",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (آزمایشگاهی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "دقت آزمایشات برش خاک، گزارش تاییدشده",
        "trustCriteria": "داشتن تجهیزات حفاری و آزمایشگاه معتبر"
      },
      {
        "id": "19.5",
        "slug": "khdmat-nghshh-brdary-tvpvgrafy-19-5",
        "categorySlug": "engineering-and-consulting",
        "faName": "خدمات نقشه‌برداری (توپوگرافی)",
        "description": "تعیین دقیق مرز زمین و پیاده‌سازی آکس ستون‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "خدمات تخصصی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "دقت میلی‌متری دوربین (توتال استیشن)، جلوگیری از تجاوز به حریم",
        "trustCriteria": "مسئولیت‌پذیری و دقت بالای تیم مهندسی"
      },
      {
        "id": "19.6",
        "slug": "khdmat-adary-shhrdary-v-akhz-prvanh-19-6",
        "categorySlug": "engineering-and-consulting",
        "faName": "خدمات اداری، شهرداری و اخذ پروانه",
        "description": "تشکیل پرونده، پرداخت عوارض و اخذ جواز ساخت.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای و کارگزاری",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction"
          ]
        },
        "builderValues": "تسریع در فرآیند بوروکراسی، کاهش قانونی عوارض",
        "trustCriteria": "نفوذ و شناخت فرآیندهای شهرداری، شفافیت مالی"
      },
      {
        "id": "19.7",
        "slug": "sdvr-bymh-msyvlyt-mdny-mhndsy-19-7",
        "categorySlug": "engineering-and-consulting",
        "faName": "صدور بیمه مسئولیت مدنی مهندسی",
        "description": "بیمه جبران خسارت جانی کارگران و اشخاص ثالث.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (صدور بیمه‌نامه)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "پوشش کامل کلوزها (بدون رای دادگاه)، سقف تعهدات بالا",
        "trustCriteria": "مشاوره دلسوزانه در انتخاب کلوزهای بیمه، پاسخگویی در پرداخت خسارت"
      },
      {
        "id": "19.8",
        "slug": "bymh-tmam-khtr-pymankaran-19-8",
        "categorySlug": "engineering-and-consulting",
        "faName": "بیمه تمام خطر پیمانکاران",
        "description": "پوشش خسارات وارده به سازه ناشی از حوادث قهری.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (ارزیابی ریسک)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "پوشش بلایای طبیعی، آتش‌سوزی و سرقت مصالح",
        "trustCriteria": "شرکت بیمه معتبر، شفافیت در قرارداد"
      },
      {
        "id": "19.9",
        "slug": "trahy-dkvrasyvn-v-rndryng-3-bady-19-9",
        "categorySlug": "engineering-and-consulting",
        "faName": "طراحی دکوراسیون و رندرینگ ۳ بعدی",
        "description": "چیدمان فضایی و متریال‌بُرد نازک‌کاری.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (هنری)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "خلق فضای لوکس، اجرایی بودن طرح (نه فقط رویایی)",
        "trustCriteria": "ارائه خروجی باکیفیت و رزومه اجرایی"
      },
      {
        "id": "19.10",
        "slug": "khdmat-dftr-fny-mtrh-v-bravrd-19-10",
        "categorySlug": "engineering-and-consulting",
        "faName": "خدمات دفتر فنی (متره و برآورد)",
        "description": "استخراج احجام کاری بر اساس فهارس بها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction"
          ]
        },
        "builderValues": "دقت در استخراج لیست مقادیر (BOQ)، کاهش پرت مصالح",
        "trustCriteria": "تسلط بر نرم‌افزارهای متره و فهرست بها"
      }
    ]
  },
  {
    "slug": "contracting-and-execution",
    "faName": "خدمات نظارت، مدیریت طرح و اکیپ‌های پیمانکاری ساخت",
    "intro": "نیروی انسانی ماهر و مهندسین ناظری که بر اساس مقررات ملی ساختمان اجرای پروژه را کنترل یا هدایت می‌کنند.",
    "subcategories": [
      {
        "id": "20.1",
        "slug": "khdmat-mhnds-nazr-chhar-graysh-20-1",
        "categorySlug": "contracting-and-execution",
        "faName": "خدمات مهندس ناظر (چهار گرایش)",
        "description": "کنترل تطابق اجرا با نقشه‌ها (تک ناظر یا ناظر هماهنگ‌کننده).",
        "salesTypes": [
          "consultative",
          "engineering"
        ],
        "salesTypeRaw": "مشاوره‌ای (ارجاع نظام مهندسی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "تایید مراحل ساخت، جلوگیری از تخلفات، راهنمایی فنی",
        "trustCriteria": "حضور مستمر در کارگاه، تعامل حرفه‌ای و دلسوزانه"
      },
      {
        "id": "20.2",
        "slug": "khdmat-mjry-zyslah-pyman-mdyryt-20-2",
        "categorySlug": "contracting-and-execution",
        "faName": "خدمات مجری ذیصلاح (پیمان مدیریت)",
        "description": "مدیریت فنی و اجرایی کل کارگاه ساختمانی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (درصدی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "pre-construction"
          ],
          "execute": [
            "pre-construction",
            "demolition",
            "foundation",
            "structure",
            "wall-building",
            "plaster",
            "early-finishing",
            "finishing",
            "completion"
          ]
        },
        "builderValues": "کنترل هزینه و زمان، کیفیت بالای اجرا، ایمنی کارگاه",
        "trustCriteria": "توان مدیریتی بالا، حسن سابقه در کارهای قبلی، پروانه معتبر"
      },
      {
        "id": "20.3",
        "slug": "azmayshgah-hay-kntrl-kyfyt-btn-jvsh-20-3",
        "categorySlug": "contracting-and-execution",
        "faName": "آزمایشگاه‌های کنترل کیفیت (بتن/جوش)",
        "description": "اخذ نمونه بتن تازه و تست آلتراسونیک جوش.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "مشاوره‌ای (تست محور)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure",
            "wall-building"
          ]
        },
        "builderValues": "صحت نتایج، صدور سریع شیت آزمایشگاهی",
        "trustCriteria": "تجهیزات کالیبره، پرسنل آموزش‌دیده"
      },
      {
        "id": "20.4",
        "slug": "pymankary-tkhryb-v-khak-brdary-20-4",
        "categorySlug": "contracting-and-execution",
        "faName": "پیمانکاری تخریب و خاک‌برداری",
        "description": "تخریب اصولی و حمل نخاله.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (حجمی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "سرعت عمل، عدم آسیب به پلاک‌های مجاور",
        "trustCriteria": "داشتن ماشین‌آلات کافی، تعهد به اصول HSE"
      },
      {
        "id": "20.5",
        "slug": "ajray-sazh-nghban-v-paydarsazy-gvd-20-5",
        "categorySlug": "contracting-and-execution",
        "faName": "اجرای سازه نگهبان و پایدارسازی گود",
        "description": "اجرای نیلینگ، خرپا و استرات برای حفظ پلاک مجاور.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری تخصصی",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "demolition"
          ]
        },
        "builderValues": "ایمنی مطلق گود، اجرای صحیح تزریق سیمان",
        "trustCriteria": "تیم تخصصی ژئوتکنیک، رزومه موفق پروژه‌های عمیق"
      },
      {
        "id": "20.6",
        "slug": "pymankary-armatvrbndy-v-ghalb-bndy-20-6",
        "categorySlug": "contracting-and-execution",
        "faName": "پیمانکاری آرماتوربندی و قالب‌بندی",
        "description": "اکیپ‌های اجرای اسکلت بتنی.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (دستمزدی)",
        "stageTiming": {
          "negotiate": [
            "demolition"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "رعایت اورلپ و کاور بتن، قالب‌بندی محکم و تراز",
        "trustCriteria": "نیروی کار ماهر، ابزارآلات کافی، تعهد به زمان‌بندی"
      },
      {
        "id": "20.7",
        "slug": "pymankary-sakht-v-nsb-asklt-flzy-20-7",
        "categorySlug": "contracting-and-execution",
        "faName": "پیمانکاری ساخت و نصب اسکلت فلزی",
        "description": "جوشکاری در کارخانه و پیچ‌ومهره در سایت.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (تناژی)",
        "stageTiming": {
          "negotiate": [
            "pre-construction"
          ],
          "buy": [
            "demolition"
          ],
          "execute": [
            "foundation",
            "structure"
          ]
        },
        "builderValues": "دقت جوش نفوذی، مونتاژ سریع، شاغول بودن",
        "trustCriteria": "کارخانه مجهز (سیستم کنترل کیفیت)، اکیپ نصب حرفه‌ای"
      },
      {
        "id": "20.8",
        "slug": "akyp-hay-sft-kary-v-bnayy-20-8",
        "categorySlug": "contracting-and-execution",
        "faName": "اکیپ‌های سفت‌کاری و بنایی",
        "description": "آجرچینی دیوارهای پیرامونی و تیغه‌ها.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (متری)",
        "stageTiming": {
          "negotiate": [
            "foundation",
            "structure"
          ],
          "buy": [
            "foundation",
            "structure"
          ],
          "execute": [
            "wall-building"
          ]
        },
        "builderValues": "دیوارهای تراز، رعایت هشت‌گیر و وال‌پست",
        "trustCriteria": "سرعت اجرا، رضایت کارفرمایان قبلی"
      },
      {
        "id": "20.9",
        "slug": "akyp-hay-tasysat-mep-20-9",
        "categorySlug": "contracting-and-execution",
        "faName": "اکیپ‌های تاسیسات (MEP)",
        "description": "اجرای زیرساخت‌های لوله‌کشی و داکت‌گذاری.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (آیتمی)",
        "stageTiming": {
          "negotiate": [
            "wall-building"
          ],
          "buy": [
            "wall-building"
          ],
          "execute": [
            "plaster"
          ]
        },
        "builderValues": "اجرای آب‌بند، شیب‌بندی صحیح فاضلاب، لوله‌کشی تمیز",
        "trustCriteria": "تخصص فنی بالا، تضمین عدم نشتی و گارانتی اجرا"
      },
      {
        "id": "20.10",
        "slug": "akyp-hay-nazk-kary-kashy-gch-nghashy-20-10",
        "categorySlug": "contracting-and-execution",
        "faName": "اکیپ‌های نازک‌کاری (کاشی، گچ، نقاشی)",
        "description": "نصب پوشش‌های نهایی کف، دیوار و سقف.",
        "salesTypes": [
          "consultative"
        ],
        "salesTypeRaw": "پیمانکاری (متری)",
        "stageTiming": {
          "negotiate": [
            "plaster"
          ],
          "buy": [
            "plaster"
          ],
          "execute": [
            "finishing"
          ]
        },
        "builderValues": "ظرافت در اجرا، بندکشی دقیق، سطح صاف و یکدست",
        "trustCriteria": "مهارت استادکاران، امانت‌داری در مصرف مصالح"
      }
    ]
  }
];

export const TAXONOMY_SUBCATEGORIES = TAXONOMY_CATEGORIES.flatMap(
  (category) => category.subcategories,
);

export const TAXONOMY_STAGE_RECONCILIATION = [
  { sourcePhase: "پیش از اخذ جواز", stageSlugs: ["pre-construction"] },
  { sourcePhase: "تخریب و گودبرداری", stageSlugs: ["demolition"] },
  { sourcePhase: "فونداسیون", stageSlugs: ["foundation"] },
  { sourcePhase: "اسکلت بندی", stageSlugs: ["structure"] },
  { sourcePhase: "دیوارچینی و سفت کاری", stageSlugs: ["wall-building"] },
  { sourcePhase: "گچ و خاک و تاسیسات", stageSlugs: ["plaster"] },
  { sourcePhase: "ابتدای نازک کاری", stageSlugs: ["early-finishing"] },
  { sourcePhase: "نازک کاری و نما", stageSlugs: ["finishing"] },
  { sourcePhase: "ظریف کاری و پایان کار", stageSlugs: ["completion"] },
] as const;

export const TAXONOMY_CATEGORY_RECONCILIATION = [
  { oldSlug: "cement-and-basic-materials", newSlug: "building-materials" },
  { oldSlug: "steel-metals", newSlug: "steel-and-metals" },
  { oldSlug: "mechanical-electrical", newSlug: "mechanical-piping" },
  { oldSlug: "doors-windows", newSlug: "doors-windows-and-facade" },
  { oldSlug: "doors-windows-facade", newSlug: "doors-windows-and-facade" },
  { oldSlug: "interior-finishing", newSlug: "interior-and-exterior-finishes" },
  { oldSlug: "interior-exterior-coatings", newSlug: "interior-and-exterior-finishes" },
  { oldSlug: "machinery-equipment", newSlug: "heavy-machinery-transport-concrete" },
  { oldSlug: "safety-security", newSlug: "hse-safety-equipment" },
  { oldSlug: "smart-building", newSlug: "smart-building-and-safety-systems" },
  { oldSlug: "elevator", newSlug: "vertical-transportation" },
  { oldSlug: "elevators-escalators", newSlug: "vertical-transportation" },
  { oldSlug: "engineering-consulting", newSlug: "engineering-and-consulting" },
  { oldSlug: "contracting-services", newSlug: "contracting-and-execution" },
  { oldSlug: "facade", newSlug: "doors-windows-and-facade" },
  { oldSlug: "business-services", newSlug: "engineering-and-consulting" },
  { oldSlug: "general-support", newSlug: "contracting-and-execution" },
  { oldSlug: "after-sales-maintenance", newSlug: "contracting-and-execution" },
  { oldSlug: "landscape", newSlug: "contracting-and-execution" },
  { oldSlug: "interior-decoration", newSlug: "kitchen-and-millwork" },
] as const;
