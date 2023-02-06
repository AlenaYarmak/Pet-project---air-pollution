import Head from './components/head/Head';
import Main from './components/main/Main';
import Socials from './components/socials/Socials';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Head></Head>
        <Main></Main>
        <Socials></Socials>
      </div>
    </div>
  );
}

export default App;
