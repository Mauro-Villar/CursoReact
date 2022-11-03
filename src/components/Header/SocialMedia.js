import { FaInstagram, FaLinkedin, FaTwitter, FaTwitch } from 'react-icons/fa'
import './Header.css'

export const SocialButtons = () => {
  return (
    <ul className='socialButton'>
      <li>
        <a
          target='_blank'
          href='https://www.instagram.com/mauroviillar/'
          className='instagram' rel='noreferrer'
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/mauro-villar-04025a143/'
          className='linkedin'
          target='_blank' rel='noreferrer'
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/viillarmauro' className='twitter' target='_blank' rel='noreferrer'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.twitch.tv/mauroviillar' className='twitch' target='_blank' rel='noreferrer'>
          <FaTwitch />
        </a>
      </li>
    </ul>
  )
}