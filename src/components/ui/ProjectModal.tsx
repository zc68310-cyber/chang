import { ArrowUpRight, ExternalLink, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { Project } from '../../data/portfolio'
import { OutlineButton } from './Buttons'

export type ModalMode = 'iframe' | 'video' | 'case-study'

interface ProjectModalProps {
  open: boolean
  mode: ModalMode
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ open, mode, project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [open, onClose])

  if (!project) return null

  const bilibiliUrl = project.bilibiliBvid
    ? `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(project.bilibiliBvid)}&page=1&high_quality=1&danmaku=0`
    : ''

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-3 backdrop-blur-sm sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative max-h-[94vh] w-full max-w-6xl overflow-auto rounded-[24px] border border-white/20 bg-[#111] text-silver shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/15 bg-[#111]/95 px-4 py-4 backdrop-blur-md sm:px-7">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-silver/60">{project.category}</p>
                <h2 id="project-modal-title" className="mt-1 font-display text-xl font-semibold uppercase sm:text-2xl">
                  {mode === 'case-study' ? '项目详情' : mode === 'video' ? '项目演示' : '在线项目预览'}
                </h2>
              </div>
              <button ref={closeRef} type="button" onClick={onClose} className="icon-button focus-ring" aria-label="关闭项目弹窗">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {mode === 'iframe' && project.liveUrl && (
              <div className="p-4 sm:p-7">
                <div className="overflow-hidden rounded-[18px] border border-white/15 bg-[#171717]">
                  <div className="browser-bar" aria-hidden="true">
                    <span /><span /><span />
                    <div>{project.liveUrl}</div>
                  </div>
                  <div className="aspect-video min-h-[360px] bg-white sm:min-h-[520px]">
                    <iframe
                      title={`${project.title}在线预览`}
                      src={project.liveUrl}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-4 rounded-[18px] bg-white/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-2xl text-sm leading-6 text-silver/70">
                    若预览区域被目标站点的安全策略拦截，可使用右侧按钮在新标签页中打开完整项目。
                  </p>
                  <OutlineButton href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                    在新标签页打开 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </OutlineButton>
                </div>
              </div>
            )}

            {mode === 'video' && (
              <div className="p-4 sm:p-7">
                {bilibiliUrl ? (
                  <div className="aspect-video overflow-hidden rounded-[18px] bg-black">
                    <iframe
                      title={`${project.title}演示视频`}
                      src={bilibiliUrl}
                      className="h-full w-full"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[18px] border border-dashed border-white/20 bg-white/[0.035] p-7 text-center">
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
                      <ExternalLink className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-3xl font-semibold sm:text-5xl">哔哩哔哩演示视频</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-silver/65 sm:text-base">
                      当前仅提供短链接，完整 BV ID 尚未补充。短链接已在新标签页打开；在数据文件中填入 bilibiliBvid 后，这里会自动启用 16:9 嵌入播放器，且不会自动播放。
                    </p>
                    {project.videoShortUrl && (
                      <OutlineButton href={project.videoShortUrl} target="_blank" rel="noopener noreferrer" className="mt-8">
                        打开哔哩哔哩 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </OutlineButton>
                    )}
                  </div>
                )}
              </div>
            )}

            {mode === 'case-study' && (
              <div className="grid gap-9 p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
                <div>
                  <p className="font-display text-[clamp(4rem,12vw,9rem)] font-black leading-none text-white/12">{project.number}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-silver/65">{project.description}</p>
                  <p className="mt-6 font-display text-lg font-medium uppercase tracking-[0.08em] text-white">{project.metric}</p>
                </div>
                <ol className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={highlight} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 py-5 text-sm leading-7 text-silver/75">
                      <span className="font-display text-xs tracking-[0.2em] text-silver/60">0{index + 1}</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
