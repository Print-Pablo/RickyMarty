
function CharacterProfile({ character, onBack }) {
  const { name, image, status, species, gender, origin, location, episode } = character

  const statusClass = {
    Alive:   'status-alive',
    Dead:    'status-dead',
    unknown: 'status-unknown',
  }[status] ?? 'status-unknown'

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
                {status}
              </span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Especie</span>
              <span className="profile-value">{species}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Genero</span>
              <span className="profile-value">{gender}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Origen</span>
              <span className="profile-value">{origin?.name}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Ubicacion actual</span>
              <span className="profile-value">{location?.name}</span>
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

