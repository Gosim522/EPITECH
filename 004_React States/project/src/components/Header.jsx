function Header({ darkMode, onToggleTheme }) {
  return (
    <header>
      <h1>The Campus Chronicle</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Campus Life</a>
        <a href="#">Tech</a>
        <a href="#">Sports</a>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header
