import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/greenspaces',
      color: '#0077b5',
      description: 'Connect with our professional network'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/greenspaces',
      color: '#1da1f2',
      description: 'Follow us for latest updates'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/greenspaces',
      color: '#333',
      description: 'Explore our open source projects'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:info@greenspaces.ai',
      color: '#ea4335',
      description: 'Direct email communication'
    }
  ]

  const contactInfo = [
    {
      icon: '🏢',
      title: 'Headquarters',
      details: ['123 Green Tech Avenue', 'Sustainability City, SC 12345', 'United States']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321']
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      details: ['Available worldwide', '24/7 automated services', 'Multi-language support']
    }
  ]

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            Have questions about our vegetation analysis platform? 
            We'd love to hear from you and help you make the most of Green Spaces.
          </p>
        </div>
      </div>

      <div className="contact-content">
        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="container">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="business">Business Partnership</option>
                  <option value="research">Research Collaboration</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-section">
          <div className="container">
            <h2 className="section-title">Connect With Us</h2>
            <p className="section-subtitle">
              Follow us on social media for the latest updates, research insights, and community discussions
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-icon">{social.icon}</div>
                  <div className="social-content">
                    <h3>{social.name}</h3>
                    <p>{social.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="contact-info-section">
          <div className="container">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <h3 className="info-title">{info.title}</h3>
                  <div className="info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How accurate is the vegetation analysis?</h3>
                <p>Our Random Forest algorithm achieves up to 95% accuracy, while our other algorithms maintain 87-90% accuracy rates depending on image quality and terrain complexity.</p>
              </div>
              <div className="faq-item">
                <h3>What image formats do you support?</h3>
                <p>We support all major image formats including JPG, PNG, TIFF, and GeoTIFF. For best results, we recommend high-resolution satellite imagery.</p>
              </div>
              <div className="faq-item">
                <h3>Is there an API available?</h3>
                <p>Yes! We offer a comprehensive REST API for developers and researchers who want to integrate our vegetation analysis into their applications.</p>
              </div>
              <div className="faq-item">
                <h3>Can I use this for commercial purposes?</h3>
                <p>Absolutely! We offer various licensing options for commercial use, including enterprise plans with dedicated support and custom features.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact