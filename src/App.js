import './App.css';
import HeaderTopBar from './components/header/HeaderTopBar';
import HeaderMenu from './components/header/HeaderMenu';
import Slider from './components/slider/Slider';
function App() {
  return (
    <div>
      <HeaderTopBar></HeaderTopBar>
      <HeaderMenu></HeaderMenu>
      <Slider></Slider>
    </div>
  );
}

export default App;
