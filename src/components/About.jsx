import { motion } from 'framer-motion'

const icons = {
  rocket: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  grid: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
}

const features = [
  {
    icon: icons.rocket,
    title: 'Fast Delivery',
    desc: 'We ship in weeks, not months. No bloated timelines or unnecessary delays.',
  },
  {
    icon: icons.grid,
    title: 'Pixel Perfect',
    desc: 'Every element is intentional. We obsess over the details so you don\'t have to.',
  },
  {
    icon: icons.code,
    title: 'Modern Stack',
    desc: 'Built with React, Laravel, and tools that scale. No legacy baggage.',
  },
  {
    icon: icons.users,
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
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient glow */}
      <div
        className="glow-orb w-[400px] h-[400px] -top-20 right-0 bg-[#285A48]"
        style={{ animation: 'float-glow-reverse 14s ease-in-out infinite' }}
      />
      <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
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
              We are Synthesis Lab — a{' '}
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
              <div className="w-9 h-9 rounded-lg bg-mid/15 border border-mid/25 flex items-center justify-center text-light mb-4">
                {f.icon}
              </div>
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
