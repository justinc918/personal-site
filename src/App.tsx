import Whiteboard from './Whiteboard'

const IMAGES = [
  { id: 'dragons',  src: '/images/dragons.jpg',  x: 80,  y: 120 },
  { id: 'harmonia', src: '/images/harmonia.png',  x: 620, y: 80  },
  { id: 'tswltw',   src: '/images/tswltw.jpg',    x: 340, y: 420 },
]

export default function App() {
  return <Whiteboard images={IMAGES} />
}
