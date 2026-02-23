
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${isShrunk ? 'shrink' : ''}`}>
            <div className="container header__inner">
                <a className="brand" href="#inicio" aria-label="Meganimación - Inicio">
                    <img src="/img/meganimacion logo.png" alt="Meganimación" />
                </a>

                <button
                    className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span></span><span></span><span></span>
                </button>

                <nav className={`nav ${isOpen ? 'is-open' : ''}`} role="navigation">
                    <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
                    <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
                    <a href="#galeria" onClick={() => setIsOpen(false)}>Galería</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
                </nav>
            </div>

        </header>
    );
};

export default Header;
