import { wedding } from '../data/wedding'
import MediaPlaceholder from './MediaPlaceholder'

function VenuePhoto({ src, alt }) {
  return src ? (
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  ) : (
    <MediaPlaceholder aspect="" label={alt} className="h-full w-full rounded-none" />
  )
}

export default function DateLocation() {
  const { ceremony } = wedding.venue
  const photos = wedding.venue.photos ?? [null, null, null]

  return (
    <section className="relative overflow-hidden bg-marble px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Заголовок */}
        <div className="mb-12 text-center md:mb-14">
          <p
            className="font-script text-script-light"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
          >
            Локация
          </p>
          <h2
            className="mt-2 font-sans font-light uppercase text-charcoal/70"
            style={{ fontSize: 'clamp(0.85rem, 2vw, 1.3rem)', letterSpacing: '0.28em' }}
          >
            НАША СВАДЬБА ПРОЙДЁТ В
          </h2>
        </div>

        {/* Три фото */}
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

        {/* Название и кнопка */}
        <div className="mt-14 text-center md:mt-16">
          <h3
            className="font-sans font-bold uppercase text-charcoal"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', letterSpacing: '0.15em' }}
          >
            «{ceremony.place}»
          </h3>
          <p className="mt-4 font-sans text-sm text-charcoal/65 md:text-base">
            {ceremony.address}
          </p>
          <a
            href={ceremony.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-charcoal px-12 py-3.5 font-sans text-sm uppercase tracking-widest text-white transition-colors hover:bg-charcoal/85"
          >
            Как добраться
          </a>
        </div>
      </div>
    </section>
  )
}
