import { Header } from './components/Header/Header'
import { NavBar } from './components/Header/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Footer } from './components/Footer/Footer'
import { Cart } from './components/Cart/Cart'
import { Error404 } from './components/404NotFound/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Contexts/CartContext'
import { BuyOrder } from './components/BuyOrders/BuyOrder'

function App () {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/typeofproduct/:productsType' element={<ItemListContainer />} />
            <Route path='/itemdetail/:productID' element={<ItemDetailContainer />} />
            <Route path='/clientCart' element={<Cart />} />
            <Route path='/generateBuyOrder' element={<BuyOrder />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
