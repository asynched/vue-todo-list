<script>
import { defineAsyncComponent } from 'vue'
import TaskCard from './TaskCard.vue'

export default {
  components: { TaskCard },
  props: ['tasks'],
  data: () => ({
    filter: 'All',
  }),
  computed: {
    filteredTasks() {
      if (this.filter === 'All') {
        return this.tasks
      }

      const showOnlyFinished = this.filter === 'Finished'

      return this.tasks.filter((task) => task.completed === showOnlyFinished)
    },
  },
}
</script>

<template>
  <section name="tasks">
    <div class="mt-8 mb-4 flex items-center justify-between">
      <p class="text-gray-500">TODAY'S TASKS</p>
      <select
        v-model="filter"
        class="py-0 border-none bg-transparent focus:ring-transparent"
      >
        <option>All</option>
        <option>Finished</option>
        <option>Unfinished</option>
      </select>
    </div>
    <transition-group appear name="tasks" tag="div" class="grid gap-4">
      <task-card v-for="task in filteredTasks" :key="task.id" :task="task" />
    </transition-group>
  </section>
</template>

<style scoped>
.tasks-enter-active {
  animation: show-up 500ms ease-in-out;
}

.tasks-move {
  transition: transform 500ms;
}

@keyframes show-up {
  0% {
    transform: translate(0, 10%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
