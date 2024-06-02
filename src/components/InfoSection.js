import React from 'react';
import './InfoSection.css';

function InfoSection() {
  return (
    <div className="info-section">
      <h2>Why Should You Join Airblack?</h2>
      <div className="info-cards">
        <div className="info-card">
          <p>Do-it-together, live on zoom</p>
        </div>
        <div className="info-card">
          <p>4.8 /5 Rated Classes</p>
        </div>
        <div className="info-card">
          <p>35000+ Members</p>
        </div>
      </div>
      <button>Apply Now</button>
    </div>
  );
}

export default InfoSection;