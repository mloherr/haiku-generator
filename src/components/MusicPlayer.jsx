import '../scss/components/MusicPlayer.scss';
import iconMusic from '../images/nota-musical.png';
import { useState } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [src, setSrc] = useState('');

  const handlePlay = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    setSrc(newIsPlaying ? 'src/images/zenMusic.mp3' : '');
  };
  return (
    <section className="musicPlayer">
      <div className="musicPlayer__container" onClick={handlePlay}>
        <audio autoPlay={isPlaying} src={src}></audio>
        <figure className="musicPlayer__container--icon">
          <img
            src={iconMusic}
            alt=""
            className={`${isPlaying ? 'rotation' : ''}`}
          />
        </figure>
      </div>
    </section>
  );
}

export default MusicPlayer;
