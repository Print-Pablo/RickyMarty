import { useState, useEffect } from 'react'

const BASE_URL = 'https://rickandmortyapi.com/api/character'
const MAX_PAGES = 5

const useCharacters = (species = '', page = 1, name = '') => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    let cancelled = false

    const fetchCharacters = async () => {
      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams()
        if (species) params.append('species', species)
        if (name)    params.append('name', name)
        if (!name)   params.append('page', page)

        const res = await fetch(`${BASE_URL}?${params.toString()}`)

        if (res.status === 404) {
          if (!cancelled) { setCharacters([]); setTotalPages(1) }
          return
        }
        if (!res.ok) throw new Error(`Error ${res.status}`)

        const data = await res.json()

        if (name) {
          const totalPagesCount = data.info?.pages ?? 1
          let allResults = [...(data.results || [])]
          const extraPages = Math.min(totalPagesCount - 1, MAX_PAGES - 1)

          if (extraPages > 0) {
            const promises = Array.from({ length: extraPages }, (_, i) => {
              const p = new URLSearchParams()
              if (species) p.append('species', species)
              p.append('name', name)
              p.append('page', i + 2)
              return fetch(`${BASE_URL}?${p.toString()}`)
                .then(r => r.ok ? r.json() : { results: [] })
                .then(d => d.results || [])
                .catch(() => [])
            })
            const pages = await Promise.all(promises)
            pages.forEach(results => { allResults = allResults.concat(results) })
          }

          const filtered = allResults.filter(c =>
            c.name?.toLowerCase().startsWith(name.toLowerCase())
          )
          if (!cancelled) { setCharacters(filtered); setTotalPages(1) }
        } else {
          if (!cancelled) {
            setCharacters(data.results || [])
            setTotalPages(data.info?.pages ?? 1)
          }
        }
      } catch (err) {
        if (!cancelled) setError(err.message || 'Error de conexion.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCharacters()
    return () => { cancelled = true }
  }, [species, page, name])

  return { characters, loading, error, totalPages }
}

export default useCharacters