import { ImageOff } from 'lucide-react'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  label: string
  className?: string
  imageClassName?: string
  eager?: boolean
  available?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  label,
  className = '',
  imageClassName = '',
  eager = false,
  available = true,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (!available || failed) {
    return (
      <div className={`media-placeholder ${className}`} role="img" aria-label={`${alt}（素材待补充）`}>
        <div className="placeholder-orbit" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
          <ImageOff className="h-5 w-5 text-white/60" aria-hidden="true" />
          <div>
            <p className="font-display text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-4xl">{label}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">Visual pending / layout ready</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className={imageClassName}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
