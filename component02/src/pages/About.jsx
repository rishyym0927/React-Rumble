
export default function About() {
  return (
    <div className="h-screen flex flex-col transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-lg p-8 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-4xl font-bold mb-4">ℹ️ About Page</h1>
          <p className="text-lg">This is the about page. The theme persists across pages!</p>
        </div>
      </div>
    </div>
  );
}
