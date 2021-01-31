import './App.css';
import Playlist from './Components/Playlist/Playlist';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="main">
      <Header/>
      <Playlist/>
      <Footer/>
    </div>
  );
}

export default App;
