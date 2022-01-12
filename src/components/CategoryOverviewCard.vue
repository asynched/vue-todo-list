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
  computed: {
    percentage() {
      return this.calculatePercentage(this.tasksCount, this.total)
    },
  },
}
</script>

<template>
  <div
    class="p-4 bg-white rounded-lg shadow-slate-200 shadow-md transition hover:shadow-xl hover:shadow-slate-200"
  >
    <p class="text-gray-500">{{ tasksCount }} tasks</p>
    <h2 class="mt-2 mb-3 text-2xl font-bold tracking-tighter">{{ name }}</h2>
    <transition name="fill" appear>
      <div class="h-1 bg-gray-200 rounded">
        <div
          :style="`width: ${percentage}%`"
          :class="`h-full ${background} rounded shadow-md ${shadow}`"
        ></div>
      </div>
    </transition>
  </div>
</template>

<style>
.fill-enter-active {
  animation: fill 750ms ease-in-out;
}

@keyframes fill {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
