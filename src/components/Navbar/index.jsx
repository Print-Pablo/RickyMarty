import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {}
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/plumbus.png" alt="Plumbus" className="navbar-logo" />
          <span>Rick &amp; Morty</span>
        </NavLink>

        {}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        {}
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li>
            <NavLink
              to="/characters"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
            >
              Todos los personajes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/filter"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
            >
              Filtrar por especie
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

