<script>
import { useToast } from 'vue-toastification'
import { CheckIcon, XIcon } from '@heroicons/vue/outline'

import { isEmpty } from '@/utils'
import Logger from '@/utils/log'
import APICache from '@/lib/cache'

import Modal from './Modal.vue'
import TaskController from '@/services/http/task-controller'

export default {
  props: ['render'],
  emits: ['de-render', 'saved'],
  data: () => ({
    title: '',
    description: '',
    toast: useToast(),
  }),
  methods: {
    async handleSave() {
      if (isEmpty(this.title) || isEmpty(this.description)) {
        alert('Title and description can not be empty!')
        return
      }

      const cache = APICache.instance()

      const data = {
        title: this.title,
        description: this.description,
        completed: false,
      }

      try {
        await TaskController.createTask(data)
        cache.invalidateCache()
        this.$emit('saved')
        this.$emit('de-render')
      } catch (error) {
        Logger.error(error)
        this.toast.error("Couldn't save task")
      }
    },
  },
  components: {
    Modal,
    CheckIcon,
    XIcon,
  },
}
</script>

<template>
  <transition name="fade">
    <modal v-if="render">
      <form @submit.prevent="handleSave">
        <input
          type="text"
          v-model="title"
          placeholder="Enter the title"
          class="p-0 pb-2 text-2xl font-bold tracking-tighter w-full outline-none border-none focus:ring-0"
        />
        <textarea
          v-model="description"
          class="mb-2 border-none outline-none w-full resize-y focus:ring-transparent"
          placeholder="Enter the task description"
        />
        <div class="flex justify-end gap-2">
          <button
            @click="$emit('de-render')"
            type="button"
            class="w-8 h-8 flex items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg text-sm transition ease-in-out"
          >
            <x-icon class="w-4 h-4" />
          </button>
          <button
            type="submit"
            class="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg text-sm transition ease-in-out hover:shadow-md hover:shadow-blue-400"
          >
            <check-icon class="w-4 h-4" />
          </button>
        </div>
      </form>
    </modal>
  </transition>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all ease-in-out 250ms;
}
</style>
