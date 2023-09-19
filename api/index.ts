import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const apiUrl = process.env.API_URL

const apiInstance = axios.create({
  baseURL: apiUrl,
})

export default apiInstance
