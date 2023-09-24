import FilterButton from './FilterButton/FilterButton';

import './Filter.css';

const buttons = [
  'Frontend',
  'Backend',
  'Мобильные приложения',
  'Юзабилити-аудит',
];

function Filter({ setCategory }) {
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
        />
      ))}
    </section>
  );
}

export default Filter;
