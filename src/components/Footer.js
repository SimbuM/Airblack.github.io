import React from 'react';
import './Footer.css';
import instagramIcon from '../assets/instagram.svg'; 
import facebookIcon from '../assets/facebook.svg';
import linkedinIcon from '../assets/linkedin.svg';
import xIcon from '../assets/x.svg';

function Footer() {
  return (
    <div className="footer">
      <h2>Join our growing community of 35,000+ alumni</h2>
      <button>Apply Now</button>
      <div className="social-links">
        <a href="https://www.instagram.com/beauty.airblack?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={instagramIcon} alt="Instagram" /></a>
        <a href="https://www.facebook.com/share/QTyEa9fLtxCoAuA5/?mibextid=qi2Omg"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.linkedin.com/company/airblack/"><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="https://x.com/clubairblack?t=IzO2hpw5xzgEtKlt_mMssw&s=09"><img src={xIcon} alt="YouTube" /></a>
      </div>
    </div>
  );
}

export default Footer;
