import HaikuGenerator from './HaikuGenerator';
import HaikuHistory from './HaikuHistory';
import MusicPlayer from './MusicPlayer';
import '../scss/components/Main.scss';

function Main({ haikus }) {
  return (
    <main className="mainContainer">
      <HaikuHistory />
      <HaikuGenerator haikus={haikus} />
      <MusicPlayer />
    </main>
  );
}

export default Main;
