import { FooterContact } from './FooterContact'
import { PayMethod } from './PayMethod'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footerContainer'>
      <FooterContact />
      <PayMethod />
    </footer>
  )
}