import React from 'react';
import './Gallery.css';
import Footer from './footer';

const Gallery = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }} id='section1'>
        <h1 className="fo">COMFORTABLE BEDS</h1>
      </div>

      <div className="ow image-new" id="beds">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="box" key={index}>
            <img src={`${index + 1}.webp`} alt="" className="im" />
            <br /><br /><br />
            <p className="pa">Product Name Here</p>
            <p className="old-price">RS.120,700</p>
            <p className="new-price">RS.50,000</p>
            <button type="button" className="btn">ADD TO CART</button>
          </div>
        ))}
      </div>
      <br />
      <div style={{ textAlign: 'center' }} id='section2'>
        <h1 className="fo">TV STANDS</h1>
      </div>
      <hr />
      <div className="ow" id="tvStands">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="box" key={index}>
            <img src={`${index + 1}.webp`} alt="" className="im" />
            <br /><br /><br />
            <p className="pa">Product Name Here</p>
            <p className="old-price">RS.120,700</p>
            <p className="new-price">RS.50,000</p>
            <button type="button" className="btn">ADD TO CART</button>
          </div>
        ))}
      </div>
      <br />

      <div style={{ textAlign: 'center' }} id='section3'>
        <h1 className="fo">BENCHES & OTTOMANS</h1>
      </div>
      <hr />
      <div className="ow" id="benchesOttomans">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="box" key={index}>
            <img src={`${index + 1}.webp`} alt="" className="im" />
            <br /><br /><br />
            <p className="pa">Product Name Here</p>
            <p className="old-price">RS.120,700</p>
            <p className="new-price">RS.50,000</p>
            <button type="button" className="btn">ADD TO CART</button>
          </div>
        ))}
      </div>
      <br />
      <center><h1 className='Portfolio' id='sectionLast'>Contact</h1></center>

      <Footer />
    </>
  );
};

export default Gallery;
