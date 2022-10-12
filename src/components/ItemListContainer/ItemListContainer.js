import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import {getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsByCategory().then(response =>{
            setLoading(false)
            setProducts(response)
        }).catch(error => {
            setLoading(false)
            console.log(error)
        })
        }, [categoryId])

        
        useEffect(() => {
            try {
                getProducts().then(response => {
                    setLoading(false)
                    setProducts(response)
                })
            }catch(error){
                setLoading(false)
                console.log(error)
            }
        },[])
        
        if(loading) {
            return <p>Loading...</p>
        }

    return ( 
    <div className= 'ItemListContainer'>
         <h1> Listado de produtos </h1>
         <ItemList products={products} />
    </div>
        )
}
    
    
export default ItemListContainer
