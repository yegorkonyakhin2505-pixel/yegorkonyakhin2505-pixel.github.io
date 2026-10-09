const CLIENT_PORTAL_URL = "https://app.amplifymarketing.ae";

const pill =
  "rounded-full border px-4 py-2 text-xs backdrop-blur-md transition-colors sm:px-5 sm:py-2.5 sm:text-sm";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <a href="#" className="display text-lg tracking-tight md:text-xl">
        Amplify<span className="text-accent">.</span>
      </a>
      <nav className="flex items-center gap-2 sm:gap-3" aria-label="Primary">
        {/* Quiet outline variant: same pill, transparent fill, muted text */}
        <a
          href={CLIENT_PORTAL_URL}
          target="_blank"
          rel="noopener"
          className={`${pill} border-line bg-transparent text-muted hover:border-fg/40 hover:text-fg`}
        >
          <span className="hidden min-[480px]:inline">Client login</span>
          <span className="min-[480px]:hidden">Login</span>
        </a>
        <a
          href="#contact"
          className={`${pill} border-line bg-card/60 hover:border-transparent hover:bg-accent hover:text-accent-fg`}
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
