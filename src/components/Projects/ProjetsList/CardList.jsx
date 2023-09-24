import ProjectCard from './ProjectCard/ProjectCard';

import './CardList.css';

function CardList({ cards, category }) {
  return (
    <ul className='card-list'>
      {cards
        .filter((card) =>
          card.categories.some((cat) => !category || cat.name === category)
        )
        .map((card) => (
          <ProjectCard
            img={card.image}
            link={card.project_url}
            title={card.title}
            description={card.description}
            key={card.id}
          />
        ))}
    </ul>
  );
}

export default CardList;
