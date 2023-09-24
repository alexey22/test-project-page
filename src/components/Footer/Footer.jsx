import { NavLink, Link } from 'react-router-dom';

import NavFooter from './NavFooter/NavFooter';

import logo from '../../images/logo-white.svg';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__company'>
          <NavLink to='/'>
            <img className='footer__logo' src={logo} alt='Логотип Cyberia' />
          </NavLink>
          <p className='footer__company-text'>
            Web and machine learning <br /> developing company
          </p>
        </div>

        <div className='footer__contacts-and-nav'>
          <ul className='footer__contacts'>
            <li>
              <Link className='footer__contacts-link' to='tel:+74996794579'>
                +7 499 679 45 79
              </Link>
            </li>
            <li>
              <Link
                className='footer__contacts-link'
                to='mailto:hello@cyberia.ru'
              >
                hello@cyberia.ru
              </Link>
            </li>
            <li>
              <Link
                className='footer__contacts-link'
                to='https://yandex.ru/maps/-/CCUFNLT73A'
                target='_blank'
              >
                Аносова 3Б, оф. 1
              </Link>
            </li>
          </ul>

          <NavFooter />
        </div>
        <p className='footer__copyright'>
          {new Date().getFullYear()}, digital-агентство Cyberia <br />
          Положение о защите персональных данных <br />
          Политика в отношении обработки и защиты персональных данных <br />
          Оферта оказания услуг
        </p>
      </div>
    </footer>
  );
}

export default Footer;
