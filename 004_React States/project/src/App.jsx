import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ArticleGrid from './components/ArticleGrid'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <ArticleGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
