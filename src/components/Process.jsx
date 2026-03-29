import { motion } from 'framer-motion'
import processData from '../data/process'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Process() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-bg2 overflow-hidden">
      {/* Ambient glows */}
      <div
        className="glow-orb w-[500px] h-[500px] -top-32 left-1/4 bg-[#1a4a3a]"
        style={{ animation: 'float-glow 16s ease-in-out infinite 2s' }}
      />
      <div
        className="glow-orb w-[350px] h-[350px] -bottom-20 right-1/6 bg-[#285A48]"
        style={{ animation: 'float-glow-reverse 13s ease-in-out infinite' }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-px bg-light" />
          <span className="font-mono text-xs tracking-widest uppercase text-light">
            Process
          </span>
        </motion.div>

        <motion.h2
          className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          How we <span className="font-serif italic text-light">work</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-4 gap-px bg-mid/20 border border-mid/30 rounded-lg overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {processData.map((step) => (
            <motion.div
              key={step.step}
              className="bg-bg2 p-9"
              variants={itemVariants}
            >
              <div className="font-syne font-extrabold text-6xl text-mid/20 leading-none mb-4">
                {String(step.step).padStart(2, '0')}
              </div>
              <h3 className="font-syne font-bold text-textMain mb-2">
                {step.title}
              </h3>
              <p className="font-mono text-xs text-textMuted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
