import './App.scss';
import {RoutesContent} from './modules/RoutesContent/RoutesContent';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';

function App(): JSX.Element {
  return (
    <div className='app'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className='routesContent'>
        <RoutesContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
