const useCases = [
  {
    title: 'Protect APIs',
    description: 'Secure your REST and GraphQL APIs from abuse, data exfiltration, and attacks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.79-2.731 9.566l-2.73-9.566A4.5 4.5 0 0112 11z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.517.99-6.79 2.73-9.566l2.73 9.566A4.5 4.5 0 0112 11z" />
      </svg>
    ),
  },
  {
    title: 'Secure Web Apps',
    description: 'Deploy runtime protection for your Next.js, Rails, or Django apps in minutes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Prevent Data Leaks',
    description: 'Stop sensitive data like PII and secrets from ever leaving your infrastructure.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const UseCases = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 dark:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 dark:text-gray-900">Built for Your Entire Stack</h2>
          <p className="text-gray-400 dark:text-gray-600 text-lg">
            Cyberfus is designed to be flexible and integrate with the tools you already use.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg text-center">
              <div className="flex justify-center items-center mb-4 text-indigo-400 dark:text-indigo-600">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100 dark:text-gray-900">{useCase.title}</h3>
              <p className="text-gray-400 dark:text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
