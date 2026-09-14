import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && (value.trim().length < 2 || value.trim().length > 80)) {
      error = 'Name must be between 2 and 80 characters.';
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address.';
    }
    if (name === 'subject' && (value.trim().length < 3 || value.trim().length > 120)) {
      error = 'Subject must be between 3 and 120 characters.';
    }
    if (name === 'message' && (value.trim().length < 10 || value.trim().length > 1000)) {
      error = 'Message must be between 10 and 1000 characters.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate on change
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach((key) => {
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) {
        newErrors[key] = errorMsg;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        const data = await response.json();

        if (response.ok) {
          setIsSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSuccess(false), 5000);
        } else {
          // Display server-provided error message
          setErrors(prev => ({ ...prev, message: data.error || "Server validation failed." }));
        }
      } catch (err) {
        setErrors(prev => ({ ...prev, message: "Error: Could not reach the backend server." }));
      }
    }
  };

  return (
    <section className="section container" id="contact" aria-labelledby="contact-heading">
      <div className="section-heading">
        <h2 id="contact-heading">Get In Touch</h2>
        <p>Interested in collaborating on technical systems or software development opportunities? Drop a direct message below.</p>
      </div>

      <div className="contact-layout">
        {/* Left Sidebar: Direct Communication Channels & Social Coding Profiles */}
        <aside className="contact-details" aria-label="Contact information">
          <div className="contact-item">
            <h3>Primary Email</h3>
            <a className="social-link" href="mailto:rishabh.shukla.mail@gmail.com">rishabh.shukla.mail@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>Academic Email</h3>
            <a className="social-link" href="mailto:rs24csb0b59@student.nitw.ac.in">rs24csb0b59@student.nitw.ac.in</a>
          </div>
          <div className="contact-item">
            <h3>Phone Number</h3>
            <a className="social-link" href="tel:+919355251899">+91-9355251899</a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a className="social-link" href="https://github.com/shukla6767" target="_blank" rel="noopener noreferrer">github.com &nearr;</a>
          </div>
          <div className="contact-item">
            <h3>LeetCode</h3>
            <a className="social-link" href="https://leetcode.com/u/shukla00765/" target="_blank" rel="noopener noreferrer">leetcode.com &nearr;</a>
          </div>
          <div className="contact-item">
            <h3>Codeforces</h3>
            <a className="social-link" href="https://codeforces.com/profile/shukla007" target="_blank" rel="noopener noreferrer">codeforces.com &nearr;</a>
          </div>
          <div className="contact-item">
            <h3>CodeChef</h3>
            <a className="social-link" href="https://www.codechef.com/users/xgamer" target="_blank" rel="noopener noreferrer">codechef.com &nearr;</a>
          </div>
        </aside>

        {/* Right Column: Client-Side Validated Direct Message Inquiry Form */}
        <form className="contact-form" id="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'is-invalid' : ''}
            />
            <span className="form-error" role="alert">{errors.name}</span>
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'is-invalid' : ''}
            />
            <span className="form-error" role="alert">{errors.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Opportunity or inquiry topic"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'is-invalid' : ''}
            />
            <span className="form-error" role="alert">{errors.subject}</span>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write your detailed inquiry here..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'is-invalid' : ''}
            ></textarea>
            <span className="form-error" role="alert">{errors.message}</span>
          </div>

          <button className="btn btn-primary" type="submit">Send Message</button>
          
          {isSuccess && (
            <p className="form-success" role="status" style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
              Thank you! Your message has been sent successfully to the server.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
