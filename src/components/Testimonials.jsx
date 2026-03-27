import { motion } from 'framer-motion'
import testimonials from '../data/testimonials'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function TestimonialCard({ t }) {
  return (
    <motion.div
      className="bg-card border border-mid/30 p-7 rounded-lg"
      variants={itemVariants}
    >
      <div className="text-light text-xs tracking-[3px] mb-4">
        {'★'.repeat(t.stars)}
      </div>

      <p className="font-serif italic text-base text-textMuted leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-bg2 border border-mid flex items-center justify-center text-light font-syne font-bold text-sm">
          {t.initials}
        </div>
        <div>
          <div className="font-syne font-bold text-xs text-textMain">
            {t.name}
          </div>
          <div className="font-mono text-[10px] text-textMuted">{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-8 h-px bg-light" />
        <span className="font-mono text-xs tracking-widest uppercase text-light">
          Testimonials
        </span>
      </motion.div>

      <motion.h2
        className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Client <span className="font-serif italic text-light">voices</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </motion.div>
    </section>
  )
}
