import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Fade } from "react-awesome-reveal";

// Dynamically import the ThreatGraph component with SSR disabled
const ThreatGraph = dynamic(() => import('../components/ThreatGraph'), {
  ssr: false,
  loading: () => <p className="text-center text-gray-400">Loading Console...</p>
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
        <section className="hero-section">
            <div className="hero-content">
                <h1>Security that keeps up with your code.</h1>
                <p className="subtitle">Protect apps, APIs, and AI models with dev-friendly controls at the edge and runtime.</p>
                <div className="hero-cta">
                    <a href="/login" className="btn btn-primary">Start Free</a>
                    <a href="mailto:demo@cyberfus.com" className="btn btn-secondary">Book a Demo</a>
                </div>
                <div className="hero-microlabels">
                    <span>5-minute install</span>
                    <span>Least-privilege by default</span>
                    <span>Works with Next.js, FastAPI, Rails, Vercel, K8s</span>
                </div>
            </div>
        </section>

        <section className="bg-gray-900 text-white py-16 md:py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Threat Intelligence</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Our global network detects and blocks threats in real-time. See it in action.</p>
                <div className="flex justify-center items-center h-[600px] w-full">
                    <ThreatGraph />
                </div>
            </div>
        </section>

        <Fade triggerOnce cascade damping={0.1}>
          <section className="feature-rail-section">
              <div className="feature-card">
                  <h3>Runtime Shield</h3>
                  <p>Stop SSRF, RCE, path traversal, and OWASP-AI risks in real time.</p>
              </div>
              <div className="feature-card">
                  <h3>AI Model Gate</h3>
                  <p>Filter prompts, sanitize outputs, add PII and policy guardrails.</p>
              </div>
              <div className="feature-card">
                  <h3>Secret Mesh</h3>
                  <p>Rotate, scope, and inject secrets per-env & per-request.</p>
              </div>
          </section>
        </Fade>
      </main>
    </Layout>
  )
}
