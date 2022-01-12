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
      <transition name="bounce" appear>
        <category-overview-card
          background="bg-blue-600"
          shadow="shadow-blue-400"
          name="Completed"
          :tasks-count="completed"
          :total="total"
        />
      </transition>
      <transition name="bounce" appear>
        <category-overview-card
          background="bg-red-600"
          shadow="shadow-red-400"
          name="To be finished"
          :tasks-count="notCompleted"
          :total="total"
        />
      </transition>
    </div>
  </section>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-enter 500ms ease-in;
}

@keyframes bounce-enter {
  0% {
    transform: translate(0, 10%);
    opacity: 0;
  }
  50% {
    transform: translate(0, -5%);
    opacity: 50%;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
