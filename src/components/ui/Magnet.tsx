import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useEffect, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  className?: string
  strength?: number
  maxOffset?: number
  maxRotation?: number
  trackViewport?: boolean
}

export function Magnet({
  children,
  className,
  strength = 0.1,
  maxOffset = 12,
  maxRotation = 0,
  trackViewport = false,
}: MagnetProps) {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.55 })
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.55 })
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 22, mass: 0.65 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 22, mass: 0.65 })

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine) and (hover: hover)')
    const update = () => setEnabled(query.matches && !reduceMotion)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [reduceMotion])

  useEffect(() => {
    if (!enabled || !trackViewport) return

    const handleViewportMove = (event: globalThis.PointerEvent) => {
      const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2
      const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2
      x.set(normalizedX * maxOffset)
      y.set(normalizedY * maxOffset * 0.55)
      rotateY.set(normalizedX * maxRotation)
      rotateX.set(-normalizedY * maxRotation * 0.6)
    }

    const resetViewport = () => {
      x.set(0)
      y.set(0)
      rotateX.set(0)
      rotateY.set(0)
    }

    window.addEventListener('pointermove', handleViewportMove, { passive: true })
    window.addEventListener('blur', resetViewport)
    return () => {
      window.removeEventListener('pointermove', handleViewportMove)
      window.removeEventListener('blur', resetViewport)
      resetViewport()
    }
  }, [enabled, maxOffset, maxRotation, rotateX, rotateY, trackViewport, x, y])

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!enabled || trackViewport) return
    const rect = event.currentTarget.getBoundingClientRect()
    const nextX = (event.clientX - rect.left - rect.width / 2) * strength
    const nextY = (event.clientY - rect.top - rect.height / 2) * strength
    x.set(Math.max(-maxOffset, Math.min(maxOffset, nextX)))
    y.set(Math.max(-maxOffset, Math.min(maxOffset, nextY)))
  }

  const reset = () => {
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      className={className}
      style={enabled ? { x: springX, y: springY, rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 900 } : undefined}
      onPointerMove={handleMove}
      onPointerLeave={trackViewport ? undefined : reset}
    >
      {children}
    </motion.div>
  )
}
