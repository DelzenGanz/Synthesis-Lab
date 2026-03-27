import { motion } from 'framer-motion'
import services from '../data/services'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="relative bg-card p-10 overflow-hidden group"
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-light origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="font-mono text-xs text-textMuted mb-7">
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="font-syne font-bold text-xl text-textMain mb-3">
        {service.title}
      </h3>

      <p className="font-mono text-xs text-textMuted leading-relaxed mb-7">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="border border-mid text-accent text-[10px] px-3 py-1 rounded-full font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-8 h-px bg-light" />
        <span className="font-mono text-xs tracking-widest uppercase text-light">
          Services
        </span>
      </motion.div>

      <motion.h2
        className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        What we <span className="font-serif italic text-light">do</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-px bg-mid/20 border border-mid/30 rounded-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
