import { ArrowUpRight, BookOpen, Play, Radio } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import { FadeIn } from './ui/FadeIn'
import { ImageWithFallback } from './ui/ImageWithFallback'
import { ProjectModal, type ModalMode } from './ui/ProjectModal'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project, mode: ModalMode) => void
}

function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const slotRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLElement>(null)
  const [cardHeight, setCardHeight] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: slotRef, offset: ['start 96px', 'end 96px'] })
  const targetScale = 1 - (projects.length - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 0.88], [1, targetScale])
  const y = useTransform(scrollYProgress, [0, 1], [0, index < projects.length - 1 ? cardHeight : 0])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const updateHeight = () => setCardHeight(card.offsetHeight)
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  const openVideo = () => {
    if (!project.bilibiliBvid && project.videoShortUrl) {
      window.open(project.videoShortUrl, '_blank', 'noopener,noreferrer')
    }
    onOpen(project, 'video')
  }

  return (
    <div ref={slotRef} className="project-stack-slot" style={{ zIndex: index + 1 }}>
      <motion.article
        ref={cardRef}
        id={`project-${project.number}`}
        style={{ scale: reduceMotion ? 1 : scale, y, top: 96 + index * 28 }}
        initial={reduceMotion ? false : { opacity: 0.32, clipPath: 'inset(0 0 14% 0 round 28px)', filter: 'blur(7px)' }}
        whileInView={reduceMotion ? undefined : { opacity: 1, clipPath: 'inset(0 0 0% 0 round 28px)', filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        className="project-card sticky-project"
      >
      <div className="relative z-10 grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:p-12 xl:p-14">
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-6">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-silver/60">{project.category}</p>
            <span className="font-display text-[clamp(4.5rem,8vw,8rem)] font-black leading-[0.68] text-white/10">{project.number}</span>
          </div>
          <h3 className="mt-9 text-[clamp(1.85rem,3.7vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white">{project.title}</h3>
          <p className="mt-3 max-w-2xl font-display text-sm font-medium uppercase leading-5 tracking-[0.08em] text-silver/65">{project.englishTitle}</p>
          <p className="mt-6 text-sm font-medium text-silver/75">{project.roleDate}</p>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-silver/65 sm:text-base sm:leading-8">{project.description}</p>

          <div className="mt-7 border-y border-white/15 py-5">
            <p className="font-display text-xl font-semibold uppercase tracking-[0.05em] text-white sm:text-2xl">{project.metric}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-display text-[10px] font-medium uppercase tracking-[0.14em] text-silver/60">{tag}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <button type="button" className="gradient-button focus-ring" onClick={() => onOpen(project, 'iframe')}>
                <Radio className="h-4 w-4" aria-hidden="true" /> 在线预览
              </button>
            )}
            {project.videoShortUrl && (
              <button type="button" className="gradient-button focus-ring" onClick={openVideo}>
                <Play className="h-4 w-4 fill-current" aria-hidden="true" /> 查看演示
              </button>
            )}
            <button type="button" className="outline-button focus-ring" onClick={() => onOpen(project, 'case-study')}>
              <BookOpen className="h-4 w-4" aria-hidden="true" /> 项目详情
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="browser-shell">
            <div className="browser-bar" aria-hidden="true">
              <span /><span /><span />
              <div>{project.liveUrl ? 'product.changzhou.design' : 'memoryjar / prototype'}</div>
            </div>
            <ImageWithFallback
              src={project.cover}
              alt={project.coverAlt}
              label={index === 0 ? 'HEALTH PLATFORM' : 'MEMORYJAR'}
              available={project.coverAvailable}
              className="aspect-[4/3] w-full"
              imageClassName={`h-full w-full ${project.coverFit === 'contain' ? 'object-contain p-3 sm:p-5' : 'object-cover'}`}
            />
          </div>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="focus-ring mt-4 inline-flex min-h-11 items-center justify-end gap-2 self-end font-display text-xs font-medium uppercase tracking-[0.14em] text-silver/65 transition-colors hover:text-white">
              直接打开项目 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      </motion.article>
    </div>
  )
}

export function ProjectsSection() {
  const [modal, setModal] = useState<{ project: Project | null; mode: ModalMode }>({ project: null, mode: 'iframe' })

  return (
    <section id="projects" className="projects-section relative -mt-16 rounded-t-[32px] bg-ink px-4 pb-28 pt-28 text-silver sm:-mt-20 sm:rounded-t-[52px] sm:px-7 sm:pb-40 sm:pt-36 lg:px-10" aria-labelledby="projects-title">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="section-heading-row flex items-end justify-between gap-6 border-b border-white/15 pb-8 sm:pb-10">
          <h2 id="projects-title" className="section-title-dark max-w-6xl">SELECTED PROJECTS</h2>
          <p className="shrink-0 pb-2 text-sm tracking-[0.12em] text-silver/60">项目作品</p>
        </FadeIn>

        <div className="project-stack mt-12 sm:mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              onOpen={(selectedProject, mode) => setModal({ project: selectedProject, mode })}
            />
          ))}
        </div>
      </div>

      <ProjectModal open={Boolean(modal.project)} project={modal.project} mode={modal.mode} onClose={() => setModal((current) => ({ ...current, project: null }))} />
    </section>
  )
}
