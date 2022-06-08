import './App.sass';
import Carousel, { CarouselItem } from './components/Carousel/Carousel';
import FirstSlider from './components/FirstSlider/FirstSlider';
import SecondSlider from './components/SecondSlider/SecondSlider';
import ThirdSlider from './components/ThirdSlider/ThirdSlider';

function App() {
  return (
    <div className="app">
      <Carousel>
        <FirstSlider />
        <SecondSlider />
        <FirstSlider />
        {/* <ThirdSlider />
        <ThirdSlider /> */}
      </Carousel>
    </div>
  );
}

export default App;
