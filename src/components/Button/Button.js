import './Button.css'

export const Button = ({ btnTxt = '', className = 'defaultBtn', event }) => (
  <button className={className} onClick={event}>
    {btnTxt}
  </button>
)