import { translateValue } from '../../utils/translate'

function CharacterProfile({ character, onBack }) {
  const { name, image, status, species, gender, origin, location, episode } = character

  const statusClass = {
    Alive:   'status-alive',
    Dead:    'status-dead',
    unknown: 'status-unknown',
  }[status] ?? 'status-unknown'

  const translatedOrigin = origin?.name === 'unknown' ? 'Origen desconocido' : origin?.name
  const translatedLocation = location?.name === 'unknown' ? 'Ubicación desconocida' : location?.name

  return (
    <div className="profile-wrapper">
      <button className="btn-volver" onClick={onBack}>
        &#8592; Volver
      </button>

      <div className="profile-card">
        <div className="profile-img-col">
          <img src={image} alt={name} className="profile-img" />
        </div>

        <div className="profile-body">
          <h2 className="profile-name">{name}</h2>

          <div className="profile-grid">
            <div className="profile-item">
              <span className="profile-label">Estado</span>
              <span className="profile-value">
                <span className={`status-dot ${statusClass}`} style={{ marginRight: 7 }} />
                {translateValue(status)}
              </span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Especie</span>
              <span className="profile-value">{translateValue(species)}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Género</span>
              <span className="profile-value">{translateValue(gender)}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Origen</span>
              <span className="profile-value">{translatedOrigin}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Ubicación actual</span>
              <span className="profile-value">{translatedLocation}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Episodios</span>
              <span className="profile-value">{episode?.length} apariciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterProfile
