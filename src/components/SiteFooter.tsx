import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#1e3d2a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
            The Cranleigh Gardener
          </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">Landscaping, patios & garden maintenance.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/75 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 transition-colors hover:text-white">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">Contact</p>
            <div className="mt-4 space-y-2 text-sm opacity-85">
              <p>7 Sylvaways Close, Cranleigh GU6</p>
              <p>
                <a href="tel:07871388326" className="text-white/75 transition-colors hover:text-white">
                  07871 388326
                </a>
              </p>
              <p>Free quotes · 5★ local rating</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-current/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} The Cranleigh Gardener</p>
          <p>Demo concept site for outreach — not affiliated with the live business.</p>
        </div>
      </div>
    </footer>
  );
}
