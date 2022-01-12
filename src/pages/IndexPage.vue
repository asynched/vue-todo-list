<script>
import API from '@/services/http/api'

import { PlusIcon } from '@heroicons/vue/outline'
import BaseLayout from '@/layouts/BaseLayout.vue'
import TheCategoriesOverviewSection from '@/components/TheCategoriesOverviewSection.vue'
import TheTasksSection from '@/components/TheTasksSection.vue'
import CreateTaskModal from '@/components/CreateTaskModal.vue'
import TaskController from '@/services/http/task-controller'

export default {
  components: {
    BaseLayout,
    TheCategoriesOverviewSection,
    TheTasksSection,
    CreateTaskModal,
    PlusIcon,
  },
  data: () => ({
    tasks: [],
    renderCreateTaskModal: false,
  }),
  methods: {
    async revalidate() {
      const { data } = await API.get('/tasks/')
      this.tasks = data
    },
    toggleModal() {
      this.renderCreateTaskModal = !this.renderCreateTaskModal
    },
  },
  async mounted() {
    const tasks = await TaskController.getTasks()
    this.tasks = tasks
  },
}
</script>

<template>
  <base-layout>
    <create-task-modal
      :render="renderCreateTaskModal"
      @de-render="toggleModal"
      @saved="revalidate"
    />
    <div class="py-8 mb-8 flex items-center justify-between">
      <h1 class="text-4xl font-bold tracking-tighter">What's up for today?</h1>
      <button
        class="py-2 px-4 text-sm flex items-center gap-2 bg-blue-600 text-white rounded-lg transition hover:shadow-lg hover:shadow-blue-200"
        @click="toggleModal"
      >
        Create task
      </button>
    </div>
    <the-categories-overview-section :tasks="tasks" />
    <the-tasks-section :tasks="tasks" />
  </base-layout>
</template>
