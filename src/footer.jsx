import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <div className="wrapper">
              <div className="box">
                <h4>INFORMATION</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Store Locator</a></li>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Terms Condition</a></li>
                  <li><a href="#">Terms Of Services</a></li>
                  <li><a href="#">Exchange / Refund Policy</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Furniture On Installment</a></li>
                  <li><a href="#">Blogs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="#">Call us from</a></li>
              <li><a href="#">Whatsapp us from 10AM to 5 PM</a></li>
              <li><a href="#">Email us info</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="wrapper">
              <div className="box">
                <h4>CUSTOMER SERVICES</h4>
                <ul>
                  <li><a href="#">Feedback/Complaints</a></li>
                  <li><a href="#">cs@mudssair</a></li>
                  <li><a href="#">UAN 111 222 333</a></li>
                  <li><a href="#">Terms of services</a></li>
                  <li><a href="#">Refund policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <div><a href="https://www.facebook.com/"><img src="/fac.jpg" className="btn" alt="Facebook" /></a></div>
              <div><a href="https://www.instagram.com/"><img src="/ind.jpg" className="btn" alt="Instagram" /></a></div>
              <div><a href="https://web.whatsapp.com/"><img src="/twi.png" className="btn" alt="Twitter" /></a></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Optional: Include an iframe or other elements here */}
      </div>
    </footer>
  );
};

export default Footer;
