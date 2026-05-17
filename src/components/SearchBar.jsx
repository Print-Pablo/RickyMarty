import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(input.trim())
  }

  const handleClear = () => {
    setInput('')
    onSearch('')
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar personaje"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <button type="button" className="search-clear" onClick={handleClear}>
          X
        </button>
      )}
      <button type="submit" className="search-btn">
        Buscar
      </button>
    </form>
  )
}

export default SearchBar
