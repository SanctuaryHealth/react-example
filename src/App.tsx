import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetPostsOperationQuery } from './gql';

function App() {
  const {data, loading, error} = useGetPostsOperationQuery({variables: {sequelizeQuery: {}}})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
