import axios from 'axios'
const apiKey = import.meta.env.VITE_API_KEY

const axiosDiscover = axios.create({
  baseURL: 'https://api.themoviedb.org/3/discover',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
})

export default axiosDiscover
