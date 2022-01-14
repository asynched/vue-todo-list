import API from './api'

export default class TaskController {
  static async createTask(data) {
    await API.post('/tasks', data)
  }

  static async getTasks() {
    const { data } = await API.get(`/tasks`)
    return data
  }

  static async getTask(taskID) {
    const { data } = await API.get(`/tasks/${taskID}`)
    return data
  }

  static async deleteTask(taskID) {
    await API.delete(`/tasks/${taskID}`)
  }

  static async updateTask(taskID, data) {
    await API.put(`/tasks/${taskID}`, data)
  }
}
