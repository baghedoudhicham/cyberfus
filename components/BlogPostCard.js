import Link from 'next/link';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-lg border border-gray-700 dark:border-gray-200 flex flex-col hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300">
      <span className="text-sm font-semibold text-indigo-400 dark:text-indigo-600">{post.category}</span>
      <h2 className="text-xl font-bold mt-2 mb-3 text-gray-100 dark:text-gray-900">
        <Link href={`/blog/${post.slug}`} legacyBehavior>
          <a>{post.title}</a>
        </Link>
      </h2>
      <p className="text-gray-400 dark:text-gray-600 flex-grow mb-4">{post.excerpt}</p>
      <div className="text-sm text-gray-500 dark:text-gray-500">
        <span>By {post.author}</span> &bull; <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
    </div>
  );
};

export default BlogPostCard;
