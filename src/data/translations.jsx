import React from 'react';

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
        portfolio: {
            title: 'Portafolio Creativo',
            subtitle: 'Un recorrido por mis proyectos más recientes',
            categories: ['Todos', 'Branding', 'Editorial', 'Redes Sociales', 'Web'],
            items: [
                { id: 1, title: 'Identidad Visual "Cafe Flora"', category: 'Branding', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&w=800&q=80' },
                { id: 2, title: 'Revista Cultural "La Paz"', category: 'Editorial', img: 'https://images.unsplash.com/photo-1544924222-35272cf52804?auto=format&fit=crop&w=800&q=80' },
                { id: 3, title: 'Campaña "Summer 2024"', category: 'Redes Sociales', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80' },
                { id: 4, title: 'E-commerce "Artesanías"', category: 'Web', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
                { id: 5, title: 'Logo "Eco Bol"', category: 'Branding', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80' },
                { id: 6, title: 'Catálogo de Productos', category: 'Editorial', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80' }
            ]
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
        portfolio: {
            title: 'Creative Portfolio',
            subtitle: 'A journey through my most recent projects',
            categories: ['All', 'Branding', 'Editorial', 'Social Media', 'Web'],
            items: [
                { id: 1, title: 'Visual Identity "Cafe Flora"', category: 'Branding', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&w=800&q=80' },
                { id: 2, title: 'Cultural Magazine "La Paz"', category: 'Editorial', img: 'https://images.unsplash.com/photo-1544924222-35272cf52804?auto=format&fit=crop&w=800&q=80' },
                { id: 3, title: 'Campaign "Summer 2024"', category: 'Social Media', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80' },
                { id: 4, title: 'E-commerce "Handicrafts"', category: 'Web', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
                { id: 5, title: 'Logo "Eco Bol"', category: 'Branding', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80' },
                { id: 6, title: 'Product Catalog', category: 'Editorial', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80' }
            ]
        },
        footer: '© 2026 Hln Design Studio - Helen Machicado Salazar. Made with ❤️ in La Paz.'
    }
};

export default translations;
