import { useEffect } from 'react';

export const useThemeToggle = () => {
  useEffect(() => {
      if(localStorage.theme === undefined) {
        localStorage.theme = 'dark';
      }
      localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      console.log("ThemeToggle");

    }
  )
}