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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchHaikuOne = api.getVerseOneFromApi();
    const fetchHaikuTwo = api.getVerseTwoFromApi();
    const fetchHaikuThree = api.getVerseThreeFromApi();

    Promise.all([fetchHaikuOne, fetchHaikuTwo, fetchHaikuThree]).then(
      (responses) => {
        setHaikusVerseOne(responses[0].results);
        setHaikusVerseTwo(responses[1].results);
        setHaikusVerseThree(responses[2].results);
        setIsLoading(false);
      }
    );
  }, []);

  const generateVerseOne = () => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const firstVerse = haikusVerseOne.find(
      (haiku) => haiku.idFirst === randomNum
    );
    const selectedPhrase = firstVerse ? firstVerse.phrase : '';

    setHaikusPartOne(selectedPhrase);
  };

  const generateVerseTwo = () => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const secondVerse = haikusVerseTwo.find(
      (haiku) => haiku.idFirst === randomNum
    );
    const selectedPhrase = secondVerse ? secondVerse.phrase : '';

    setHaikusPartTwo(selectedPhrase);
  };

  const generateVerseThree = () => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const thirdVerse = haikusVerseThree.find(
      (haiku) => haiku.idFirst === randomNum
    );
    const selectedPhrase = thirdVerse ? thirdVerse.phrase : '';
    setHaikusPartThree(selectedPhrase);
  };

  const handleClick = () => {
    setIsLoading(true);
    generateVerseOne();
    generateVerseTwo();
    generateVerseThree();
    setIsLoading(false);
  };

  return (
    <section className="haikuMain">
      <div className="haikuMain__textContainer">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>{haikusPartOne}</p>
            <p>{haikusPartTwo}</p>
            <p>{haikusPartThree}</p>
          </>
        )}
      </div>
      <button className="haikuMain__button" onClick={handleClick}>
        Generate new Haiku
      </button>
    </section>
  );
}

export default HaikuGenerator;
