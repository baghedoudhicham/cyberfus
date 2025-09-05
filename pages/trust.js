import Layout from '../components/Layout';
import Head from 'next/head';

const TrustPage = () => {
  const complianceItems = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'CCPA', status: 'Compliant' },
  ];

  return (
    <Layout>
      <Head>
        <title>Trust & Security - Cyberfus</title>
        <meta name="description" content="Learn about our commitment to security, compliance, and data privacy." />
      </Head>
      <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trust & Security</h1>
            <p className="text-gray-400 dark:text-gray-600 text-lg">
              At Cyberfus, we are deeply committed to the security of our platform and the privacy of our customers' data.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16 space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-indigo-500 pb-3 mb-6">Compliance & Certifications</h2>
              <p className="text-gray-400 dark:text-gray-600 mb-6">
                We continuously monitor and adhere to industry-leading security and privacy standards. Our platform is regularly audited by third parties to ensure we meet the highest levels of compliance.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {complianceItems.map(item => (
                  <div key={item.name} className="bg-gray-800 dark:bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-green-400 dark:text-green-600 font-semibold">{item.status}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-indigo-500 pb-3 mb-6">Infrastructure Security</h2>
              <p className="text-gray-400 dark:text-gray-600">
                Our infrastructure is built on world-class cloud providers and designed with multiple layers of security. We employ a defense-in-depth strategy to protect our systems, including network segmentation, intrusion detection, and 24/7 monitoring. All data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-indigo-500 pb-3 mb-6">Data Privacy</h2>
              <p className="text-gray-400 dark:text-gray-600">
                We believe that you own your data. We are committed to being transparent about how we collect, use, and protect your information. Our privacy practices are designed to comply with global regulations like GDPR and CCPA, giving you control over your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-indigo-500 pb-3 mb-6">Responsible Disclosure</h2>
              <p className="text-gray-400 dark:text-gray-600">
                We value the work of security researchers and have a responsible disclosure program to encourage the reporting of any discovered vulnerabilities. If you believe you have found a security issue in our platform, please contact us at <a href="mailto:security@cyberfus.com" className="text-indigo-400 hover:underline">security@cyberfus.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrustPage;
