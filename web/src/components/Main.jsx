import HaikuGenerator from './HaikuGenerator';
import HaikuHistory from './HaikuHistory';
import MusicPlayer from './MusicPlayer';
import '../scss/components/Main.scss';

function Main() {
  return (
    <main className="mainContainer">
      <HaikuHistory />
      <HaikuGenerator />
      <MusicPlayer />
    </main>
  );
}

export default Main;
