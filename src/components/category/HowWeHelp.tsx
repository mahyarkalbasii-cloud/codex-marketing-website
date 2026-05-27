import { CategorySection } from "@/components/category/CategorySection";

const items = [
  {
    title: "شناسایی پروژه‌های فعال و مرتبط",
    description: "پروژه‌هایی را ببینید که با بازار هدف و دسته محصول شما تناسب بیشتری دارند.",
  },
  {
    title: "اولویت‌بندی بر اساس مرحله ساخت",
    description: "فرصت‌ها را بر اساس زمان واقعی نیاز، خرید و پیگیری مرتب کنید.",
  },
  {
    title: "CRM و پیگیری زمان‌مند",
    description: "تماس‌ها، نتیجه مذاکره و پیگیری بعدی را در یک مسیر منظم نگه دارید.",
  },
  {
    title: "پیامک هدفمند به سازنده",
    description: "برای فرصت‌های مناسب، پیام درست را در زمان درست به دست تصمیم‌گیر برسانید.",
  },
];

export function HowWeHelp() {
  return (
    <CategorySection>
      <h2 className="text-2xl font-black md:text-3xl">
        پرشین‌سازه چطور کمک می‌کند
      </h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item.title} className="category-card p-5">
            <span className="text-xs font-black text-muted-foreground">
              گام {index + 1}
            </span>
            <h3 className="mt-3 font-black leading-8">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </CategorySection>
  );
}
