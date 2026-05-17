/**
 * Tarjeta individual de personaje.
 * Llama a onSelect al hacer click para ver el detalle.
 */
function CharacterCard({ character, onSelect }) {
  const { name, image, status, species, gender } = character

  const statusClass = {
    Alive:   'status-alive',
    Dead:    'status-dead',
    unknown: 'status-unknown',
  }[status] ?? 'status-unknown'

  return (
    <div className="character-card" onClick={() => onSelect(character)}>
      <img src={image} alt={name} loading="lazy" />
      <div className="character-card-body">
        <p className="character-name">{name}</p>
        <p className="character-info">
          <span className={`status-dot ${statusClass}`} />
          {status} - {species}
        </p>
        <p className="character-info">Genero: {gender}</p>
      </div>
    </div>
  )
}

export default CharacterCard
