// ----- IMPORT -----
import './App.css';
import Playlist from './Components/Playlist/Playlist';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { AppProvider } from "./Context/AppContext"
import { Routes, Route, Navigate } from 'react-router-dom';
// ------------------

function App() {
  const validCountries = ['us', 'fr', 'de', 'es', 'pt', 'it'];
  
  const MainContent = () => (
    <>
      <Header/>
      <Playlist/>
      <Footer/>
    </>
  );

  return (
    <div className="main">
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainContent />} />
          {validCountries.map(country => (
            <Route key={country} path={`/${country}`} element={<MainContent />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
