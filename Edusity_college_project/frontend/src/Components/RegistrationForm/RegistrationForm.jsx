import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import axios from 'axios';
import confetti from 'canvas-confetti';

const RegistrationForm = ({ setShowNavbar }) => {
  const { program } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    program: program || '',
    age: '',
    email: '',
    contactNumber: '',
    degree: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formClosed, setFormClosed] = useState(false);

  useEffect(() => {
    setShowNavbar(false); 
    return () => {
      setShowNavbar(true); 
    };
  }, [setShowNavbar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!formData.name || !formData.email || !formData.degree || !formData.contactNumber || !formData.age) {
      alert('Please fill out all fields');
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setSuccessMessage('Registration successful!');
        setFormData({
          name: '',
          program: program || '',
          age: '',
          email: '',
          contactNumber: '',
          degree: '',
        });
        setFormClosed(true);
        triggerConfetti();
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="registration-form-container">
      {!formClosed && (
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Register for {program}</h2>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Which degree you choose:</label>
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} required />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Contact Number:</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </div>
          <button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
      <button className="back-button" onClick={handleBack}>
        Back to Previous Page
      </button>
    </div>
  );
};

export default RegistrationForm;
