export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
      <a href="#" className="display text-lg tracking-tight md:text-xl">
        Amplify<span className="text-accent">.</span>
      </a>
      <a
        href="#contact"
        className="rounded-full border border-line bg-card/60 px-5 py-2.5 text-sm backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-fg hover:border-transparent"
      >
        Start a project
      </a>
    </header>
  );
}
