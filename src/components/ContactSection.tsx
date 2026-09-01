import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { contact } from '../data/portfolio'
import { GradientButton, OutlineButton } from './ui/Buttons'
import { FadeIn } from './ui/FadeIn'

export function ContactSection() {
  return (
    <section id="contact" className="contact-section flex min-h-screen flex-col bg-ink px-4 pb-7 pt-28 text-silver sm:px-7 sm:pb-9 sm:pt-36 lg:px-10" aria-labelledby="contact-title">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between">
        <FadeIn>
          <h2 id="contact-title" className="max-w-[13ch] text-balance font-display text-[clamp(3.5rem,10vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.035em] text-white">
            {contact.heading}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <FadeIn y={18}>
            <p className="max-w-xl text-lg leading-8 text-silver/65 sm:text-xl">{contact.description}</p>
            <a href={`mailto:${contact.email}`} className="focus-ring mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-[0.06em] text-white sm:text-2xl">
              {contact.email} <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </FadeIn>

          <FadeIn delay={0.08} y={18} className="flex flex-wrap gap-3 md:justify-end">
            <GradientButton href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" /> CONTACT ME
            </GradientButton>
            <OutlineButton href={contact.resume} download>
              <Download className="h-4 w-4" aria-hidden="true" /> 下载简历
            </OutlineButton>
            {contact.github && (
              <OutlineButton href={contact.github} target="_blank" rel="noopener noreferrer">GITHUB</OutlineButton>
            )}
            {contact.linkedin && (
              <OutlineButton href={contact.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</OutlineButton>
            )}
          </FadeIn>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-white/15 pt-6 font-display text-[10px] uppercase tracking-[0.15em] text-silver/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{contact.footer}</p>
          <a href="#top" className="focus-ring transition-colors hover:text-white">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  )
}
