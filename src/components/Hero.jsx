import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const stats = [
  { number: '12+', label: 'Projects' },
  { number: '100%', label: 'On-Time' },
  { number: '2', label: 'Specialists' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div
        className="glow-orb w-[600px] h-[600px] -top-40 -left-40 bg-[#285A48]"
        style={{ animation: 'float-glow 12s ease-in-out infinite' }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] -bottom-20 -right-32 bg-[#1a4a3a]"
        style={{ animation: 'float-glow-reverse 15s ease-in-out infinite' }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] top-1/3 right-1/4 bg-[#3d8a6e]"
        style={{ animation: 'float-glow 18s ease-in-out infinite 3s', opacity: 0.08 }}
      />

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, #285A48 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Top-to-bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative z-10 max-w-4xl">
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-8 h-px bg-light" />
          <span className="font-mono text-xs tracking-widest uppercase text-light">
            Semarang · Indonesia · Est. 2026
          </span>
        </motion.div>

        <motion.h1
          className="font-syne font-extrabold tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We Build{' '}
          <span className="font-serif italic text-light">Digital</span>
          <br />
          Products
        </motion.h1>

        <motion.p
          className="font-mono text-sm text-textMuted max-w-lg mx-auto mb-12"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Synthesizing Flawless Code and Modern Aesthetics — a two-person
          digital studio crafting premium websites and web applications.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-12 md:gap-16"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-syne font-extrabold text-3xl md:text-4xl text-textMain">
                {stat.number}
              </div>
              <div className="font-mono text-xs text-textMuted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-textMuted">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-light/40"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
