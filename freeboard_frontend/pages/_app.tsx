import Layout from "../src/components/commons/layout"
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from "@apollo/client";
import "antd/dist/antd.css";
import { createUploadLink } from 'apollo-upload-client'



function MyApp({ Component, pageProps }) {

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  })

  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // const client = new ApolloClient({
    
  //   link: ApolloLink.from([uploadlink as any]), 
  //   cache: new InMemoryCache(),
  // });

  

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
