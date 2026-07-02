import { useState } from 'react'

function Footer() {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim() === '') {
      alert('Please enter a search term!')
      return
    }
    alert(`Searching archives for: ${query}`)
  }

  return (
    <footer>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search the archives..."
          value={query}
          maxLength={50}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <p className="char-counter">{query.length}/50 characters</p>
      <p>&copy; 2026 The Campus Chronicle. All rights reserved.</p>
    </footer>
  )
}

export default Footer
