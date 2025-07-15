

import { useSelector } from 'react-redux'

export default function ThemeWrapper({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      {children}
    </div>
  )
}
