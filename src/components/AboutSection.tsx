import { motion, useReducedMotion } from 'motion/react'
import { about } from '../data/portfolio'
import { AnimatedText } from './ui/AnimatedText'
import { FadeIn } from './ui/FadeIn'

export function AboutSection() {
  const reduceMotion = useReducedMotion()
  const education = about.education

  return (
    <section id="about" className="about-section relative flex min-h-screen items-center overflow-hidden bg-ink px-4 py-32 text-silver sm:px-7 sm:py-40 lg:px-10" aria-labelledby="about-title">
      <div className="mx-auto w-full max-w-[1440px]">
        <FadeIn>
          <h2 id="about-title" className="section-title-dark text-center">{about.title}</h2>
        </FadeIn>

        <div className="about-copy-stage relative mx-auto mt-12 max-w-6xl sm:mt-16">
          {about.decorations.map((decoration, index) => {
            const comesFromLeft = decoration.position.includes('left')
            return (
              <motion.img
                key={decoration.position}
                src={decoration.image}
                alt=""
                aria-hidden="true"
                className={`about-decor about-decor-${decoration.position}`}
                initial={reduceMotion ? false : { opacity: 0, x: comesFromLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              />
            )
          })}

          <AnimatedText text={about.description} className="about-copy relative z-10 mx-auto text-balance text-center font-medium tracking-[-0.015em]" />
        </div>

        <FadeIn delay={0.15} y={18} className="education-showcase mx-auto max-w-6xl">
          <div className="education-layout">
            <div className="education-identity">
              <img className="monash-brand-mark" src="/assets/monash-university-logo.svg" alt={`${education.institution} 校徽`} />
              <p className="education-degree">{education.degree}</p>
              <div className="education-facts">
                <span>{education.campus}</span>
                <span>{education.graduation}</span>
              </div>
            </div>

            <div className="education-gpa" aria-label={`GPA ${education.gpa} out of 4.00`}>
              <span>当前 GPA · 满分 4.00</span>
              <strong>{education.gpa}</strong>
            </div>
          </div>

          <figure className="scholarship-decoration">
            <div className="scholarship-image-crop">
              <img src="/assets/奖学金.png" alt="蒙纳士大学 Study Grant Offer 奖学金通知" />
            </div>
            <figcaption>
              <span>{education.scholarship}</span>
              <strong>{education.scholarshipValue}</strong>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
