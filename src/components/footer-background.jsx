"use client"

import { useEffect, useRef, useState } from 'react';

export default function FooterBackground() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { rootMargin: '200px' } // Load slightly before it scrolls into view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();

        let colors = {
            base100: "0, 0, 0",
            primary: "150, 100, 255",
            secondary: "100, 200, 255",
            baseContent: "100, 150, 200"
        };

        const updateColors = () => {
            const extractColor = (cssVar) => {
                const tempDiv = document.createElement("div");
                tempDiv.style.display = "none";
                tempDiv.style.color = `var(${cssVar})`;
                document.body.appendChild(tempDiv);
                
                const computed = getComputedStyle(tempDiv).color;
                document.body.removeChild(tempDiv);
                
                // Force conversion of any advanced format (oklch, p3) to basic rgb
                const tmpCanvas = document.createElement('canvas');
                tmpCanvas.width = 1;
                tmpCanvas.height = 1;
                const tCtx = tmpCanvas.getContext('2d', { willReadFrequently: true });
                if (!tCtx) return "0, 0, 0";
                
                tCtx.fillStyle = computed;
                tCtx.fillRect(0, 0, 1, 1);
                const [r, g, b] = tCtx.getImageData(0, 0, 1, 1).data;
                
                return `${r}, ${g}, ${b}`;
            };
            
            colors.base100 = extractColor("--color-base-100");
            colors.primary = extractColor("--color-primary");
            colors.secondary = extractColor("--color-secondary");
            colors.baseContent = extractColor("--color-base-content");
        };

        updateColors();
        const observer = new MutationObserver(updateColors);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        let animationId;
        let particles = [];
        const particleCount = 80;
        let time = 0;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.offsetWidth;
                this.y = Math.random() * canvas.offsetHeight;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;

                this.x = Math.max(0, Math.min(canvas.offsetWidth, this.x));
                this.y = Math.max(0, Math.min(canvas.offsetHeight, this.y));
            }

            draw() {
                ctx.fillStyle = `rgba(${colors.primary}, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            // Background base color
            ctx.fillStyle = `rgb(${colors.base100})`;
            ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            // Draw grid lines
            ctx.strokeStyle = `rgba(${colors.baseContent}, 0.1)`;
            ctx.lineWidth = 0.5;
            const gridSize = 40;
            
            for (let i = 0; i < canvas.offsetWidth; i += gridSize) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.offsetHeight);
                ctx.stroke();
            }

            for (let i = 0; i < canvas.offsetHeight; i += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.offsetWidth, i);
                ctx.stroke();
            }

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections between nearby particles
            ctx.strokeStyle = `rgba(${colors.primary}, 0.15)`;
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.globalAlpha = 1 - distance / 150;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
            observer.disconnect();
        };
    }, [isVisible]);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
            {isVisible && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ display: 'block' }}
                />
            )}
        </div>
    );
}
