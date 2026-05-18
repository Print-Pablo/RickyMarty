import { translateValue } from '../../utils/translate'

function CharacterDetail({ characters, onSelect }) {
  if (characters.length === 0) return null

  if (characters.length === 1) {
    const c = characters[0]
    const statusClass = { Alive: 'status-alive', Dead: 'status-dead', unknown: 'status-unknown' }[c.status] ?? 'status-unknown'
    return (
      <div className="detail-card" onClick={() => onSelect(c)} style={{ cursor: 'pointer' }}>
        <img src={c.image} alt={c.name} className="detail-img" />
        <div className="detail-body">
          <h2 className="detail-name">{c.name}</h2>
          <div className="detail-row">
            <span className="detail-label">Estado</span>
            <span className="detail-value">
              <span className={`status-dot ${statusClass}`} style={{ marginRight: 6 }} />{translateValue(c.status)}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Especie</span>
            <span className="detail-value">{translateValue(c.species)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Género</span>
            <span className="detail-value">{translateValue(c.gender)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Origen</span>
            <span className="detail-value">{c.origin?.name === 'unknown' ? 'Origen desconocido' : c.origin?.name}</span>
          </div>
          <p className="detail-hint">Haz clic para ver más detalles</p>
        </div>
      </div>
    )
  }

  return (
    <div className="detail-grid">
      {characters.map((c) => {
        const statusClass = { Alive: 'status-alive', Dead: 'status-dead', unknown: 'status-unknown' }[c.status] ?? 'status-unknown'
        return (
          <div key={c.id} className="detail-card-sm" onClick={() => onSelect(c)} style={{ cursor: 'pointer' }}>
            <img src={c.image} alt={c.name} />
            <div className="detail-card-sm-body">
              <p className="character-name">{c.name}</p>
              <p className="character-info">
                <span className={`status-dot ${statusClass}`} />{translateValue(c.status)} - {translateValue(c.species)}
              </p>
              <p className="character-info">Género: {translateValue(c.gender)}</p>
              <p className="character-info">Origen: {c.origin?.name === 'unknown' ? 'Origen desconocido' : c.origin?.name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterDetail
