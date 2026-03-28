import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import './Home.scss'

const Home = () => {
  const { handleGetSong } = useSong()

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Music Mood AI</h1>
        <p>Let AI detect your mood and find the perfect soundtrack for your moment.</p>
      </header>
      <main className="home-content">
        <FaceExpression
          onClick={(expression) => { handleGetSong({ mood: expression }) }}
        />
      </main>
      <Player />
    </div>
  )
}

export default Home
