import React from 'react';
import { motion } from 'framer-motion';

function Hero({ t }) {
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
        <section className="hero">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants}>{t.hero.title}</motion.h1>
                <motion.p className="hero-desc" variants={itemVariants}>{t.hero.desc}</motion.p>
                <motion.div className="hero-btns" variants={itemVariants}>
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
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.hero.btn_services}
                    </motion.a>
                </motion.div>
            </motion.div>
            <div className="hero-visual">
                <motion.div
                    className="hero-img-primary"
                    initial={{ x: 100, opacity: 0, rotate: 0 }}
                    animate={{ x: 0, opacity: 1, rotate: 5 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                >
                    <img src="/assets/hero-product.png" alt="HLN Design Studio - Custom Products" />
                </motion.div>
                <motion.div
                    className="hero-img-secondary"
                    initial={{ x: -100, opacity: 0, rotate: 0 }}
                    animate={{ x: 0, opacity: 1, rotate: -12 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                >
                    <div className="pink-overlay"></div>
                    <img src="/assets/uploaded-stickers.png" alt="Custom colorful stickers" />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
