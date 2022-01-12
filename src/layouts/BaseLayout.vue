<script>
export default {
  props: ['classes'],
}
</script>

<template>
  <main class="min-h-screen bg-slate-100 text-gray-900">
    <div :class="`mx-auto max-w-screen-md w-[90%] ${classes}`">
      <slot></slot>
    </div>
  </main>
</template>
