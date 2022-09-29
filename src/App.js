import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div className="App">
      <Navbar/>
      <div className='ProdButton'>
    <Button>
      Productos
    </Button>
    <Button>
    Arma tu PC
    </Button>

    <Button>
      Ayuda
    </Button>
    <Button>
    Marcas Sponsor
    </Button>

      </div>
      <ItemListContainer greetings={ 'Welcome Buddy'}/>
     
    </div>
  );
}

export default App;
