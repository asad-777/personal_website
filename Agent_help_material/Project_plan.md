# Project Plan

Create a Personal Website for me that i will use for these tasks:

1. Freelance Protfolio
2. Showcase Projects
3. Connection Building
4. As a detailed Portfolio after Linkedin

## Pages to make:

- Home Page
- About Page
- Projects Page
- Contact Page
- Testimonials Page
- Freelance Page

## Sections to add in all pages:

- Global Navbar
- Global Footer
- Global extended Navigation Section

## Sepecific Sections for each page:

### Home Page:

- NavBar
- Hero Section
- Extended Navigation Section
- Top Projects Section
- Services Offered
- Freelance Section
- Skill Set Section
- Social Links
- Footer

## Resources to Use ( except base libraries and component and design elements )

- Glass morphism design template

```html
<!-- SVG Filter (include once in your document) -->
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.025 0.025"
        numOctaves="2"
        seed="92"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurred"
        scale="65"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </defs>
</svg>

<!-- Liquid Glass Card -->
<div class="liquid-glass-card">
  <div class="card-content">
    <h2>Liquid Glass Card</h2>
    <p>Beautiful distorted glass effect</p>
    <button class="glass-button">Get Started</button>
  </div>
</div>

<style>
  /* Liquid Glass Card */
  .liquid-glass-card {
    position: relative;
    width: 400px;
    height: 300px;
    border-radius: 28px;
    isolation: isolate;
    box-shadow: 0px 6px 21px -8px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  /* Tint and inner shadow layer */
  .liquid-glass-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: 28px;
    box-shadow: inset 0 0 12px -2px rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
  }

  /* Backdrop blur and distortion layer */
  .liquid-glass-card::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 28px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    filter: url(#glass-distortion);
    -webkit-filter: url(#glass-distortion);
    isolation: isolate;
    pointer-events: none;
  }

  /* Content styling */
  .card-content {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 32px;
    color: white;
  }

  .card-content h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .card-content p {
    opacity: 0.8;
    margin-bottom: 24px;
  }

  .glass-button {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
  }

  .glass-button:hover {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
```
