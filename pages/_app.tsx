import { AppProps } from 'next/app';
import Head from 'next/head';
import useApolloClient from 'hooks/useApolloClient';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const { client } = useApolloClient();
  return (
    <>
      <Head>
        <title>Page Name</title>
        <meta name='description' content='content' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
          <ToastContainer />
        </ApolloProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
