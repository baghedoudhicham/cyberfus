import '../styles/globals.css';
import 'prismjs/themes/prism-okaidia.css';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from 'next-themes';
import ClientOnly from '../components/ClientOnly';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ClientOnly>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ClientOnly>
    </ThemeProvider>
  );
}

export default MyApp;
