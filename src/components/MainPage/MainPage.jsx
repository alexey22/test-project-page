import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
import Header from '../Header/Header';

function MainPage() {
  return (
    <>
      <Header />
      <main className='main'>
        <section className='main__container'>
          <PageTitle forcedTitle='Главная страница' />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
