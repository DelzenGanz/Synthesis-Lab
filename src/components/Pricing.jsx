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
      className={`relative p-9 rounded-lg ${
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
          Most Popular
        </div>
      )}

      <div className="font-mono text-xs tracking-widest uppercase text-textMuted mb-4">
        {plan.tier}
      </div>

      <div className="mb-1">
        <span className="font-syne font-extrabold text-5xl text-textMain">
          {plan.price}
        </span>
        <span className="text-textMuted text-base ml-1 font-mono">Jt</span>
      </div>

      <div className="font-mono text-xs text-textMuted mb-6">
        {plan.currency}
      </div>

      <div className="border-t border-mid/30 mb-6" />

      <ul className="space-y-0">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 font-mono text-xs text-textMuted py-2 border-b border-white/[0.04]"
          >
            <span className="text-light mt-px">→</span>
            <span>{f}</span>
          </li>
        ))}
        {plan.disabledFeatures.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 font-mono text-xs text-textMuted py-2 border-b border-white/[0.04] opacity-35"
          >
            <span className="mt-px">×</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-8 block w-full text-center font-syne font-bold text-xs tracking-widest uppercase py-3 rounded transition-colors ${
          plan.featured
            ? 'bg-light text-bg hover:opacity-90'
            : 'border border-mid/30 text-textMuted hover:text-light hover:border-light/40'
        }`}
      >
        Get Started
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
          Pricing
        </span>
      </motion.div>

      <motion.h2
        className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Simple <span className="font-serif italic text-light">pricing</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {pricing.map((plan) => (
          <PricingCard key={plan.tier} plan={plan} />
        ))}
      </motion.div>
    </section>
  )
}
