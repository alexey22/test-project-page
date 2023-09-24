import './ProjectCard.css';

function ProjectCard({ link, img, title, description }) {
  return (
    <li className='project-card'>
      <a
        className='project-card__link'
        href={link || 'https://www.ya.ru'}
        target='_blank'
        rel='noreferrer'
      >
        {' '}
      </a>
      <div className='project-card__content'>
        <div className='project-card__pattern'></div>
        <h2 className='project-card__title'>{title}</h2>
        <p className='project-card__description'>{description}</p>
        <div className='project-card__shadow-top'></div>
        <div className='project-card__shadow-bottom'></div>
        <img className='project-card__image' src={img} alt={title} />
      </div>
    </li>
  );
}

export default ProjectCard;
