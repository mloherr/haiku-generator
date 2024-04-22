import '../scss/App.scss';
import Header from './Header';
import Main from './Main';
import haikus from '../services/data.json';
function App() {
  return (
    <>
      <Header />
      <Main haikus={haikus} />
    </>
  );
}

export default App;
