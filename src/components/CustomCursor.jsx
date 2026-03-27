import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
      }
    }

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ring) {
        ring.style.left = `${ringX}px`
        ring.style.top = `${ringY}px`
      }
      requestAnimationFrame(lerp)
    }

    const onHoverEnter = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1.5)'
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1.3)'
    }
    const onHoverLeave = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1)'
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    window.addEventListener('mousemove', onMouseMove)
    requestAnimationFrame(lerp)

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onHoverEnter)
      el.addEventListener('mouseleave', onHoverLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverEnter)
        el.removeEventListener('mouseleave', onHoverLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-light rounded-full"
        style={{ transform: 'translate(-50%, -50%)', top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 border border-light/60 rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
          transition: 'transform 0.15s ease-out',
        }}
      />
    </>
  )
}
