import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      {}
      <div className="landing-stars" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="star" style={{
            left:              `${Math.random() * 100}%`,
            top:               `${Math.random() * 100}%`,
            animationDelay:    `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            width:             `${2 + Math.random() * 3}px`,
            height:            `${2 + Math.random() * 3}px`,
          }} />
        ))}
      </div>

      {}
      <div className="landing-content">
        {}
        <header className="landing-header">
          <img src="/plumbus.png" alt="Plumbus" className="landing-plumbus" />
          <h1 className="landing-title">
            Descubre el universo de<br />
            <span className="landing-title-highlight">Rick y Morty</span>
          </h1>
        </header>

        {}
        <p className="landing-description">
          Explora todos los personajes de la serie a traves de la API oficial de Rick and Morty.
          Navega por cientos de personajes, filtralos por especie y busca a tu favorito.
          Una experiencia interdimensional creada con React.
        </p>

        {}
        <div className="portal-wrapper">
          <p className="portal-hint">Haz clic en el portal para comenzar</p>
          <button
            className="portal-btn"
            onClick={() => navigate('/characters')}
            aria-label="Ir a los personajes"
          >
            <img src="/portal.png" alt="Portal dimensional" className="portal-img" />
            <span className="portal-text">Entrar al universo</span>
          </button>
        </div>

        {}
        <footer className="landing-footer">
          <p className="landing-author">Juan Pablo Cardenas</p>
          <p className="landing-subject">Programacion Web</p>
        </footer>
      </div>
    </div>
  )
}

export default Landing

