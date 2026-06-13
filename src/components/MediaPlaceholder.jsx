import { ImageIcon, Play } from 'lucide-react'

export default function MediaPlaceholder({
  type = 'image',
  className = '',
  label = '',
  aspect = 'aspect-[4/5]',
}) {
  const aspectClass = aspect ? aspect : ''

  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-placeholder placeholder-shimmer ${aspectClass} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-taupe/60">
        {type === 'video' ? (
          <Play className="h-10 w-10" strokeWidth={1} />
        ) : (
          <ImageIcon className="h-8 w-8" strokeWidth={1} />
        )}
        {label && (
          <span className="font-sans text-xs tracking-widest uppercase">{label}</span>
        )}
      </div>
    </div>
  )
}