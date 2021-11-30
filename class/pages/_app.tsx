// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from 'apollo-upload-client'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB12tn_cvpyb977vSKSQiZtL5AUfVWNoA8",
  authDomain: "codecamp04-f100c.firebaseapp.com",
  projectId: "codecamp04-f100c",
  storageBucket: "codecamp04-f100c.appspot.com",
  messagingSenderId: "176892765213",
  appId: "1:176892765213:web:7c666b65b1728182e3d2f4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const GlobalContext = createContext(null)
function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("")
  const [myUserInfo, setMyUserInfo] = useState({})
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo
  }


  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` }
  })

  const client = new ApolloClient({
    
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]), 
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
