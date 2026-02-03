import React from 'react';
import { motion } from 'framer-motion';

function About({ t }) {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="about-bg-circle"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            ></motion.div>

            <motion.div
                className="about-visual"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="about-frame"></div>
                <div className="about-img-container">
                    <img src="/assets/helen-photo.png" alt="Helen Machicado Salazar" />
                </div>
            </motion.div>

            <motion.div
                className="about-content"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h4 className="about-subtitle">{t.about.subtitle}</h4>
                <h2 className="about-title">{t.about.title}</h2>
                <p className="about-desc">{t.about.desc}</p>
                <div className="about-stats">
                    <motion.div
                        className="stat-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h4>{t.about.location_title}</h4>
                        <p>{t.about.location}</p>
                    </motion.div>
                    <motion.div
                        className="stat-item"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h4>{t.about.exp_title}</h4>
                        <p>{t.about.exp}</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default About;
