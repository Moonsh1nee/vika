import { wedding } from '../data/wedding'
import Reveal from './Reveal'
import MediaPlaceholder from './MediaPlaceholder'

export default function VideoSection() {
  const { video } = wedding

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <p className="font-sans text-xs tracking-[0.4em] text-taupe uppercase">
            {video.title}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-charcoal md:text-5xl">
            Love Story
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          {video.src ? (
            <video
              className="aspect-video w-full rounded-sm object-cover"
              controls
              playsInline
              poster={video.poster ?? undefined}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ) : (
            <MediaPlaceholder
              type="video"
              aspect="aspect-video"
              label="Видео love story"
              className="w-full"
            />
          )}
        </Reveal>
      </div>
    </section>
  )
}