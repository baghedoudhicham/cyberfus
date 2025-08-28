import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import Layout from '../../components/Layout';
import { db } from '../../firebase/config';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

const AIGate = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Route protection
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Real-time listener for events
  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'ai-gate-events'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({ id: doc.id, ...doc.data() });
        });
        setEvents(eventsData);
      });
      return () => unsubscribe();
    }
  }, [user]);

  // Event simulator
  const simulateEvent = async () => {
    setIsSimulating(true);
    try {
      const eventTypes = ['Prompt Injection', 'PII Leakage', 'Toxic Language', 'Jailbreak Attempt'];
      const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const randomUser = `user-${Math.floor(Math.random() * 1000)}`;

      await addDoc(collection(db, 'ai-gate-events'), {
        type: randomType,
        user: randomUser,
        status: 'Flagged',
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error simulating event: ", error);
    }
    setIsSimulating(false);
  };

  if (loading || !user) {
    return <Layout><div className="text-center p-10">Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">AI Model Gate</h1>
                <p className="text-gray-400">Real-time AI model security events</p>
              </div>
              <button
                onClick={simulateEvent}
                disabled={isSimulating}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 disabled:bg-indigo-400"
              >
                {isSimulating ? 'Simulating...' : 'Simulate New Event'}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left p-4">Event Type</th>
                    <th className="text-left p-4">User ID</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(event => (
                    <tr key={event.id} className="border-b border-gray-800 hover:bg-gray-600">
                      <td className="p-4">{event.type}</td>
                      <td className="p-4 font-mono">{event.user}</td>
                      <td className="p-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">{event.status}</span></td>
                      <td className="p-4">{event.timestamp ? new Date(event.timestamp.seconds * 1000).toLocaleString() : 'Just now'}</td>
                    </tr>
                  ))}
                  {events.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center p-8 text-gray-400">No events detected. Try simulating one!</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default AIGate;
