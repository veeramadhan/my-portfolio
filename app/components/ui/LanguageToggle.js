'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../store/features/language'
import translations from '../lib/translations'

export default function LanguageToggle() {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language?.language) || 'en'
  const t = translations[language] || translations['en']

  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value))
  }

  return (
    <div className="mt-4">
      <label className="mr-2">{t.language}</label>
      <select
        value={language}
        onChange={handleChange}
        className="px-2 py-1 rounded text-black"
      >
        <option value="en">English</option>
        <option value="jp">日本語</option>
      </select>
    </div>
  )
}
