import ReqForm from './ReqForm/ReqForm';

import './ClientReq.css';

import mailbox from '../../images/mailbox.svg';

function ClientReq() {
  return (
    <section className='client-req'>
      <div className='client-req__container'>
        <div className='client-req__header'>
          <img
            className='client-req__image'
            src={mailbox}
            alt='Отправить сообщение'
          />
          <h2 className='client-req__title'>
            Расскажите <br /> о вашем проекте
          </h2>
          <p className='client-req__text'>
            Поделитесь с нами информацией, чем мы можем быть полезны:
            реализовать идею или выделить разработчиков для ИТ-команды. Чем
            больше вы нам расскажете — тем продуктивнее будет дальнейшее
            обсуждение.
          </p>
        </div>
        <ReqForm />
      </div>
    </section>
  );
}

export default ClientReq;
