<script>
export default {
  props: ['task'],
}
</script>

<template>
  <router-link
    :to="`/tasks/${task.id}`"
    class="p-4 flex items-center gap-2 bg-white rounded-lg transition hover:shadow-slate-200 hover:shadow-lg"
  >
    <input
      type="checkbox"
      aria-label="Complete task"
      class="text-red-600 rounded-full w-4 h-4 border-red-600 border-2 focus:ring-transparent"
      :class="{
        'text-blue-400': task.completed,
        'border-blue-400': task.completed,
      }"
      disabled
      :checked="task.completed"
    />
    <p class="text-lg" :class="{ 'line-through': task.completed }">
      {{ task.title }}
    </p>
  </router-link>
</template>
