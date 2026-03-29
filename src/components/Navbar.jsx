import { motion, useScroll, useTransform } from 'framer-motion'

const links = ['About', 'Services', 'Works', 'Pricing', 'Contact']

export default function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.3])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(9,20,19,${v})`),
        borderBottom: useTransform(
          borderOpacity,
          (v) => `1px solid rgba(40,90,72,${v})`
        ),
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <a href="#" className="font-syne font-extrabold text-textMain text-lg tracking-tight">
          SYNTHESIS<span className="text-light">.</span>LAB
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs tracking-widest uppercase text-textMuted hover:text-light transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-light text-bg font-syne font-bold text-xs px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
        >
          Start a Project
        </a>
      </div>
    </motion.nav>
  )
}
