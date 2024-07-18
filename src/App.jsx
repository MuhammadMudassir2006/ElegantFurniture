import React, { useEffect } from 'react';
import './App.css';
import Gallery from './gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href*="#"]');
    for (let link of links) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    }
  }, []);

  return (
    <>
      <div className="banner">
        <div className="navbar">
          <ul>
            <li><a href="#home" data-text="Home">Home</a></li>
            <li><a href="#section3" data-text="Benches & Ottomans">Benches & Ottomans</a></li>
            <li><a href="#section1" data-text="Comfortable Beds">Comfortable Beds</a></li>
            <li><a href="#section2" data-text="TV & Stands">TV & Stands</a></li>
            <li><a href="#sectionLast" data-text="Contact">Contact</a></li>
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
