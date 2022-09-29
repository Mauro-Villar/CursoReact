import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo_mini from './assets/logo_mini.png'

const Navbar = () => {
    return (
        <nav>
            <div classname='marca'>
            <h1 className='navTitle'> Compragamer </h1>
            <img src={logo_mini} alt='logo' className='logo' />


            </div>
            <CartWidget className='carrito' />
        </nav>
    )
        

    }


export default Navbar