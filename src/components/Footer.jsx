const links = ['About', 'Services', 'Works', 'Pricing', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-mid/30 bg-bg2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-8 gap-4">
        <a
          href="#"
          className="font-syne font-extrabold text-textMuted text-sm tracking-tight"
        >
          SYNTHESIS<span className="text-light">.</span>LAB
        </a>

        <p className="font-mono text-xs text-textMuted text-center">
          &copy; 2026 Synthesis Lab. Built in Semarang.
        </p>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs text-textMuted hover:text-light transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
