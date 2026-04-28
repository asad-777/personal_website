'use client'

import { useEffect, useRef, useState } from 'react'

export default function GlobalBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const starsRef = useRef([])
  const shootingStarsRef = useRef([])
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    
    // Theme sync
    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'Portfolio-dark')
    }
    
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    checkTheme()
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let w, h

    const init = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const count = isMobile ? 50 : 200
      starsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        blink: Math.random() * 0.05
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const color = isDark ? '255, 255, 255' : '0, 0, 0'

      starsRef.current.forEach(s => {
        s.x += s.vx
        s.y += s.vy

        if (s.x < 0) s.x = w
        if (s.x > w) s.x = 0
        if (s.y < 0) s.y = h
        if (s.y > h) s.y = 0

        const finalOpacity = s.opacity + Math.sin(Date.now() * s.blink) * 0.2
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${finalOpacity})`
        ctx.fill()
      })

      // Shooting Stars
      if (isDark && Math.random() < 0.005) {
        shootingStarsRef.current.push({
          x: Math.random() * w, y: Math.random() * h * 0.5,
          vx: 12, vy: 6, life: 1
        })
      }

      shootingStarsRef.current.forEach((s, i) => {
        s.x += s.vx; s.y += s.vy; s.life -= 0.02
        if (s.life <= 0) return shootingStarsRef.current.splice(i, 1)
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.life})`
        ctx.lineWidth = 2
        ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - 40, s.y - 20)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    init()
    draw()

    const handleResize = () => { init() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [isDark])

  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  )
}
