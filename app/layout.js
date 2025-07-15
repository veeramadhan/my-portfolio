'use client'

import './globals.css'
import { Provider } from 'react-redux'
import store from './components/store/store'
import ThemeWrapper from './ThemeWrapper'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="beforeInteractive"
        />

        {/* Your App */}
        <Provider store={store}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </Provider>
      </body>
    </html>
  )
}
