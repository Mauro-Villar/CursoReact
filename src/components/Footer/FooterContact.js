import { Link } from 'react-router-dom'
import './Footer.css'

export const FooterContact = () => {
  return (
    <div className='contactFooter'>
      <h4>Nuestra atencion al cliente</h4>
      <div>
        <span>01324795078</span>
        <span>mauro_guillermo@hotmail.com</span>
      </div>
      <div>
        <Link to='/'>Hardware Store ©</Link>
        <span>
          Horarios de atencion: Todos los dias
        </span>
      </div>
    </div>
  )
}