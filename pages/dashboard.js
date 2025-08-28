import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Dashboard = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  if (loading || !user) {
    return <Layout><div className="text-center p-10">Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">Welcome to Cyberfus</h1>
                <p className="text-gray-400">Signed in as {user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Logout
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/dashboard/runtime">
                <a className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">Runtime Shield</h2>
                  <p className="text-gray-400">View real-time security events and threat intelligence for your application runtime.</p>
                </a>
              </Link>
              <Link href="/dashboard/ai-gate">
                <a className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300">
                  <h2 className="text-xl font-semibold mb-2">AI Model Gate</h2>
                  <p className="text-gray-400">Monitor and secure your AI models against emerging threats and vulnerabilities.</p>
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;
