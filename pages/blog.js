import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Masonry from 'react-masonry-css';
import { blogPosts, getBlogCategories } from '../data/blog';
import BlogPostCard from '../components/BlogPostCard';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = getBlogCategories();

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Layout>
      <Head>
        <title>Blog - Cyberfus</title>
        <meta name="description" content="News, announcements, and deep dives from the Cyberfus team." />
      </Head>
      <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cyberfus Blog</h1>
            <p className="text-gray-400 dark:text-gray-600 text-lg">
              News, announcements, and deep dives from our team.
            </p>
          </div>

          <div className="flex justify-center my-10 space-x-2 md:space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-700 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-gray-600 dark:hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredPosts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </Masonry>

        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
