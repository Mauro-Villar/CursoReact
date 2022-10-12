import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById, getProducts } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {
        getProducts().then(response => {
            setProduct(response.find(prod => prod.id === parseInt(productId)))
            console.log(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Loading Product</h1>
    }

    console.log(product)

    return(
        <div className="ItemDetailContainer">
            <h1> Detalle Del Producto </h1>
            <ItemDetail {...product} />
            <Link to='/'><p>Volver</p></Link>
        </div>
    )}

    export default ItemDetailContainer