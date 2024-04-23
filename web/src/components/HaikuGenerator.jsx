import { useState } from 'react';
import '../scss/components/HaikuGenerator.scss';

function HaikuGenerator({ haikus }) {
  const [randomNumberOne, setRandomNumberOne] = useState(null);
  const [randomNumberTwo, setRandomNumberTwo] = useState(null);
  const [randomNumberThree, setRandomNumberThree] = useState(null);

  const [haikusPartOne, setHaikusPartOne] = useState('');
  const [haikusPartTwo, setHaikusPartTwo] = useState('');
  const [haikusPartThree, setHaikusPartThree] = useState('');

  const handleClick = () => {
    setRandomNumberOne(Math.floor(Math.random() * 9));
    setRandomNumberTwo(Math.floor(Math.random() * 9));
    setRandomNumberThree(Math.floor(Math.random() * 9));
    setHaikusPartOne(haikus.haiku1[randomNumberOne]);
    setHaikusPartTwo(haikus.haiku2[randomNumberTwo]);
    setHaikusPartThree(haikus.haiku3[randomNumberThree]);
  };
  return (
    <section className="haikuMain">
      <div className="haikuMain__textContainer">
        <p>{haikusPartOne}</p>
        <p>{haikusPartTwo}</p>
        <p>{haikusPartThree}</p>
      </div>
      <button className="haikuMain__button" onClick={handleClick}>
        Generate new Haiku
      </button>
    </section>
  );
}

export default HaikuGenerator;
