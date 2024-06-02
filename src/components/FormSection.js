import React from 'react';
import './FormSection.css';
import formImage from '../assets/form-image.jpg'; 

function FormSection() {
  return (
    <div className="form-section">
      <h2>Professional Online Makeup Course</h2>
      <p>Certification Programme <span>Rated 4.85/5</span></p>
      <div className="benefits-list">
        <div className="benefit-item">✔ India's No.1 Online Makeup Course</div>
        <div className="benefit-item">✔ Learn by LIVE Do-it-Together Classes</div>
        <div className="benefit-item">✔ Unlimited Practice Session to master skills</div>
      </div>
      <div className="form-container">
        <img src={formImage} alt="Makeup Course" className="form-image" />
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="tel" placeholder="Enter your WhatsApp Number" required />
          <select required>
            <option value="">Select your profession</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
          <select required>
            <option value="">Select your goal</option>
            <option value="learning">Learning</option>
            <option value="career">Career</option>
          </select>
          <select required>
            <option value="">Select your city</option>
            <option value="city1">Chennai</option>
            <option value="city2">Mumbai</option>
            <option value="city2">Hydrebad</option>
            <option value="city2">Kolkata</option>
            <option value="city2">Delhi</option>
            <option value="city2">Bangalore</option>
            <option value="city2">Kochi</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;