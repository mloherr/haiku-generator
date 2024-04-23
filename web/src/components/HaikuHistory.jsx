import { useState } from 'react';
import arrow from '../images/arrow.svg';
import '../scss/components/HaikuHistory.scss';

function HaikuHistory() {
  const [textInfoShowed, setTextInfoShowed] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const handleClick = () => {
    setTextInfoShowed(!textInfoShowed);
    setIsRotated(!isRotated);
  };
  return (
    <aside className="asideHaikus">
      <div className="asideHaikus__mainContainer" onClick={handleClick}>
        <h3 className="asideHaikus__mainContainer--title">
          Historia de los Haikus
        </h3>
        <figure
          className={`asideHaikus__mainContainer--image ${
            isRotated ? 'rotated' : ''
          }`}
        >
          <img src={arrow} alt="" />
        </figure>
      </div>
      {textInfoShowed && (
        <div className="asideHaikus__text">
          <p>
            En su forma más básica, el haiku es un poema con tres versos de 5, 7
            y 5 sílabas que refleja un instante fugaz a partir de imágenes
            relacionadas con la naturaleza o el paso de las estaciones. Su
            historia se remonta al Japón del siglo XIII, cuando era tradicional
            que un grupo de poetas se reuniera para crear poemas colaborativos
            conocidos como renga.
          </p>
          <p>
            Durante esos encuentros, en los que a veces coincidían más de una
            docena de autores bajo la supervisión de un maestro, los poetas
            componían estrofas que se iban enlazando y que debían ajustarse a
            los conceptos y palabras convenidos de antemano. Algunas sesiones
            podían dar lugar a más de 100 de estas estrofas enlazadas, que iban
            cambiando de tono a medida que pasaban de un poeta a otro.
          </p>
        </div>
      )}
    </aside>
  );
}

export default HaikuHistory;
