export const products = [
  {
    slug: 'runtime-shield',
    name: 'Runtime Shield',
    tagline: 'Real-time protection for your production applications.',
    description: 'Cyberfus Runtime Shield is a powerful security solution that monitors your application\'s behavior in real-time to detect and block threats like RCE, SQL injection, and other OWASP Top 10 vulnerabilities before they can cause damage.',
  },
  {
    slug: 'ai-model-gate',
    name: 'AI Model Gate',
    tagline: 'Secure your large language models (LLMs).',
    description: 'As AI becomes integral to applications, it also becomes a new attack vector. AI Model Gate inspects prompts and responses to prevent prompt injection, data leakage, and other emerging threats against your AI infrastructure.',
  },
  {
    slug: 'credential-guardian',
    name: 'Credential Guardian',
    tagline: 'Prevent secret leaks in your development lifecycle.',
    description: 'Credential Guardian scans your code repositories, CI/CD pipelines, and other development tools for hardcoded secrets and credentials, helping you prevent costly leaks before they happen.',
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};
