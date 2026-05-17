import CharacterCard from './CharacterCard'

function CharacterList({ characters, onSelect }) {
  if (characters.length === 0) {
    return <p className="empty-message">No se encontraron personajes.</p>
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default CharacterList
