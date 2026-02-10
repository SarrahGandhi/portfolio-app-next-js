'use client';
import React, { useState, useEffect } from 'react';
import './Preloader.css';
const Preloader = () => {
    const [animationPhase, setAnimationPhase] = useState(0);
    useEffect(() => {
        const timeouts = [
            setTimeout(() => setAnimationPhase(1), 100),
            setTimeout(() => setAnimationPhase(2), 1500),
            setTimeout(() => setAnimationPhase(3), 2500),

        ];
        return () => timeouts.forEach(clearTimeout);
    }, []);
    if (animationPhase === 3) return null;

    const wrapperClass = `preloader ${animationPhase >= 2 ? 'is-exiting' : ''}`;

    return (
        <div className={wrapperClass}>
            {Array.from({ length: 10 }, (_, i) => (
                <div
                    key={i}
                    className="preloader__bar"
                    style={{
                        transitionDelay: animationPhase >= 2 ? `${i * 100}ms` : '0ms',
                    }}
                />
            ))}

            <p className={`preloader__name ${animationPhase >= 2 ? 'is-hidden' : ''}`}>
                {['S', 'A', 'R', 'R', 'A', 'H', ' ', 'G', 'A', 'N', 'D', 'H', 'I'].map(
                    (letter, i) => (
                        <span
                            key={`${letter}-${i}`}
                            className={`preloader__letter ${animationPhase >= 1 ? 'is-up' : ''
                                }`}
                            style={{
                                transitionDelay: animationPhase >= 1 ? `${i * 50}ms` : '0ms',
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ),
                )}
            </p>
        </div>
    );
};

export default Preloader;
