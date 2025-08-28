import '../styles/globals.css';
import 'prismjs/themes/prism-okaidia.css'; // Import Prism theme
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
