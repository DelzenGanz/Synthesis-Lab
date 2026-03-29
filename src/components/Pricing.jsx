import { motion } from 'framer-motion'
import pricing from '../data/pricing'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function PricingCard({ plan }) {
  return (
    <motion.div
      className={`relative p-8 rounded-lg flex flex-col ${
        plan.featured
          ? 'bg-[#0f1f18] border border-light'
          : 'bg-card border border-mid/30'
      }`}
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      {plan.featured && (
        <div className="absolute top-0 right-6 bg-light text-bg text-[9px] font-syne font-extrabold px-3 py-1 tracking-wider uppercase">
          Paling Diminati
        </div>
      )}

      <div className="font-mono text-[10px] tracking-widest uppercase text-textMuted mb-2">
        {plan.tier}
      </div>

      <h3 className="font-serif italic text-3xl text-textMain mb-1">
        {plan.name}
      </h3>

      <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4">
        · {plan.subtitle}
      </div>

      <p className="font-mono text-xs text-textMuted leading-relaxed mb-5">
        {plan.description}
      </p>

      {/* Price box */}
      <div className="bg-bg2 border border-mid/20 rounded-lg p-4 mb-5">
        <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1">
          Investasi
        </div>
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-syne font-extrabold text-2xl text-textMain">
              Rp {plan.price}
            </span>
            <span className="text-textMuted text-sm ml-1 font-mono">
              {plan.unit}
            </span>
          </div>
          <div className="font-mono text-[10px] text-textMuted text-right leading-tight">
            {plan.timeline}
          </div>
        </div>
      </div>

      <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
        Termasuk dalam paket
      </div>

      <ul className="space-y-0 mb-6 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 font-mono text-xs text-textMuted py-2 border-b border-white/[0.04]"
          >
            <span className="text-light mt-0.5 text-[8px]">●</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Target tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {plan.targets.map((t) => (
          <span
            key={t}
            className="border border-mid/40 text-textMuted text-[10px] px-3 py-1 rounded-full font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className={`block w-full text-center font-syne font-bold text-xs tracking-widest uppercase py-3 rounded transition-colors ${
          plan.featured
            ? 'bg-light text-bg hover:opacity-90'
            : 'border border-mid/30 text-textMuted hover:text-light hover:border-light/40'
        }`}
      >
        Mulai Proyek
      </a>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-8 h-px bg-light" />
        <span className="font-mono text-xs tracking-widest uppercase text-light">
          Catalog
        </span>
      </motion.div>

      <motion.h2
        className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Our <span className="font-serif italic text-light">Catalog</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {pricing.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </motion.div>
    </section>
  )
}
