import React from 'react';

function Footer({ t }) {
    return (
        <footer style={{ padding: '40px 10%', textAlign: 'center', background: 'var(--text-dark)', color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{t.footer}</p>
        </footer>
    );
}

export default Footer;
