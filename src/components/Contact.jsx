import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from './Section';

const INITIAL = { name: '', email: '', title: '', message: '' };

const Contact = ({ activeSection, prevSection, showToast, navigateTo }) => {
  const formRef      = useRef(null);
  const [fields,     setFields]     = useState(INITIAL);
  const [errors,     setErrors]     = useState({});
  const [isSending,  setIsSending]  = useState(false);

  /* ---- Validation ---- */
  const validate = () => {
    const e = {};
    if (!fields.name.trim())                       e.name    = 'Name is required.';
    if (!fields.email.trim())                      e.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                                   e.email   = 'Please enter a valid email address.';
    if (!fields.title.trim())                      e.title   = 'Subject is required.';
    if (!fields.message.trim())                    e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for the field being edited
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  /* ---- Submit ---- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // prevent duplicate submissions

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    showToast('Sending your message…', 'loading');

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current);
      showToast('Thank you! Your message has been sent successfully.', 'success');
      setFields(INITIAL);
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      showToast('Oops! Something went wrong. Please try again.', 'error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" className="contact" activeSection={activeSection} prevSection={prevSection}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">I'M AVAILABLE FOR OPPORTUNITIES</h4>

        {/* Info cards */}
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Us On</h4>
            <p>+256 784630448</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
            <h4>Location</h4>
            <p>Salaama Road, Kampala, Uganda</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>princempunga422@gmail.com</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fab fa-github"></i></div>
            <h4>GitHub</h4>
            <p>
              <a
                href="https://github.com/princempunga"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-black-700)' }}
              >
                @princempunga
              </a>
            </p>
          </div>
        </div>

        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>

        {/* Form */}
        <div className="row">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form padd-15"
            noValidate
          >
            <div className="row">
              {/* Name */}
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? 'input-error' : ''}`}
                    placeholder="Name *"
                    value={fields.name}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
              </div>

              {/* Email */}
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? 'input-error' : ''}`}
                    placeholder="Email *"
                    value={fields.email}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className={`form-control ${errors.title ? 'input-error' : ''}`}
                    placeholder="Subject *"
                    value={fields.title}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                  {errors.title && <span className="field-error">{errors.title}</span>}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name="message"
                    className={`form-control ${errors.message ? 'input-error' : ''}`}
                    placeholder="Message *"
                    value={fields.message}
                    onChange={handleChange}
                    disabled={isSending}
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button
                  type="submit"
                  className="btn submit-btn"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span className="btn-spinner"></span>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
