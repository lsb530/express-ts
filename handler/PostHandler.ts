import apiInstance from '../api'

// Create
const createPost = async (title: string, body: string, userId: number) => {
  try {
    const { data } = await apiInstance.post('/posts', {
      title,
      body,
      userId,
    })
    return data
  } catch (error) {
    throw new Error('An error occurred while creating the post')
  }
}

// Reads
const readPosts = async () => {
  try {
    const { data } = await apiInstance.get(`/posts`)
    return data
  } catch (error) {
    throw new Error('An error occurred while fetching the post')
  }
}

// Read
const readPost = async (id: number) => {
  try {
    const { data } = await apiInstance.get(`/posts/${id}`)
    return data
  } catch (error) {
    throw new Error('An error occurred while fetching the post')
  }
}

// Update
const updatePost = async (id: number, title: string) => {
  try {
    const { data } = await apiInstance.put(`/posts/${id}`, {
      title,
    })
    return data
  } catch (error) {
    throw new Error('An error occurred while updating the post')
  }
}

// Delete
const deletePost = async (id: number) => {
  try {
    await apiInstance.delete(`/posts/${id}`)
    return { message: 'Deleted successfully' }
  } catch (error) {
    throw new Error('An error occurred while deleting the post')
  }
}

// 모든 함수를 하나의 객체로 묶어서 export
export default {
  createPost,
  readPosts,
  readPost,
  updatePost,
  deletePost,
}
