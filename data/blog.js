export const blogPosts = [
  {
    slug: 'announcing-cyberfus-1-0',
    title: 'Announcing Cyberfus 1.0',
    author: 'Jane Doe',
    date: '2024-08-15',
    category: 'Announcements',
    excerpt: 'We are thrilled to announce the general availability of Cyberfus 1.0, the first developer-native security platform for modern applications.',
  },
  {
    slug: 'securing-llms-in-production',
    title: 'A New Approach to Securing LLMs in Production',
    author: 'John Smith',
    date: '2024-08-10',
    category: 'Engineering',
    excerpt: 'Large Language Models present a new frontier for security. Our AI Model Gate provides robust protection against prompt injection, data leakage, and more.',
  },
  {
    slug: 'the-problem-with-hardcoded-secrets',
    title: 'The Hidden Dangers of Hardcoded Secrets',
    author: 'Emily White',
    date: '2024-08-02',
    category: 'Security',
    excerpt: 'Hardcoded secrets are a ticking time bomb in any codebase. Learn how Cyberfus Credential Guardian helps you find and eliminate them.',
  },
  {
    slug: 'introducing-runtime-shield',
    title: 'Product Deep Dive: Runtime Shield',
    author: 'Alex Johnson',
    date: '2024-07-28',
    category: 'Product',
    excerpt: 'Go beyond static analysis. Runtime Shield monitors your application\'s behavior in real-time to block threats as they happen.',
  },
  {
    slug: 'our-seed-funding-round',
    title: 'Cyberfus Raises $10M Seed Round to Build the Future of AppSec',
    author: 'Jane Doe',
    date: '2024-07-20',
    category: 'Announcements',
    excerpt: 'We are excited to partner with top investors to accelerate our mission of making security simple and accessible for all developers.',
  },
  {
    slug: 'devsecops-at-the-speed-of-ai',
    title: 'DevSecOps at the Speed of AI',
    author: 'John Smith',
    date: '2024-07-15',
    category: 'Engineering',
    excerpt: 'Traditional security tools can\'t keep up with the pace of modern development. Here\'s how we\'re building security that enables, not blocks.',
  },
];

export const getBlogCategories = () => {
  const categories = blogPosts.map(p => p.category);
  return ['All', ...new Set(categories)];
}
