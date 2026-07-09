export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-[var(--page-x)] pb-8">
      <div className="content-grid flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase text-white/38 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Kashyap Hegde Kota</p>
        <p>Designed and engineered in dark mode</p>
      </div>
    </footer>
  );
}
