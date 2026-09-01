import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useMemo, useRef } from 'react'

interface AnimatedCharacterProps {
  character: string
  index: number
  total: number
  progress: MotionValue<number>
}

function AnimatedCharacter({ character, index, total, progress }: AnimatedCharacterProps) {
  const start = index / Math.max(total, 1)
  const end = Math.min(start + 0.16, 1)
  const opacity = useTransform(progress, [start, end], [0.18, 1])

  return <motion.span style={{ opacity }}>{character === ' ' ? '\u00A0' : character}</motion.span>
}

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.3'] })
  const tokens = useMemo(() => text.match(/[A-Za-z0-9][A-Za-z0-9+&/.-]*|\s+|./gu) ?? [], [text])
  const total = text.length
  let cursor = 0

  if (reduceMotion) {
    return <p ref={ref} className={className}>{text}</p>
  }

  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {tokens.map((token, tokenIndex) => {
          const tokenStart = cursor
          cursor += token.length
          return (
            <span key={`${token}-${tokenIndex}`} className={/^[A-Za-z0-9]/.test(token) ? 'inline-block whitespace-nowrap' : undefined}>
              {[...token].map((character, characterIndex) => (
                <AnimatedCharacter
                  key={`${tokenIndex}-${characterIndex}`}
                  character={character}
                  index={tokenStart + characterIndex}
                  total={total}
                  progress={scrollYProgress}
                />
              ))}
            </span>
          )
        })}
      </span>
    </p>
  )
}
