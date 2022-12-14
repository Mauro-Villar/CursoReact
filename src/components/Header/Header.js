import { SocialButtons } from './SocialMedia'
import { CartWidget } from '../Button/MyIcons/Icons'
import { Button } from '../Button/Button'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './Header.css'

export const Header = () => {
  return (
    <header className='headerContainer'>
      <picture className='logoContainer'>
        <img src={logo} alt='Company Logo' className='imgResponsive' />
      </picture>
      <div className='searchContainer'>
        <input type='text' placeholder='Busca tu producto aqui!' />
        <Button btnTxt={<FaSearch />} className='searchBtn' />
      </div>
      <section className='separateSection'>
        <SocialButtons />
        <div className='userSection'>
          <span>
            <Link to='/clientCart'>
              <CartWidget className='cartIcon' />
            </Link>
          </span>
        </div>
      </section>
    </header>
  )
}