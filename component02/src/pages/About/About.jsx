import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, React Rumble was created to bring exciting coding 
            challenges to developers worldwide. We believe in learning through 
            friendly competition and building practical skills.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To create a platform where developers can test their skills, learn 
            from each other, and push the boundaries of what's possible with 
            React and modern web technologies.
          </p>
        </section>
        
        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Alex Johnson</h3>
              <p>Founder & Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Sam Wilson</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Taylor Smith</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;