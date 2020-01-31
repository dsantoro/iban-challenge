import React from 'react';

import { GlobalStyles } from './GlobalStyles'

import Header from './components/Header';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Layout />
    </>
  );
}

export default App;
