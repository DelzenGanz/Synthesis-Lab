import { motion } from 'framer-motion'
import works from '../data/works'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function WorkCard({ work, isFirst }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg border-2 border-transparent group ${
        isFirst ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'
      } ${work.bgClass}`}
      variants={itemVariants}
      whileHover={{
        borderColor: '#a8d5b5',
      }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-light/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <div className="font-mono text-[9px] tracking-widest uppercase text-light mb-2">
          {work.category}
        </div>
        <h3 className="font-syne font-bold text-lg text-textMain">
          {work.title}
        </h3>
      </div>
    </motion.div>
  )
}

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        className="flex items-center gap-3 mb-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-8 h-px bg-light" />
        <span className="font-mono text-xs tracking-widest uppercase text-light">
          Works
        </span>
      </motion.div>

      <motion.h2
        className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Selected <span className="font-serif italic text-light">works</span>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {works.map((work, i) => (
          <WorkCard key={work.title} work={work} isFirst={i === 0} />
        ))}
      </motion.div>
    </section>
  )
}
