import Hero from './components/Hero'
import Story from './components/Story'
import WeddingAnnouncement from './components/WeddingAnnouncement'
import Countdown from './components/Countdown'
import CountdownTimer from './components/CountdownTimer'
import DateLocation from './components/DateLocation'
import Schedule from './components/Schedule'
import DressCode from './components/DressCode'
import Wishes from './components/Wishes'
import RSVP from './components/RSVP'
import Contacts from './components/Contacts'
import MusicToggle from './components/MusicToggle'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <WeddingAnnouncement />
        <Story />
        <Countdown />
        <DateLocation />
        <Schedule />
        <CountdownTimer />
        <DressCode />
        <Wishes />
        <RSVP />
        <Contacts />
      </main>
      <MusicToggle />
    </>
  )
}