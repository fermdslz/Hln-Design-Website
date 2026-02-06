import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({
    isMenuOpen,
    toggleMenu,
    setIsMenuOpen,
    t,
    language,
    setLanguage
}) {
    return (
        <nav className="navbar">
            <div className="animated-logo" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.0' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src="/assets/hln-logo-pink.png" alt="Hln Design" className="nav-logo-img" />
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isMenuOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="menu-overlay"
                        onClick={toggleMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>
                )}
            </AnimatePresence>

            <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="menu-brand">Hln Design Studio</span>
                    <button className="close-menu" onClick={toggleMenu}>&times;</button>
                </div>
                <ul className="nav-links">
                    <motion.li whileHover={{ y: -2 }}><a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a></motion.li>
                    <motion.li whileHover={{ y: -2 }}><a href="#products" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</a></motion.li>
                    <motion.li whileHover={{ y: -2 }}><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t.nav.portfolio}</a></motion.li>
                    <motion.li whileHover={{ y: -2 }}><a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a></motion.li>
                    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href="#contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
                    </motion.li>
                    <li className="lang-switcher-container">
                        <div className="lang-switcher">
                            <button
                                onClick={() => setLanguage('es')}
                                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                            >
                                ES
                            </button>
                            <span className="lang-divider"></span>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            >
                                EN
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
