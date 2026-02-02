import React, { useState, useEffect } from 'react';
import './index.css';

const translations = {
  es: {
    nav: { services: 'Servicios', products: 'Productos', portfolio: 'Portafolio', about: 'Sobre Mí', contact: 'Contacto' },
    hero: {
      title: <>Diseño con <br /><span className="text-accent">alma y propósito</span></>,
      desc: <>Estudio de diseño gráfico en La Paz, Bolivia. Ayudo a <strong>emprendedores y marcas</strong> a construir identidades visuales auténticas que conectan de verdad con su audiencia.</>,
      btn_portfolio: 'Explora mi trabajo',
      btn_services: 'Descubre mis servicios'
    },
    services: {
      title: '¿En qué puedo ayudarte?',
      subtitle: 'Soluciones creativas para impulsar tu proyecto al siguiente nivel',
      items: [
        { title: 'Identidad de Marca', desc: 'Diseño estratégico para que tu marca sea inolvidable.', img: '/assets/brand.png' },
        { title: 'Diseño de Información', desc: 'Hago que tus datos se vean claros y atractivos.', img: '/assets/info.png' },
        { title: 'Creación de Websites', desc: 'Tu hogar digital: moderno, funcional y a tu medida.', img: '/assets/web.png' },
        { title: 'Diseño Editorial', desc: 'Maquetación profesional para tus publicaciones.', img: '/assets/editorial.png' }
      ]
    },
    products: {
      title: 'Productos para Ti',
      subtitle: 'Herramientas y detalles que organizan y embellecen tu día',
      items: [
        { title: 'Calendarios', icon: '📅', desc: 'Organiza tu año con un diseño que inspira.' },
        { title: 'Planners', icon: '📒', desc: 'Planifica tus metas y alcanza tus objetivos.' },
        { title: 'Etiquetas', icon: '🏷️', desc: 'El detalle perfecto para tus productos.' },
        { title: 'Agendas', icon: '📖', desc: 'Tu compañera ideal para capturar ideas.' }
      ]
    },
    testimonials: {
      title: 'Lo que dicen mis clientes',
      subtitle: 'Historias de colaboración y éxito',
      items: [
        { name: 'Ana Sofía R.', text: 'Helen captó perfectamente la esencia de mi marca. El resultado superó mis expectativas y me siento muy identificada.', role: 'Emprendedora' },
        { name: 'Carlos M.', text: 'Un trabajo impecable. Profesionalismo, creatividad y puntualidad en cada entrega.', role: 'Director Creativo' },
        { name: 'Lucía V.', text: 'Las etiquetas quedaron hermosas. Se nota el cariño y el detalle en su trabajo.', role: 'Propietaria de Negocio' }
      ]
    },
    about: {
      subtitle: 'Conóceme un poco más',
      title: 'Hola, soy Helen',
      desc: <>Diseñadora gráfica apasionada basada en La Paz. Mi misión es colaborar con <strong>personas visionarias</strong> como tú para materializar sus sueños a través de un diseño estratégico, estético y con propósito.</>,
      location_title: 'Desde',
      location: 'La Paz, Bolivia',
      exp_title: 'Trayectoria',
      exp: '+5 años creando marcas'
    },
    contact: {
      title: <>¿Hacemos realidad tu <span style={{ color: 'var(--primary-color)' }}>idea</span>?</>,
      desc: 'Estoy aquí para escucharte. Cuéntame sobre tu proyecto y veamos cómo podemos trabajar juntos.',
      form: {
        name: 'Tu Nombre',
        name_ph: '¿Cómo te llamas?',
        email: 'Tu Correo',
        email_ph: 'hola@ejemplo.com',
        service: '¿Qué necesitas?',
        service_ph: 'Ej: Branding, Web, Planner...',
        message: 'Cuéntame más',
        message_ph: 'Detalles de tu proyecto, dudas, ideas...',
        btn: 'Enviar Mensaje'
      },
      wa_label: 'Hablemos por WhatsApp'
    },
    footer: '© 2026 Hln Design Studio - Helen Machicado Salazar. Hecho con ❤️ en La Paz.'
  },
  en: {
    nav: { services: 'Services', products: 'Products', portfolio: 'Portfolio', about: 'About Me', contact: 'Contact' },
    hero: {
      title: <>Design with <br /><span className="text-accent">soul and purpose</span></>,
      desc: <>Graphic design studio in La Paz, Bolivia. I help <strong>entrepreneurs and brands</strong> build authentic visual identities that truly connect with their audience.</>,
      btn_portfolio: 'Explore my work',
      btn_services: 'Discover my services'
    },
    services: {
      title: 'How can I help you?',
      subtitle: 'Creative solutions to take your project to the next level',
      items: [
        { title: 'Brand Identity', desc: 'Strategic design to make your brand unforgettable.', img: '/assets/brand.png' },
        { title: 'Information Design', desc: 'I make your data look clear and attractive.', img: '/assets/info.png' },
        { title: 'Website Creation', desc: 'Your digital home: modern, functional, and tailored to you.', img: '/assets/web.png' },
        { title: 'Editorial Design', desc: 'Professional layout for your publications.', img: '/assets/editorial.png' }
      ]
    },
    products: {
      title: 'Products for You',
      subtitle: 'Tools and details that organize and Beautify your day',
      items: [
        { title: 'Calendars', icon: '📅', desc: 'Organize your year with inspiring design.' },
        { title: 'Planners', icon: '📒', desc: 'Plan your goals and achieve your objectives.' },
        { title: 'Labels', icon: '🏷️', desc: 'The perfect detail for your products.' },
        { title: 'Agendas', icon: '📖', desc: 'Your ideal companion for capturing ideas.' }
      ]
    },
    testimonials: {
      title: 'What my clients say',
      subtitle: 'Stories of collaboration and success',
      items: [
        { name: 'Ana Sofía R.', text: 'Helen perfectly captured the essence of my brand. The result exceeded my expectations.', role: 'Entrepreneur' },
        { name: 'Carlos M.', text: 'Impeccable work. Professionalism, creativity, and punctuality in every delivery.', role: 'Creative Director' },
        { name: 'Lucía V.', text: 'The labels turned out beautiful. You can see the care and detail in her work.', role: 'Business Owner' }
      ]
    },
    about: {
      subtitle: 'Get to know me',
      title: 'Hi, I\'m Helen',
      desc: <>Passionate graphic designer based in La Paz. My mission is to collaborate with <strong>visionary people</strong> like you to materialize your dreams through strategic, aesthetic, and purposeful design.</>,
      location_title: 'Based in',
      location: 'La Paz, Bolivia',
      exp_title: 'Background',
      exp: '+5 years building brands'
    },
    contact: {
      title: <>Let's bring your <span style={{ color: 'var(--primary-color)' }}>idea</span> to life</>,
      desc: 'I\'m here to listen. Tell me about your project and let\'s see how we can work together.',
      form: {
        name: 'Your Name',
        name_ph: 'What\'s your name?',
        email: 'Your Email',
        email_ph: 'hello@example.com',
        service: 'What do you need?',
        service_ph: 'Ex: Branding, Web, Planner...',
        message: 'Tell me more',
        message_ph: 'Project details, questions, ideas...',
        btn: 'Send Message'
      },
      wa_label: 'Let\'s chat on WhatsApp'
    },
    footer: '© 2026 Hln Design Studio - Helen Machicado Salazar. Made with ❤️ in La Paz.'
  }
};

function App() {
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="animated-logo">
          <span className="logo-main">Hln</span>
          <span className="logo-sub">DESIGN</span>
        </div>

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

        <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <span className="menu-brand">Hln Design Studio</span>
            <button className="close-menu" onClick={toggleMenu}>&times;</button>
          </div>
          <ul className="nav-links">
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a></li>
            <li><a href="#products" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</a></li>
            <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>{t.nav.portfolio}</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a></li>
            <li><a href="#contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a></li>
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

      {/* Hero Section */}
      <section className="hero fade-up">
        <div className="hero-content">
          <h1>
            {t.hero.title}
          </h1>
          <p className="hero-desc">
            {t.hero.desc}
          </p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn btn-primary">{t.hero.btn_portfolio}</a>
            <a href="#services" className="btn btn-outline">{t.hero.btn_services}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-primary">
            <img src="/assets/hero-product.png" alt="HLN Design Studio - Custom Products" />
          </div>
          <div className="hero-img-secondary">
            <div className="pink-overlay"></div>
            <img
              src="/assets/uploaded-stickers.png"
              alt="Custom colorful stickers"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="fade-up" style={{ background: 'var(--bg-soft)', position: 'relative', zIndex: 3 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem' }}>{t.services.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.services.subtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {t.services.items.map((service, i) => (
            <div key={i} className={`service-card fade-up delay-${(i + 1) * 100}`} style={{
              background: 'white',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)',
              transition: 'var(--transition-smooth)',
              cursor: 'pointer'
            }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="fade-up" style={{ background: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem' }}>{t.products.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.products.subtitle}</p>
        </div>
        <div className="products-grid">
          {t.products.items.map((product, i) => (
            <div key={i} className={`product-card fade-up delay-${(i + 1) * 100}`}>
              <span className="product-icon">{product.icon}</span>
              <h3 style={{ marginBottom: '10px' }}>{product.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="portfolio" className="fade-up" style={{ padding: '100px 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem' }}>{t.testimonials.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t.testimonials.subtitle}</p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
            opacity: 0.6,
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            {/* Placeholder logos */}
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_A</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_B</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_C</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CLIENTE_D</div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {t.testimonials.items.map((testi, i) => (
              <div key={i} style={{
                background: 'var(--bg-soft)',
                padding: '40px',
                borderRadius: '30px',
                position: 'relative'
              }}>
                <span style={{ fontSize: '4rem', color: 'var(--primary-color)', opacity: 0.2, position: 'absolute', top: '10px', left: '20px' }}>“</span>
                <p style={{ fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1 }}>{testi.text}</p>
                <div>
                  <h4 style={{ color: 'var(--primary-color)' }}>{testi.name}</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{testi.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section fade-up">
        {/* Soft Decorative Circle Background */}
        <div className="about-bg-circle"></div>

        <div className="about-visual">
          {/* Decorative Frame */}
          <div className="about-frame"></div>
          <div className="about-img-container">
            <img
              src="/assets/helen-photo.png"
              alt="Helen Machicado Salazar"
            />
          </div>
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">{t.about.subtitle}</h4>
          <h2 className="about-title">{t.about.title}</h2>
          <p className="about-desc">
            {t.about.desc}
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h4>{t.about.location_title}</h4>
              <p>{t.about.location}</p>
            </div>
            <div className="stat-item">
              <h4>{t.about.exp_title}</h4>
              <p>{t.about.exp}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-up" style={{
        background: 'var(--text-dark)',
        color: 'white',
        textAlign: 'center',
        padding: '100px 10%'
      }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'white' }}>{t.contact.title}</h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 40px' }}>
          {t.contact.desc}
        </p>

        <div className="contact-container" style={{ margin: '0 auto 60px' }}>
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
            <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', border: 'none' }}>
              {t.contact.form.btn}
            </button>
          </form>
        </div>


        <div style={{
          display: 'flex',
          gap: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <a href="https://instagram.com/hln_design" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram" className="social-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.facebook.com/HlnDesignBolivia" target="_blank" rel="noopener noreferrer"
            aria-label="Facebook" className="social-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@hlndesign.bo" target="_blank" rel="noopener noreferrer"
            aria-label="TikTok" className="social-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=59172059319" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label={t.contact.wa_label}>
        <svg viewBox="0 0 24 24" width="35" height="35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <footer style={{ padding: '40px 10%', textAlign: 'center', background: 'var(--text-dark)', color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
