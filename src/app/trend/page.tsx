import React from 'react';
import { BlogPage } from '@/components/component/BlogLayout';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar (Placeholder) */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-lg font-bold">Your Logo</h1>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow mx-auto max-w-7xl px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Welcome to Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore insights, stories, and tips from our expert team.
          </p>
          <Image
            className="mt-6 rounded-lg"
            src="https://images.unsplash.com/photo-1521737604893-5b2a02b1a87a"
            alt="Blog Header"
            width={800}
            height={100}
          />
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post Card 1 */}
          <div className="rounded-lg border border-gray-300 bg-white shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Blog Post Image 1"
              width={500}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Blog Title 1</h2>
              <p className="mt-2 text-gray-600">
                Brief description of the blog post goes here. This is a short teaser to engage the reader.
              </p>
              <a
                href="#"
                className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-white transition duration-200 hover:bg-gray-800"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post Card 2 */}
          <div className="rounded-lg border border-gray-300 bg-white shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Blog Post Image 2"
              width={500}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Blog Title 2</h2>
              <p className="mt-2 text-gray-600">
                Brief description of the blog post goes here. This is a short teaser to engage the reader.
              </p>
              <a
                href="#"
                className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-white transition duration-200 hover:bg-gray-800"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post Card 3 */}
          <div className="rounded-lg border border-gray-300 bg-white shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1522003072028-5f8b70b4d5c2"
              alt="Blog Post Image 3"
              width={500}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Blog Title 3</h2>
              <p className="mt-2 text-gray-600">
                Brief description of the blog post goes here. This is a short teaser to engage the reader.
              </p>
              <a
                href="#"
                className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-white transition duration-200 hover:bg-gray-800"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Add more blog post cards as needed */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
