import FilterButton from './FilterButton/FilterButton';

import './Filter.css';

const buttons = [
  'Frontend',
  'Backend',
  'Мобильные приложения',
  'Юзабилити-аудит',
];

function Filter({ setCategory, category }) {
  function handleFilterButtonClick(category) {
    setCategory(category);
  }

  return (
    <section className='filter'>
      {buttons.map((button) => (
        <FilterButton
          title={button}
          key={button}
          onClick={() => handleFilterButtonClick(button)}
          isActive={button === category ? true : false}
        />
      ))}
    </section>
  );
}

export default Filter;
