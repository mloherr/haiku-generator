import '../scss/components/Petals.scss';
import { useRef, useEffect } from 'react';

function Petals() {
  const petalPlayers = useRef([]);

  useEffect(() => {
    animatePetals();
    return () => {
      petalPlayers.current.forEach((player) => player.cancel());
    };
  }, []);

  function animatePetals() {
    const petals = document.querySelectorAll('.petal');
    console.log('petals', petals);

    if (!petals[0]?.animate) {
      const petalsContainer = document.getElementById('petals-container');
      petalsContainer?.prepend(
        "Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?"
      );
      return false;
    }

    for (let i = 0, len = petals.length; i < len; ++i) {
      const petal = petals[i];
      petal.innerHTML =
        '<div class="rotate"><img src="https://qqz.works/wp-content/uploads/2021/08/petal.png" class="askew"></div>';
      const scale = Math.random() * 0.8 + 0.2;

      const player = petal?.animate(
        [
          {
            transform:
              'translate3d(' + (i / len) * 100 + 'vw,0,0) scale(' + scale + ')',
            opacity: scale,
          },
          {
            transform:
              'translate3d(' +
              ((i / len) * 100 + 10) +
              'vw,150vh,0) scale(' +
              scale +
              ')',
            opacity: 1,
          },
        ],
        {
          duration: Math.random() * 90000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000),
        }
      );

      petalPlayers.current.push(player);
    }
  }

  animatePetals();

  return (
    <div id="petals-container">
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
    </div>
  );
}

export default Petals;
