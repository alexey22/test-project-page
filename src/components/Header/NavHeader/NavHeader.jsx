import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavHeader.css';

function Nav() {
  const [isMenuOpen, setMenuISOpen] = useState(false);

  const pages = [
    { title: 'О нас', url: '/about' },
    { title: 'Услуги', url: '/services ' },
    { title: 'Проекты', url: '/projects' },
    { title: 'Блог', url: '/blog' },
    { title: 'Контакты', url: '/contacts' },
  ];

  const links = [
    { title: 'Главная', url: '/' },
    { title: 'О нас', url: '/about' },
    { title: 'Услуги', url: '/services ' },
    { title: 'Проекты', url: '/projects' },
    { title: 'Блог', url: '/blog' },
  ];

  function handleOpenCloseMenu(isOpen) {
    setMenuISOpen(isOpen);
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window.innerWidth]);

  return windowWidth > 1024 ? (
    <nav className='nav-header'>
      <ul className='nav-header__links'>
        {pages.map((page) => (
          <li key={page.title}>
            <NavLink to={page.url} className='nav-header__link'>
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <div className='nav-header'>
      <button
        type='button'
        className='nav-header__hamburger'
        onClick={() => handleOpenCloseMenu(true)}
      />
      {isMenuOpen && (
        <section className='nav-header__mob-menu'>
          <button
            type='button'
            className='nav-header__menu-close-icon'
            onClick={() => handleOpenCloseMenu(false)}
          ></button>
          <nav>
            <ul className='nav-header__mob-menu-links'>
              {links.map((link) => (
                <li className='nav-header__mob-menu-link-li' key={link.title}>
                  <NavLink
                    to={link.url}
                    className='nav-header__mob-menu-link'
                    onClick={() => handleOpenCloseMenu(false)}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='nav-header__mob-menu-line'></div>
          <span className='nav-header__mob-contacts-heading'>Контакты:</span>
          <ul className='nav-header__mob-menu-contacts'>
            <li className='nav-header__mob-menu-contacts-li' key={1}>
              <Link
                className='nav-header__mob-menu-contacts-link'
                to='tel:+74996794579'
              >
                +7 499 679 45 79
              </Link>
            </li>
            <li className='nav-header__mob-menu-contacts-li' key={2}>
              <Link
                className='nav-header__mob-menu-contacts-link'
                to='mailto:hello@cyberia.ru'
              >
                hello@cyberia.ru
              </Link>
            </li>
            <li className='nav-header__mob-menu-contacts-li' key={3}>
              <Link
                className='nav-header__mob-menu-contacts-link'
                to='https://yandex.ru/maps/-/CCUFNLT73A'
                target='_blank'
              >
                Аносова 3Б, оф. 1
              </Link>
            </li>
          </ul>
          <div className='nav-header__mob-menu-line'></div>
          <button
            type='button'
            className='nav-header__mob-menu-theme-switch'
          ></button>
        </section>
      )}
    </div>
  );
}

export default Nav;
