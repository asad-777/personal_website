"use client"

import { useEffect, useRef } from 'react';

export default function FooterBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
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
                this.hue = Math.random() * 60 + 200; // Blue to purple range
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
                ctx.fillStyle = `hsla(${this.hue}, 70%, 50%, ${this.opacity})`;
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
            // Dark background with gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
            gradient.addColorStop(0.5, 'rgba(20, 30, 50, 0.95)');
            gradient.addColorStop(1, 'rgba(10, 20, 35, 0.95)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            // Draw grid lines
            ctx.strokeStyle = 'rgba(100, 150, 200, 0.1)';
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
            ctx.strokeStyle = 'rgba(100, 150, 220, 0.15)';
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

            // Draw animated radial glow
            time += 0.002;
            const centerX = canvas.offsetWidth / 2;
            const centerY = canvas.offsetHeight / 2;

            for (let i = 0; i < 3; i++) {
                const radius = 100 + Math.sin(time + i) * 50 + i * 80;
                const gradient = ctx.createRadialGradient(centerX, centerY, radius - 30, centerX, centerY, radius + 30);
                gradient.addColorStop(0, `rgba(100, 200, 255, ${0.1 * (1 - i / 3)})`);
                gradient.addColorStop(0.5, `rgba(150, 100, 255, ${0.05 * (1 - i / 3)})`);
                gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
        />
    );
}
