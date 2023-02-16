import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/homePage'
import Header from './components/Header/header'
import SimpleSlider  from './components/SliderCard/Slider'


function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path='/' element={<div><HomePage /></div>}/>
        <Route path='/product/:id' element={<div></div>}/>
        <Route path='/login' element={<div>Login</div>}/>
      </Routes>
    </div>
  );
}

export default App;
