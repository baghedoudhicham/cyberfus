import Head from 'next/head'
import Link from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'

export default function Layout({ children }) {
  return (
    <>
      <Head>
      </Head>
      <header className="main-header">
        <nav className="main-nav">
          <Link href="/" legacyBehavior>
            <a className="logo">Cyberfus</a>
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="dropdown">
              <span className="nav-item">Product</span>
              <div className="dropdown-menu">
                <Link href="/products/runtime-shield">Runtime Shield</Link>
                <Link href="/products/ai-model-gate">AI Model Gate</Link>
                <Link href="/products/credential-guardian">Credential Guardian</Link>
              </div>
            </li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/docs">Docs</Link></li>
          </ul>
          <div className="nav-cta">
            <ThemeToggleButton />
            <Link href="/login" legacyBehavior><a className="btn btn-secondary">Sign In</a></Link>
            <Link href="/login" legacyBehavior><a className="btn btn-primary">Start Free</a></Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="main-footer">
        <div className="footer-grid">
            <div className="footer-column">
                <h4 className="footer-heading">Product</h4>
                <ul>
                    <li><Link href="/products/runtime-shield">Runtime Shield</Link></li>
                    <li><Link href="/products/ai-model-gate">AI Model Gate</Link></li>
                    <li><Link href="/products/credential-guardian">Credential Guardian</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4 className="footer-heading">Resources</h4>
                <ul>
                    <li><Link href="/docs">Docs</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Cyberfus Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
