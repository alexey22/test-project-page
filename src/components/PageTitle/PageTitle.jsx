import pages from '../../utils/pages';

import { useLocation } from 'react-router-dom';

import './PageTitle.css';

function PageTitle({ forcedTitle }) {
  const location = useLocation();

  return (
    <h1 className='page-title'>
      {forcedTitle
        ? forcedTitle
        : pages.find((page) => page.url === location.pathname).title}
    </h1>
  );
}

export default PageTitle;
