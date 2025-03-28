
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader.jsx";

function App() {
  return (
    <div className="app">
      {/* Text Loaders */}
      <h2>Loading Content...</h2>
      <SkeletonLoader type="text" count={3} />
      
      {/* Profile Image Loader */}
      <h2>Loading Profile</h2>
      <SkeletonLoader type="image" circle width="100px" height="100px" />
      
      {/* Card Loader */}
      <h2>Loading Cards</h2>
      <SkeletonCard />
      <SkeletonCard />
      
      {/* Custom Dimensions */}
      <h2>Loading Custom Elements</h2>
      <SkeletonLoader width="200px" height="40px" />
      <SkeletonLoader type="image" width="100%" height="300px" />
    </div>
  );
}