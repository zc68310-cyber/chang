import { motion, useReducedMotion } from 'motion/react'
import type { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href: string
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  download?: boolean | string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function GradientButton({ children, className = '', ...props }: ButtonProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.a
      className={`gradient-button focus-ring ${className}`}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.22 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export function OutlineButton({ children, className = '', ...props }: ButtonProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.a
      className={`outline-button focus-ring ${className}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { y: 0 }}
      transition={{ duration: 0.22 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
