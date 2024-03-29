import Head from './components/head/Head';
import Main from './components/main/Main';
import Socials from './components/socials/Socials';
import Info from './components/info/Info';

import './App.css';
import './MediaQueries.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Head></Head>
        <Main></Main>
        <Socials></Socials>
        <Info></Info>
      </div>
    </div>
  );
}

export default App;
