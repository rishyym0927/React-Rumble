import React from 'react';
import Skeleton from './Skeleton';

function App() {
  return (
    <div className="app">
      <h2>User Profile Loading</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Skeleton type="avatar" circle />
        <div style={{ flex: 1 }}>
          <Skeleton type="title" width="40%" />
          <Skeleton count={3} />
        </div>
      </div>

      <h2>Content Loading</h2>
      <Skeleton type="card" />

      <h2>Image Gallery Loading</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Skeleton type="thumbnail" width={120} height={90} />
        <Skeleton type="thumbnail" width={120} height={90} />
        <Skeleton type="thumbnail" width={120} height={90} />
      </div>
    </div>
  );
}

export default App;
