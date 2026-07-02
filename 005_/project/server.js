const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/api/articles', (req, res) => {
  const articles = JSON.parse(fs.readFileSync('articles.json'))
  res.status(200).json(articles)
})

app.get('/api/articles/:id', (req, res) => {
  const articles = JSON.parse(fs.readFileSync('articles.json'))
  const idToFind = parseInt(req.params.id)
  const article = articles.find((a) => a.id === idToFind)

  if (!article) {
    return res.status(404).json({ error: 'Article not found' })
  }

  res.status(200).json(article)
})

app.post('/api/articles', (req, res) => {
  const articles = JSON.parse(fs.readFileSync('articles.json'))
  const newArticle = {
    id: Date.now(),
    title: req.body.title,
    excerpt: req.body.excerpt,
    author: req.body.author,
    likes: 0,
  }
  articles.push(newArticle)
  fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2))
  res.status(201).json({ message: 'Article published successfully!', article: newArticle })
})

app.patch('/api/articles/:id', (req, res) => {
  const articles = JSON.parse(fs.readFileSync('articles.json'))
  const idToFind = parseInt(req.params.id)
  const article = articles.find((a) => a.id === idToFind)

  if (!article) {
    return res.status(404).json({ error: 'Article not found' })
  }

  const { id, ...updates } = req.body
  Object.assign(article, updates)

  fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2))
  res.status(200).json({ message: 'Article updated successfully!', article: article })
})

app.delete('/api/articles/:id', (req, res) => {
  const articles = JSON.parse(fs.readFileSync('articles.json'))
  const idToDelete = parseInt(req.params.id)
  const newArticles = articles.filter((a) => a.id !== idToDelete)

  fs.writeFileSync('articles.json', JSON.stringify(newArticles, null, 2))
  res.status(200).json({ message: 'Article deleted!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
