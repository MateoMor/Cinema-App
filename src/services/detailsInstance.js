import axios from 'axios'
const apiKey = import.meta.env.VITE_API_KEY

const axiosDetails = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
})

export default axiosDetails
