import axios from 'axios'
import { apiKey } from '../constants/apiKey'

const axiosSearch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
})

export default axiosSearch
