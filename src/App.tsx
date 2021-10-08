import React from 'react';
import NewsManager from './components/container/NewsManager/NewsManager';
import Contacts from './components/presentational/Contacts/Contacts';
import Disciplines from './components/presentational/Disciplines/Disciplines';
import Footer from './components/presentational/Footer/Footer';
import Gallery from './components/presentational/Gallery/Gallery';
import Header from './components/presentational/Header/Header';

function App() {
  return (
    <section>
      <Header />
      <Gallery />
      <NewsManager />
      <Disciplines />
      <Contacts />
      <Footer />
    </section>
  );
}

export default App;
