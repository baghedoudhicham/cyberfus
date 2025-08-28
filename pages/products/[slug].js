import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { products, getProductBySlug } from '../../data/products';
import Head from 'next/head';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
        <Head>
            <title>{product.name} - Cyberfus</title>
            <meta name="description" content={product.tagline} />
        </Head>
        <div className="bg-gray-900 text-white min-h-screen">
            <main className="container mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-indigo-400 mb-8">{product.tagline}</p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {product.description}
                    </p>
                </div>
            </main>
        </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
