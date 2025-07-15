'use client'

import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/features/themeSlice'

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 bg-gray-800 text-white rounded mt-4"
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
