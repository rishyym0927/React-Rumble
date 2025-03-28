import React, { useState, useEffect } from 'react';
import { Skeleton, SkeletonCard, SkeletonProfile, SkeletonList } from './components/Skeleton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Skeleton Loading Examples
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Text Content</h2>
            {loading ? (
              <div className="space-y-4">
                <Skeleton variant="heading" className="w-3/4" />
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-2/3" />
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl">Welcome to our platform</h3>
                <p>This is the actual content that would be loaded from an API.</p>
                <p>Notice how the skeleton loader matched the layout perfectly.</p>
                <p>The transition feels natural and smooth.</p>
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Profile Card</h2>
            {loading ? (
              <SkeletonProfile />
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
            )}
          </div>

          {/* Card Section */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Content Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : (
                <>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=300&fit=crop"
                      alt="Landscape"
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Beautiful Landscapes</h3>
                    <p className="text-gray-600">Discover the most breathtaking views nature has to offer.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
                      alt="Forest"
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Forest Adventures</h3>
                    <p className="text-gray-600">Explore the mysteries hidden within ancient forests.</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* List Section */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">List Items</h2>
            {loading ? (
              <SkeletonList count={3} />
            ) : (
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-4">
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=64&h=64&fit=crop`}
                      alt={`Item ${item}`}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">List Item {item}</h3>
                      <p className="text-gray-600">Description for item {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;