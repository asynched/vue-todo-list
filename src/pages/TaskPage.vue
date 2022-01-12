<script>
import { useToast } from 'vue-toastification'
import { TrashIcon, CheckIcon } from '@heroicons/vue/outline'

import APICache from '@/lib/cache'
import Logger from '@/utils/log'
import API from '@/services/http/api'

import BaseLayout from '@/layouts/BaseLayout.vue'
import TaskController from '@/services/http/task-controller'

export default {
  components: {
    BaseLayout,
    TrashIcon,
    CheckIcon,
  },
  data: () => ({
    task: null,
    isLoading: true,
    toast: useToast(),
  }),
  methods: {
    showSuccessToast(message, toastID) {
      if (toastID) {
        this.toast.dismiss(toastID)
      }
      this.toast.success(message)
    },
    showErrorToast(message, toastID) {
      if (toastID) {
        this.toast.dismiss(toastID)
      }

      this.toast.error(message)
    },
    redirectToHome() {
      this.$router.push('/')
    },
    async handleDelete() {
      const taskID = this.$route.params.id
      const cache = APICache.instance()

      try {
        await TaskController.deleteTask(taskID)
        cache.invalidateCache()
        this.showSuccessToast(
          'Successfully deleted task, redirecting to home page.',
        )
        setTimeout(this.redirectToHome.bind(this), 3000)
      } catch (error) {
        Logger.error(error)
        this.showErrorToast("Couldn't delete the task, please try again.")
      }
    },
    async handleSave() {
      const taskID = this.$route.params.id
      const cache = APICache.instance()

      const data = this.task

      try {
        await TaskController.updateTask(taskID, data)
        cache.invalidateCache()
        this.showSuccessToast('Succesfully updated task!')
      } catch (error) {
        Logger.error(error)
        this.showErrorToast("Couldn't save the task, please try again.")
      }
    },
  },
  async mounted() {
    const taskID = this.$route.params.id
    const task = await TaskController.getTask(taskID)

    this.task = task
    this.isLoading = false
  },
}
</script>

<template>
  <base-layout classes="h-screen flex items-center justify-center">
    <!-- Loading state  -->
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <input
        v-model="task.title"
        class="w-full mb-8 text-4xl font-bold tracking-tighter uppercase outline-none bg-transparent"
      />
      <textarea
        class="text-lg mb-4 outline-none bg-transparent w-full appearance-none border-none resize-y focus:ring-transparent"
        v-model="task.description"
      />
      <div class="mb-4 flex items-center gap-2 text-lg">
        <input type="checkbox" v-model="task.completed" class="rounded" />
        {{ task.completed ? 'Finished' : 'Unfinished' }}
      </div>
      <div class="flex justify-end text-lg gap-4">
        <button
          class="w-10 h-10 grid place-items-center border-2 text-red-600 border-red-600 rounded transition ease-in-out hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-300"
          aria-label="Delete task"
          @click="handleDelete"
        >
          <trash-icon class="w-4 h-4" />
        </button>
        <button
          class="w-10 h-10 grid place-items-center rounded transition ease-in-out bg-blue-600 text-white hover:shadow-md hover:shadow-blue-300"
          aria-label="Save task"
          @click="handleSave"
        >
          <check-icon class="w-4 h-4" />
        </button>
      </div>
    </div>
  </base-layout>
</template>
