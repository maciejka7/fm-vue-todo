<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import NewToDoInput from './components/ToDo/NewToDoInput.vue';
import { useToDo } from './composables/useToDo.ts';

const { toDoList } = useToDo();

console.log(toDoList)
</script>

<template>
  <div class="dark:bg-slate-900 bg-slate-300 h-screen px-5 py-10">
    <MainHeader />

    <NewToDoInput />

    <ul class="text-white border mt-10">
      <li class="m-1 border" v-for="item in toDoList">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
