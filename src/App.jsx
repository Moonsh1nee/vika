import Hero from './components/Hero'
import Story from './components/Story'
import WeddingAnnouncement from './components/WeddingAnnouncement'
import Countdown from './components/Countdown'
import CountdownTimer from './components/CountdownTimer'
import DateLocation from './components/DateLocation'
import Schedule from './components/Schedule'
import RSVP from './components/RSVP'
import Wishes from './components/Wishes'
import Contacts from './components/Contacts'

export default function App() {
  return (
    <main>
      <Hero />
      <WeddingAnnouncement />
      <Story />
      <Countdown />
      <DateLocation />
      <Schedule />
      <CountdownTimer />
      <Wishes />
      <RSVP />
      <Contacts />
    </main>
  )
}