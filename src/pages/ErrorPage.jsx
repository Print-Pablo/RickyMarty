import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="error-page">
      <span className="error-code">404</span>
      <h2>Portal equivocado</h2>
      <p>Esta dimension no existe. Vuelve al universo principal.</p>
      <Link to="/" className="btn-back">Volver al inicio</Link>
    </div>
  )
}

export default ErrorPage
