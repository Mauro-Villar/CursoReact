import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState()

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Loading Product</h1>
    }

    console.log(productId)

    return(
        <div className="ItemDetailContainer">
            <h1> Detalle Del Producto </h1>
            <ItemDetail {...product} />
            <Link to='/'><p>Volver</p></Link>
        </div>
    )}

    export default ItemDetailContainer