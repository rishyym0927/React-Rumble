import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to our Beautiful App</h1>
        <p>Experience seamless theme switching across all pages</p>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Feature One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-card">
          <h3>Feature Two</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="feature-card">
          <h3>Feature Three</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;