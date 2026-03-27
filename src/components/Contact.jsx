import { useState } from 'react'
import { motion } from 'framer-motion'

const waLink =
  'https://wa.me/6281234567890?text=Halo%20Synthesis%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20kalian.'

const contactItems = [
  { label: 'Email', value: 'hello@synthesislabs.id', icon: '✉' },
  { label: 'WhatsApp', value: '+62 812 3456 7890', icon: '💬', href: waLink },
  { label: 'Location', value: 'Semarang, Indonesia', icon: '📍' },
  { label: 'Availability', value: 'Mon – Fri, 09:00 – 18:00 WIB', icon: '🕘' },
]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSent(true)
      form.reset()
    } catch {
      /* allow silent fail */
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20">
        {/* Left — Form */}
        <motion.div {...reveal}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-light" />
            <span className="font-mono text-xs tracking-widest uppercase text-light">
              Contact
            </span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-8">
            Get in <span className="font-serif italic text-light">touch</span>
          </h2>

          {sent ? (
            <div className="bg-card border border-light/30 rounded-lg p-8 text-center">
              <div className="text-light text-3xl mb-3">✓</div>
              <p className="font-syne font-bold text-textMain mb-1">
                Sent! We&apos;ll be in touch soon.
              </p>
              <p className="font-mono text-xs text-textMuted">
                We typically respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-card border border-mid/30 text-textMain font-mono text-sm p-3 rounded-lg focus:border-light/40 focus:ring-0 outline-none transition-colors placeholder:text-textMuted/50"
              />
              <input
                type="text"
                name="contact"
                placeholder="Email or WhatsApp"
                required
                className="w-full bg-card border border-mid/30 text-textMain font-mono text-sm p-3 rounded-lg focus:border-light/40 focus:ring-0 outline-none transition-colors placeholder:text-textMuted/50"
              />
              <select
                name="service"
                defaultValue=""
                required
                className="w-full bg-card border border-mid/30 text-textMain font-mono text-sm p-3 rounded-lg focus:border-light/40 focus:ring-0 outline-none transition-colors"
              >
                <option value="" disabled className="text-textMuted">
                  Select a Service
                </option>
                <option value="web-development">Web Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="brand-identity">Brand Identity</option>
                <option value="e-commerce">E-Commerce</option>
                <option value="api-integration">API Integration</option>
                <option value="company-profile">Company Profile</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="w-full bg-card border border-mid/30 text-textMain font-mono text-sm p-3 rounded-lg focus:border-light/40 focus:ring-0 outline-none transition-colors resize-none placeholder:text-textMuted/50"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-light text-bg font-syne font-bold text-xs tracking-widest uppercase py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Right — Contact Info */}
        <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="space-y-4 mb-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-mid/10 border border-mid/20 flex items-center justify-center text-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-textMuted mb-0.5">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-textMain hover:text-light transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-mono text-sm text-textMain">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-mid/40 bg-mid/[0.08] rounded-lg p-6">
            <h3 className="font-syne font-bold text-textMain text-sm mb-2">
              Free Discovery Call
            </h3>
            <p className="font-mono text-xs text-textMuted leading-relaxed mb-4">
              Not sure where to start? Book a free 30-minute call and we&apos;ll
              help you map out your project scope, timeline, and budget.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-mid text-textMuted font-syne font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded hover:text-light hover:border-light/40 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
