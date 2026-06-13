import { wedding } from "../data/wedding";
import MediaPlaceholder from "./MediaPlaceholder";

function Photo({ src, alt }) {
  return src ? (
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  ) : (
    <MediaPlaceholder aspect="" label={alt} className="h-full w-full rounded-none" />
  );
}

export default function Story() {
  const photos = wedding.story.photos;

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Заголовок: линия слева + MOMENTS справа */}
        <div className="flex items-center gap-6">
          <span className="h-px flex-1 bg-charcoal/25" aria-hidden="true" />
          <h2
            className="shrink-0 font-sans font-extralight uppercase text-charcoal"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)", letterSpacing: "0.18em" }}
          >
            MOMENTS
          </h2>
        </div>

        {/* Mobile / tablet */}
        <div className="mt-10 space-y-6 lg:hidden">
          <div className="mx-auto aspect-3/4 max-w-sm overflow-hidden">
            <Photo src={photos[0]?.src} alt={photos[0]?.alt ?? "Фото 1"} />
          </div>

          {/* Inscription mobile */}
          <div className="flex items-center gap-4 px-2">
            <span className="h-px flex-1 bg-charcoal/25" aria-hidden="true" />
            <p
              className="shrink-0 font-sans font-extralight lowercase text-charcoal/60"
              style={{ fontSize: "0.7rem", letterSpacing: "0.28em" }}
            >
              two became one
            </p>
            <span className="h-px flex-1 bg-charcoal/25" aria-hidden="true" />
          </div>
          <p
            className="text-center font-script text-charcoal"
            style={{ fontSize: "clamp(1.4rem, 5vw, 2rem)" }}
          >
            {wedding.couple.groom} &amp; {wedding.couple.bride}
          </p>

          <div className="flex gap-3">
            <div className="aspect-3/4 flex-1 overflow-hidden">
              <Photo src={photos[1]?.src} alt={photos[1]?.alt ?? "Фото 2"} />
            </div>
            <div className="aspect-3/4 flex-1 overflow-hidden">
              <Photo src={photos[2]?.src} alt={photos[2]?.alt ?? "Фото 3"} />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="mt-10 hidden h-[72vh] min-h-130 lg:flex">

          {/* Левое фото */}
          <div className="w-[30%] shrink-0 overflow-hidden xl:w-[28%]">
            <Photo src={photos[0]?.src} alt={photos[0]?.alt ?? "Фото 1"} />
          </div>

          {/* Надпись по центру */}
          <div className="flex shrink-0 flex-col items-center px-6 py-8 xl:px-8 xl:py-10">
            <p
              className="font-sans font-extralight lowercase text-charcoal/60"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontSize: "clamp(0.6rem, 0.85vw, 0.72rem)",
                letterSpacing: "0.3em",
              }}
            >
              two became one
            </p>
            <span className="mt-4 w-px flex-1 bg-charcoal/30" aria-hidden="true" />
            <p
              className="mt-4 font-script text-charcoal"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)", whiteSpace: "nowrap" }}
            >
              {wedding.couple.groom} &amp; {wedding.couple.bride}
            </p>
          </div>

          {/* Два фото справа */}
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex-1 overflow-hidden">
              <Photo src={photos[1]?.src} alt={photos[1]?.alt ?? "Фото 2"} />
            </div>
            <div className="flex-1 overflow-hidden">
              <Photo src={photos[2]?.src} alt={photos[2]?.alt ?? "Фото 3"} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
