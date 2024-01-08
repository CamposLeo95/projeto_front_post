
import axios from 'axios'

export const instance = axios.create({
  baseURL: "https://node-postes.onrender.com",
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
})