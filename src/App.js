
import './App.css';
import Banner from './Components/Banner/Banner';
import BannerAndComedy from './Components/Banner/BannerAndComedy';
import BannerAndLatest from './Components/Banner/BannerAndLatest';
import BannerAndPopular from './Components/Banner/BannerAndPopular';
import LatestBanner from './Components/Banner/LatestBanner';
import Comedy from './Components/Genre/Comedy';
import Latest from './Components/Genre/Latest';
import Popular from './Components/Genre/Popular';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      
      
      
      <BrowserRouter>

      <Navbar/>
          
      
      
      <Routes>
        <Route path='/comdey' element={<BannerAndComedy/>}/>
        <Route path='/latest' element={<BannerAndLatest/>}/>
        <Route path='/popular' element={<BannerAndPopular/>}/>

      </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
