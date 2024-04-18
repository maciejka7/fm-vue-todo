import { ref, onMounted } from 'vue';

type CurrentTheme = 'light' | 'dark';

export const useThemeSwitcher = () => {
  const currentTheme = ref<CurrentTheme>('light');

  onMounted(() => {
    setCurrentTheme();
  });

  const switchTheme = () => {
    setCurrentTheme();
    document.documentElement.classList.toggle('dark');
  };

  const setCurrentTheme = (): CurrentTheme => {
    const isDarkTheme = document.documentElement.classList.contains('dark');

    return isDarkTheme
      ? (currentTheme.value = 'dark')
      : (currentTheme.value = 'light');
  };

  return {
    switchTheme,
    currentTheme,
  };
};
