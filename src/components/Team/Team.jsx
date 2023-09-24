import Header from '../Header/Header';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PageTitle from '../PageTitle/PageTitle';
import Footer from '../Footer/Footer';

import './Team.css';

function Team() {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='main__container'>
          <Breadcrumbs />
          <PageTitle forcedTitle='Команда' />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Team;
