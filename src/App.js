import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Hero, 
  Navbar, 
  Slide1, 
  Slide2, 
  Slide3, 
  Slide4, 
  Slide5, 
  Slide6, 
  Slide7, 
  Footer 
} from './components';

function App() {
  return (
    <div className='html'>
      <Navbar/>
      <Hero/>
      <Slide1/>
      <Slide2/>
      <Slide3/>
      <Slide4/>
      <Slide5/>
      <Slide6/>
      <Slide7/>
      <Footer/>
    </div>
  );
}

export default App;
