const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/api/inventory', (req, res) => {
  const rawData = fs.readFileSync('inventory.json')
  const inventory = JSON.parse(rawData)
  res.status(200).json(inventory)
})

app.post('/api/inventory', (req, res) => {
  const inventory = JSON.parse(fs.readFileSync('inventory.json'))
  const newItem = {
    id: Date.now(),
    device: req.body.device,
    stock: req.body.stock,
  }
  inventory.push(newItem)
  fs.writeFileSync('inventory.json', JSON.stringify(inventory, null, 2))
  res.status(201).json({ message: 'Item added!', item: newItem })
})

app.patch('/api/inventory/:id', (req, res) => {
  const inventory = JSON.parse(fs.readFileSync('inventory.json'))
  const idToFind = parseInt(req.params.id)
  const item = inventory.find((i) => i.id === idToFind)

  if (!item) {
    return res.status(404).json({ error: 'Item not found' })
  }

  item.stock = req.body.stock
  fs.writeFileSync('inventory.json', JSON.stringify(inventory, null, 2))
  res.status(200).json({ message: 'Stock updated!', item: item })
})

app.delete('/api/inventory/:id', (req, res) => {
  const inventory = JSON.parse(fs.readFileSync('inventory.json'))
  const idToDelete = parseInt(req.params.id)
  const newInventory = inventory.filter((i) => i.id !== idToDelete)

  fs.writeFileSync('inventory.json', JSON.stringify(newInventory, null, 2))
  res.status(200).json({ message: 'Item deleted!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
