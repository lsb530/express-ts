import express from 'express'
import PostHandler from '../handler/PostHandler'

const router = express.Router()

// Create Post
router.post('/', async (req, res) => {
  try {
    const { title, body, userId } = req.body
    const data = await PostHandler.createPost(title, body, userId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Read Posts
router.get('/', async (req, res) => {
  try {
    const data = await PostHandler.readPosts()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Read Post
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await PostHandler.readPost(Number(id))
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update Post
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title } = req.body
    const data = await PostHandler.updatePost(Number(id), title)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await PostHandler.deletePost(Number(id))
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
