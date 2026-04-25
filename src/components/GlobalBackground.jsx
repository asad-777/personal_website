'use client'

import { useEffect, useRef, useState } from 'react'

/* ── helpers ──────────────────────────────────────── */
function extractRgb(cssVar) {
  try {
    const div = document.createElement('div')
    div.style.cssText = `display:none;color:var(${cssVar})`
    document.body.appendChild(div)
    const computed = getComputedStyle(div).color
    document.body.removeChild(div)

    const tmp = document.createElement('canvas')
    tmp.width = tmp.height = 1
    const ctx = tmp.getContext('2d', { willReadFrequently: true })
    ctx.fillStyle = computed || '#fff'
    ctx.fillRect(0, 0, 1, 1)
    const data = ctx.getImageData(0, 0, 1, 1).data
    return { r: data[0], g: data[1], b: data[2] }
  } catch (e) {
    console.warn(`Failed to extract ${cssVar}`, e)
    return { r: 255, g: 255, b: 255 }
  }
}

const DOT_RADIUS = 2.2;
const CELL_SIZE = 44;
const GAP = 10;

const DOTS = {
  0: [],
  1: [[22, 22]],
  2: [[12, 12], [32, 32]],
  3: [[12, 12], [22, 22], [32, 32]],
  4: [[12, 12], [32, 12], [12, 32], [32, 32]],
  5: [[12, 12], [32, 12], [22, 22], [12, 32], [32, 32]],
  6: [[12, 12], [32, 12], [12, 22], [32, 22], [12, 32], [32, 32]],
  7: [[12, 12], [32, 12], [12, 22], [22, 22], [32, 22], [12, 32], [32, 32]],
  8: [[12, 12], [22, 12], [32, 12], [12, 22], [32, 22], [12, 32], [22, 32], [32, 32]],
  9: [[12, 12], [22, 12], [32, 12], [12, 22], [22, 22], [32, 22], [12, 32], [22, 32], [32, 32]],
}

/* ── component ────────────────────────────────────── */
export default function GlobalBackground() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // ── shared mutable state ──────────
    const state = {
      mouse: { x: -9999, y: -9999 },
      targetMouse: { x: -9999, y: -9999 },
      blocks: [],
      exclusionZones: [],
      scrollOffset: 0,
      colors: {
        primary: { r: 52, g: 211, b: 153 },
        secondary: { r: 167, g: 139, b: 250 },
        accent: { r: 251, g: 146, b: 60 },
      },
    }

    const updateColors = () => {
      state.colors.primary = extractRgb('--color-primary')
      state.colors.secondary = extractRgb('--color-secondary')
      state.colors.accent = extractRgb('--color-accent')
    }
    updateColors()
    const themeObserver = new MutationObserver(updateColors)
    themeObserver.observe(document.documentElement, {
      attributes: true, attributeFilter: ['data-theme'],
    })

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let dpr = 1

    const EXCLUSION_PADDING = 25 

    const getExclusionZones = () => {
      const canvasEl = canvasRef.current
      if (!canvasEl) return
      const canvasRect = canvasEl.getBoundingClientRect()
      
      const elements = document.querySelectorAll('.hide-dominoes')
      const zones = []
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        // For fixed canvas, we use screen-relative coordinates
        zones.push({
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom
        })
      })
      state.exclusionZones = zones
      state.scrollOffset = window.scrollY
    }
    window.addEventListener('resize', getExclusionZones)
    window.addEventListener('scroll', getExclusionZones)
    const exclusionInterval = setInterval(getExclusionZones, 1000)

    const generateGrid = () => {
      const stride = CELL_SIZE + GAP
      const cols = Math.ceil((window.innerWidth) / stride)
      // Generate enough rows for a very long page (e.g. 10000px)
      const rows = Math.ceil(10000 / stride)
      
      const grid = Array(cols).fill(0).map(() => Array(rows).fill(false))
      state.blocks = []
      
      const getPermutation = () => {
        const arr = [0, 1, 2]
        for (let i = 2; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j]) continue
          
          let w = 1
          let h = 1
          
          if (Math.random() < 0.25) {
            if (Math.random() < 0.5) {
               const len = Math.random() < 0.2 ? 3 : 2
               if (i + len - 1 < cols) {
                 let canFit = true
                 for (let k = 1; k < len; k++) {
                   if (grid[i+k][j]) canFit = false
                 }
                 if (canFit) w = len
               }
            } else {
               const len = Math.random() < 0.2 ? 3 : 2
               if (j + len - 1 < rows) {
                 let canFit = true
                 for (let k = 1; k < len; k++) {
                   if (grid[i][j+k]) canFit = false
                 }
                 if (canFit) h = len
               }
            }
          }
          
          for (let dx = 0; dx < w; dx++) {
             for (let dy = 0; dy < h; dy++) {
                grid[i+dx][j+dy] = true
             }
          }
          
          const cellsData = []
          for (let dx = 0; dx < w; dx++) {
            for (let dy = 0; dy < h; dy++) {
               cellsData.push({
                 offsetX: dx * stride,
                 offsetY: dy * stride,
                 value: Math.floor(Math.random() * 9) + 1
               })
            }
          }
          
          const p = getPermutation()
          state.blocks.push({
            x: i * stride,
            y: j * stride,
            pxWidth: w * CELL_SIZE + (w - 1) * GAP,
            pxHeight: h * CELL_SIZE + (h - 1) * GAP,
            cellsData,
            colorIndices: { border: p[0], dots: p[1] },
            isBrighter: Math.random() < 0.3,
            currentOpacity: Math.random()
          })
        }
      }
      getExclusionZones()
    }

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      generateGrid()
    }
    resize()
    setTimeout(resize, 100)

    const onMouseMove = (e) => {
      state.targetMouse.x = e.clientX
      state.targetMouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)
    // Init mouse to center
    state.targetMouse.x = window.innerWidth / 2
    state.targetMouse.y = window.innerHeight / 2

    const drawRoundedRect = (x, y, w, h, r) => {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + w - r, y)
      ctx.quadraticCurveTo(x + w, y, x + w, y + r)
      ctx.lineTo(x + w, y + h - r)
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
      ctx.lineTo(x + r, y + h)
      ctx.quadraticCurveTo(x, y + h, x, y + h - r)
      ctx.lineTo(x, y + r)
      ctx.quadraticCurveTo(x, y, x + r, y)
      ctx.closePath()
    }

    let rafId
    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    const draw = (now) => {
      rafId = requestAnimationFrame(draw)

      const delta = now - lastTime
      if (delta < interval) return
      lastTime = now - (delta % interval)

      // Always poll scroll for smoothness
      state.scrollOffset = window.scrollY

      if (state.mouse.x === -9999) {
        state.mouse.x = state.targetMouse.x
        state.mouse.y = state.targetMouse.y
      } else {
        state.mouse.x += (state.targetMouse.x - state.mouse.x) * 0.1
        state.mouse.y += (state.targetMouse.y - state.mouse.y) * 0.1
      }

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
      
      const { x: mx, y: my } = state.mouse
      const { primary, secondary, accent } = state.colors
      const palette = [primary, secondary, accent]
      const scrollY = state.scrollOffset
      const PARALLAX_SPEED = 0.4
      const isDesktop = window.innerWidth >= 1024

      const vTop = -200
      const vBottom = (canvas.height / dpr) + 200

      for (const block of state.blocks) {
        // Apply parallax offset
        const drawY = block.y - (scrollY * PARALLAX_SPEED)
        
        // Culling: Skip if block is not in viewport
        if (drawY + block.pxHeight < vTop || drawY > vBottom) continue

        let targetOpacity = 1
        const cx = block.x + block.pxWidth / 2
        const cy = drawY + block.pxHeight / 2
        
        let hoverIntensity = 0
        if (isDesktop && mx > -9000) {
          const dist = Math.hypot(cx - mx, cy - my)
          const RADIUS = 160
          if (dist < RADIUS) {
            hoverIntensity = 1 - (dist / RADIUS)
            hoverIntensity = Math.pow(hoverIntensity, 1.4)
          }
        }

        for (const zone of state.exclusionZones) {
          if (
            cx > zone.left && 
            cx < zone.right &&
            cy > zone.top && 
            cy < zone.bottom
          ) {
            targetOpacity = 0
            break
          }
        }

        block.currentOpacity += (targetOpacity - block.currentOpacity) * 0.1
        if (block.currentOpacity < 0.01) continue

        const borderC = palette[block.colorIndices.border]
        const dotsC = palette[block.colorIndices.dots]
        const brightnessMultiplier = block.isBrighter ? 1.3 : 1.0;

        const borderOp = (0.1 + 0.8 * hoverIntensity) * block.currentOpacity * brightnessMultiplier
        const dotsOp = (0.2 + 0.8 * hoverIntensity) * block.currentOpacity * brightnessMultiplier
        const dynamicLineWidth = 1.0 + (1.0 * hoverIntensity)

        ctx.strokeStyle = `rgba(${borderC.r}, ${borderC.g}, ${borderC.b}, ${borderOp})`
        ctx.lineWidth = dynamicLineWidth
        drawRoundedRect(block.x, drawY, block.pxWidth, block.pxHeight, 6)
        ctx.stroke()
        
        ctx.fillStyle = `rgba(${dotsC.r}, ${dotsC.g}, ${dotsC.b}, ${dotsOp})`
        for (const cell of block.cellsData) {
          const cellX = block.x + cell.offsetX
          const cellY = drawY + cell.offsetY
          const dotsPos = DOTS[cell.value]
          
          for (const [dx, dy] of dotsPos) {
            const dotX = cellX + dx
            const dotY = cellY + dy
            ctx.beginPath()
            ctx.arc(dotX, dotY, DOT_RADIUS, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', getExclusionZones)
      window.removeEventListener('mousemove', onMouseMove)
      clearInterval(exclusionInterval)
      themeObserver.disconnect()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}
