
import axios from 'axios'

export const instance = axios.create({
  baseURL: "http://localhost:3002/",
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
})