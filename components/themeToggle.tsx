import React from 'react'
import type { RootState } from '@/lib/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { light, dark } from '@/lib/redux/theme'

const ThemeToggle = () => {
  const currentTheme = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    dispatch(newTheme === 'light' ? light() : dark())
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Toggle theme, current mode is ${currentTheme}`}
      className={`h-8 w-8 flex items-center justify-center p-2 rounded-full focus:outline-none ${currentTheme == 'dark' ? "bg-accent/5" : "bg-foreground/5"} `}
    >
      {currentTheme === 'light' ? (
        <i className={`fi fi-rr-moon`}></i>
      ) : (
        <i className={`fi fi-rr-sun text-accent`}></i>
      )}
    </button>
  )
}

export default ThemeToggle