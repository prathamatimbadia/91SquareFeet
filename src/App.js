import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Slider></Slider>
      <MovieList></MovieList>
      <Footer />
    </div>
  );
}

export default App;
