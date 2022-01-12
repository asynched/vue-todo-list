<script>
import { defineAsyncComponent } from 'vue'
import TaskCard from './TaskCard.vue'

export default {
  components: { TaskCard },
  props: ['tasks'],
}
</script>

<template>
  <section name="tasks">
    <p class="text-gray-500 mt-8 mb-4">TODAY'S TASKS</p>
    <div class="grid gap-4">
      <task-card v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </section>
</template>
