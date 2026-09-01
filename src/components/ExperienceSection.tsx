import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useRef, useState } from 'react'
import { experiences, type Experience } from '../data/portfolio'
import { FadeIn } from './ui/FadeIn'

function ExperienceGallery({ title, items }: { title: string; items: NonNullable<Experience['gallery']> }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.82, 280),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="experience-gallery" aria-label={title}>
      <div className="experience-gallery-header">
        <div>
          <h4>{title}</h4>
          <p>AI 生图制作商品主图 · 用于小红书投放</p>
        </div>
        <div className="experience-gallery-actions">
          <button type="button" className="focus-ring" onClick={() => scroll(-1)} aria-label="查看上一组 AI 内容作品">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="focus-ring" onClick={() => scroll(1)} aria-label="查看下一组 AI 内容作品">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div ref={trackRef} className="experience-gallery-track hide-scrollbar" tabIndex={0}>
        {items.map((item, itemIndex) => (
          <figure key={item.image} className="experience-gallery-item">
            <img src={item.image} alt={item.alt} loading="lazy" />
            <figcaption>{String(itemIndex + 1).padStart(2, '0')}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function ExperienceRow({ experience, index }: { experience: Experience; index: number }) {
  const reduceMotion = useReducedMotion()
  const [expanded, setExpanded] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const detailsId = `experience-${experience.number}-details`

  return (
    <FadeIn delay={index * 0.08} y={34} className="experience-row grid gap-8 py-10 sm:py-14 lg:grid-cols-[0.36fr_1fr] lg:gap-16 lg:py-20">
      <div className="experience-metric flex items-start justify-between lg:block">
        <motion.span
          className="experience-number font-display text-[clamp(4rem,10vw,9rem)] font-black leading-none tracking-[-0.03em]"
          initial={reduceMotion ? false : { opacity: 0.18, scale: 0.84, rotate: -3, filter: 'blur(5px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.08 + index * 0.06, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          {experience.number}
        </motion.span>
        <div className="text-right lg:mt-5 lg:text-left">
          <p className="text-sm font-medium text-ink/60">{experience.metricLabel}</p>
          <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.02em] lg:text-3xl">{experience.metric}</p>
        </div>
      </div>
      <div className="min-w-0">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className={`experience-logo experience-logo-${experience.number}`}>
              {experience.logo && !logoFailed ? (
                <>
                  <img src={experience.logo} alt={experience.number === '01' ? '' : (experience.logoAlt ?? experience.englishLabel)} onError={() => setLogoFailed(true)} />
                  {experience.number === '01' && <span>{experience.englishLabel}</span>}
                </>
              ) : (
                <span>{experience.englishLabel}</span>
              )}
            </div>
            <h3 className="mt-3 text-[clamp(1.65rem,3.4vw,3.2rem)] font-semibold leading-tight tracking-[-0.03em]">{experience.company}</h3>
          </div>
          <div className="md:text-right">
            <p className="font-medium">{experience.role}</p>
            <p className="mt-1 text-sm text-ink/60">{experience.meta}</p>
          </div>
        </div>
        <p className="mt-7 max-w-3xl text-base leading-8 text-ink/70 sm:text-lg">{experience.summary}</p>

        <button
          type="button"
          className="focus-ring mt-6 flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-4 font-display text-xs font-semibold uppercase tracking-[0.12em] md:hidden"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? '收起' : '展开详情'}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>

        <div id={detailsId} className={`${expanded ? 'block' : 'hidden'} mt-7 md:block`}>
          <ul className="experience-highlights grid md:grid-cols-3">
            {experience.highlights.map((highlight, highlightIndex) => (
              <li key={highlight} className="text-sm leading-7 text-ink/65">
                <span className="mb-3 block font-display text-[10px] font-semibold tracking-[0.2em] text-violet">EVIDENCE 0{highlightIndex + 1}</span>
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        {experience.galleryTitle && experience.gallery && (
          <ExperienceGallery title={experience.galleryTitle} items={experience.gallery} />
        )}

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="相关技能">
          {experience.tags.map((tag) => (
            <span key={tag} className="font-display text-[11px] font-medium uppercase tracking-[0.12em] text-ink/60">{tag}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-paper px-4 pb-40 pt-28 text-ink sm:px-7 sm:pb-52 sm:pt-36 lg:px-10" aria-labelledby="experience-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="section-heading-row flex items-end justify-between gap-6 border-b border-ink/20 pb-8 sm:pb-10">
          <h2 id="experience-title" className="section-title-light">EXPERIENCE</h2>
          <p className="shrink-0 pb-2 text-sm font-medium tracking-[0.12em] text-ink/60">实习经历</p>
        </div>
        <div className="divide-y divide-ink/15">
          {experiences.map((experience, index) => (
            <ExperienceRow key={experience.number} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
