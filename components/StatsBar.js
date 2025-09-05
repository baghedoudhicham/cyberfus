const stats = [
  { value: '1B+', label: 'Threats Blocked Monthly' },
  { value: '10ms', label: 'Average Latency' },
  { value: '5-Min', label: 'Setup Time' },
  { value: '40+', label: 'Integrations' },
];

const StatsBar = () => {
  return (
    <section className="bg-indigo-600 dark:bg-indigo-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
