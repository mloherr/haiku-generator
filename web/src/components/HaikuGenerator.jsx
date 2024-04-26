import { useState, useEffect } from 'react';
import '../scss/components/HaikuGenerator.scss';
import api from '../services/api';

function HaikuGenerator() {
  const [haikusVerseOne, setHaikusVerseOne] = useState([]);
  const [haikusVerseTwo, setHaikusVerseTwo] = useState([]);
  const [haikusVerseThree, setHaikusVerseThree] = useState([]);

  const [haikusPartOne, setHaikusPartOne] = useState('');
  const [haikusPartTwo, setHaikusPartTwo] = useState('');
  const [haikusPartThree, setHaikusPartThree] = useState('');

  useEffect(() => {
    api.getVerseOneFromApi().then((response) => {
      const responseOne = response.results;
      return setHaikusVerseOne(responseOne);
    });
    api.getVerseTwoFromApi().then((response) => {
      const responseTwo = response.results;
      return setHaikusVerseTwo(responseTwo);
    });
    api.getVerseThreeFromApi().then((response) => {
      const responseThree = response.results;
      return setHaikusVerseThree(responseThree);
    });
  }, []);

  const generateVerseOne = () => {
    const randomNum = Math.floor(Math.random() * 10);
    const firstVerse = haikusVerseOne.find(
      (haiku) => haiku.idFirst === randomNum
    );
    const selectedPhrase = firstVerse ? firstVerse.phrase : '';

    setHaikusPartOne(selectedPhrase);
  };

  const generateVerseTwo = () => {
    const randomNum = Math.floor(Math.random() * 10);
    const secondVerse = haikusVerseTwo.find(
      (haiku) => haiku.idFirst === randomNum
    );
    const selectedPhrase = secondVerse ? secondVerse.phrase : '';

    setHaikusPartTwo(selectedPhrase);
  };

  const generateVerseThree = () => {
    const randomNum = Math.floor(Math.random() * 10);
    const thirdVerse = haikusVerseThree.find(
      (haiku) => haiku.idFirst === randomNum
    );
    const selectedPhrase = thirdVerse ? thirdVerse.phrase : '';
    setHaikusPartThree(selectedPhrase);
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
