
import { useThemeToggle } from 'hook/useThemeToggle.hook';
import React, { useState } from 'react'

type ToggleThemeProps = {
  readonly className?: React.ReactNode
}


const ToggleTheme = (props: ToggleThemeProps) => {
  const {className} = props;

  const [darkMode, setDarkMode] = useState(false);
  const ThemeToggle = useThemeToggle();

  const HandleToggle = () => {
    ThemeToggle;
    setDarkMode(!darkMode);
  };
  
  return (
    <button className='fixed bottom-12 right-4 border-2 border-black w-16 h-16 rounded-full drop-shadow-md boder-2 dark:border-white center' onClick={HandleToggle}>
      {darkMode ? (
        <svg className="mx-auto w-8 h-8 md:w-10 md:h-10 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg className="mx-auto w-8 h-8 md:w-10 md:h-10 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
    )
}

export default ToggleTheme;