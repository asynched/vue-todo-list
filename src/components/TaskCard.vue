<script>
export default {
  props: ['task'],
}
</script>

<template>
  <div
    class="p-4 flex items-center gap-2 bg-white rounded-lg transition hover:shadow-slate-200 hover:shadow-lg"
  >
    <input
      type="checkbox"
      class="text-pink-600 rounded-full w-4 h-4 border-pink-600 border-2 focus:ring-transparent"
      :class="{ 'text-pink-400': task.completed }"
      disabled
      :checked="task.completed"
    />
    <p class="text-lg" :class="{ 'line-through': task.completed }">
      {{ task.title }}
    </p>
  </div>
</template>
