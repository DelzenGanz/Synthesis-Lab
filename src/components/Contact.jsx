import { useState } from 'react'
import { motion } from 'framer-motion'

const waChat =
  'https://wa.me/6281393091751?text=Halo%20Synthesis%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20kalian.'
const waCall = 'https://wa.me/6281393091751'

const contactItems = [
  { label: 'Email', value: 'shynthesislab@gmail.com', icon: '✉' },
  { label: 'WhatsApp', value: '+62 8139 3091 751', icon: '💬', href: waChat },
  { label: 'Location', value: 'Kota Semarang, Jawa Tengah, Indonesia', icon: '📍' },
  { label: 'Instagram', value: '@shyntesislab.id', icon: '📸', href: 'https://instagram.com/shyntesislab.id' },
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
    <section id="contact" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient glow */}
      <div
        className="glow-orb w-[400px] h-[400px] -top-10 -left-32 bg-[#285A48]"
        style={{ animation: 'float-glow 15s ease-in-out infinite' }}
      />
      <div className="grid md:grid-cols-2 gap-20 relative z-10">
        {/* Left — Quick Contact + Form */}
        <motion.div {...reveal}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-light" />
            <span className="font-mono text-xs tracking-widest uppercase text-light">
              Contact
            </span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-textMain mb-3">
            Get in <span className="font-serif italic text-light">touch</span>
          </h2>

          <p className="font-mono text-sm text-textMuted mb-6">
            Respon lebih cepat? Langsung hubungi kami via WhatsApp.
          </p>

          {/* WhatsApp Quick Actions */}
          <div className="flex gap-3 mb-8">
            <a
              href={waChat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-syne font-bold text-xs tracking-wide py-3.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp
            </a>
            <a
              href="tel:+6281393091751"
              className="flex items-center justify-center gap-2.5 bg-card border border-mid/30 text-textMain hover:border-light/40 hover:text-light font-syne font-bold text-xs tracking-wide px-5 py-3.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Telepon
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-mid/30" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-textMuted">
              atau isi form
            </span>
            <div className="flex-1 h-px bg-mid/30" />
          </div>

          {sent ? (
            <div className="bg-card border border-light/30 rounded-lg p-8 text-center">
              <div className="text-light text-3xl mb-3">✓</div>
              <p className="font-syne font-bold text-textMain mb-1">
                Terkirim! Kami akan segera menghubungi Anda.
              </p>
              <p className="font-mono text-xs text-textMuted">
                Biasanya kami merespon dalam 24 jam.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                required
                className="w-full bg-card border border-mid/30 text-textMain font-mono text-sm p-3 rounded-lg focus:border-light/40 focus:ring-0 outline-none transition-colors placeholder:text-textMuted/50"
              />
              <input
                type="text"
                name="contact"
                placeholder="Email atau WhatsApp"
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
                  Pilih Paket
                </option>
                <option value="nexus">Nexus — Paket Organisasi</option>
                <option value="origin">Origin — Kehadiran Digital</option>
                <option value="catalyst">Catalyst — Pertumbuhan Aktif</option>
                <option value="vertex">Vertex — Skala Penuh</option>
                <option value="custom">Custom Project</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Ceritakan tentang proyek Anda..."
                required
                className="w-full bg-card border border-mid/30 text-textMain font-mono text-sm p-3 rounded-lg focus:border-light/40 focus:ring-0 outline-none transition-colors resize-none placeholder:text-textMuted/50"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-light text-bg font-syne font-bold text-xs tracking-widest uppercase py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {sending ? 'Mengirim...' : 'Kirim Pesan'}
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

          {/* Free Discovery Call Box */}
          <div className="border border-mid/40 bg-mid/[0.08] rounded-lg p-6 mb-6">
            <h3 className="font-syne font-bold text-textMain text-sm mb-2">
              Free Discovery Call
            </h3>
            <p className="font-mono text-xs text-textMuted leading-relaxed mb-4">
              Belum yakin mulai dari mana? Book free call 30 menit dan kami
              bantu mapping scope, timeline, dan budget proyek kamu.
            </p>
            <a
              href={waChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-mid text-textMuted font-syne font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded hover:text-light hover:border-light/40 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </a>
          </div>

          {/* Response time note */}
          <div className="flex items-start gap-3 bg-card border border-mid/20 rounded-lg p-4">
            <div className="text-light text-sm mt-0.5">⚡</div>
            <div>
              <p className="font-syne font-bold text-xs text-textMain mb-1">
                Respon Cepat
              </p>
              <p className="font-mono text-[11px] text-textMuted leading-relaxed">
                WhatsApp biasanya dibalas dalam 1–2 jam di jam kerja.
                Form email direspon dalam 24 jam.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
