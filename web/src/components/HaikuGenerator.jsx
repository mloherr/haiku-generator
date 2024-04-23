import { useState, useEffect } from 'react';
import '../scss/components/HaikuGenerator.scss';
import api from '../services/api';

function HaikuGenerator() {
  const [haikusVerseOne, setHaikusVerseOne] = useState([]);
  const [haikusVerseTwo, setHaikusVerseTwo] = useState([]);
  const [haikusVerseThree, setHaikusVerseThree] = useState([]);

  const [randomNumberOne, setRandomNumberOne] = useState(null);
  const [randomNumberTwo, setRandomNumberTwo] = useState(null);
  const [randomNumberThree, setRandomNumberThree] = useState(null);

  const [haikusPartOne, setHaikusPartOne] = useState('');
  const [haikusPartTwo, setHaikusPartTwo] = useState('');
  const [haikusPartThree, setHaikusPartThree] = useState('');

  useEffect(() => {
    api.getVerseOneFromApi().then((response) => {
      setHaikusVerseOne(response.results);
    });
    api.getVerseTwoFromApi().then((response) => {
      setHaikusVerseTwo(response.results);
    });
    api.getVerseThreeFromApi().then((response) => {
      setHaikusVerseThree(response.results);
    });
  }, []);

  const generateVerseOne = () => {
    setRandomNumberOne(Math.floor(Math.random() * 10));
    const firtsVerse = haikusVerseOne.find((haiku) => {
      return haiku.idFirst === randomNumberOne;
    });
    setHaikusPartOne(firtsVerse.phrase);
  };

  const generateVerseTwo = () => {
    setRandomNumberTwo(Math.floor(Math.random() * 10));
    const secondVerse = haikusVerseTwo.find((haiku) => {
      return haiku.idFirst === randomNumberTwo;
    });
    setHaikusPartTwo(secondVerse.phrase);
  };

  const generateVerseThree = () => {
    setRandomNumberThree(Math.floor(Math.random() * 10));
    const thirdVerse = haikusVerseThree.find((haiku) => {
      return haiku.idFirst === randomNumberThree;
    });
    setHaikusPartThree(thirdVerse.phrase);
  };

  const handleClick = () => {
    generateVerseOne();
    generateVerseTwo();
    generateVerseThree();
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
