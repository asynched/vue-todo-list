<script>
import API from '@/services/http/api'

import { TrashIcon, CheckIcon } from '@heroicons/vue/outline'

import BaseLayout from '@/layouts/BaseLayout.vue'

export default {
  components: {
    BaseLayout,
    TrashIcon,
    CheckIcon,
  },
  data: () => ({
    task: null,
    isLoading: true,
  }),
  async mounted() {
    const taskId = this.$route.params.id
    const { data } = await API.get(`/todos/${taskId}`)

    this.task = data
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
        class="w-full py-8 text-4xl font-bold tracking-tighter uppercase outline-none bg-transparent"
      />
      <textarea
        class="text-lg mb-4 outline-none bg-transparent w-full appearance-none border-none resize-y focus:ring-transparent"
        value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur veniam excepturi nisi obcaecati non dolorum ullam accusantium, ut tenetur?"
      />
      <div class="mb-4 flex items-center gap-2 text-lg">
        <input type="checkbox" v-model="task.completed" class="rounded" />
        {{ task.completed ? 'Finished' : 'Unfinished' }}
      </div>
      <div class="flex justify-end text-lg gap-4">
        <button
          class="w-12 h-12 grid place-items-center border-2 text-red-600 border-red-600 rounded transition ease-in-out hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-300"
          aria-label="Delete task"
        >
          <trash-icon class="w-5 h-5" />
        </button>
        <button
          class="w-12 h-12 grid place-items-center rounded transition ease-in-out bg-blue-600 text-white hover:shadow-md hover:shadow-blue-300"
          aria-label="Save task"
        >
          <check-icon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </base-layout>
</template>
