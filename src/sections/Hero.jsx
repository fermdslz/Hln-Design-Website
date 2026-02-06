import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

function Hero({ t }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { img: "/assets/backtoschool.jpg", alt: "Custom Products", label: "Productos Personalizados" },
        { img: "/assets/Branding.png", alt: "Editorial Design", label: "Diseño Editorial" },
        { img: "/assets/EditorialDesign.png", alt: "Branding", label: "Identidad de Marca" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="hero-immersive">
            {/* Background Carousel */}
            <div className="hero-bg-carousel">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="hero-bg-slide"
                    >
                        <img src={slides[currentSlide].img} alt={slides[currentSlide].alt} />
                    </motion.div>
                </AnimatePresence>
                {/* Overlay for text readability */}
                <div className="hero-overlay"></div>
            </div>

            {/* Floating Content */}
            <div className="hero-content-wrapper">
                <motion.div
                    className="glass-card"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.h1 className="hero-title">
                        <img src="/assets/hln-logo-pink.png" alt="Hln Design" className="hero-logo-img" />
                    </motion.h1>

                    <motion.div className="hero-text-content">
                        <p className="hero-desc">{t.hero.desc}</p>
                    </motion.div>

                    <motion.div className="hero-btns" style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="social-icon-hero"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                                style={{ color: 'var(--primary-color)' }}
                            >
                                {social.name === 'instagram' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                )}
                                {social.name === 'facebook' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                )}
                                {social.name === 'tiktok' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                    </svg>
                                )}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
