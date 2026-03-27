import { motion } from 'framer-motion'

const features = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'We ship in weeks, not months. No bloated timelines or unnecessary delays.',
  },
  {
    icon: '🎯',
    title: 'Pixel Perfect',
    desc: 'Every element is intentional. We obsess over the details so you don\'t have to.',
  },
  {
    icon: '🔧',
    title: 'Modern Stack',
    desc: 'Built with React, Laravel, and tools that scale. No legacy baggage.',
  },
  {
    icon: '🤝',
    title: 'Direct Access',
    desc: 'Talk to the people building your product. No project managers in between.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Left column */}
        <motion.div {...reveal}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-light" />
            <span className="font-mono text-xs tracking-widest uppercase text-light">
              About Us
            </span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-8">
            Built by{' '}
            <span className="font-serif italic text-light">makers</span>, not
            managers.
          </h2>

          <div className="space-y-4">
            <p className="font-mono text-sm text-textMuted leading-relaxed">
              We are Synthesis Labs — a{' '}
              <span className="text-textMain">two-person digital studio</span>{' '}
              based in Semarang, Indonesia. We design and build digital products
              that look premium and work flawlessly.
            </p>
            <p className="font-mono text-sm text-textMuted leading-relaxed">
              No layers of bureaucracy. No outsourced teams. When you work with
              us, you work{' '}
              <span className="text-textMain">directly with the people</span>{' '}
              who design and code your product.
            </p>
            <p className="font-mono text-sm text-textMuted leading-relaxed">
              We believe great digital products come from{' '}
              <span className="text-textMain">small, focused teams</span> that
              care deeply about craft. That's exactly what we are.
            </p>
          </div>
        </motion.div>

        {/* Right column — 2x2 grid */}
        <motion.div
          className="grid grid-cols-2 gap-px bg-mid/30 border border-mid/30 rounded-lg overflow-hidden"
          {...reveal}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((f) => (
            <div key={f.title} className="bg-card p-6">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-syne font-bold text-textMain text-sm mb-2">
                {f.title}
              </h3>
              <p className="font-mono text-xs text-textMuted leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
