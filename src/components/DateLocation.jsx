import { wedding } from '../data/wedding'
import MediaPlaceholder from './MediaPlaceholder'

function VenuePhoto({ src, alt, className = '' }) {
  return src ? (
    <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
  ) : (
    <MediaPlaceholder aspect="" label={alt} className={`h-full w-full rounded-none ${className}`} />
  )
}

export default function DateLocation() {
  const { ceremony } = wedding.venue
  const photos = wedding.venue.photos ?? [null, null, null]

  return (
    <section className="relative overflow-hidden bg-marble px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center md:mb-16">
          <p
            className="font-script text-charcoal"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
          >
            {ceremony.place}
          </p>
          <h2
            className="mt-4 font-sans font-bold uppercase text-charcoal"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)', letterSpacing: '0.2em' }}
          >
            НАША СВАДЬБА ПРОЙДЁТ В
          </h2>
        </div>

        <div className="grid grid-cols-3 items-end gap-0">
          <div className="aspect-3/4 overflow-hidden">
            <VenuePhoto src={photos[0]} alt="Площадка 1" />
          </div>

          <div className="relative z-10 -translate-y-8 bg-white p-2 shadow-lg md:-translate-y-10 md:p-3">
            <div className="aspect-3/4 overflow-hidden">
              <VenuePhoto src={photos[1]} alt="Главное фото площадки" />
            </div>
          </div>

          <div className="aspect-3/4 overflow-hidden">
            <VenuePhoto src={photos[2]} alt="Площадка 3" />
          </div>
        </div>

        <div className="mt-12 text-center md:mt-14">
          <h3
            className="font-sans font-bold uppercase text-charcoal"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', letterSpacing: '0.15em' }}
          >
            «{ceremony.place}»
          </h3>
          <p className="mt-4 font-sans text-sm text-charcoal/70 md:text-base">
            Адрес: {ceremony.address}
          </p>

          <a
            href={ceremony.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-charcoal px-10 py-3.5 font-sans text-sm text-white transition-colors hover:bg-charcoal/85"
          >
            Как добраться
          </a>
        </div>
      </div>
    </section>
  )
}