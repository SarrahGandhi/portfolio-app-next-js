'use client'
import './ParticleBackground.css';

import { useEffect, useState } from 'react'
interface Particle {
    id: number;
    size: number;
    opacity: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
}
const ParticleBackground = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    useEffect(() => {
        const particleCount = 50;
        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                left: Math.random() * 100,
                top: -20, // Start above viewport
                duration: Math.random() * 10 + 10, // Faster duration (10-20s)
                delay: -Math.random() * 20 // Negative delay up to max duration for immediate coverage
            })
        }
        setParticles(newParticles);
    }, [])
    return (
        <div className='particle-bg'>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className='particle animate-float'
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`
                    }}
                />
            ))}
        </div>
    )
};
export default ParticleBackground;

