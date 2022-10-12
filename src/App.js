import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Links from './components/Links/Links';
/* import Count from './components/Count/Count'; */
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Links/>
      
      
      <Routes>
        <Route path='/' element={<ItemListContainer className="ItemListContainer"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
        <Route path='*' element={<h1>Error 404</h1>}/>

      </Routes>
      </BrowserRouter>
        </div>
    
  );
}

export default App;
