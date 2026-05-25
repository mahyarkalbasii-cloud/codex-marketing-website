export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" dir="ltr" className="text-left">
      {children}
    </div>
  );
}
