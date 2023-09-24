import { NavLink, useLocation } from 'react-router-dom';

import pages from '../../utils/pages';

import './Breadcrumbs.css';

function Breadcrumbs() {
  const location = useLocation();
  return (
    <nav className='bread'>
      <span className='bread__path'>
        <NavLink to='/' className='bread__main'>
          Главная /
        </NavLink>
        <span className='bread__current-page'>
          {location.pathname === '/team'
            ? ' Команда'
            : ' ' + pages.find((page) => page.url === location.pathname).title}
        </span>
      </span>
    </nav>
  );
}

export default Breadcrumbs;
