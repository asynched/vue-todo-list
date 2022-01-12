<script>
export default {
  props: ['tasks-count', 'total', 'name', 'background', 'shadow'],
  methods: {
    /**
     * Calculates the percentage based on a partial and a total
     * @param { number } partial
     * @param { number } total
     * @returns { number } Percentage
     */
    calculatePercentage(partial, total) {
      return (100 * partial) / total
    },
  },
}
</script>

<template>
  <div
    class="p-4 bg-white rounded-lg shadow-slate-200 shadow-md transition hover:shadow-xl hover:shadow-slate-200"
  >
    <p class="text-gray-500">{{ tasksCount }} tasks</p>
    <h3 class="mt-2 mb-3 text-2xl font-bold tracking-tighter">{{ name }}</h3>
    <!-- Progress bar -->
    <div class="h-1 bg-gray-200 rounded">
      <div
        :style="`width: ${calculatePercentage(tasksCount, total)}%`"
        :class="`h-full ${background} rounded shadow-md ${shadow}`"
      ></div>
    </div>
  </div>
</template>
