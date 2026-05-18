import { useState, useEffect } from 'react'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(input.trim())
    }, 400)
    return () => clearTimeout(timer)
  }, [input])

  const handleClear = () => {
    setInput('')
  }

  return (
    <form className="search-bar" onSubmit={e => e.preventDefault()}>
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