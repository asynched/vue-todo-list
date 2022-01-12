import Logger from '@/utils/log'

export default class APICache {
  static #instance
  static DEBUG = true
  #store = {}

  constructor() {
    this.#store = {}
  }

  set(key, state) {
    this.#store[key] = state

    if (APICache.DEBUG) {
      Logger.info(
        `The key ${key} has been set in the store, current state is:`,
        this.#store,
      )
    }
  }

  invalidate(key) {
    delete this.#store[key]

    if (APICache.DEBUG) {
      Logger.info(
        `The key ${key} has been removed from the store, current state is:`,
        this.#store,
      )
    }
  }

  invalidateCache() {
    this.#store = {}
  }

  get(key) {
    if (APICache.DEBUG) {
      Logger.info(`Getting key ${key} from the store`)
    }

    return this.#store[key]
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
