import type { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    "id": 1,
    "faTitle": "خدمات مهندسی و مشاوره",
    "slug": "engineering-and-consulting",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1001,
        "faTitle": "طراحی معماری و شهرسازی",
        "slug": "c-1001",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction",
          "demolition"
        ],
        "strategicAdvice": "عامل کلیدی: رزومه و سبک کاری معمار، خلاقیت، درک نیاز کارفرما و بازار هدف پروژه. توصیه استراتژیک: روی ارزش‌آفرینی از طریق طراحی بهینه (که منجر به فروش بهتر واحدها می‌شود) تمرکز کنید. ارائه رندرهای باکیفیت برگ برنده شماست."
      },
      {
        "id": 1002,
        "faTitle": "طراحی و محاسبات سازه",
        "slug": "c-1002",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "foundation",
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: بهینه‌سازی مصرف فولاد/بتن، دقت در نقشه‌ها، تعهد به آیین‌نامه‌ها (مخصوصا ۲۸۰۰). توصیه استراتژیک: نشان دهید که طرح شما چگونه هزینه‌های ساخت را بدون کاهش ایمنی، کاهش می‌دهد. ارائه نقشه‌های دقیق و بدون نقص (Shop Drawing) مزیت رقابتی است."
      },
      {
        "id": 1003,
        "faTitle": "مقاوم‌سازی و بهسازی لرزه‌ای (طراحی)",
        "slug": "c-1003",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تخصص فنی بالا، گواهینامه‌های رسمی، سابقه کار در پروژه‌های مشابه. توصیه استراتژیک: ارائه تحلیل دقیق هزینه-فایده به سازنده تفاوت بین بازسازی سنتی و بهسازی علمی را مشخص می‌کند."
      },
      {
        "id": 1004,
        "faTitle": "طراحی تاسیسات مکانیکی",
        "slug": "c-1004",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "structure",
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: بهینه‌سازی مصرف انرژی، تاییدیه سازمان نظام مهندسی، هماهنگی با طرح معماری و سازه. توصیه استراتژیک: ارائه مدل‌های شبیه‌سازی مصرف انرژی و جانمایی سه بعدی رایزرها جهت جلوگیری از تداخل کارگاهی."
      },
      {
        "id": 1005,
        "faTitle": "طراحی تاسیسات الکتریکی",
        "slug": "c-1005",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "structure",
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: انطباق با مبحث ۱۳ مقررات ملی، طراحی مدرن سیستم‌های روشنایی و جریان ضعیف. توصیه استراتژیک: پیش‌بینی مسیر کابل‌کشی‌های شبکه، زیرساخت خودروهای برقی و سیستم هوشمند از ابتدا جذابیت فروش بالایی دارد."
      },
      {
        "id": 1006,
        "faTitle": "طراحی نما",
        "slug": "c-1006",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "wall-building",
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: خلاقیت بصری، تاییدیه کمیته نمای شهرداری، انطباق با بودجه سازنده. توصیه استراتژیک: ارائه هم‌زمان نقشه‌های فاز ۲ نما و دیتیل‌های اتصالات شاسی‌کشی جهت تسهیل کار سفت‌کاری کارگاه."
      },
      {
        "id": 1007,
        "faTitle": "نقشه‌برداری (زمینی و هوایی)",
        "slug": "c-1007",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction",
          "foundation"
        ],
        "buyStages": [
          "pre-construction",
          "foundation"
        ],
        "executionStages": [
          "pre-construction",
          "foundation"
        ],
        "strategicAdvice": "عامل کلیدی: دقت تجهیزات (توتال استیشن، پهپاد)، سرعت تحویل فایل، سوابق تایید ثبتی. توصیه استراتژیک: پیاده‌سازی دقیق آکس‌ها و ستون‌ها و ارائه کدهای ارتفاعی دقیق جهت ممانعت از جریمه‌های شهرداری."
      },
      {
        "id": 1008,
        "faTitle": "مدیریت پیمان و ساخت (MC)",
        "slug": "c-1008",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction",
          "demolition"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: شفافیت مالی، تعهد به زمان‌بندی، داشتن دسترسی به اکیپ‌های اجرایی مجرب. توصیه استراتژیک: ارائه برنامه‌های زمان‌بندی دقیق ساخت در قالب نرم‌افزارهای کنترل پروژه (MSP/Primavera) به عنوان ویترین توانمندی شماست."
      },
      {
        "id": 1009,
        "faTitle": "نظارت (عالیه و کارگاهی)",
        "slug": "c-1009",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction",
          "demolition"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: حضور مستمر، تسلط بر ضوابط قانونی، رویکرد حل مسئله به جای مچ‌گیری کارگاهی. توصیه استراتژیک: ایجاد حس امنیت حقوقی برای سازنده و ارائه گزارش‌های ادواری منظم کلید وفاداری مشتری است."
      },
      {
        "id": 1010,
        "faTitle": "کنترل و مدیریت پروژه",
        "slug": "c-1010",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تسلط بر روش‌های آنالیز تأخیرات، مدیریت هزینه و ریسک. توصیه استراتژیک: نشان دادن قابلیت جلوگیری از انحراف شدید بودجه و مصالح با تکیه بر گزارش‌های ارزش کسب شده (EV)."
      },
      {
        "id": 1011,
        "faTitle": "خدمات آزمایشگاهی (بتن، جوش)",
        "slug": "c-1011",
        "parentId": 1,
        "saleType": "both",
        "negotiationStages": [
          "foundation"
        ],
        "buyStages": [
          "foundation"
        ],
        "executionStages": [
          "foundation",
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: داشتن مجوزهای رسمی مرکز تحقیقات مسکن، سرعت در ارسال نتایج ۷ و ۲۸ روزه جک بتن. توصیه استراتژیک: ارائه خدمات نمونه‌گیری سیار دقیق در محل پروژه و ارائه مشاوره‌های فنی در صورت بروز ضعف در نتایج آزمایش."
      },
      {
        "id": 1012,
        "faTitle": "متره و برآورد",
        "slug": "c-1012",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: دقت بالابردن تلورانس برآورد، تسلط بر فهرست بها و قیمت‌های زنده بازار مصالح. توصیه استراتژیک: ارائه پکیج‌های مهندسی ارزش جهت جایگزینی متریال گران‌قیمت با گزینه‌های بهینه‌تر بدون کاهش کیفیت."
      },
      {
        "id": 1013,
        "faTitle": "خدمات مشاوره (حقوقی، سرمایه‌گذاری)",
        "slug": "c-1013",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تخصص در تنظیم قراردادهای مشارکت در ساخت، کاهش دعاوی شهرداری و اداره کار. توصیه استراتژیک: ارائه مدل‌های امکان‌سنجی مالی (Feasibility Study) دقیق برای جذب سرمایه‌گذاران ملکی بلندمدت."
      },
      {
        "id": 1151,
        "faTitle": "مدل‌سازی اطلاعات ساختمان (BIM) و اسکن سه بعدی",
        "slug": "c-1151",
        "parentId": 1,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: رفع کلش‌ها (Clash Detection) قبل از اجرا، کاهش تا ۱۰ درصد از هزینه‌های مصالح مصرفی، خروجی‌های دقیق سه بعدی. توصیه استراتژیک: فروش این خدمت به سازندگان بزرگ مناطق ۱ تا ۳ تهران، خستگی تصمیم‌گیری را مهار کرده و از دوبارکاری‌های پرهزینه تأسیساتی جلوگیری می‌کند."
      }
    ]
  },
  {
    "id": 2,
    "faTitle": "خدمات و تجهیزات فناوری اطلاعات و نرم‌افزار (IT)",
    "slug": "it-and-software",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1014,
        "faTitle": "نرم‌افزارهای تخصصی و BMS",
        "slug": "c-1014",
        "parentId": 2,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing",
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: پایداری نرم‌افزار، رابط کاربری آسان، قابلیت توسعه سیستم، گارانتی قطعات. توصیه استراتژیک: در فروش سیستم‌های هوشمند، سخت‌افزار را نفروشید؛ تجربه کاربری مرفه و سناریوهای کاهنده مصرف انرژی را در شو‌روم دمو کنید."
      },
      {
        "id": 1015,
        "faTitle": "سخت‌افزار و زیرساخت شبکه",
        "slug": "c-1015",
        "parentId": 2,
        "saleType": "consultative",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: کیفیت پسیو شبکه (کابل، رک)، پایداری پهنای باند، خدمات پشتیبانی فنی. توصیه استراتژیک: طراحی یکپارچه کابل‌کشی‌های شبکه با در نظر گرفتن سناریوهای توسعه آتی دوربین‌ها و BMS."
      },
      {
        "id": 1016,
        "faTitle": "سیستم‌های کنترل تردد و هویت",
        "slug": "c-1016",
        "parentId": 2,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: نرخ خطای پایین، امنیت سنسورهای بیومتریک، سرعت پردازش، یکپارچگی با جک پارکینگ. توصیه استراتژیک: تمرکز بر قابلیت اتصال به آیفون تصویری و کنترل از راه دور موبایلی مالکان واحدها."
      },
      {
        "id": 1017,
        "faTitle": "خدمات دیجیتال و وب",
        "slug": "c-1017",
        "parentId": 2,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: خلاقیت در تیزر مارکتینگ، تورهای مجازی سه بعدی، سئو وب‌سایت پروژه. توصیه استراتژیک: ایجاد یک پلتفرم اختصاصی پیش‌فروش آنلاین برای سازنده، ارزش افزوده تجاری فوق‌العاده‌ای ایجاد می‌کند."
      }
    ]
  },
  {
    "id": 3,
    "faTitle": "خدمات کسب‌وکار و مشاوره",
    "slug": "business-services-and-consulting",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1018,
        "faTitle": "بازاریابی، رویداد و رسانه",
        "slug": "c-1018",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: ارتباط قوی با آژانس‌های املاک لوکس منطقه، قدرت برندینگ دیجیتال. توصیه استراتژیک: برگزاری رویدادهای افتتاحیه مجلل (Private Viewing) برای خریداران VIP و ساخت مستند فرآیند ساخت (Storytelling)."
      },
      {
        "id": 1019,
        "faTitle": "خدمات مالی و اداری",
        "slug": "c-1019",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تسلط بر قوانین مالیاتی جدید ساخت‌وساز، سامانه مؤدیان و بیمه تأمین اجتماعی کارگران. توصیه استراتژیک: استقرار سیستم‌های بهینه‌سازی جریان نقدینگی کارگاه جهت ممانعت از خواب سرمایه."
      },
      {
        "id": 1020,
        "faTitle": "خدمات پس از فروش",
        "slug": "c-1020",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: سرعت پاسخگویی، اکیپ‌های رفع عیب سیار، تعهد به گارانتی مکتوب قطعات ساختمان. توصیه استراتژیک: ارائه شناسنامه فنی واحدها و دفترچه راهنمای نگهداری تأسیسات به خریداران جدید به عنوان ابزار وفادارسازی برند سازنده."
      },
      {
        "id": 1021,
        "faTitle": "تحقیق و توسعه",
        "slug": "c-1021",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: اعتبار داده‌های آماری، پیش‌بینی روندهای آتی بازار مسکن و تقاضای منطقه‌ای. توصیه استراتژیک: ارائه گزارش‌های دقیق مکان‌یابی سرمایه‌گذاری متناسب با تغییرات نرخ ارز و کشش بازار خرید متقاضیان."
      },
      {
        "id": 1145,
        "faTitle": "خدمات بیمه ساختمانی (مسئولیت، عیوب پنهان، آتش‌سوزی)",
        "slug": "c-1145",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction",
          "demolition"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction",
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: پوشش کامل کلوزهای بیمه‌ای (جانی و مالی)، سقف تعهدات، سرعت در پرداخت خسارت، تخفیف‌های گروهی. توصیه استراتژیک: بیمه مسئولیت مدنی کارفرما در قبال کارکنان و اشخاص ثالث باید پیش از اولین فرغون خاک‌برداری فعال باشد. بیمه تضمین کیفیت (عیوب پنهان ۱۰ ساله) نیز برای پروژه‌های لوکس به عنوان آپشن فروش واحدها پرزنت شود."
      },
      {
        "id": 1146,
        "faTitle": "تأمین مالی، گشایش LC و خطوط اعتباری ملکی",
        "slug": "c-1146",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: نرخ سود تسهیلات، مدت زمان تنفس، وثایق ملکی قابل قبول، توان گشایش اعتبار اسنادی (LC) ریالی برای خرید مصالح عمده. توصیه استراتژیک: ارائه پکیج‌های مشترک با کارخانجات فولاد و بتن جهت تأمین اعتباری متریال فاز اسکلت، دغدغه نقدینگی سازنده را حل کرده و قرارداد را قفل می‌کند."
      },
      {
        "id": 1147,
        "faTitle": "خدمات داوری تخصصی، حقوقی و حل اختلاف مشارکت",
        "slug": "c-1147",
        "parentId": 3,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تسلط بر قوانین پیش‌فروش، کمیسیون ماده ۱۰۰، ضوابط شهرداری تهران و داوری ملکی. توصیه استراتژیک: استقرار دپارتمان حقوقی ثالث برای ممانعت از توقف پروژه در اثر اختلافات مالکین زمین و سازنده، ریسک سرمایه‌گذاری را به شدت کاهش می‌دهد."
      }
    ]
  },
  {
    "id": 4,
    "faTitle": "خدمات عمومی و پشتیبانی",
    "slug": "general-services-and-support",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1022,
        "faTitle": "خرید و فروش سوخت و ضایعات",
        "slug": "c-1022",
        "parentId": 4,
        "saleType": "fast",
        "negotiationStages": [
          "demolition",
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: قیمت منصفانه خرید ضایعات فلزی کارگاه، سرعت تأمین گازوئیل ماشین‌آلات سنگین خاک‌برداری. توصیه استراتژیک: ایجاد کانال‌های لجستیکی مطمئن و شبانه‌روزی متناسب با محدودیت‌های ترافیکی شهری تهران."
      },
      {
        "id": 1023,
        "faTitle": "خدمات نظافتی و نگهداری",
        "slug": "c-1023",
        "parentId": 4,
        "saleType": "both",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: عدم استفاده از اسیدهای آسیب‌رسان به شیرآلات لوکس، تمیزی کامل رد گچ و سیمان از سرامیک‌ها. توصیه استراتژیک: ارائه قراردادهای سالانه نظافت نما و نگهداری فضای سبز لابی به هیئت‌مدیره مجتمع."
      },
      {
        "id": 1024,
        "faTitle": "خدمات هنری و دکوراتیو",
        "slug": "c-1024",
        "parentId": 4,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: خلاقیت، منحصربه‌فرد بودن اثر، همخوانی با روح اثر معماری. توصیه استراتژیک: اجرای پتینه‌کاری‌های مدرن، مجسمه‌های سفارشی یا گچ‌بری‌های دستی لوکس در مشاعات و لابی اصلی پروژه."
      },
      {
        "id": 1025,
        "faTitle": "خدمات نصب و اجرا",
        "slug": "c-1025",
        "parentId": 4,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: گواهی‌نامه‌های فنی اکیپ، ابزارآلات تمیز و کالیبره، سرعت بالای نصب و رگلاژ. توصیه استراتژیک: ارائه‌ خدمات نصب مجرب به عنوان اکیپ رسمی مورد تأیید کارخانجات مطرح و برندهای معتبر بازار."
      },
      {
        "id": 1026,
        "faTitle": "خدمات عمومی (غیر ساختمانی)",
        "slug": "c-1026",
        "parentId": 4,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: انعطاف‌پذیری کاربری، سرعت پاسخگویی به درخواست‌های تدارکاتی کارگاه. توصیه استراتژیک: تمرکز بر تأمین سریع اقلام رفاهی، حمل‌ونقل و اسکان کارگری در فازهای پرفشار ساخت."
      },
      {
        "id": 1027,
        "faTitle": "ساخت و تولید سفارشی",
        "slug": "c-1027",
        "parentId": 4,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: انطباق میلی‌متری با نقشه‌های مهندسی، کیفیت جوش و رنگ‌پاشی الکترواستاتیک. توصیه استراتژیک: ساخت کارهای دکوراتیو تلفیقی چوب و آهن برای لابی‌ها و سازه‌های خاص محوطه."
      },
      {
        "id": 1148,
        "faTitle": "تأمین انشعابات قانونی (آب، برق، گاز، فاضلاب)",
        "slug": "c-1148",
        "parentId": 4,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction",
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پیگیری بوروکراسی اداری ارگان‌ها، دیماند برق مورد نیاز (مخصوصاً برای چیلرها و تاورکرین)، سایز انشعاب آب کارگاهی. توصیه استراتژیک: تأخیر در دریافت برق سه‌فاز کارگاهی یا دایم، کل فرآیند تست تجهیزات مکانیکی و آسانسور را قفل می‌کند؛ پیمانکاران این حوزه باید از فاز سفت‌کاری پرونده را نهایی کنند."
      },
      {
        "id": 1149,
        "faTitle": "خدمات آزمایش‌های خاص (ام‌آرآی بتن، اسکن آرماتور)",
        "slug": "c-1149",
        "parentId": 4,
        "saleType": "both",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "structure",
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: دقت دستگاه‌های التراسونیک و رادار، تاییدیه‌های معتبر نظام مهندسی، رویکرد ارائه راهکار ترمیمی به جای بن‌بست حقوقی. توصیه استراتژیک: در صورت ضعف بتن ستون‌ها در آزمایش‌های روتین، این خدمات به عنوان فرشته نجات سازنده جهت ممانعت از تخریب سازه عمل می‌کنند."
      }
    ]
  },
  {
    "id": 5,
    "faTitle": "پیمانکاری و خدمات اجرایی",
    "slug": "contracting-and-execution",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1028,
        "faTitle": "تخریب و گودبرداری",
        "slug": "c-1028",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "demolition"
        ],
        "strategicAdvice": "عامل کلیدی: داشتن ماشین‌آلات نوساز (بیل، لودر)، مجوزهای رسمی شهرداری و سازمان پسماند، بیمه مسئولیت مدنی قوی. توصیه استراتژیک: ارائه متدهای تخریب دستی کنترل‌شده برای پلاک‌های کلنگی همجوار جهت ممانعت از ریزش ساختمان همسایه."
      },
      {
        "id": 1029,
        "faTitle": "نیلینگ و پایدارسازی گود",
        "slug": "c-1029",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "demolition"
        ],
        "executionStages": [
          "demolition"
        ],
        "strategicAdvice": "عامل کلیدی: رزومه قوی در گودهای عمیق، تأییدیه‌های مهندسی ژئوتکنیک، ابزار پایش آنلاین تغییرشکل دیواره‌ها. توصیه استراتژیک: ارزیابی ریسک‌های پایداری و ارائه طرح‌های بهینه حفاری که هزینه انکراژ را کاهش دهد."
      },
      {
        "id": 1030,
        "faTitle": "اجرای فونداسیون",
        "slug": "c-1030",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "demolition"
        ],
        "buyStages": [
          "demolition"
        ],
        "executionStages": [
          "foundation"
        ],
        "strategicAdvice": "عامل کلیدی: سرعت بالای بستن آرماتورها، تراز دقیق صفحات بیس‌پلیت، قالب‌بندی بدون شکم‌دادگی. توصیه استراتژیک: تمرکز بر اجرای هم‌زمان عایق‌کاری‌های رطوبتی پیشرفته (جی‌سی‌ال یا ممبران) زیر فونداسیون در گودهای مرطوب."
      },
      {
        "id": 1031,
        "faTitle": "اجرای اسکلت بتنی",
        "slug": "c-1031",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "foundation"
        ],
        "buyStages": [
          "foundation"
        ],
        "executionStages": [
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: داشتن تعداد بالای جک و قالب فلزی، سرعت در اجرای دوره زمان‌بندی سقف‌ها، کیفیت بتن اکسپوز. توصیه استراتژیک: تحویل ستون‌های شاقول و بدون کرمو شدگی بتن، فرآیند نازک‌کاری بعدی را تسهیل کرده و رضایت سازنده را جلب می‌کند."
      },
      {
        "id": 1032,
        "faTitle": "اجرای اسکلت فلزی",
        "slug": "c-1032",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "foundation"
        ],
        "buyStages": [
          "foundation"
        ],
        "executionStages": [
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: سرتیفیکیت‌های رسمی جوشکاری (UT/PT)، دقت ابعادی سازه پیچ و مهره در کارخانه، سرعت نصب با جرثقیل سنگین. توصیه استراتژیک: تمرکز بر مزیت سازه‌های پیچ و مهره‌ای کارخانه‌ای در کاهش خطاهای انسانی و سرعت خیره‌کننده برپایی کارگاه."
      },
      {
        "id": 1033,
        "faTitle": "مقاوم‌سازی و بهسازی لرزه‌ای (اجرا)",
        "slug": "c-1033",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: مهارت اکیپ در کاشت میلگرد، شاتکریت دیوارهای برشی و نصب الیاف FRP. توصیه استراتژیک: کنترل کیفیت مداوم مراحل تزریق رزین اپوکسی و ارائه تست‌های کشش میلگرد (Pull-out) جهت اخذ تاییدیه ناظر."
      },
      {
        "id": 1034,
        "faTitle": "اجرای سقف (تیرچه، عرشه فولادی)",
        "slug": "c-1034",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: داشتن دستگاه‌های گان گل‌میخ‌زن عرشه فولادی، تراز نهایی بتن سقف، ایمنی اکیپ. توصیه استراتژیک: ارائه راه‌حل‌های اجرای سقف‌های نوین وافل به سازندگان جهت حذف تیرهای آویزان و افزایش ارتفاع مفید واحدها."
      },
      {
        "id": 1035,
        "faTitle": "دیوارچینی و سفت‌کاری",
        "slug": "c-1035",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: شاقول و گونیا بودن اتاق‌ها، اجرای دقیق وال‌پست و مهار لرزه‌ای دیوار طبق پیوست ۶ آیین‌نامه ۲۸۰۰. توصیه استراتژیک: استفاده از ملات‌های چسبی استاندارد به جای ملات سنتی در بلوک‌های AAC جهت کاهش وزن بار مرده و تمیزی کارگاه."
      },
      {
        "id": 1036,
        "faTitle": "اجرای نمای خشک",
        "slug": "c-1036",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: محکم بودن زیرسازی آهنی/آلومینیومی، استفاده از ابزارهای اتصالات مخفی (کیل یا کلیپس مهار). توصیه استراتژیک: ارائه دفترچه‌های محاسباتی بار باد بر سازه نما و تضمین ثبات ابعادی و آب‌بندی درازمدت پوسته‌ها."
      },
      {
        "id": 1037,
        "faTitle": "اجرای نمای ملاتی (سنگ، آجر)",
        "slug": "c-1037",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: اسکوپ کردن تمامی سنگ‌ها بدون استثنا جهت ایمنی، بندکشی‌های یکنواخت و ضدشوره. توصیه استراتژیک: داشتن رزومه کاری فعال در نماهای کلاسیک رومی و توانایی اجرای ابزارهای پیچیده سنگی با دستگاه‌های سی‌ان‌سی."
      },
      {
        "id": 1038,
        "faTitle": "اجرای نمای شیشه‌ای",
        "slug": "c-1038",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: محاسبات دقیق ممان اینرسی لامل‌ها، لاستیک‌های درزبندی EPDM باکیفیت, آب‌بندی اتصالات. توصیه استراتژیک: ارائه تضمین‌نامه کتبی ۱۰ ساله آب‌بندی و هوابندی نما به همراه تست‌های میدانی باران مصنوعی در کارگاه."
      },
      {
        "id": 1039,
        "faTitle": "گچ‌کاری و سفیدکاری",
        "slug": "c-1039",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster"
        ],
        "strategicAdvice": "عامل کلیدی: شاقول بودن کامل دیوارها بدون هیچ‌گونه موج، گونیا کردن کنج‌ها با نبشی‌های فلزی گالوانیزه توکار. توصیه استراتژیک: تحویل سطوح گچی کاملاً صیقلی (پرداخت‌شده با ماله مخصوص) جهت کاهش مصرف رنگ بتونه در فاز بعدی."
      },
      {
        "id": 1040,
        "faTitle": "کاشی‌کاری و سرامیک",
        "slug": "c-1040",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "early-finishing"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: مهارت نصب اسلب‌های سایز بزرگ پرسلان با چسب‌های پودری دو جزیی، تسطیح تراز با همترازکننده‌ها. توصیه استراتژیک: استفاده از بندکشی‌های ضدباکتری اپوکسی در حمام‌ها جهت ممانعت از جرم‌گیری و نفوذ رطوبت در درازمدت."
      },
      {
        "id": 1041,
        "faTitle": "سنگ‌کاری (کف و دیوار)",
        "slug": "c-1041",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "early-finishing"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: چیدمان دقیق بوک‌مچ و فورمچ اسلب‌های سنگ مرمر، ساب باکیفیت نهایی بدون دورنگی، فارسی‌بر کردن لبه‌ها. توصیه استراتژیک: استفاده از چسب‌های مگاپوکسی برای نصب سنگ‌های بدنه لابی جهت تضمین عدم سقوط ابدی سنگ."
      },
      {
        "id": 1042,
        "faTitle": "اجرای تاسیسات مکانیکی",
        "slug": "c-1042",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster"
        ],
        "strategicAdvice": "عامل کلیدی: انجام تست‌های هیدرواستاتیک لوله‌ها قبل از پوشاندن، کالیبره کردن کلکتورها، ثبت دقیق نقشه‌های چیدمان As-Built. توصیه استراتژیک: ارائه کدهای تصویری لوله‌های توکار کف به سازنده جهت جلوگیری از دریل‌کاری‌های اشتباه بعدی توسط اکیپ کناف."
      },
      {
        "id": 1043,
        "faTitle": "اجرای تاسیسات الکتریکی",
        "slug": "c-1043",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "early-finishing"
        ],
        "strategicAdvice": "عامل کلیدی: کابل‌کشی‌های منظم داخل داکت‌ها، پرهیز از تداخل مسیرهای برق با لوله‌های آب، سیم ارت خلوص بالا. توصیه استراتژیک: رعایت کامل استانداردهای ایمنی مبحث ۱۳ و استفاده از لوله‌های خرطومی نسوز پلی‌آمید استاندارد."
      },
      {
        "id": 1044,
        "faTitle": "اجرای سیستم‌های هوشمند (BMS)",
        "slug": "c-1044",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing",
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: آرایش تمیز تجهیزات داخل تابلوهای فرمان مرکزی، عیب‌یابی کابل‌های لوپ دیتای Bus، کالیبره کردن سنسورها. توصیه استراتژیک: ارائه خدمات برنامه‌نویسی نرم‌افزاری سفارشی متناسب با سناریوهای مورد پسند کارفرما (سناریوی خروج، مهمان)."
      },
      {
        "id": 1045,
        "faTitle": "نقاشی و پوشش‌های دکوراتیو",
        "slug": "c-1045",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: زیرسازی فوق‌العاده با بتونه چندلایه، مهارت فنی در پتینه‌کاری، میکروسمنت و ورق طلا، تمیزی لبه‌ها بدون پاشش رنگ. توصیه استراتژیک: استفاده از رنگ‌های اکریلیک پایه آب بی‌بو و قابل شستشو که سرعت تحویل واحدها را دو برابر می‌کند."
      },
      {
        "id": 1046,
        "faTitle": "اجرای کف سازی",
        "slug": "c-1046",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: رعایت دقیق کدهای ارتفاعی ساب‌فلور، شیب‌بندی بی‌نقص حمام، تراس و پشت‌بام، اجرای بتن‌های پولیشی ماله پروانه‌ای. توصیه استراتژیک: ارائه بتن‌های سخت کفسازی پارکینگ با تنوع رنگی عالی و مقاومت بالا در برابر سایش چرخ خودروها."
      },
      {
        "id": 1047,
        "faTitle": "اجرای سقف و دیوار کاذب",
        "slug": "c-1047",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: تراز کردن کامل زیرسازی گالوانیزه F47/UH36 کناف، اجرای بتونه درزگیری بدون ترک‌خوردگی بعدی. توصیه استراتژیک: استفاده الزامی از پانل‌های گچی مقاوم در برابر رطوبت (MR) در سقف سرویس‌ها و آشپزخانه جهت ممانعت از تبله کردن."
      },
      {
        "id": 1048,
        "faTitle": "عایق‌کاری (رطوبتی، حرارتی، صوتی)",
        "slug": "c-1048",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster",
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: همپوشانی استاندارد لایه‌های ایزوگام، تست آب‌بندی ۷۲ ساعته کاسه سرویس‌ها با پر کردن آب قبل از سرامیک. توصیه استراتژیک: عایق‌کاری صوتی دیوارهای مشترک واحدها با پشم سنگ دانسیته بالا جهت افزایش حریم خصوصی و لوکس‌سازی پروژه."
      },
      {
        "id": 1049,
        "faTitle": "جوشکاری و برشکاری",
        "slug": "c-1049",
        "parentId": 5,
        "saleType": "both",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: مهارت در استفاده از الکترودهای نفوذی، سرعت دسترسی، رعایت دقیق اصول آتش‌نشانی کارگاهی. توصیه استراتژیک: داشتن کپسول‌های اطفاء حریق همراه اکیپ جهت ممانعت از آتش‌سوزی فوم‌های یونولیت سقف حین کار گرم جوشکاری."
      },
      {
        "id": 1050,
        "faTitle": "نجاری و نصابی",
        "slug": "c-1050",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: نصب تمیز بدون درز درب‌ها و قرنیزها، رگلاژ دقیق لولاهای کابینت، استفاده از چسب‌های مگاپو و پلی‌اورتان. توصیه استراتژیک: تحویل چهارچوب‌های چوبی رگلاژ شده بدون صدا کلید حس کیفیت در زمان بازدید خریداران واحدهاست."
      },
      {
        "id": 1051,
        "faTitle": "بازسازی و نوسازی ساختمان",
        "slug": "c-1051",
        "parentId": 5,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تفکیک دقیق دیوارهای باربر از پارتیشن‌ها جهت ایمنی، پایبندی به جدول مالی شفاف، سرعت اکیپ‌های تخریب و بازسازی. توصیه استراتژیک: ارائه گزارش‌های تصویری روزانه در بستر وب به کارفرما حس اعتماد بالایی ایجاد می‌کند."
      },
      {
        "id": 1052,
        "faTitle": "حمل و نقل و خدمات لجستیک",
        "slug": "c-1052",
        "parentId": 5,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تأمین ماشین‌آلات متناسب با محدودیت‌های ترافیکی شبانه تهران، اکیپ کارگری چابک و امین برای تخلیه مصالح در طبقات. توصیه استراتژیک: تضمین عدم آسیب به سنگ‌های پله و آسانسور کارگاهی حین حمل اقلام سنگین تأسیساتی."
      }
    ]
  },
  {
    "id": 6,
    "faTitle": "مصالح ساختمانی",
    "slug": "building-materials",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1053,
        "faTitle": "سیمان، گچ و مصالح پودری",
        "slug": "c-1053",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: عرضه گچ سفیدکاری ساوه/مشهد و سیمان تیپ ۲ تازه کارخانجات معتبر، قیمت کف بازار، عدم رطوبت‌زدگی کیسه‌ها. توصیه استراتژیک: تضمین زنجیره لجستیک تحویل به موقع سیمان حین بتن‌ریزی‌های مداوم کارگاهی جهت ممانعت از ایجاد درز سرد."
      },
      {
        "id": 1054,
        "faTitle": "شن، ماسه و پوکه",
        "slug": "c-1054",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: ماسه شسته دوبار شور بدون خاک، پوکه معدنی قروه/تبریز با وزن حجمی پایین جهت سبک‌سازی کفسازی طبقات، وزن دقیق باسکول. توصیه استراتژیک: ارائه فاکتور رسمی باسکول‌های معتبر جهت جلب اعتماد کامل سرپرست کارگاه."
      },
      {
        "id": 1055,
        "faTitle": "بتن آماده و افزودنی‌ها",
        "slug": "c-1055",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "demolition"
        ],
        "buyStages": [
          "foundation",
          "structure"
        ],
        "executionStages": [
          "foundation",
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: رده مقاومت بتن (C30 و بالاتر)، ارائه اسلامپ استاندارد متناسب با فاصله کارخانه، زمان‌بندی دقیق و پیوسته تراک‌میکسرها. توصیه استراتژیک: هماهنگی کامل با آزمایشگاه مقیم کارگاه و تضمین افزودن روان‌کننده استاندارد در محل در صورت افت اسلامپ."
      },
      {
        "id": 1056,
        "faTitle": "آجر، سفال و بلوک ساختمانی",
        "slug": "c-1056",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "wall-building"
        ],
        "executionStages": [
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: درصد شکستگی بسیار پایین اقلام ارسالی، ابعاد گونیا و استاندارد بلوک‌های هبلکس یا سفال لیکا، عایق صوتی و حرارتی مبحث ۱۹. توصیه استراتژیک: تأمین چسب‌های مخصوص هبلکس با کیفیت عالی همراه با محموله بلوک‌ها جهت تسریع کار دیوارهای پیرامونی."
      },
      {
        "id": 1057,
        "faTitle": "تیرچه و بلوک سقفی",
        "slug": "c-1057",
        "parentId": 6,
        "saleType": "both",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: تیرچه‌های بتنی استاندارد با پاشنه بتنی بدون ترک، استفاده از میلگردهای زیگزاگ با فواصل فنی و جوش‌های مستحکم. توصیه استراتژیک: ارائه گواهی استاندارد تولید تیرچه به ناظر سازه جهت تسهیل تأییدیه قبل از بتن‌ریزی سقف طبقات."
      },
      {
        "id": 1058,
        "faTitle": "وال پست و وال مش",
        "slug": "c-1058",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "wall-building"
        ],
        "executionStages": [
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: انطباق کامل ابعادی و ضخامت با پیوست ششم آیین‌نامه ۲۸۰۰، نوارهای الیاف شیشه مقاوم به قلیا (AR) با گرماژ استاندارد. توصیه استراتژیک: ارائه دیتایل‌های آماده نصب وال‌مش به مهندسان کارگاه جهت حذف جوشکاری‌های سنگین وال‌پست‌های سنتی فلزی."
      },
      {
        "id": 1059,
        "faTitle": "فوم و یونولیت",
        "slug": "c-1059",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: دانسیته واقعی استاندارد (۱۲ به بالا)، تأییدیه کندسوز بودن رسمی از مرکز تحقیقات مسکن جهت اخذ پایان‌کار آتش‌نشانی. توصیه استراتژیک: عدم عرضه فوم‌های بازیافتی غیراستاندارد که در زمان بتن‌ریزی سقف دچار شکستگی و ریزش بتن می‌شوند."
      },
      {
        "id": 1060,
        "faTitle": "فوم بتن و لایت فرم",
        "slug": "c-1060",
        "parentId": 6,
        "saleType": "both",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "wall-building"
        ],
        "executionStages": [
          "plaster"
        ],
        "strategicAdvice": "عامل کلیدی: کیفیت مایع فوم مرغوب پروتئینه، عدم افت ارتفاع و نشست بتن پس از پمپاژ در طبقات بالا، سرعت کفسازی. توصیه استراتژیک: تمرکز بر مزیت حذف پوکه و کاهش شدید وزن بار مرده ساختمان در مقایسه با روش‌های کفسازی سنتی."
      },
      {
        "id": 1061,
        "faTitle": "مصالح پیش‌ساخته بتنی",
        "slug": "c-1061",
        "parentId": 6,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "wall-building"
        ],
        "strategicAdvice": "عامل کلیدی: دقت ابعادی بسیار بالا، قطعات پیش‌ساخته دکوراتیو نما (جی‌آرسی)، عدم ایجاد ترک خوردگی در درزهای اتصال طبقات. توصیه استراتژیک: ارائه کاتالوگ‌های فنی دیتیل‌های نصب اتصالات خشک قطعات پیش‌ساخته جهت متقاعدسازی مهندسان مشاور پروژه."
      },
      {
        "id": 1062,
        "faTitle": "عایق‌های رطوبتی (ایزوگام، نانو)",
        "slug": "c-1062",
        "parentId": 6,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster",
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: ضخامت واقعی ۴ میلی‌متر ایزوگام دلیجان اصل با تیشو مرغوب، مواد نانو پلیمری دومکانیزم آب‌بند، گارانتی کتبی کارخانه. توصیه استراتژیک: ارائه پکیج‌های کامل شامل تأمین مصالح عایق و اجرای تضمین‌شده توسط استادکاران مجرب شرکت."
      },
      {
        "id": 1063,
        "faTitle": "عایق‌های حرارتی و صوتی",
        "slug": "c-1063",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster"
        ],
        "strategicAdvice": "عامل کلیدی: پشم سنگ تخته‌ای دانسیته ۸۰ برای دیوارهای مشترک واحدها، فوم‌های XPS سلول بسته پرقدرت جهت عایق‌کاری روف‌گاردن. توصیه استراتژیک: ارائه گزارش‌های تست آکوستیک افت دسی‌بل صدا جهت اثبات کارایی پشم سنگ در لوکس‌سازی واحدها."
      },
      {
        "id": 1064,
        "faTitle": "چسب‌های ساختمانی و مواد نانو",
        "slug": "c-1064",
        "parentId": 6,
        "saleType": "fast",
        "negotiationStages": [
          "early-finishing"
        ],
        "buyStages": [
          "finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: چسب‌های پودری پرسلان گرید C2TE، رزین‌های آب‌بندی نانو، تاریخ تولید جدید و پلمب بودن گالن‌های ارسالی کارگاه. توصیه استراتژیک: برگزاری کارگاه‌های آموزشی رایگان روش‌های چسباندن اسلب‌های بزرگ برای استادکاران پروژه جهت کاهش خسارت شکستگی سنگ."
      },
      {
        "id": 1065,
        "faTitle": "تأمین‌کنندگان و کلینیک‌های ساختمان",
        "slug": "c-1065",
        "parentId": 6,
        "saleType": "both",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: تنوع بالای کالاها در یک سبد واحد، تخفیف‌های تجمیعی خرید نقدی، امکان معاوضه تهاتری بخشی از مصالح با واحدهای پروژه. توصیه استراتژیک: ایجاد دپارتمان اختصاصی مدیریت حساب‌های کلان (Key Account Management) برای سازندگان پرکار منطقه."
      },
      {
        "id": 1150,
        "faTitle": "افزودنی‌های نانو پلیمری و شیمی ساختمانی پیشرفته",
        "slug": "c-1150",
        "parentId": 6,
        "saleType": "consultative",
        "negotiationStages": [
          "foundation",
          "structure"
        ],
        "buyStages": [
          "wall-building",
          "finishing"
        ],
        "executionStages": [
          "wall-building",
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: ژل میکروسیلیس، فوق‌روان‌کننده‌های کربوکسیلاتی، آنتی‌شوره‌های ملات نما، نفوذناپذیرکننده‌های استخر. توصیه استراتژیک: ارائه طرح اختلاط آزمایشگاهی به همراه متریال شیمیایی، ارزش پیشنهادی را از فروش کلمه‌ای کالا به تضمین عملکرد مهندسی ارتقا می‌دهد."
      }
    ]
  },
  {
    "id": 7,
    "faTitle": "آهن‌آلات و فولاد",
    "slug": "steel-and-metals",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1066,
        "faTitle": "تیرآهن و میلگرد",
        "slug": "c-1066",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "foundation"
        ],
        "buyStages": [
          "foundation",
          "structure"
        ],
        "executionStages": [
          "foundation",
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: میلگردهای آجدار ذوب‌آهن اصفهان یا نیشابور رده A3، ارائه برگه آنالیز ذوب رسمی کارخانه، قیمت لحظه‌ای بورس کالا. توصیه استراتژیک: ارائه تضامین معتبر حواله‌های بانکی و حمل سریع ظرف ۴۸ ساعت جهت ممانعت از توقف کارگاه آرماتوربندی."
      },
      {
        "id": 1067,
        "faTitle": "پروفیل و قوطی",
        "slug": "c-1067",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: ضخامت واقعی ورق‌های مصرفی (ورق ۲ و ۲.۵ سنگین اصفهان) جهت اجرای بی نقص شاسی‌کشی‌های نما و فریم درها بدون تغییرشکل. توصیه استراتژیک: عرضه قوطی‌های کاملاً صاف و بدون پیچیدگی ابعادی جهت سهولت کار اکیپ‌های جوشکاری نما."
      },
      {
        "id": 1068,
        "faTitle": "نبشی، ناودانی",
        "slug": "c-1068",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: ناودانی‌های منقطع استاندارد وال‌پست، نبشی‌های سنگین هم‌وزن کارخانه جهت ساخت دستک‌های نما و مهاربندهای جانبی سازه. توصیه استراتژیک: تأمین ابعاد سفارشی برش‌خورده وال‌پست منقطع جهت به حداقل رساندن پرت آهن‌آلات کارگاه."
      },
      {
        "id": 1069,
        "faTitle": "ورق‌های فولادی",
        "slug": "c-1069",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: ورق‌های سیاه ضخیم کارخانه گیلان/مبارکه جهت ساخت ورق‌های اتصال بیس‌پلیت، ورق‌های گالوانیزه روفیکس سقف‌های شیب‌دار. توصیه استراتژیک: ارائه خدمات برش سی‌ان‌سی و پانچ ورق‌های اتصال طبق نقشه‌های شاپ‌دراوینگ مهندسی پروژه."
      },
      {
        "id": 1070,
        "faTitle": "رابیتس و توری‌های فلزی",
        "slug": "c-1070",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster"
        ],
        "strategicAdvice": "عامل کلیدی: رابیتس‌های گالوانیزه مسطح ۹ یا ۱۳ ستونه با وزن سنگین واقعی جهت زیرسازی پیشانی نما و گچ‌بری‌های دکوراتیو سقف بدون شکم‌دادن. توصیه استراتژیک: تأمین هم‌زمان سیم‌های رابیتس‌بندی گالوانیزه نرم همراه محموله جهت راحتی خرید تدارکات."
      },
      {
        "id": 1071,
        "faTitle": "پیچ و مهره واتصالات",
        "slug": "c-1071",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "structure"
        ],
        "executionStages": [
          "structure"
        ],
        "strategicAdvice": "عامل کلیدی: پیچ‌های پرمقاومت کلاس 10.9 یا 8.8 فولادی همراه با سرتیفیکیت معتبر آزمایشگاه تست کشش و کوانتومتری جهت اسکلت‌های پیچ‌ومهره. توصیه استراتژیک: تأمین واشرهای سخت‌کاری شده استاندارد متناسب با گشتاور سفت‌کاری آچارهای هیدرولیک کارگاه."
      },
      {
        "id": 1072,
        "faTitle": "لوله‌های فولادی (داربست)",
        "slug": "c-1072",
        "parentId": 7,
        "saleType": "fast",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: لوله‌های داربستی ۱۱.۵ و ۱۴ کیلویی ضخامت سنگین اصفهان بدون درزهای جوش عمیق جهت حفظ کامل ایمنی جانی اکیپ‌های نماکاری. توصیه استراتژیک: ارائه بست‌های چدنی چهارپیچ دوقلو نشکن همراه لوله‌ها جهت تضمین صلبیت کامل سازه داربست کارگاهی."
      }
    ]
  },
  {
    "id": 8,
    "faTitle": "ماشین‌آلات، ابزار و تجهیزات",
    "slug": "machinery-tools-and-equipment",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1073,
        "faTitle": "ماشین‌آلات سنگین و سبک",
        "slug": "c-1073",
        "parentId": 8,
        "saleType": "both",
        "negotiationStages": [
          "demolition",
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: سلامت سیستم هیدرولیک لودرها، داشتن بیمه‌نامه شخص ثالث حوادث جرثقیل‌های دکل‌دار، اکیپ رانندگی با گواهی‌نامه ویژه. توصیه استراتژیک: تضمین عدم توقف کار ماشین‌آلات به دلیل نقص فنی حین عملیات حساس خاک‌برداری شبانه."
      },
      {
        "id": 1074,
        "faTitle": "تجهیزات جوش و برش و...",
        "slug": "c-1074",
        "parentId": 8,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: دستگاه‌های جوش اینورتر صنعتی سه فاز با آمپراژ بالا، ترانس‌های جوش مقاوم در برابر افت ولتاژ شدید برق موقت کارگاهی. توصیه استراتژیک: ارائه کابل‌های جوش با خلوص مس بالا جهت ممانعت از افت جریان و تضمین کیفیت نفوذ جوش سازه."
      },
      {
        "id": 1075,
        "faTitle": "ابزارآلات برقی و شارژی",
        "slug": "c-1075",
        "parentId": 8,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: بتن‌کن‌های پرقدرت پنج‌شیار، فرزهای سنگ‌بری مجهز به کلاچ‌های ایمنی اتوماتیک جهت ملوگیری از حوادث شکستن دیسک سنگ. توصیه استراتژیک: ارائه خدمات تعمیرات سریع گارانتی در محل کارگاه جهت جلوگیری از خواب کار اکیپ‌های سنگ‌کاری نما."
      },
      {
        "id": 1076,
        "faTitle": "ابزارآلات دستی و دقیق",
        "slug": "c-1076",
        "parentId": 8,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: مترهای لیزری کالیبره‌شده، ترازهای لیزری ۳۶۰ درجه نور سبز پرقدرت جهت نازک‌کاری بدون خطای کاشی‌ها و کناف سقف. توصیه استراتژیک: ارائه ابزارهای سنجش رطوبت زیرکار گچ جهت تعیین زمان دقیق و علمی شروع نقاشی دیوارها."
      },
      {
        "id": 1077,
        "faTitle": "تجهیزات ایمنی و کارگاهی",
        "slug": "c-1077",
        "parentId": 8,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: کمربندهای ایمنی هارنس شوک‌گیردار برای کار در ارتفاع نما، کلاه‌های کارگاهی استاندارد، کپسول‌های پودری اطفاء حریق. توصیه استراتژیک: استقرار چک‌لیست‌های تخصصی HSE در کارگاه به سازنده جهت کاهش شدید ریسک حوادث جانی و مواجهه با اداره کار."
      }
    ]
  },
  {
    "id": 9,
    "faTitle": "تاسیسات مکانیکی",
    "slug": "mechanical-installations",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1078,
        "faTitle": "آسانسور و پله برقی",
        "slug": "c-1078",
        "parentId": 9,
        "saleType": "consultative",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "wall-building",
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: ریل‌های فولادی ساورا ایتالیا اصل، موتورهای گیرلس زیلابگ آلمان، کابین‌های لوکس سفارشی، تاییدیه استاندارد نهایی جهت پایان‌کار. توصیه استراتژیک: مهندسی فروش باید از فاز اسکلت (تعیین ابعاد دقیق چاهک و آهن‌کشی آسانسور) شروع شود تا تداخل ابعادی رخ ندهد."
      },
      {
        "id": 1079,
        "faTitle": "سیستم‌های سرمایشی",
        "slug": "c-1079",
        "parentId": 9,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: داکت‌اسپلیت‌های کم‌صدا مجهز به کمپرسورهای اینورتر گاز R410A، مینی‌چیلرهای پیستونی تروپیکال با مصرف برق بهینه. توصیه استراتژیک: بررسی جانمایی یونیت‌های خارجی روی نما یا بام جهت هماهنگی با آرشیتکت پروژه قبل از لوله‌کشی مسی."
      },
      {
        "id": 1080,
        "faTitle": "سیستم‌های گرمایشی",
        "slug": "c-1080",
        "parentId": 9,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پکیج‌های دو مبدله فن‌دار بوتان/ایران‌رادیاتور، دیگ‌های چدنی پره‌دار شوفاژکار موتورخانه با راندمان حرارتی بالا. توصیه استراتژیک: محاسبات دقیق ظرفیت حرارتی متناسب با متراژ مفید واحدها جهت جلوگیری از هزینه‌های خرید دستگاه‌های اورسایز."
      },
      {
        "id": 1081,
        "faTitle": "تهویه مطبوع (هواساز، فن)",
        "slug": "c-1081",
        "parentId": 9,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: فن‌کویل‌های سقفی توکار نازک با دسی‌بل صدای بسیار پایین، کانال‌های فلکسیبل پیش‌عایق‌دار پلی‌اورتان. توصیه استراتژیک: ارائه پلن‌های بالانس هوای فضاهای داخلی جهت تضمین عدم برگشت بوی آشپزخانه و سرویس‌ها به سالن اصلی."
      },
      {
        "id": 1082,
        "faTitle": "لوله و اتصالات (آب، فاضلاب)",
        "slug": "c-1082",
        "parentId": 9,
        "saleType": "fast",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "plaster"
        ],
        "strategicAdvice": "عامل کلیدی: لوله‌های پنج‌لایه نیوپایپ/وحید جهت سیستم توزیع آب، لوله‌های پوش‌فیت پلی‌ران جهت سیستم فاضلاب بدون افت آب‌بندی اتصالات. توصیه استراتژیک: تأمین بست‌های عایق‌دار اختصاصی لوله‌ها جهت ممانعت از انتقال صدای جریان آب به اتاق‌های خواب."
      },
      {
        "id": 1083,
        "faTitle": "شیرآلات و تجهیزات صنعتی",
        "slug": "c-1083",
        "parentId": 9,
        "saleType": "fast",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: شیرهای فلکه‌ای برنجی کیزایران اصل، لرزه‌گیرهای ارتعاشات لاستیکی مهاردار برای پمپ‌های موتورخانه مرکزی. توصیه استراتژیک: تأمین شیرهای صافی‌دار زنگ‌نزن جهت محافظت از پروانه‌های پمپ‌ها در برابر رسوبات کارگاهی لوله‌ها."
      },
      {
        "id": 1084,
        "faTitle": "شیرآلات بهداشتی",
        "slug": "c-1084",
        "parentId": 9,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: شیرآلات توکار برند کلار/KWC با مغزی‌های برنجی ضخیم ضدزنگ، آبکاری با میکرون بالا کروم یا طلایی لوکس PVD. توصیه استراتژیک: مغزی‌های توکار شیرآلات باید قبل از عایق‌کاری و کاشی‌کاری نصب شوند؛ رویه‌های لوکس در انتهای ظریف‌کاری سوار می‌شوند."
      },
      {
        "id": 1085,
        "faTitle": "چینی‌آلات و لوازم بهداشتی",
        "slug": "c-1085",
        "parentId": 9,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: توالت‌های فرنگی وال‌هنگ مروارید/گلسار با سیستم‌های تخلیه واش‌دون دبل پرقدرت، لعاب‌های ضدجرم نانو صیقلی. توصیه استراتژیک: استراکچرهای فلاش‌تانک توکار وال‌هنگ باید حین دیوارچینی نصب و به اسکلت مهار شوند، چینی‌آلات در پایان کار نصب می‌گردند."
      },
      {
        "id": 1086,
        "faTitle": "تجهیزات و لوازم جانبی بهداشتی",
        "slug": "c-1086",
        "parentId": 9,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: ست‌های اکسسوری استیل ضدزنگ ۳۰۴ سرویس‌ها، فلاش‌تانک‌های توکار ایمن‌آب باریک ضخامت ۸ سانتی‌متر مجهز به کلیدهای دوزمانه. توصیه استراتژیک: هماهنگی رنگ کلیدهای فلاش‌تانک توکار با اکسسوری‌ها و دستگیره‌های درها، حس لوکس بودن فضا را دوچندان می‌کند."
      },
      {
        "id": 1087,
        "faTitle": "پمپ و سیستم‌های آبرسانی",
        "slug": "c-1087",
        "parentId": 9,
        "saleType": "both",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: بوسترپمپ‌های دور متغیر آبرسانی پنتاکس/گراندفوس با تابلو کنترل‌های مجهز به اینورترهای هوشمند دانفوس جهت تثبیت فشار آب. توصیه استراتژیک: محاسبه دقیق هد و دبی پمپ بر اساس مبحث ۱۶ جهت ممانعت از افت فشار آب در طبقات فوقانی پنت‌هاوس."
      },
      {
        "id": 1088,
        "faTitle": "تجهیزات استخر، سونا و جکوزی",
        "slug": "c-1088",
        "parentId": 9,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: فیلترهای شنی مگاپول، پمپ‌های تصفیه استخر ایمکس، مبدل‌های حرارتی استیل استخر، سیستم‌های ضدعفونی اوزون. توصیه استراتژیک: لوله‌گذاری‌های زیر کار کاسه استخر با لوله‌های UPVC فشار قوی PN16 باید هم‌زمان با فونداسیون و اسکلت اجرا شود."
      },
      {
        "id": 1089,
        "faTitle": "سیستم‌های اعلام و اطفاء حریق",
        "slug": "c-1089",
        "parentId": 9,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: جعبه‌های آتش‌نشانی دوقلو استیل، اسپرینکلرهای واکنش سریع برنجی با تأییدیه رسمی سازمان آتش‌نشانی جهت اخذ پایان‌کار ملکی. توصیه استراتژیک: لوله‌کشی‌های گالوانیزه حریق در سقف کاذب باید قبل از کناف‌کاری به طور کامل تست فشار اصولی شوند."
      }
    ]
  },
  {
    "id": 10,
    "faTitle": "تاسیسات الکتریکی",
    "slug": "electrical-installations",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1090,
        "faTitle": "سیم و کابل",
        "slug": "c-1090",
        "parentId": 10,
        "saleType": "fast",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: سیم و کابل‌های افشان همدان با هادی مس خلوص بالا، عایق‌های نسوز بی‌هالوژن (LSZH). توصیه استراتژیک: وزن بندیل‌ها و تطابق ضخامت گوشت عایق با استانداردهای توانیر، دغدغه تایید مهندس ناظر برق را برطرف می‌سازد."
      },
      {
        "id": 1091,
        "faTitle": "روشنایی (چراغ، پنل)",
        "slug": "c-1091",
        "parentId": 10,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: لاینرهای نوری توکار بدون فریم، پنل‌های ال‌ای‌دی بک‌لایت شیراز نور مجهز به درایورهای ضدچشمک. توصیه استراتژیک: طراحی نورپردازی نما و مشاعات با نرم‌افزار دایالکس (Dialux) و ارائه پروپوزال قبل از اتمام نقاشی دیوارها."
      },
      {
        "id": 1092,
        "faTitle": "کلید و پریز",
        "slug": "c-1092",
        "parentId": 10,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: مکانیزم‌های کلید و پریز لگراند فرانسه با فریم‌های چوبی یا فلزی لوکس متناسب با دکور داخلی. توصیه استراتژیک: فریم‌های کلید و پریز آخرین اقلامی هستند که پس از خشک شدن کامل رنگ دیوارها جهت ممانعت از کثیف شدن نصب می‌شوند."
      },
      {
        "id": 1093,
        "faTitle": "تابلو برق و تجهیزات",
        "slug": "c-1093",
        "parentId": 10,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: تابلوهای مینیاتوری توکار مجهز به فیوزهای مینیاتوری اشنایدر اصل و کلیدهای نشت جریان. توصیه استراتژیک: فریم‌های خالی فلزی تابلوها حین گچ‌وخاک توکار نصب می‌شوند؛ کابل‌کشی و مینیاتوری‌ها در فاز نازک‌کاری سربندی می‌گردند."
      },
      {
        "id": 1094,
        "faTitle": "سیستم‌های اعلام حریق الکتریکی",
        "slug": "c-1094",
        "parentId": 10,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پنل‌های کنترل مرکزی زیتکس با دتکتورهای دودی نوری مجهز به میکروپروسسور ضدپارازیت. توصیه استراتژیک: کابل‌کشی سیستم اعلام حریق باید با کابل‌های شیلددار نسوز قرمز رنگ اختصاصی حین سیم‌کشی تأسیسات انجام شود."
      },
      {
        "id": 1095,
        "faTitle": "دوربین مداربسته و سیستم‌های امنیتی",
        "slug": "c-1095",
        "parentId": 10,
        "saleType": "consultative",
        "negotiationStages": [
          "early-finishing"
        ],
        "buyStages": [
          "finishing"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: دوربین‌های آی‌پی هایک‌ویژن با کیفیت رزولوشن ۴ مگاپیکسل، قابلیت پلاک‌خوانی در ورودی پارکینگ. توصیه استراتژیک: مسیر کابل‌های شبکه Cat6 دوربین‌ها باید کاملاً از کابل‌های برق فشار قوی جدا باشد تا نویز تصویر رخ ندهد."
      },
      {
        "id": 1096,
        "faTitle": "آیفون تصویری و آنتن مرکزی",
        "slug": "c-1096",
        "parentId": 10,
        "saleType": "both",
        "negotiationStages": [
          "early-finishing"
        ],
        "buyStages": [
          "finishing"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: نمایشگرهای رنگی ۷ اینچی الکتروپیک با قابلیت اینترکام، آنتن‌های فرکانس بالای پسیو. توصیه استراتژیک: زیرساخت کابل‌کشی فیدر آنتن مرکزی باید از بالاترین گرید کابل کواکسیال (کواکسیال ترکیبی بغل‌برق یا RG6) اجرا شود."
      },
      {
        "id": 1097,
        "faTitle": "سیستم‌های خانه هوشمند (BMS)",
        "slug": "c-1097",
        "parentId": 10,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing",
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: پروتکل استاندارد KNX سیمی، پنل‌های لمسی دیواری تحت شبکه، کنترل هوشمند سرمایش. توصیه استراتژیک: مهندسی فروش سیستم هوشمند باید در مرحله طراحی نقشه‌های فاز ۲ انجام شود تا لوله‌گذاری‌های Bus از ابتدا تعریف گردند."
      },
      {
        "id": 1098,
        "faTitle": "ژنراتور و برق اضطراری (UPS)",
        "slug": "c-1098",
        "parentId": 10,
        "saleType": "consultative",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "wall-building"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: دیزل ژنراتورهای بادوین همراه با تابلو اتوماتیک چنج‌اور (ATS) جهت برق اضطراری لابی و آسانسور. توصیه استراتژیک: فونداسیون بتنی پد ژنراتور (کاهنده ارتعاشات) باید در فاز کفسازی پارکینگ زیرزمین پیش‌بینی و اجرا شود."
      },
      {
        "id": 1099,
        "faTitle": "تجهیزات هشدار زلزله",
        "slug": "c-1099",
        "parentId": 10,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: سنسورهای قطع اتوماتیک جریان گاز شهری در مواجهه با شتاب زلزله موج اول مخرب. توصیه استراتژیک: داشتن تاییدیه‌های استاندارد ملی و تاییدیه رسمی شرکت ملی گاز جهت اخذ پایان‌کار پروژه."
      },
      {
        "id": 1100,
        "faTitle": "انرژی‌های تجدیدپذیر (خورشیدی)",
        "slug": "c-1100",
        "parentId": 10,
        "saleType": "consultative",
        "negotiationStages": [
          "structure"
        ],
        "buyStages": [
          "wall-building"
        ],
        "executionStages": [
          "finishing",
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: پنل‌های فتوولتائیک با راندمان بالا جهت تأمین برق روشنایی مشاعات، اینورترهای متصل به شبکه. توصیه استراتژیک: جانمایی پایه‌های استراکچر پنل‌ها روی بام باید قبل از اجرای لایه‌های نهایی ایزوگام و کفسازی روف‌گاردن صورت پذیرد."
      }
    ]
  },
  {
    "id": 11,
    "faTitle": "در، پنجره و نما",
    "slug": "doors-windows-and-facade",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1101,
        "faTitle": "پنجره‌های UPVC و آلومینیومی",
        "slug": "c-1101",
        "parentId": 11,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "early-finishing"
        ],
        "strategicAdvice": "عامل کلیدی: مقاطع آلومینیومی ترمال‌بریک آکپا، یراق‌آلات روتو آلمان، لاستیک‌های آب‌بند ضد اشعه آفتاب. توصیه استراتژیک: ابعادبرداری لیزری پنجره‌ها حتماً بعد از اتمام کامل گچ‌وخاک دیوارها جهت ساخت دقیق میلی‌متری کارخانه‌ای انجام می‌شود."
      },
      {
        "id": 1102,
        "faTitle": "درهای داخلی و ورودی",
        "slug": "c-1102",
        "parentId": 11,
        "saleType": "both",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: درب‌های ضدسرقت ترک با رویه راش لوکس، قفل‌های کالی ترکیه، چهارچوب‌های فلزی ضددیفورمه. توصیه استراتژیک: چهارچوب‌های فلزی درها حین گچ‌وخاک نصب و دوغاب‌ریزی می‌شوند؛ لنگه‌های درب چوبی آخرین اقلام فاز نقاشی هستند."
      },
      {
        "id": 1103,
        "faTitle": "درهای اتوماتیک و کرکره برقی",
        "slug": "c-1103",
        "parentId": 11,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: جک‌های بازویی الکترومکانیکی ویتو ایتالیا، تیغه‌های کرکره غضروف‌دار بی‌صدا آلومینیومی. توصیه استراتژیک: ریل‌های جانبی کرکره برقی پارکینگ باید توکار حین شاسی‌کشی و دیوارچینی ورودی رمپ اجرا شوند تا زیبایی نما حفظ گردد."
      },
      {
        "id": 1104,
        "faTitle": "شیشه (دوجداره، سکوریت)",
        "slug": "c-1104",
        "parentId": 11,
        "saleType": "both",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: تزریق گاز آرگون استاندارد، استفاده از شیشه‌های لمینت ایمنی جهت نماهای شیشه‌ای بلندمرتبه. توصیه استراتژیک: شیشه‌ها باید بعد از اتمام کلیه کارهای کثیف کارگاهی (مانند گچ‌کاری و سیمان‌کاری) روی فریم پنجره‌ها سوار شوند."
      },
      {
        "id": 1105,
        "faTitle": "پروفیل‌های در و پنجره",
        "slug": "c-1105",
        "parentId": 11,
        "saleType": "fast",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "early-finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پروفیل‌های UPVC برند ویستابست با استاندارد گرید A، پروفیل‌های آلومینیومی آنادایز سنگین. توصیه استراتژیک: ارائه گواهی‌نامه‌های رسمی بیمه ۱۰ ساله کارخانه در قبال تغییر رنگ یا دفرمه شدن پروفیل‌ها در برابر اشعه خورشید."
      },
      {
        "id": 1106,
        "faTitle": "یراق‌آلات در و پنجره",
        "slug": "c-1106",
        "parentId": 11,
        "saleType": "fast",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: دستگیره‌های آنتی‌باکتریال لوکس، لولاهای پنجره‌های دوحالته پرقدرت جهت تحمل وزن شیشه‌ها. توصیه استراتژیک: رگلاژ نهایی یراق‌آلات پنجره‌ها پس از نصب کامل شیشه‌ها و فوم‌پاشی دورتادور فریم صورت می‌پذیرد."
      },
      {
        "id": 1107,
        "faTitle": "نمای شیشه‌ای (کرتین وال)",
        "slug": "c-1107",
        "parentId": 11,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پروفیل‌های لامل آلومینیومی، شیشه‌های سانرژی کنترل حرارت. توصیه استراتژیک: برقراری جلسه مهندسی فروش در فاز اسکلت الزامی است تا انکرپلیت‌های اتصال لامل‌ها حین بتن‌ریزی لبه سقف‌ها جایگذاری شوند."
      },
      {
        "id": 1108,
        "faTitle": "ورق کامپوزیت آلومینیوم",
        "slug": "c-1108",
        "parentId": 11,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: ورق‌های مقاوم در برابر حریق حاد (FR Grade)، پوشش رنگ پی‌وی‌دی‌اف ضد اشعه یووی خورشید. توصیه استراتژیک: طراحی شاسی‌کشی‌های آهنی نما با پروفیل‌های ۴۰ در ۴۰ متناسب با مدولاسیون ورق‌ها جهت کاهش شدید دورریز کامپوزیت."
      },
      {
        "id": 1109,
        "faTitle": "پانل‌های سرامیک خشک",
        "slug": "c-1109",
        "parentId": 11,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پرسلان‌های خشک پرقدرت اسلب، اتصالات کلیپس نمایان یا اتصالات پنهان کیل و ضمانت اجرا. توصیه استراتژیک: اجرای نوارهای لاستیکی لرزه‌گیر پشت سرامیک‌ها جهت ممانعت از ایجاد صدا حین وزش بادهای شدید شهری."
      },
      {
        "id": 1110,
        "faTitle": "سیستم‌های نمای سنگ خشک",
        "slug": "c-1110",
        "parentId": 11,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: شاسی‌کشی آلومینیومی رانر، پین‌های استیل ضدزنگ سنگین جهت نگهداری صفحات سنگ تراورتن. توصیه استراتژیک: این روش کلید حذف ملات ماسه سیمان و ریسک سقوط سنگ نما در بلندمرتبه‌سازی‌های لوکس مناطق تهران است."
      },
      {
        "id": 1111,
        "faTitle": "سایر پوشش‌های نما (ترمووود)",
        "slug": "c-1111",
        "parentId": 11,
        "saleType": "both",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: ترمووودهای کاج فلاند فنلاندی با اشباع استاندارد، چوب‌پلاست‌های پایدار ضد ترک خوردگی. توصیه استراتژیک: رنگ‌آمیزی ترمووودها با رنگ‌های تخصصی آنتی‌یووی جذبی قبل از نصب روی شاسی چوبی نما الزامی است."
      }
    ]
  },
  {
    "id": 12,
    "faTitle": "پوشش‌های داخلی و خارجی (نازک‌کاری)",
    "slug": "interior-and-exterior-finishes",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1112,
        "faTitle": "کاشی، سرامیک و پرسلان",
        "slug": "c-1112",
        "parentId": 12,
        "saleType": "fast",
        "negotiationStages": [
          "early-finishing"
        ],
        "buyStages": [
          "finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پرسلان‌های نانوپولیش کالیبره‌شده تبریز با ابعاد اسلب ۱۲۰ در ۲۴۰ جهت کف سالن‌ها. توصیه استراتژیک: ارائه پالت‌های رنگی خنثی (طوسی، کرم سوپر) متناسب با ترندهای معماری مدرن سال ۲۰۲۶ بازار مسکن."
      },
      {
        "id": 1113,
        "faTitle": "سنگ‌های ساختمانی (نما، کف)",
        "slug": "c-1113",
        "parentId": 12,
        "saleType": "consultative",
        "negotiationStages": [
          "structure",
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: سنگ تراورتن عباس‌آباد سورت سوپر جهت نما، سنگ دهبید کرم جهت کف سالن‌ها بدون دورنگی. توصیه استراتژیک: خرید عمده سنگ اسلب کوپ از معدن و فرآوری تخصصی آن در کارخانه، سودآوری سازنده را تا ۳۰ درصد در بخش متریال بالا می‌برد."
      },
      {
        "id": 1114,
        "faTitle": "پارکت، لمینت و کفپوش‌های چوبی",
        "slug": "c-1114",
        "parentId": 12,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: لمینت‌های با کلیک‌های پارافین‌خورده ضدآب، کلاس سایشی AC4 جهت دوام در فضاهای پر تردد. توصیه استراتژیک: اجرای فوم سایلنت ضخامت ۲ میلی‌متر استاندارد زیر لمینت‌ها جهت ممانعت از انتقال صدا و صدای تق‌تق حین قدم زدن."
      },
      {
        "id": 1115,
        "faTitle": "کفپوش‌های پلیمری (PVC، اپوکسی)",
        "slug": "c-1115",
        "parentId": 12,
        "saleType": "both",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: اپوکسی‌های دکوراتیو خودتراز شونده بدون حباب، کفپوش‌های PVC رولی ضدآب برای فضاهای تر. توصیه استراتژیک: زیرسازی کامل و ساب زدن بتن کف با دستگاه‌های مخصوص قبل از اعمال اپوکسی جهت تضمین چسبندگی کامل."
      },
      {
        "id": 1116,
        "faTitle": "سایر پوشش های کف (موزاییک، موکت)",
        "slug": "c-1116",
        "parentId": 12,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: موزاییک‌های پلیمری سمنت‌پلاس سنگین جهت پارکینگ، موکت‌های تایل اداری با الیاف پلی‌آمید. توصیه استراتژیک: ارائه طرح‌های چیدمان شطرنجی موکت‌های تایل برای فضاهای اداری پروژه جهت تسهیل دسترسی به داکت‌های کفسازی."
      },
      {
        "id": 1117,
        "faTitle": "رنگ و پوشش‌های دکوراتیو",
        "slug": "c-1117",
        "parentId": 12,
        "saleType": "both",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: رنگ‌های اکریلیک پایه آب بی‌بو هادی با قابلیت شستشو، پوشش‌های دکوراتیو پتینه تزیینی. توصیه استراتژیک: سمباده‌زنی ماشین‌آلاتی بتونه دیوارها کناف قبل از رنگ‌آمیزی، سطحی کاملاً فلت و صیقلی همانند ورق آهن تحویل می‌دهد."
      },
      {
        "id": 1118,
        "faTitle": "کاغذ دیواری و دیوارپوش",
        "slug": "c-1118",
        "parentId": 12,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: کاغذ دیواری‌های قابل شستشو با گرماژ بالا و بدون درز در حین نصب، دیوارپوش‌های پی‌وی‌سی. توصیه استراتژیک: استفاده از چسب‌های گیاهی بدون بو متیلان آلمان جهت ممانعت از زرد شدن کاغذ دیواری‌ها در اثر رطوبت گچ زیرکار."
      },
      {
        "id": 1119,
        "faTitle": "سقف و دیوار کاذب و کناف",
        "slug": "c-1119",
        "parentId": 12,
        "saleType": "both",
        "negotiationStages": [
          "plaster"
        ],
        "buyStages": [
          "early-finishing"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: پانل‌های پیش‌ساخته گچی کناف اصل، اتصالات استاندارد گالوانیزه F47. توصیه استراتژیک: اجرای نوارهای درزگیر فایبرگلاس (مش کناف) حین بتونه‌کاری جهت تضمین عدم ایجاد ترک در اثر نشست‌های خرد ساختمان."
      }
    ]
  },
  {
    "id": 13,
    "faTitle": "معماری داخلی و دکوراسیون",
    "slug": "interior-architecture-and-decoration",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1120,
        "faTitle": "کابینت آشپزخانه",
        "slug": "c-1120",
        "parentId": 13,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: ورق‌های ام‌دی‌اف هایگلاس ایزوفام، صفحات کورین ضدخط‌وخش کوارتز رویه. توصیه استراتژیک: فرآیند طراحی و مهندسی فروش کابینت باید هم‌زمان با لوله‌کشی تأسیسات سفت‌کاری انجام شود تا خروجی‌ها جابجا نشوند."
      },
      {
        "id": 1121,
        "faTitle": "تجهیزات فرنیش آشپزخانه",
        "slug": "c-1121",
        "parentId": 13,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: هودهای توکار مخفی با فیلترهای آلومینیومی، گازهای صفحه‌ای شیشه‌ای مجهز به ترموکوپل. توصیه استراتژیک: ارائه پکیج‌های کامل فرنیش (فر، مایکروویو، گاز، هود) از یک برند واحد لوکس جهت افزایش هارمونی دکوراسیون."
      },
      {
        "id": 1122,
        "faTitle": "کمد و مصنوعات چوبی",
        "slug": "c-1122",
        "parentId": 13,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: ریل‌های کمدی غلتکی کم‌صدا آرام‌بند، استفاده از چهارچوب‌های چوبی با رویه‌های ام‌دی‌اف. توصیه استراتژیک: طراحی کمدهای دیواری عمیق مجهز به اکسسوری‌های ارگانایزر داخلی (جاکرافتی، رگال متحرک) کارهای لوکس."
      },
      {
        "id": 1123,
        "faTitle": "اکسسوری",
        "slug": "c-1123",
        "parentId": 13,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: آیینه‌های بک‌لایت ضدبخار هوشمند، سبدهای تاشو و جاکفشی‌های متحرک داخل کمدها. توصیه استراتژیک: ارائه اکسسوری‌های نورپردازی داخل کابینت‌ها (سنسورهای چشمی با باز شدن درب) مزیت بصری بالایی دارد."
      },
      {
        "id": 1124,
        "faTitle": "پارتیشن، پرده و جداکننده‌ها",
        "slug": "c-1124",
        "parentId": 13,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: پرده‌های زبرا اتوماتیک برقی هوشمند، پارتیشن‌های شیشه‌ای فریم‌لس دوجداره سندبلاست. توصیه استراتژیک: قابلیت اتصال موتور پرده‌های برقی به سیستم BMS واحد جهت اجرای سناریوهای بیدارباش هوشمند کارفرما."
      },
      {
        "id": 1125,
        "faTitle": "مبلمان اداری و خانگی",
        "slug": "c-1125",
        "parentId": 13,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: استفاده از فوم‌های سرد یورولوکس صندلی‌ها جهت حفظ دوام، پایه‌های راش جنگلی. توصیه استراتژیک: ارائه پکیج مبلمان کامل لابی و اتاق جلسات مدیریت به سازندگان در زمان اتمام ظریف‌کاری جهت تسریع تحویل."
      },
      {
        "id": 1126,
        "faTitle": "نرده و حفاظ",
        "slug": "c-1126",
        "parentId": 13,
        "saleType": "both",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: نرده‌های استیل گرید ۳۰۴ پرمقاومت ضدزنگ، نرده‌های مدرن شیشه‌ای با اتصالات اسپیگوت. توصیه استراتژیک: ارتفاع نرده‌های پله‌ها و بالکن‌ها باید کاملاً منطبق بر ضوابط مبحث ۴ مقررات ملی ساختمان جهت اخذ پایان‌کار باشد."
      },
      {
        "id": 1127,
        "faTitle": "سازه های پیش ساخته",
        "slug": "c-1127",
        "parentId": 13,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: کانکس‌های اداری مهندسی با پوشش ساندویچ پانل پشم سنگ، شاسی تیرآهن‌های سنگین. توصیه استراتژیک: سرعت بالا در دمونتاژ و جابجایی سازه پیش‌ساخته پس از اتمام پروژه، مزیت مالی بالایی برای پیمانکار دارد."
      },
      {
        "id": 1128,
        "faTitle": "طراحی و ساخت غرفه‌های نمایشگاهی",
        "slug": "c-1128",
        "parentId": 13,
        "saleType": "consultative",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: طراحی دکوراسیون خلاقانه متناسب با هویت برند، تعهد بالای نصب سریع پیش از آغاز نمایشگاه. توصیه استراتژیک: استفاده از سازه‌های مدولار باکیفیت جهت کاهش هزینه‌های ساخت غرفه برای شرکت‌های تولیدکننده مصالح ساختمانی."
      },
      {
        "id": 1129,
        "faTitle": "اقلام و تجهیزات متفرقه",
        "slug": "c-1129",
        "parentId": 13,
        "saleType": "fast",
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "عامل کلیدی: گاوصندوق‌های نسوز سنگین ضدسرقت مجهز به قفل‌های الکترونیکی اثرانگشتی بیومتریک. توصیه استراتژیک: تعبیه فضا و باکس مخفی فولادی داخل دیوارهای بتنی یا کمد دیواری مستر جهت قرارگیری ایمن گاوصندوق."
      }
    ]
  },
  {
    "id": 14,
    "faTitle": "محوطه‌سازی و فضای سبز",
    "slug": "landscaping-and-green-space",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1130,
        "faTitle": "طراحی و اجرای فضای سبز",
        "slug": "c-1130",
        "parentId": 14,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: درختچه‌های زینتی مقاوم به اقلیم، طراحی لنداسکیپ با چشم‌انداز چندبعدی گیاهی. توصیه استراتژیک: استفاده از خاک‌های زراعی غنی‌شده پیت‌ماس و کوکوپیت جهت تضمین ماندگاری گیاهان لابی و حیاط در درازمدت."
      },
      {
        "id": 1131,
        "faTitle": "کف‌سازی محوطه (سنگفرش)",
        "slug": "c-1131",
        "parentId": 14,
        "saleType": "both",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: واش‌بتن‌های نانو با جذب آب نزدیک به صفر، پیورهای بتنی مقاوم در برابر یخبندان شدید. توصیه استراتژیک: زیرسازی غرق‌آب سیمانی و اجرای درزهای انبساط کلفتی حین سنگ‌فرش محوطه جهت ممانعت از لق شدن سنگ‌ها."
      },
      {
        "id": 1132,
        "faTitle": "سیستم‌های آبیاری",
        "slug": "c-1132",
        "parentId": 14,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: کنترلرهای آبیاری اتوماتیک هانتر با سنسورهای باران، نازل‌های آبیاری قطره‌ای توکار مخفی. توصیه استراتژیک: مسیر لوله‌های اصلی آبیاری باید قبل از اجرای کفسازی نهایی حیاط از زیر لایه‌های خاک عبور داده شوند."
      },
      {
        "id": 1133,
        "faTitle": "مبلمان شهری و پارکی",
        "slug": "c-1133",
        "parentId": 14,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: نیمکت‌های بتنی خودرنگ مقاوم در برابر آفتاب، سطل‌های زباله فلزی با آبکاری عمیق. توصیه استراتژیک: نصب انکرپلت‌های مهار مبلمان حیاط داخل بتن کفسازی جهت ممانعت از سرقت یا واژگونی اقلام محوطه."
      },
      {
        "id": 1134,
        "faTitle": "آلاچیق، پرگولا و سایبان",
        "slug": "c-1134",
        "parentId": 14,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: پرگولاهای با چوب‌های اشباع‌شده ضدقارچ، سایبان‌های برقی متحرک مجهز به پارچه‌های ضدآب. توصیه استراتژیک: اتصال پایه‌های اصلی آلاچیق‌ها به استراکچر فلزی اسکلت ساختمان در روف‌گاردن جهت ممانعت از کنده شدن در باد شدید."
      },
      {
        "id": 1135,
        "faTitle": "طراحی و اجرای روف گاردن",
        "slug": "c-1135",
        "parentId": 14,
        "saleType": "consultative",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: علیق‌کاری چندلایه با ژئوممبران‌ها و فیلتر خاک‌های سبک زهکشی، چمن مصنوعی لوکس. توصیه استراتژیک: این سیستم‌ها بار مرده بالایی دارند؛ محاسبات سازه سقف بام باید حین فاز ۲ محاسبات اسکلت با طراح هماهنگ شده باشد."
      }
    ]
  },
  {
    "id": 15,
    "faTitle": "تجهیزات لابی و مشاعات",
    "slug": "lobby-and-common-area-equipment",
    "excludeFromPages": false,
    "subcategories": [
      {
        "id": 1136,
        "faTitle": "تجهیزات خدماتی و نظافتی",
        "slug": "c-1136",
        "parentId": 15,
        "saleType": "consultative",
        "negotiationStages": [
          "wall-building"
        ],
        "buyStages": [
          "plaster"
        ],
        "executionStages": [
          "finishing"
        ],
        "strategicAdvice": "عامل کلیدی: جاروهای مرکزی قدرتمند، شوتینگ‌های زباله مجهز به سیستم شستشوی اتوماتیک جت‌واش. توصیه استراتژیک: لوله‌گذاری‌های شوتینگ زباله و رایزرهای جاروی مرکزی باید حین دیوارچینی و سفت‌کاری داکت‌ها کاملاً مهار و اجرا شوند."
      },
      {
        "id": 1137,
        "faTitle": "تجهیزات رفاهی و عمومی",
        "slug": "c-1137",
        "parentId": 15,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: سیستم‌های صوتی مرکزی لابی با بلندگوهای سقفی کم‌امپدانس جهت پخش یکنواخت موسیقی. توصیه استراتژیک: کابل‌کشی‌های صوتی بلندگوها باید حین گچ‌وخاک داخل لوله‌های خرطومی مجزا تا تابلوی مرکزی لابی‌من هدایت شوند."
      },
      {
        "id": 1138,
        "faTitle": "تجهیزات پارکینگ",
        "slug": "c-1138",
        "parentId": 15,
        "saleType": "fast",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: استاپرهای چرخ‌های لاستیکی، محافظ ستون‌های انعطاف‌پذیر، خط‌کشی‌های ترافیکی اپوکسی. توصیه استراتژیک: ضربه‌گیرهای لاستیکی ستون‌ها از آسیب به بدنه خودروی مالکان جلوگیر کرده و حس کیفیت بالایی در بدو ورود ایجاد می‌کند."
      },
      {
        "id": 1139,
        "faTitle": "تجهیزات لابی",
        "slug": "c-1139",
        "parentId": 15,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: لوسترهای مجلل لابی، کانسپت کارهای چوبی لوکس، پیشخوان‌های لابی‌من از سنگ لوکس طبیعی. توصیه استراتژیک: لابی ویترین اصلی پروژه است؛ هماهنگی کامل مبلمان و لوسترها با سبک معماری (مدرن/کلاسیک) الزامی است."
      },
      {
        "id": 1140,
        "faTitle": "تجهیزات مخصوص معلولین",
        "slug": "c-1140",
        "parentId": 15,
        "saleType": "both",
        "negotiationStages": [
          "finishing"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: جک‌های بالابر هیدرولیکی مخصوص ویلچر، دستگیره‌های کمکی تاشو حمام استاندارد و تایید ضوابط. توصیه استراتژیک: اجرای دقیق ریل‌ها و کدهای ارتفاعی جک بالابر جهت اخذ پایان‌کار شهرداری بدون جریمه‌های کمیسیون ماده ۱۰۰."
      },
      {
        "id": 1141,
        "faTitle": "مشاعات ساختمان",
        "slug": "c-1141",
        "parentId": 15,
        "saleType": null,
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "توضیح: این عنوان یک دسته بندی مفهومی کلی فاقد طبقه‌بندی مستقیم تأمین مصالح است و اقلام آن در ساب‌کتگوری‌های بالا توزیع شده است."
      },
      {
        "id": 1142,
        "faTitle": "تجهیزات پزشکی",
        "slug": "c-1142",
        "parentId": 15,
        "saleType": "fast",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: جعبه‌های کمک‌های اولیه مجهز دیواری، کپسول‌های اکسیژن سبک اضطراری در نگهبانی لابی. توصیه استراتژیک: نصب تجهیزات ایمنی پزشکی لابی حس امنیت بالایی برای ساکنان مجتمع‌های بلندمرتبه برج مسکونی ایجاد می‌کند."
      }
    ]
  },
  {
    "id": 16,
    "faTitle": "املاک و مستغلات",
    "slug": "real-estate",
    "excludeFromPages": true,
    "subcategories": [
      {
        "id": 1143,
        "faTitle": "خرید و فروش املاک",
        "slug": "c-1143",
        "parentId": 16,
        "saleType": "consultative",
        "negotiationStages": [
          "completion"
        ],
        "buyStages": [
          "completion"
        ],
        "executionStages": [
          "completion"
        ],
        "strategicAdvice": "عامل کلیدی: کارگزاری فروش انحصاری واحدهای پروژه، شبکه‌های ارتباطی گسترده با خریداران سرمایه‌گذار. توصیه استراتژیک: آغاز فرآیند مارکتینگ و پیش‌فروش واحدها از فاز اواسط سفت‌کاری جهت تأمین مالی جریان نقدینگی ساخت سازنده."
      }
    ]
  },
  {
    "id": 17,
    "faTitle": "سایر",
    "slug": "other",
    "excludeFromPages": true,
    "subcategories": [
      {
        "id": 1144,
        "faTitle": "سایر",
        "slug": "c-1144",
        "parentId": 17,
        "saleType": null,
        "negotiationStages": [
          "pre-construction"
        ],
        "buyStages": [
          "pre-construction"
        ],
        "executionStages": [
          "pre-construction"
        ],
        "strategicAdvice": "توضیح: این عنوان یک دسته کلی مرجع فاقد طبقه‌بندی مستقیم زنجیره تأمین کالا است و کل اقلام در کدهای بالا مهندسی شده‌اند."
      }
    ]
  }
];
