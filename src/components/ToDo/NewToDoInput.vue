<script setup lang="ts">
import { useToDo } from '../../composables/useToDo';

const { formState, handleAddToDo } = useToDo()
</script>

<template>
  <div class="mt-10 border flex p-4">
    <form @submit.prevent="handleAddToDo" class="flex"  >

      <input v-model="formState.toDoStatus" type="checkbox" class="mr-4 flex-none" />
      <input v-model="formState.toDoText" type="text" class="text-white bg-slate-700 outline-none p-4 flex w-full" placeholder="write down todo..." />

    </form>
  </div>
</template>

<style scoped></style>
