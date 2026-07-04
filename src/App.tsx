import Whiteboard from './Whiteboard'

const BASE = import.meta.env.BASE_URL

const IMAGES = [
  { id: 'dragons',  src: `${BASE}images/dragons.jpg`,  x: 80,  y: 120 },
  { id: 'harmonia', src: `${BASE}images/harmonia.png`,  x: 620, y: 80  },
  { id: 'tswltw',   src: `${BASE}images/tswltw.jpg`,    x: 340, y: 420 },
]

export default function App() {
  return <Whiteboard images={IMAGES} />
}
