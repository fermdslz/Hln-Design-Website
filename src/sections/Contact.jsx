import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

function Contact({ t }) {
    return (
        <section id="contact" style={{
            background: '#25282b',
            color: 'white',
            textAlign: 'center',
            padding: '100px 10%'
        }}>
            <motion.h2
                style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {t.contact.title}
            </motion.h2>
            <motion.p
                style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 40px' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                {t.contact.desc}
            </motion.p>

            <motion.div
                className="contact-container"
                style={{ margin: '0 auto 60px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">{t.contact.form.name}</label>
                        <input type="text" id="name" placeholder={t.contact.form.name_ph} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t.contact.form.email}</label>
                        <input type="email" id="email" placeholder={t.contact.form.email_ph} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">{t.contact.form.service}</label>
                        <input type="text" id="service" placeholder={t.contact.form.service_ph} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t.contact.form.message}</label>
                        <textarea id="message" rows="4" placeholder={t.contact.form.message_ph}></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', fontSize: '1.1rem', border: 'none' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t.contact.form.btn}
                    </motion.button>
                </form>
            </motion.div>

            <div style={{
                display: 'flex',
                gap: '40px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                {socialLinks.map((social, i) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="social-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                        {social.name === 'instagram' && (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        )}
                        {social.name === 'facebook' && (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        )}
                        {social.name === 'tiktok' && (
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                            </svg>
                        )}
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

export default Contact;
