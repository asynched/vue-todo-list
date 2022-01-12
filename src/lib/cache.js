export default class APICache {
  static #instance

  constructor() {
    this.store = {}
  }

  set(key, state) {
    console.log('[SET]')
    this.store[key] = state
    console.log(this.store)
  }

  invalidate(key) {
    delete this.store[key]
  }

  invalidateStore() {
    this.store = {}
  }

  get(key) {
    console.log('[GET]')
    return this.store[key]
  }

  /**
   * Gets an instance of the API cache
   * @returns { APICache }
   */
  static instance() {
    if (!APICache.#instance) {
      APICache.#instance = new APICache()
    }

    return APICache.#instance
  }
}
