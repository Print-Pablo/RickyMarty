import { useState, useEffect } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api/character'

/**
 * Hook para consultar personajes de la API de Rick and Morty.
 * Soporta filtro por especie, busqueda por nombre y paginacion.
 *
 * @param {string} species  - Especie para filtrar
 * @param {number} page     - Pagina actual
 * @param {string} name     - Nombre para buscar
 */
const useCharacters = (species = '', page = 1, name = '') => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams()
        if (!name) params.append('page', page)   // sin paginacion al buscar
        if (species) params.append('species', species)
        if (name)    params.append('name', name)

        const res = await fetch(`${BASE_URL}?${params.toString()}`)

        if (res.status === 404) {
          setCharacters([])
          setTotalPages(1)
          return
        }
        if (!res.ok) {
          throw new Error(`Error ${res.status}: No se pudieron obtener los personajes.`)
        }

        const data = await res.json()
        setCharacters(data.results || [])
        setTotalPages(data.info?.pages ?? 1)
      } catch (err) {
        setError(err.message || 'Error de conexion.')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [species, page, name])

  return { characters, loading, error, totalPages }
}

export default useCharacters
