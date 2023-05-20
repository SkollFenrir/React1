//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title=" Galería de Imágenes con React "></Header>
      <Card img="https://cdn.pixabay.com/photo/2017/11/30/18/55/castel-santangelo-2989238_640.jpg" cardTitle="Roma" description="La Ciudad Eterna"></Card>
      <Card img="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_640.jpg" cardTitle="París" description="La Ciudad de la Luz"></Card>
      <Card img="https://cdn.pixabay.com/photo/2013/10/28/18/51/brandenburger-tor-201939_640.jpg" cardTitle="Berlín" description="La Ciudad Fénix"></Card>
      <Footer footer1="Tour por Europa" footer2="Todos los derechos reservados ©"  ></Footer>
    </div>
  );
}

export default App;
