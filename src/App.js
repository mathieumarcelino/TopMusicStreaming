// ----- IMPORT -----
import './App.css';
import Playlist from './Components/Playlist/Playlist';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {AppProvider} from "./Context/AppContext"
// ------------------

function App() {
  
  return (
    <div className="main">
        <AppProvider>
          <Header/>
          <Playlist/>
          <Footer/>
        </AppProvider>
    </div>
  );
}

export default App;
