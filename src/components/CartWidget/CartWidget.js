import cart from './assets/cart.svg'
import './Cart.css'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={cart} alt='cart'/>
            10
        </div>
    )
}

export default CartWidget