import Head from 'next/head';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

import ProductCards from '../components/ProductCards';
import TrustRibbon from '../components/TrustRibbon';
import UseCases from '../components/UseCases';
import StatsBar from '../components/StatsBar';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

// Dynamically import the ThreatGraph component with SSR disabled
const ThreatGraph = dynamic(() => import('../components/ThreatGraph'), {
  ssr: false,
  loading: () => <p className="text-center text-gray-400 dark:text-gray-600">Loading Console...</p>
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cyberfus – Simple, Dev-Native Security for Apps & AI</title>
        <meta name="description" content="Protect apps, APIs, and AI models with edge, runtime, and output guardrails. Built for modern teams who ship fast." />
        <meta property="og:title" content="Cyberfus – Simple, Dev-Native Security for Apps & AI" />
        <meta property="og:description" content="Protect apps, APIs, and AI models with edge, runtime, and output guardrails. Built for modern teams who ship fast." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.cyberfus.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero-section text-center py-20 md:py-32 bg-gray-900 dark:bg-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100 dark:text-gray-900">Security that keeps up with your code.</h1>
            <p className="text-lg md:text-xl text-gray-400 dark:text-gray-600 mt-4 max-w-3xl mx-auto">Protect apps, APIs, and AI models with dev-friendly controls at the edge and runtime.</p>
            <div className="mt-8 flex justify-center gap-4">
                <a href="/login" className="btn btn-primary text-lg px-8 py-3">Start Free</a>
                <a href="mailto:demo@cyberfus.com" className="btn btn-secondary text-lg px-8 py-3">Book a Demo</a>
            </div>
          </div>
        </section>

        {/* Threat Graph Section */}
        <section className="bg-gray-900 dark:bg-white py-16 md:py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100 dark:text-gray-900">Live Threat Intelligence</h2>
                <p className="text-gray-400 dark:text-gray-600 mb-8 max-w-2xl mx-auto">Our global network detects and blocks threats in real-time. See it in action.</p>
                <div className="flex justify-center items-center h-[400px] md:h-[600px] w-full">
                    <ThreatGraph />
                </div>
            </div>
        </section>

        <TrustRibbon />
        <ProductCards />
        <UseCases />
        <StatsBar />
        <Testimonials />
        <FAQ />
        <CTA />

      </main>
    </Layout>
  )
}
