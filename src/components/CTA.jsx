import { motion } from 'framer-motion'

const waLink =
  'https://wa.me/6281393091751?text=Halo%20Synthesis%20Lab%2C%20saya%20tertarik%20dengan%20layanan%20kalian.'

export default function CTA() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#285A4830_0%,transparent_70%)]" />
      {/* Floating ambient orbs */}
      <div
        className="glow-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#285A48]"
        style={{ animation: 'float-glow 10s ease-in-out infinite', opacity: 0.18 }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] top-0 -left-20 bg-[#3d8a6e]"
        style={{ animation: 'float-glow-reverse 14s ease-in-out infinite', opacity: 0.1 }}
      />
      <div
        className="glow-orb w-[250px] h-[250px] -bottom-10 -right-16 bg-[#1a4a3a]"
        style={{ animation: 'float-glow 12s ease-in-out infinite 4s', opacity: 0.12 }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          className="font-syne font-extrabold text-4xl md:text-6xl tracking-tight text-textMain mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s{' '}
          <span className="font-serif italic text-light">build</span>{' '}
          something great
        </motion.h2>

        <motion.p
          className="font-mono text-textMuted text-sm max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to bring your idea to life? We&apos;d love to hear about your
          project and explore how we can help.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="bg-light text-bg font-syne font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded hover:opacity-90 transition-opacity"
          >
            Start a Project
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-mid text-textMuted font-syne font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded hover:text-light hover:border-light/40 transition-colors"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
