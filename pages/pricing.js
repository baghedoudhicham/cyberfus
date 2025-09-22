import Head from 'next/head'
import Layout from '../components/Layout'

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>Pricing – Cyberfus</title>
      </Head>
      <main>
        <section className="pricing-section">
            <h1>Simple, honest pricing</h1>
            <p className="subtitle">Choose the plan that&apos;s right for your team.</p>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <p className="price">Free</p>
                    <ul>
                        <li>1 project</li>
                        <li>50k requests/mo</li>
                        <li>Basic rules</li>
                        <li>Community support</li>
                    </ul>
                    <a href="#" className="btn btn-secondary">Get Started</a>
                </div>
                <div className="pricing-card featured">
                    <h3>Growth</h3>
                    <p className="price">$49<span>/project/mo</span></p>
                    <ul>
                        <li>1M requests</li>
                        <li>Rule packs</li>
                        <li>Secrets Mesh</li>
                        <li>Audit logs</li>
                        <li>Email support</li>
                    </ul>
                    <a href="#" className="btn btn-primary">Start Free Trial</a>
                </div>
                <div className="pricing-card">
                    <h3>Scale</h3>
                    <p className="price">Talk to us</p>
                    <ul>
                        <li>Unlimited projects</li>
                        <li>Dedicated region/tenant</li>
                        <li>SSO/SCIM</li>
                        <li>SIEM integrations</li>
                        <li>24/7 support</li>
                    </ul>
                    <a href="#" className="btn btn-secondary">Contact Sales</a>
                </div>
            </div>
            <p className="pricing-footnote">Overages billed per 100k requests. Non-prod free.</p>
        </section>
      </main>
    </Layout>
  )
}
