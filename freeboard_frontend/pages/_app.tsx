import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const myValue = { accessToken, setAccessToken };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    //   if (accessToken) setAccessToken(accessToken);
    // });
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // const client = new ApolloClient({

  //   link: ApolloLink.from([uploadlink as any]),
  //   cache: new InMemoryCache(),
  // });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
