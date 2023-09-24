import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PageTitle from '../PageTitle/PageTitle';
import Header from '../Header/Header';

function About() {
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

export default About;
