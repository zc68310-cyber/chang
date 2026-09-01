import { ArrowDown, Download } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { hero, navigation } from '../data/portfolio'
import { GradientButton } from './ui/Buttons'
import { Magnet } from './ui/Magnet'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const headingWords = hero.heading.split(' ')
  const roleWords = hero.label.split(' · ')
  const descriptionBreak = hero.description.indexOf('，')
  const descriptionLines = descriptionBreak >= 0
    ? [hero.description.slice(0, descriptionBreak + 1), hero.description.slice(descriptionBreak + 1)]
    : [hero.description]
  const entrance = (delay: number, y: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.85, ease: [0.25, 0.1, 0.25, 1] as const },
  })

  return (
    <section className="hero-section relative h-screen min-h-[680px] overflow-hidden bg-ink text-silver" aria-labelledby="hero-title">
      <motion.nav {...entrance(0, -20)} className="absolute inset-x-0 top-0 z-40 px-4 py-5 sm:px-7 lg:px-10" aria-label="主导航">
        <div className="hide-scrollbar flex items-center justify-between gap-6 overflow-x-auto border-b border-white/15 pb-4">
          <a href="#top" className="hero-identity focus-ring shrink-0 font-display font-semibold" aria-label="返回首页">
            {hero.identity}
          </a>
          <div className="flex min-w-max items-center gap-5 sm:gap-8 lg:gap-12">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link focus-ring text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <div id="top" className="absolute inset-0" />
      <div className="hero-wordmark-position absolute inset-x-0 z-10">
        <h1
          id="hero-title"
          className="hero-wordmark px-[1.2vw] text-center font-display font-black uppercase leading-none whitespace-nowrap"
          aria-label={hero.heading}
        >
          {headingWords.map((word, index) => (
            <span key={word} aria-hidden="true">
              <span className="hero-word-clip">
                <motion.span
                  className="hero-word"
                  initial={reduceMotion ? false : { y: '112%', opacity: 0.2 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ delay: 0.12 + index * 0.09, duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
              {index < headingWords.length - 1 && ' '}
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-avatar-position absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Magnet className="avatar-stage" maxOffset={10} maxRotation={3} trackViewport>
            <img src={hero.avatar} alt="Chang Zhou 的 3D 悬浮头像" className="avatar-visual" fetchPriority="high" />
          </Magnet>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 grid gap-6 px-4 pb-6 sm:px-7 sm:pb-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10 lg:pb-10">
        <div className="max-w-[34rem] border-l border-white/30 pl-4 sm:pl-5">
          <p className="hero-role-line font-display text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm" aria-label={hero.label}>
            {roleWords.map((word, index) => (
              <span key={word} aria-hidden="true" className="inline-flex items-center">
                <span className="overflow-hidden py-1">
                  <motion.span
                    className="inline-block"
                    initial={reduceMotion ? false : { y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ delay: 0.38 + index * 0.08, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
                {index < roleWords.length - 1 && <span className="mx-2 text-violet-light/70">·</span>}
              </span>
            ))}
          </p>
          <p className="mt-1 max-w-[31rem] text-sm font-light leading-6 text-silver/70 sm:text-[15px]" aria-label={hero.description}>
            {descriptionLines.map((line, index) => (
              <motion.span
                key={line}
                aria-hidden="true"
                className="block"
                initial={reduceMotion ? false : { y: 16, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.55 + index * 0.09, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </p>
        </div>
        <motion.div {...entrance(0.62, 18)} className="hero-actions flex flex-wrap items-center gap-3 md:justify-end">
          <a className="resume-button focus-ring" href={hero.resume} download>
            <Download className="h-4 w-4" aria-hidden="true" /> 下载简历 PDF
          </a>
          <GradientButton href="#projects">
            查看项目 <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </GradientButton>
        </motion.div>
      </div>

      <div className="hero-index" aria-hidden="true">P / B / T / 01</div>
    </section>
  )
}
