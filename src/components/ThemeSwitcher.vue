<script setup lang="ts">
import { ref } from 'vue';
import { useThemeSwitcher } from '../composables/useThemeSwitcher.ts';

const theme = ref<'dark' | 'light'>('light');

const { switchTheme, currentTheme } = useThemeSwitcher();
</script>

<template>
  <button @click="switchTheme" class="rounded-full px-1 py-1">
    {{ currentTheme === 'light' ? '☀' : '🌚' }}
  </button>
</template>

<style scoped></style>
