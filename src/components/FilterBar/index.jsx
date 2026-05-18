import { translateValue } from '../../utils/translate'

const SPECIES_LIST = [
  'Human',
  'Alien',
  'Robot',
  'Mythological Creature',
  'Animal',
  'Humanoid',
  'Poopybutthole',        
  'Cronenberg',
]


function FilterBar({ selected, onSelect }) {
  return (
    <div className="filter-section">
      <p className="filter-label">Selecciona una especie:</p>
      <div className="filter-bar">
        {SPECIES_LIST.map((species) => (
          <button
            key={species}
            className={`filter-btn ${selected === species ? 'active' : ''}`}
            onClick={() => onSelect(species)}
          >
            {translateValue(species)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
