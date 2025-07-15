'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

export default function CrystalChainBackGround() {
  const backgroundRef = useRef(null)
  const effect = useRef(null)

  useEffect(() => {
    if (!effect.current && typeof window !== 'undefined') {
      effect.current = NET({
        el: backgroundRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x8e44ad,               // 💜 Soft violet
        backgroundColor: 0x000000,     // Base black
        points: 25.0,                  // Smaller dots
        maxDistance: 8.0,              // Tight connections
        spacing: 10.0                  // Dense pattern
      })
    }

    return () => {
      if (effect.current) effect.current.destroy()
    }
  }, [])

  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-25" // 👈 Lower opacity for softness
      style={{ mixBlendMode: 'lighten' }}
    />
  )
}
