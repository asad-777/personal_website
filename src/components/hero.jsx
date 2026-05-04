'use client'

import React from 'react'
import { gtagEvent } from '@/lib/gtag'
import { SOCIAL_LINKS } from '@/lib/constants'
import { TypeAnimation } from 'react-type-animation'
import { MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { motion } from "motion/react"
import GlassSurface from "@/components/GlassSurface";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-transparent lg:pt-36 pt-48"
    >
      {/* Content */}
      <div className="relative w-full  lg:justify-between  lg:gap-24 flex z-30  lg:px-24 items-center">
        
        {/* Left Side: Content */}
        <div className="relative flex  flex-col items-center lg:items-start justify-center text-center lg:text-left gap-6 lg:pr-8 lg:-mt-12  py-10 min-h-[60vh] lg:min-h-0">
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/80 backdrop-blur-md border border-base-300 shadow-sm">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm tracking-wide text-base-content">Available Worldwide</span>
          </div>

          <h1 className="text-base-content leading-tight">
            I&apos;m <span className="bg-linear-to-r from-primary to-secondary text-clip text-transparent bg-clip-text">Asad Amir</span>
          </h1>

          <div className="text-2xl md:text-3xl min-w-full text-base-content/90 h-10">
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

          <p className="text-lg text-base-content/70  px-6 lg:px-0 max-w-xl leading-relaxed">
            I am a student web app developer building clean, functional applications.
          </p>

          {/* Mobile-only Stats */}
          <div className="flex lg:hidden items-center gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl text-base-content">5+</span>
              <span className="text-[10px] text-base-content/60 uppercase tracking-wider mt-1">Projects</span>
            </div>
            <div className="h-10 w-px bg-base-content/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl text-base-content">3+</span>
              <span className="text-[10px] text-base-content/60 uppercase tracking-wider mt-1">Hackathons</span>
            </div>
            <div className="h-10 w-px bg-base-content/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl text-base-content">AI & UI</span>
              <span className="text-[10px] text-base-content/60 uppercase tracking-wider mt-1">Specialty</span>
            </div>
          </div>

        </div>

        {/* Right Side: Stats & CTAs */}
        <div className="relative w-fit  h-full flex flex-col items-start lg:items-end justify-center mt-8 lg:mt-0 gap-10">
          
          {/* Desktop-only Stats Section */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl text-base-content">5+</span>
              <span className="text-[13px] text-base-content/60 uppercase tracking-wider mt-1">Projects</span>
            </div>
            <div className="h-10 w-px bg-base-content/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl text-base-content">3+</span>
              <span className="text-[13px] text-base-content/60 uppercase tracking-wider mt-1">Hackathons</span>
            </div>
            <div className="h-10 w-px bg-base-content/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl text-base-content">AI & UI</span>
              <span className="text-[13px] text-base-content/60 uppercase tracking-wider mt-1">Specialty</span>
            </div>
          </div>

          {/* Buttons and Socials */}
          <div className="hidden lg:flex flex-col gap-8 w-full">
            <div className="flex gap-4 w-full ">
              <GlassSurface width="100%" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform w-full group">
                <a
                  href="#contactme"
                  onClick={(e) => {
                      e.preventDefault();
                      gtagEvent("LetsConnectHeroClick");
                      document.getElementById("contactme")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex bg-primary text-primary-content rounded-full items-center justify-center w-full h-full text-lg transition-colors"
                >
                  Get in Touch
                </a>
              </GlassSurface>

              <GlassSurface width="100%" height={56} borderRadius={9999} backgroundOpacity={0.05} borderWidth={0.5} className="cursor-pointer hover:scale-[1.02] transition-transform w-full group">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  onClick={() => gtagEvent("DownloadCVHeroClick")}
                  className="flex bg-primary text-primary-content rounded-full items-center justify-center w-full h-full text-lg transition-colors"
                >
                  Download CV
                </a>
              </GlassSurface>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-10 w-full bg-base-100/70 rounded-xl px-6 py-2 justify-center lg:justify-center px-2">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" onClick={() => gtagEvent("GithubHeroClick")} className="group btn btn-ghost hover:text-primary lg:btn-lg flex items-center gap-2 text-base-content/60 transition-colors text-sm">
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => gtagEvent("LinkedinHeroClick")} className="group btn btn-ghost hover:text-primary lg:btn-lg flex items-center gap-2 text-base-content/60 transition-colors text-sm">
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a href={SOCIAL_LINKS.email} onClick={() => gtagEvent("GmailHeroClick")} className="group btn btn-ghost hover:text-primary lg:btn-lg flex items-center gap-2 text-base-content/60 transition-colors text-sm ">
                <SiGmail className="w-5 h-5" />
                <span>Gmail</span>
              </a>
            </div>
          </div>
        </div >
        
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-6 h-13 border-2 border-base-content/20 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{
              y: [0, 22, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-2 bg-primary rounded-full"
          />
        </motion.div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-base-content/60">Scroll</span>
      </div>
    </section>
  )
}
