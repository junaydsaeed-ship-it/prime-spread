'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)

    // Don't mount on touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
        if (!visible) setVisible(true)
      })
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)

    const onHoverStart = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select, label')
      setHovered(!!el)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseover', onHoverStart)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseover', onHoverStart)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mouseX, mouseY, visible])

  if (reducedMotion) return null

  return (
    <>
      {/* Precise dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#FFB162',
          }}
        />
      </motion.div>

      {/* Spring-lagged ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.6 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1.5px solid rgba(255,177,98,0.55)',
          }}
        />
      </motion.div>
    </>
  )
}
