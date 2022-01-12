<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import TheCategoriesOverviewSection from '@/components/TheCategoriesOverviewSection.vue'
import TheTasksSection from '@/components/TheTasksSection.vue'

export default {
  components: {
    BaseLayout,
    TheCategoriesOverviewSection,
    TheTasksSection,
  },
  data: () => ({
    tasks: [],
  }),
  async mounted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    this.tasks = data
  },
}
</script>

<template>
  <base-layout>
    <h1 class="pt-8 mb-8 text-4xl font-bold tracking-tighter">
      What's up for today?
    </h1>
    <the-categories-overview-section :tasks="tasks" />
    <the-tasks-section :tasks="tasks" />
  </base-layout>
</template>
