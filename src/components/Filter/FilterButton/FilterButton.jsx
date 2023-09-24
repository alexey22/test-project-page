import './FilterButton.css';

function FilterButton({ title, isActive, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`filter-button ${isActive ? 'filter-button_active' : ''}`}
    >
      {title}
    </button>
  );
}

export default FilterButton;
