'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import GlassSurface from "@/components/GlassSurface";



export default function Hero() {
  return (
    
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-transparent lg:pt-36 pt-48"
    >
      {/* 2. Content */}
      <div className="relative  w-full justify-between gap-24 flex z-30  mx-auto px-24   items-center">
        
        {/* Left Side: Content */}
        <div className="relative flex  flex-col items-center lg:items-start justify-center text-center lg:text-left gap-6 lg:pr-8 lg:-mt-12 py-10 min-h-[60vh] lg:min-h-0">
          

          
            <div className="flex items-center gap-2 px-4 py-2 hide-dominoes rounded-full bg-base-200/80 backdrop-blur-md border border-base-300 shadow-sm">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm font-bold tracking-wide">Available Worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight hide-dominoes text-base-content leading-tight">
              Hi, I&apos;m <span className="bg-linear-to-r from-primary to-secondary text-clip text-transparent bg-clip-text">Asad</span>
            </h1>

            <div className="text-2xl md:text-3xl hide-dominoes  min-w-full font-bold text-base-content/90 h-10">
              <TypeAnimation
                sequence={[
                  'I make Full-Stack Apps',
                  1500,
                  'I make AI Integrations',
                  1500,
                  'I make Dynamic UIs',
                  1500,
                  'I make Scalable Backends',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </div>

            <p className="text-lg text-base-content/70 hide-dominoes max-w-xl leading-relaxed font-extrabold">
              I am a student web app developer building clean, functional applications.
            </p>

          {/* Mobile-only Stats */}
            <div className="flex lg:hidden hide-dominoes items-center gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-base-content">5+</span>
                <span className="text-[10px] text-base-content/60 font-extrabold uppercase tracking-wider mt-1">Projects</span>
              </div>
              <div className="h-10 w-px bg-base-content/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-base-content">3+</span>
                <span className="text-[10px] text-base-content/60 font-extrabold uppercase tracking-wider mt-1">Hackathons</span>
              </div>
              <div className="h-10 w-px bg-base-content/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-base-content">AI & UI</span>
                <span className="text-[10px] text-base-content/60 font-extrabold uppercase tracking-wider mt-1">Specialty</span>
              </div>
            </div>

        </div>

        {/* Right Side: Stats & CTAs */}
        <div className="relative w-fit  h-full flex flex-col items-start lg:items-end justify-center mt-8 lg:mt-0 gap-10">
          
          

          {/* Desktop-only Stats Section */}
            <div className="hidden lg:flex items-center  justify-between w-full">
              <div className="flex flex-col hide-dominoes">
                <span className="text-3xl md:text-4xl font-extrabold text-base-content">5+</span>
                <span className="text-[10px] text-base-content/60 font-extrabold uppercase tracking-wider mt-1">Projects</span>
              </div>
              <div className="h-10 w-px bg-base-content/10"></div>
              <div className="flex flex-col hide-dominoes">
                <span className="text-3xl md:text-4xl font-extrabold text-base-content">3+</span>
                <span className="text-[10px] text-base-content/60 font-extrabold uppercase tracking-wider mt-1">Hackathons</span>
              </div>
              <div className="h-10 w-px bg-base-content/10"></div>
              <div className="flex flex-col hide-dominoes">
                <span className="text-3xl md:text-4xl font-extrabold text-base-content">AI & UI</span>
                <span className="text-[10px] text-base-content/60 font-extrabold uppercase tracking-wider mt-1">Specialty</span>
              </div>
            </div>

          {/* Buttons and Socials — Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col gap-8 w-full">
              {/* Primary Actions */}
              <div className="flex gap-4 w-full ">
                <GlassSurface width="100%" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform w-full group">
                  <a
                    href="#contactme"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex bg-primary text-primary-content rounded-full items-center justify-center w-full h-full  font-extrabold text-lg  transition-colors"
                  >
                    Let&apos;s Connect
                  </a>
                </GlassSurface>

                <GlassSurface width="100%" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform w-full group">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    className="flex bg-primary text-primary-content rounded-full items-center justify-center w-full h-full  font-extrabold text-lg  transition-colors"
                  >
                    Download CV
                  </a>
                </GlassSurface>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-10 w-full bg-base-100/70 rounded-xl  px-6 py-2 justify-center lg:justify-center  px-2">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group btn btn-ghost  hover:text-primary lg:btn-lg flex items-center gap-2 text-base-content/60  transition-colors font-bold text-sm">
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group btn btn-ghost hover:text-primary lg:btn-lg flex items-center gap-2 text-base-content/60  transition-colors font-bold text-sm">
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a href="mailto:your@email.com" className="group btn btn-ghost hover:text-primary lg:btn-lg flex items-center gap-2 text-base-content/60  transition-colors font-bold text-sm ">
                  <SiGmail className="w-5 h-5" />
                  <span>Gmail</span>
                </a>
              </div>
            </div>
        </div >
        
      </div>
    </section>
  )
}
