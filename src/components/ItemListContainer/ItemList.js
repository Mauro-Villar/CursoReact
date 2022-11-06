import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { Product } from './Item'
import { Spinner } from '../Button/Spinner/Spinner'
import { getDataBase } from '../../services/Firebase/index'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useLoading } from '../../Hooks/LoadingHook'

export const ItemList = () => {
  const [products, setMyProducts] = useState([])

  const { isLoading, showLoading, hideLoading } = useLoading()

  const { productsType } = useParams()

  // firebase conection
  const dbCollection = collection(getDataBase, 'products')

  useEffect(() => {
    showLoading()
    const getProducts = async () => {
      if (productsType) {
        const filter = query(dbCollection, where('type', '==', productsType))
        await getDocs(filter).then((products) => {
          setMyProducts(products.docs.map(product => ({ id: product.id, ...product.data() })))
          hideLoading()
        })
      } else {
        await getDocs(dbCollection).then((products) => {
          setMyProducts(products.docs.map(product => ({ id: product.id, ...product.data() })))
          hideLoading()
        })
      }
    }

    getProducts()
  }, [productsType])

  const showRebateProduct = products
    .filter((product) => product.rebate)
    .map((product) => <Product key={product.id} {...product} />)

  const noRebateProduct = products
    .filter((product) => product.rebate === false)
    .map((product) => <Product key={product.id} {...product} />)

  return isLoading
    ? (
      <Spinner />
      )
    : (productsType
        ? <div>
          <div className='itemListTypeContainer'>{[showRebateProduct, noRebateProduct]}</div>
        </div>
        : <div>
          <h2>¡Aprovecha nuestros productos con descuento!</h2>
          <div className='itemListContainer'>{showRebateProduct}</div>
          <h2>Productos sin descuento</h2>
          <div className='itemListContainer'>{noRebateProduct}</div>
        </div>
      )
}