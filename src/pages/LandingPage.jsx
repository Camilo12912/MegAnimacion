
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.scss';
import { FaGlobe, FaWhatsapp, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { LuSparkles } from 'react-icons/lu';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 14 } }
};

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Twinkling dots */}
      <div className="landing-bg-dots">
        {[...Array(10)].map((_, i) => <span key={i} />)}
      </div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo with spinning ring */}
        <motion.div className="logo-container" variants={itemVariants}>
          <div className="logo-wrapper">
            <div className="logo-ring" />
            <img src="/img/megabotargas.png" alt="Meganimación" className="logo" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div className="title-box" variants={itemVariants}>
          <h1 className="title">Meganimación</h1>
          <p className="subtitle">Eventos y animación profesional · Cúcuta</p>
        </motion.div>

        {/* Rating */}
        <motion.div className="landing-rating" variants={itemVariants}>
          <span className="stars">★★★★★</span>
          <span>+500 eventos realizados</span>
        </motion.div>

        {/* Divider */}
        <motion.div className="landing-divider" variants={itemVariants} />

        {/* Main CTAs */}
        <motion.div className="cta-group" variants={itemVariants}>
          <Link to="/site" className="btn-cta website">
            <FaGlobe className="cta-icon" />
            <span>Nuestro sitio web</span>
          </Link>
          <Link to="/site#servicios" className="btn-cta services">
            <LuSparkles className="cta-icon" />
            <span>Ver servicios</span>
          </Link>
        </motion.div>

        {/* Socials label */}
        <motion.p className="socials-label" variants={itemVariants}>
          Síguenos en redes
        </motion.p>

        {/* Social buttons grid */}
        <motion.div className="socials-grid" variants={containerVariants}>
          <motion.a
            href="https://wa.me/573133493403"
            target="_blank" rel="noopener noreferrer"
            className="btn-social whatsapp"
            variants={itemVariants}
          >
            <FaWhatsapp className="social-icon" />
            <span>WhatsApp</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/meganimacion/"
            target="_blank" rel="noopener noreferrer"
            className="btn-social instagram"
            variants={itemVariants}
          >
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            href="https://youtube.com/"
            target="_blank" rel="noopener noreferrer"
            className="btn-social youtube"
            variants={itemVariants}
          >
            <FaYoutube className="social-icon" />
            <span>YouTube</span>
          </motion.a>

          <motion.a
            href="https://tiktok.com/"
            target="_blank" rel="noopener noreferrer"
            className="btn-social tiktok"
            variants={itemVariants}
          >
            <FaTiktok className="social-icon" />
            <span>TikTok</span>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.p className="landing-footer" variants={itemVariants}>
          © {new Date().getFullYear()} Meganimación · Todos los derechos reservados
        </motion.p>

      </motion.div>
    </div>
  );
};

export default LandingPage;
