import { Fragment, useState } from 'react'
import { Counter } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Hooks/CartContextHook'
import './ItemDetailContainer.css'

export const ItemDetail = ({ productDetail }) => {
  const [buyProduct, setBuyProduct] = useState(false)

  const { addProduct } = useCartContext()

  const addToCart = (count) => {
    setBuyProduct(true)
    addProduct(productDetail, count)
  }

  return (
    <section className='productDetailContainer'>
      <picture>
        <img src={productDetail.productImg} alt='Product illustration' />
      </picture>
      <div className='descriptionContainer'>
        <h2>{productDetail.productName}</h2>
        <span>Precio por unidad: ${productDetail.productPrice}</span>
        <p>Stock Disponible: {productDetail.stock} unidades</p>
        {buyProduct
          ? <><Link to='/clientCart'>Ir al carrito</Link><Link to='/'>Seguir comprando</Link></>
          : <Counter
              initialValue={0}
              stock={productDetail.stock}
              addToCart={addToCart}
            />}
      </div>
    </section>
  )
}