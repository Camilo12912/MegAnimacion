
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ServicesSection from '../components/ServicesSection';
import ModalsContainer from '../components/ModalsContainer';
import Gallery from '../components/Gallery';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Use same SCSS as before (imported in main layout or here)
import '../styles/site.scss';

const MainSite = () => {
    // Stack for navigation (back functionality)
    const [modalStack, setModalStack] = useState([]);

    const openModal = (id) => {
        setModalStack((prev) => [...prev, id]);
    };

    const closeModal = () => {
        setModalStack((prev) => prev.slice(0, -1));
    };

    return (
        <div className="main-site">
            <Header />
            <Hero />
            <AboutUs />
            <ServicesSection openModal={openModal} />
            <Gallery />
            <ContactSection />
            <ModalsContainer
                modalStack={modalStack}
                closeModal={closeModal}
                openModal={openModal}
            />
        </div>
    );
};

export default MainSite;
