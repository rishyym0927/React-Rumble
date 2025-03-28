import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="skeleton-wrapper">
          <Skeleton type="image" />
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" width="70%" />
          <div className="card-grid">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} type="card" />
            ))}
          </div>
        </div>
      ) : (
        <div className="content">
          <img src="https://picsum.photos/800/400" alt="Content" className="content-image" />
          <h1 className="title">Awesome Content Loaded</h1>
          <p className="description">This is a demonstration of skeleton loading patterns.</p>
          <p className="description">The content has now been fully loaded with smooth transitions.</p>
          <p className="description highlight">Enjoy the enhanced user experience!</p>
          <div className="card-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="content-card">
                <img src={`https://picsum.photos/200/150?random=${i}`} alt="Card" />
                <h3>Card {i}</h3>
                <p>Some meaningful content here</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const Skeleton = ({ type, width }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes} style={{ width }}></div>;
};

export default App;





