import React from 'react'
import { useTheme } from 'next-themes';


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme == 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          className={`h-8 w-8 flex items-center justify-center p-2 rounded-full focus:outline-none`}
        >
          <i className={`fi fi-rr-moon`}></i>
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          className={`h-8 w-8 flex items-center justify-center p-2 rounded-full focus:outline-none`}
        >
          <i className={`fi fi-rr-sun`}></i>
        </button>
      )

      }
    </>
  )
}

export default ThemeToggle