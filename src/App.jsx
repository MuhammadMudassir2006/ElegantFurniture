import React, { useEffect } from 'react';
import './App.css';
import Gallery from './gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    // GSAP animation for navbar hiding and showing
    const navbar = document.querySelector('.navbar');

    gsap.set(navbar, { y: 0 }); // Initially hide navbar off-screen

    // Add mouseover and mouseleave event listeners to navbar
    navbar.addEventListener('mouseover', handleMouseover);
    navbar.addEventListener('mouseleave', handleMouseleave);

    function handleMouseover() {
      gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.inOut' }); // Show navbar
    }

    function handleMouseleave() {
      gsap.to(navbar, { y: '-90%', duration: 0.3, ease: 'power2.inOut' }); // Hide navbar
    }

    return () => {
      navbar.removeEventListener('mouseover', handleMouseover);
      navbar.removeEventListener('mouseleave', handleMouseleave);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="banner">
        <div className="navbar">
          <ul>
            <li><a href="#home" data-text="Home">Home</a></li>
            <li><a href="#section3" data-text="Benches & Ottomans">Benches & Ottomans</a></li>
            <li><a href="#section1" data-text="Comfortable Beds">Comfortable Beds</a></li>
            <li><a href="#section2" data-text="TV & Stands">TV & Stands</a></li>
            <li><a href="#sectionLast" onClick={() => scrollToSection('sectionLast')} data-text="Contact">Contact</a></li>
          </ul>
        </div>

        <div className="content">
          <h1>ELEGANT DESIGNER</h1>
          <p>DESIGN YOUR OWN HOUSE IN YOUR OWN WAY</p>
          <div>
            <button type="button" className="button1"><span></span>EXPLORE MORE</button>
            <button type="button" className="button2"><span></span>MORE PRODUCTS</button>
          </div>
        </div>
      </div>
      <br />

      <button type="button" onClick={scrollToTop} className="scroll-to-top-btn">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <Gallery />
    </>
  );
}

export default App;
