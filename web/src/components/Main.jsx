import HaikuGenerator from './HaikuGenerator';
import HaikuHistory from './HaikuHistory';
import MusicPlayer from './MusicPlayer';
import Petals from './Petals';
import '../scss/components/Main.scss';

function Main() {
  return (
    <>
      <main className="mainContainer">
        <HaikuHistory />
        <HaikuGenerator />
        <MusicPlayer />
      </main>
      <Petals />
    </>
  );
}

export default Main;
