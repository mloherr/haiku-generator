const URL = 'http://localhost:4002';

const getVerseOneFromApi = () => {
  return fetch(`${URL}/verseone`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getVerseTwoFromApi = () => {
  return fetch(`${URL}/versetwo`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getVerseThreeFromApi = () => {
  return fetch(`${URL}/versethree`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default {
  getVerseOneFromApi: getVerseOneFromApi,
  getVerseTwoFromApi: getVerseTwoFromApi,
  getVerseThreeFromApi: getVerseThreeFromApi,
};
