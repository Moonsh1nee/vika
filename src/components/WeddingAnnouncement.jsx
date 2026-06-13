import { wedding } from "../data/wedding";
import MediaPlaceholder from "./MediaPlaceholder";

export default function WeddingAnnouncement() {
  const photo = wedding.announcement?.photo;

  return (
    <section className="flex min-h-[70vh] flex-col md:flex-row">
      <div className="flex w-full justify-center md:w-[46%] md:max-w-[520px] md:shrink-0">
        <div className="relative min-h-80 w-full md:min-h-[70vh]">
          {photo ? (
            <img
              src={photo}
              alt="Фото пары"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          ) : (
            <MediaPlaceholder
              aspect=""
              label="Фото кольца / пары"
              className="absolute inset-0 h-full w-full rounded-none"
            />
          )}
        </div>
      </div>

      <div className="relative isolate flex min-h-80 flex-1 items-center overflow-hidden bg-marble py-16 pl-0 pr-6 md:min-h-[70vh] md:py-20 md:pr-10">
        <p
          className="pointer-events-none absolute top-1/2 left-1 z-10 -translate-y-1/2 font-script text-script-light md:left-2 h-full text-center "
          style={{
            writingMode: "vertical-rl",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            letterSpacing: "0.14em",
            wordSpacing: "0.35em",
            userSelect: "none",
          }}
        >
          The moon and back
        </p>

        <div className="relative z-10 ml-auto w-full max-w-xl pl-11 text-right md:pl-16">
          <div className="inline-flex flex-col items-end">
            <div className="relative flex items-end gap-1 md:gap-2">
              <span
                className="font-script leading-none text-charcoal"
                style={{
                  fontSize: "clamp(4rem, 9vw, 6.5rem)",
                  letterSpacing: "0.06em",
                }}
              >
                М
              </span>

              <div className="relative">
                <span
                  className="font-script absolute leading-none text-charcoal"
                  style={{
                    fontSize: "clamp(4rem, 9vw, 6.5rem)",
                    letterSpacing: "0.06em",
                    top: "-0.72em",
                    left: "0.05em",
                  }}
                >
                  ы
                </span>

                <h2
                  className="font-sans font-bold uppercase text-charcoal"
                  style={{
                    fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
                    letterSpacing: "0.14em",
                    wordSpacing: "0.22em",
                    lineHeight: 1.1,
                  }}
                >
                  ОФИЦИАЛЬНО
                </h2>
              </div>
            </div>

            <h2
              className="mt-1 font-sans font-bold uppercase text-charcoal"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
                letterSpacing: "0.14em",
                wordSpacing: "0.22em",
                lineHeight: 1.35,
              }}
            >
              СТАНЕМ СЕМЬЕЙ
            </h2>
          </div>

          <p
            className="ml-auto mt-8 font-sans text-sm leading-relaxed text-charcoal/75 md:text-base"
            style={{ letterSpacing: "0.03em", wordSpacing: "0.08em" }}
          >
            Совсем скоро состоится день нашей свадьбы, и мы будем счастливы,
            если вы разделите с нами этот чудесный день!
          </p>
        </div>
      </div>
    </section>
  );
}
