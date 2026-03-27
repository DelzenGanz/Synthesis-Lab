const items = [
  'Web Development',
  'UI/UX Design',
  'Brand Identity',
  'Laravel',
  'React',
  'Bootstrap',
  'Company Profile',
  'E-commerce',
  'API Integration',
]

function TickerContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 whitespace-nowrap">
          <span className="font-mono text-xs tracking-widest uppercase text-textMuted">
            {item}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-light shrink-0" />
        </span>
      ))}
    </>
  )
}

export default function Ticker() {
  return (
    <div className="bg-bg2 border-y border-mid/30 py-3 overflow-hidden">
      <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
        <div className="flex gap-6">
          <TickerContent />
        </div>
        <div className="flex gap-6">
          <TickerContent />
        </div>
      </div>
    </div>
  )
}
