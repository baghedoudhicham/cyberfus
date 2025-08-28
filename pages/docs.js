import Head from 'next/head'
import Layout from '../components/Layout'
import { useEffect } from 'react';
import Prism from 'prismjs';

export default function Docs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Documentation – Cyberfus</title>
      </Head>
      <main className="docs-main">
        <aside className="docs-sidebar">
            <nav>
                <ul>
                    <li><strong>Getting Started</strong></li>
                    <li><a href="#" className="active">Quickstart (JS/TS)</a></li>
                    <li><a href="#">CLI</a></li>
                    <li><strong>SDKs</strong></li>
                    <li><a href="#">JS/TS</a></li>
                    <li><a href="#">Python</a></li>
                </ul>
            </nav>
        </aside>
        <article className="docs-content">
            <h1>Quickstart (Next.js)</h1>
            <p>Get started with Cyberfus in a Next.js application in just a few minutes.</p>

            <h2>1. Install packages</h2>
            <pre><code className="language-bash">npm i @cyberfus/edge @cyberfus/runtime</code></pre>

            <h2>2. Configure Edge</h2>
            <pre><code className="language-typescript">{`// middleware.ts
import { cyberfusEdge } from "@cyberfus/edge";

export default cyberfusEdge({
  rules: ["ssrf", "prompt-injection", "pii-output"],
});`}</code></pre>
        </article>
      </main>
    </Layout>
  )
}
