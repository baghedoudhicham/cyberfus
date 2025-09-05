import { useState } from 'react';

const faqData = [
  {
    question: 'What is Cyberfus?',
    answer: 'Cyberfus is a developer-native security platform that helps you protect your web applications, APIs, and AI models from modern threats. We provide tools that are easy to use and integrate directly into your development workflow.'
  },
  {
    question: 'How long does it take to set up?',
    answer: 'You can get started with Cyberfus in under 5 minutes. Simply create an account, install our agent in your application, and configure your first security rules. Our dashboard will guide you through the process.'
  },
  {
    question: 'What kind of applications do you support?',
    answer: 'Cyberfus is designed for modern web applications and frameworks. We have first-class support for Next.js, FastAPI, Ruby on Rails, Django, and more. Our runtime protection is language-agnostic and can be deployed in any containerized or serverless environment.'
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes! We offer a generous free plan that includes our core threat detection features for one project. You can protect your personal projects or test out our platform with no commitment. See our Pricing page for more details.'
  }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-gray-700 dark:border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-100 dark:text-gray-900"
        onClick={onClick}
      >
        <span>{faq.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-400 dark:text-gray-600">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-800 dark:bg-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 dark:text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div>
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
