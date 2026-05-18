import { useState } from 'react'
import useCharacters from '../hooks/useCharacters'
import CharacterList from '../components/CharacterList'
import CharacterDetail from '../components/CharacterDetail'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

function Home() {
  const [page, setPage]               = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const isSearching = searchQuery !== ''

  
  const { characters, loading, error, totalPages } = useCharacters(
    '',
    isSearching ? 1 : page,
    searchQuery
  )

  const handleSearch = (query) => {
    setSearchQuery(query)
    setPage(1)
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <h1 className="page-title">Todos los Personajes</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}

      {error && (
        <p className="empty-message">
          No se encontro ningun personaje con ese nombre.
        </p>
      )}

      {!loading && !error && isSearching && (
        <>
          <p className="search-results-label">
            {characters.length} resultado{characters.length !== 1 ? 's' : ''} para "{searchQuery}"
          </p>
          <CharacterDetail characters={characters} />
        </>
      )}

      {!loading && !error && !isSearching && (
        <>
          <CharacterList characters={characters} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
}

export default Home

