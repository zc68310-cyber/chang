import { motion, useMotionValue, useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { selectedWorks, type MarqueeItem } from '../data/portfolio'
import { ImageWithFallback } from './ui/ImageWithFallback'

function ReelRow({
  sectionRef,
  works,
  reverse = false,
}: {
  sectionRef: React.RefObject<HTMLElement | null>
  works: MarqueeItem[]
  reverse?: boolean
}) {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const hovered = useRef(false)
  const lastRawOffset = useRef<number | null>(null)
  const visualOffset = useRef(0)

  useEffect(() => {
    if (reduceMotion) return

    let frame = 0
    const update = () => {
      frame = 0
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return
      const sectionRect = section.getBoundingClientRect()
      const scrollRange = window.innerHeight + sectionRect.height
      const progress = Math.min(Math.max((window.innerHeight - sectionRect.top) / scrollRange, 0), 1)
      const travel = Math.max(track.scrollWidth - window.innerWidth, 0)
      const rawOffset = reverse ? -travel * progress : -travel * (1 - progress)
      if (lastRawOffset.current === null) {
        lastRawOffset.current = rawOffset
        visualOffset.current = rawOffset
      } else {
        const delta = rawOffset - lastRawOffset.current
        visualOffset.current += delta * (hovered.current ? 0.14 : 1)
        lastRawOffset.current = rawOffset
      }
      x.set(visualOffset.current)
    }
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reduceMotion, reverse, sectionRef, x])

  return (
    <div
      className="marquee-row overflow-visible"
      data-direction={reverse ? 'left' : 'right'}
      onPointerEnter={() => { hovered.current = true }}
      onPointerLeave={() => { hovered.current = false }}
    >
      <motion.div ref={trackRef} className="marquee-track flex w-max gap-3 will-change-transform" style={reduceMotion ? undefined : { x }}>
        {works.map((item) => (
          <article
            key={item.label}
            className="marquee-tile"
            data-format={item.format}
          >
            <ImageWithFallback
              src={item.image}
              alt={item.alt}
              label={item.label}
              available={item.available}
              className="h-full w-full"
              imageClassName={`h-full w-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.025]`}
            />
            <span className="marquee-label">{item.label}</span>
          </article>
        ))}
      </motion.div>
    </div>
  )
}

export function WorkMarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const firstRow = selectedWorks.filter((item) => item.row === 1)
  const secondRow = selectedWorks.filter((item) => item.row === 2)

  return (
    <section ref={sectionRef} className="work-marquee-section relative overflow-hidden bg-ink pb-28 pt-24 text-silver sm:pb-40 sm:pt-32" aria-labelledby="work-reel-title">
      <div className="mb-8 flex flex-col items-start gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7 lg:px-10">
        <h2 id="work-reel-title" className="font-display text-sm font-semibold uppercase tracking-[0.22em]">SELECTED WORK / 2025—2026</h2>
        <span className="self-end font-display text-xs tracking-[0.18em] text-silver/45 sm:self-auto" aria-hidden="true">SCROLL TO EXPLORE</span>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <ReelRow sectionRef={sectionRef} works={firstRow} />
        <ReelRow sectionRef={sectionRef} works={secondRow} reverse />
      </div>
    </section>
  )
}
