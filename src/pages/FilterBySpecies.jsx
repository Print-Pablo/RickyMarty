import { useState } from 'react'
import useCharacters from '../hooks/useCharacters'
import FilterBar from '../components/FilterBar'
import CharacterList from '../components/CharacterList'
import CharacterProfile from '../components/CharacterProfile'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

function FilterBySpecies() {
  const [selectedSpecies, setSelectedSpecies] = useState('Human')
  const [page, setPage]                       = useState(1)
  const [selectedChar, setSelectedChar]       = useState(null)

  const { characters, loading, error, totalPages } = useCharacters(selectedSpecies, page)

  const handleSpeciesChange = (species) => {
    setSelectedSpecies(species)
    setPage(1)
    setSelectedChar(null)
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
    setSelectedChar(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (selectedChar) {
    return (
      <CharacterProfile
        character={selectedChar}
        onBack={() => setSelectedChar(null)}
      />
    )
  }

  return (
    <div>
      <h1 className="page-title">Filtrar por Especie</h1>

      <FilterBar selected={selectedSpecies} onSelect={handleSpeciesChange} />

      {loading && <Loader />}

      {error && <p className="error-message">Error: {error}</p>}

      {!loading && !error && (
        <>
          <CharacterList characters={characters} onSelect={setSelectedChar} />
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

export default FilterBySpecies

