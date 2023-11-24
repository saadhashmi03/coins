import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Exchange from './components/Exchange'
import Coins from './components/Coins'
import CoinsDetails from './components/CoinsDetails'
import Headers from './components/Header'
import Footer from './components/Footer'





function App() {
  return (
       <Router>
        <Headers/>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exchanges' element={<Exchange/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coin/:id' element={<CoinsDetails/>}/>
        </Routes>
        <Footer/>
       </Router>
  );
}

export default App;
