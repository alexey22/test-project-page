import Header from '../Header/Header';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PageTitle from '../PageTitle/PageTitle';
import Footer from '../Footer/Footer';

function Сontacts() {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='main__container'>
          <Breadcrumbs />
          <PageTitle />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Сontacts;
