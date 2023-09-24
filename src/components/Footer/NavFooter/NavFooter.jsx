import { NavLink } from 'react-router-dom';

import pages from '../../../utils/pages';

import './NavFooter.css';

function NavFooter() {
  const links = [
    { title: 'Главная', url: '/' },
    { title: 'Блог', url: '/blog' },
    { title: 'Услуги', url: '/services' },
    { title: 'О нас', url: '/about' },
    { title: 'Проекты', url: '/projects' },
    { title: 'Команда', url: '/team' },
  ];

  return (
    <nav>
      <ul className='nav-footer__links'>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink className='nav-footer__link' to={link.url}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavFooter;
