
import React from 'react';
import { FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

const ContactSection = () => {
    return (
        <section id="contacto" className="contacto-section">
            <div className="contacto-container">
                {/* Info */}
                <div className="contacto-info">
                    <h2 className="contacto-title">Contáctanos</h2>
                    <p style={{ color: '#6B7280', marginBottom: '1.75rem', fontSize: '1rem', lineHeight: 1.7 }}>
                        ¿Tienes un evento o proyecto en mente? Cuéntanos y lo hacemos realidad.
                    </p>

                    <ul className="contact-info-list">
                        <li>
                            <FaPhone className="contact-icon" />
                            <span>+57 313 349 3403</span>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <span>meganimacion.eventos@gmail.com</span>
                        </li>
                        <li>
                            <FaLocationDot className="contact-icon" />
                            <span>Cúcuta, Norte de Santander, Colombia</span>
                        </li>
                    </ul>

                    <div className="contacto-socials">
                        <a href="https://wa.me/573133493403" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/meganimacion/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Form */}
                <form className="contacto-form" onSubmit={e => e.preventDefault()}>
                    <h3>Envíanos un mensaje</h3>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input id="nombre" type="text" placeholder="Tu nombre" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input id="email" type="email" placeholder="tu@correo.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" rows="4" placeholder="Cuéntanos sobre tu evento..." required />
                    </div>

                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>

            {/* Footer */}
            <footer className="contacto-footer">
                © {new Date().getFullYear()} Meganimación · Todos los derechos reservados · Cúcuta, Colombia
            </footer>
        </section>
    );
};

export default ContactSection;
