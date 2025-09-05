import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 dark:bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 dark:text-gray-900">Ready to Secure Your Applications?</h2>
        <p className="text-gray-400 dark:text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Create an account and get started in minutes. Protect your first application for free.
        </p>
        <Link href="/login" legacyBehavior>
          <a className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
            Start Your Free Trial
          </a>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
