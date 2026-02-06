import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

                    <motion.div className="hero-btns">
                        <motion.a
                            href="#portfolio"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.hero.btn_portfolio}
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="btn btn-outline-glass"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.hero.btn_services}
                        </motion.a>
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
