import { ArrowDownRight } from 'lucide-react'
import { capabilities } from '../data/portfolio'
import { FadeIn } from './ui/FadeIn'

export function CapabilitiesSection() {
  return (
    <section className="bg-paper px-4 py-28 text-ink sm:px-7 sm:py-40 lg:px-10" aria-labelledby="capabilities-title">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="section-heading-row flex items-end justify-between gap-6 border-b border-ink/20 pb-8 sm:pb-10">
          <h2 id="capabilities-title" className="section-title-light">CAPABILITIES</h2>
          <p className="shrink-0 pb-2 text-sm tracking-[0.12em] text-ink/60">专业能力</p>
        </FadeIn>

        <div className="divide-y divide-ink/15">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.number} delay={index * 0.055} y={24} className="capability-row group grid gap-5 py-8 sm:grid-cols-[auto_0.8fr_1.2fr_auto] sm:items-center sm:gap-8 sm:py-10">
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-ink/60">{capability.number}</span>
              <h3 className="font-display text-[clamp(1.7rem,3.3vw,3.25rem)] font-semibold uppercase leading-none tracking-[-0.02em]">{capability.title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-ink/60 sm:text-base">{capability.description}</p>
              <ArrowDownRight className="hidden h-6 w-6 text-ink/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 sm:block" aria-hidden="true" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
