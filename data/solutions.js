export const solutions = [
  {
    slug: 'cloud-native-security',
    name: 'Cloud-Native Security',
    tagline: 'Comprehensive security for containerized and serverless applications.',
    description: 'Secure your entire cloud-native stack, from code to cloud. Cyberfus provides a unified platform to protect your microservices, containers, and serverless functions without slowing down development.',
  },
  {
    slug: 'devsecops',
    name: 'DevSecOps',
    tagline: 'Embed security directly into your development pipelines.',
    description: 'Shift security left and empower your developers to build secure code from the start. Our tools integrate seamlessly into your CI/CD pipelines, providing automated scanning and feedback.',
  },
  {
    slug: 'ai-security',
    name: 'AI-Powered Security',
    tagline: 'Leverage AI to fight advanced threats.',
    description: 'Our platform uses advanced machine learning models to detect and respond to threats faster than ever before. We also provide solutions to secure your own AI models from attack.',
  },
];

export const getSolutionBySlug = (slug) => {
  return solutions.find((s) => s.slug === slug);
};
