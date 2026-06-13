import { Phone } from 'lucide-react'
import { wedding } from '../data/wedding'

function PersonCard({ person }) {
  return (
    <div className="flex-1 text-center">
      <p
        className="font-script text-charcoal"
        style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)' }}
      >
        {person.name}
      </p>
      <a
        href={`tel:${person.phone.replace(/\D/g, '')}`}
        className="mt-5 inline-flex items-center justify-center gap-2 font-sans text-sm text-charcoal/55 transition-colors hover:text-charcoal"
      >
        <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
        {person.phone}
      </a>
    </div>
  )
}

export default function Contacts() {
  const { contacts } = wedding

  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center md:mb-16">
          {/* Наши + КОНТАКТЫ с наложением */}
          <div className="relative inline-block">
            <p
              className="font-script text-script-light"
              style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1 }}
            >
              Наши
            </p>
            <h2
              className="font-sans font-light uppercase text-charcoal"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                letterSpacing: '0.22em',
                marginTop: '-0.3rem',
              }}
            >
              КОНТАКТЫ
            </h2>
          </div>
          <p className="mx-auto mt-8 max-w-lg font-sans text-sm text-charcoal/55">
            По всем вопросам, связанным с мероприятием, вы можете связаться с нами:
          </p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <PersonCard person={contacts.bride} />
          <div className="hidden w-px bg-charcoal/10 md:block" />
          <PersonCard person={contacts.groom} />
        </div>
      </div>
    </section>
  )
}
