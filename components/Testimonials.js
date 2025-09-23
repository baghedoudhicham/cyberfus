const testimonials = [
  {
    quote: "Cyberfus has been a game-changer for our security posture. We can now ship features faster than ever, knowing that our applications are protected at runtime. The setup was incredibly simple.",
    author: 'CTO, Acme Corp',
    avatar: 'https://i.pravatar.cc/150?u=acme',
  },
  {
    quote: "The AI Model Gate is the first solution we've found that truly addresses the unique security challenges of LLMs. It gives us the confidence to deploy AI-powered features to our users.",
    author: 'Head of AI, Innovate Inc.',
    avatar: 'https://i.pravatar.cc/150?u=innovate',
  },
];

import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-800 dark:bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 dark:text-gray-900">Loved by Developers, Trusted by Enterprises</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-gray-900 dark:bg-white p-8 rounded-lg">
              <p className="text-gray-300 dark:text-gray-700 text-lg italic mb-6">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-100 dark:text-gray-900">{testimonial.author.split(',')[0]}</p>
                  <p className="text-gray-400 dark:text-gray-600">{testimonial.author.split(',')[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
