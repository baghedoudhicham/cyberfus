const logos = [
  { name: 'Transistor', src: 'https://www.svgrepo.com/show/303656/transistor-logo.svg' },
  { name: 'Tuple', src: 'https://www.svgrepo.com/show/303652/tuple-logo.svg' },
  { name: 'Statamic', src: 'https://www.svgrepo.com/show/303265/statamic-logo.svg' },
  { name: 'Mirage', src: 'https://www.svgrepo.com/show/303633/mirage-logo.svg' },
  { name: 'Laravel', src: 'https://www.svgrepo.com/show/303297/laravel-logo.svg' },
  { name: 'Statickit', src: 'https://www.svgrepo.com/show/303493/statickit-logo.svg' },
];

const TrustRibbon = () => {
  return (
    <section className="py-12 bg-gray-900 dark:bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-gray-500 dark:text-gray-500 text-sm font-bold tracking-wider uppercase">
          Trusted by the world's most innovative companies
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto text-gray-400 dark:text-gray-400 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustRibbon;
