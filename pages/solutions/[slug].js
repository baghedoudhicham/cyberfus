import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { solutions, getSolutionBySlug } from '../../data/solutions';
import Head from 'next/head';

const SolutionPage = ({ solution }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
        <Head>
            <title>{solution.name} - Cyberfus</title>
            <meta name="description" content={solution.tagline} />
        </Head>
        <div className="bg-gray-900 text-white min-h-screen">
            <main className="container mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{solution.name}</h1>
                    <p className="text-xl text-indigo-400 mb-8">{solution.tagline}</p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {solution.description}
                    </p>
                </div>
            </main>
        </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = solutions.map((solution) => ({
    params: { slug: solution.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const solution = getSolutionBySlug(params.slug);
  return {
    props: {
      solution,
    },
  };
}

export default SolutionPage;
