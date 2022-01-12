<script>
import CategoryOverviewCard from './CategoryOverviewCard.vue'

export default {
  props: ['tasks'],
  components: { CategoryOverviewCard },
  computed: {
    total() {
      return this.tasks.length
    },
    completed() {
      return this.tasks.filter((task) => task.completed).length
    },
    notCompleted() {
      return this.total - this.completed
    },
  },
}
</script>

<template>
  <section name="categories-overview">
    <p class="text-gray-500 mb-4">CATEGORIES</p>
    <div class="grid grid-cols-2 gap-4">
      <category-overview-card
        background="bg-blue-600"
        shadow="shadow-blue-400"
        name="Completed"
        :tasks-count="completed"
        :total="total"
      />
      <category-overview-card
        background="bg-red-600"
        shadow="shadow-red-400"
        name="To be finished"
        :tasks-count="notCompleted"
        :total="total"
      />
    </div>
  </section>
</template>
