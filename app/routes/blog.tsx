export default function Blog() {
  return (
    <div className="container mx-auto pt-32 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {/* Blog post cards will go here */}
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-600">Blog posts coming soon...</p>
        </div>
      </div>
    </div>
  );
}
