import Link from 'next/link';

const products = [
  {
    name: 'Runtime Shield',
    description: 'Stop attacks in real-time with behavioral analysis and runtime protection.',
    href: '/products/runtime-shield',
  },
  {
    name: 'AI Model Gate',
    description: 'Secure your LLMs from prompt injection, data leakage, and toxic content.',
    href: '/products/ai-model-gate',
  },
  {
    name: 'Credential Guardian',
    description: 'Find and eliminate hardcoded secrets before they get into production.',
    href: '/products/credential-guardian',
  },
];

const ProductCards = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-800 dark:bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 dark:text-gray-900">A Unified Platform for Modern Security</h2>
            <p className="text-gray-400 dark:text-gray-600 text-lg">
              From code to cloud, Cyberfus provides the tools you need to ship fast, securely.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <div key={product.name} className="bg-gray-900 dark:bg-white p-8 rounded-lg border border-gray-700 dark:border-gray-200 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-gray-100 dark:text-gray-900">{product.name}</h3>
              <p className="text-gray-400 dark:text-gray-600 mb-4">{product.description}</p>
              <Link href={product.href} legacyBehavior>
                <a className="text-indigo-400 dark:text-indigo-600 font-semibold hover:underline">Learn More &rarr;</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
