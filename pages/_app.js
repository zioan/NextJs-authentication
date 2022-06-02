import { Provider } from 'next-auth/client';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    //This Provider with session paramether
    // reads if there is a session returning from a component
    // eg. see profile.js page
    // and if there he get a session in the application
    // will prevent multiple session requests
    // this may be good to prevent redundant requests
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
