import axios from 'axios'
import APICache from '@/lib/cache'

const API = axios.create({
  baseURL: 'https://vue-todo-tasks.herokuapp.com/api',
})

API.interceptors.request.use(
  (request) => {
    // Skip cache logic if the request method isn't GET
    if (request.method !== 'get') {
      return request
    }

    const cache = APICache.instance()
    const cachedData = cache.get(request.url)

    if (cachedData) {
      request.data = cache.get(request.url)

      // Set an adapter that prevents the axios instance
      // from making another HTTP request
      request.adapter = async () => {
        return {
          data: cachedData,
          status: request.status,
          statusText: request.statusText,
          headers: request.headers,
          config: request,
          request: request,
        }
      }
    }

    return request
  },
  (error) => Promise.reject(error),
)

API.interceptors.response.use(
  (response) => {
    const cache = APICache.instance()

    // Invalidate cache store if the request
    // method isn't GET
    console.log(response.config, response.request)
    if (response.config.method !== 'get') {
      cache.invalidate(response.config.url)
      return response
    }

    // Set cache store if the request was successfull
    cache.set(response.config.url, response.data)

    return response
  },
  (error) => Promise.reject(error),
)

export default API
