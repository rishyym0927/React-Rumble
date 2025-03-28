import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or want to discuss a project? 
            We'd love to hear from you!
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92Z" stroke="var(--primary)" strokeWidth="2"/>
                <path d="M22 16.92C22 16.92 19 14.92 16 14.92C13 14.92 10 16.92 10 16.92V19.92C10 20.47 10.45 20.92 11 20.92H13C13.55 20.92 14 20.47 14 19.92V16.92C14 16.37 14.45 15.92 15 15.92H17C17.55 15.92 18 16.37 18 16.92V19.92C18 20.47 18.45 20.92 19 20.92H21C21.55 20.92 22 20.47 22 19.92V16.92Z" stroke="var(--primary)" strokeWidth="2"/>
                <path d="M6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4Z" stroke="var(--primary)" strokeWidth="2"/>
                <path d="M12 8H12.01" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 12H12.01" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>contact@reactrumble.com</span>
            </div>
            
            <div className="detail-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="var(--primary)" strokeWidth="2"/>
                <path d="M15 9L12 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 12L9 15" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 12V7.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Mon-Fri: 9AM - 5PM</span>
            </div>
            
            <div className="detail-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="var(--primary)" strokeWidth="2"/>
                <path d="M3.5 9H20.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3.5 15H20.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 3.5V20.5" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>123 React Street, Component City</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your email" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;