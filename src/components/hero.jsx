'use client'

import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-base-100"
    >
      {/* 1. Interactive Domino Canvas */}
      <HeroBackground />

      {/* 3. Content */}
      <div className="relative z-30 flex flex-col items-center gap-6">
        {/* content */}
      </div>
    </section>
  )
}
