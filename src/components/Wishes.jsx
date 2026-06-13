import { wedding } from '../data/wedding'

export default function Wishes() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="font-sans font-bold uppercase text-charcoal"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', letterSpacing: '0.08em' }}
        >
          ПОЖЕЛАНИЯ
        </h2>
        <p className="mt-10 font-sans text-sm leading-relaxed text-charcoal/65 md:text-base">
          {wedding.wishes.text}
        </p>
      </div>
    </section>
  )
}