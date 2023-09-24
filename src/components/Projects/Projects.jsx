import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PageTitle from '../PageTitle/PageTitle';
import Filter from '../Filter/Filter';
import CardList from './ProjetsList/CardList';
import ClientReq from '../ClientReq/ClientReq';
import Footer from '../Footer/Footer';

import './Projects.css';

function Projects() {
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState(null);

  function handleSetCategory(category) {
    setCategory(category);
  }

  useEffect(() => {
    fetch('https://backend.cyberia.studio/api/v1/projects', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => setCards(json.items));
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <div className='main__container'>
          <Breadcrumbs />
          <PageTitle />
          <Filter setCategory={handleSetCategory} />
          <CardList cards={cards} category={category} />
        </div>
      </main>
      <ClientReq />
      <Footer />
    </>
  );
}

export default Projects;
