import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      apikey: "9677bbd3-4b5b-4a2f-a085-201771d6ad9c"
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  uri: 'https://v4-0-dot-livitay.appspot.com/graphql',
  cache: new InMemoryCache(),
  link: authMiddleware,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
