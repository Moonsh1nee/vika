import { wedding } from '../data/wedding'

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-center text-cream">
      <p className="font-serif text-3xl font-light md:text-4xl">
        {wedding.couple.groom}
        <span className="mx-3 text-blush italic">&</span>
        {wedding.couple.bride}
      </p>
      <p className="mt-4 font-sans text-sm tracking-widest text-cream/50 uppercase">
        {wedding.date.full}
      </p>
      <p className="mt-8 font-sans text-xs tracking-[0.3em] text-cream/30">
        {wedding.couple.hashtag}
      </p>
    </footer>
  )
}