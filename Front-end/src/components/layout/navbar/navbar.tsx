import './navbar.css'
import '../../../global.css'
import Logo from '../../../../public/audiophile 2.svg'
import Cart from '../../../../public/icon-cart.svg'
import { Link } from 'react-router'

function Navbar() {

    return (
      <>
        <nav>

          <div className="nav-container">

            <svg className="nav-burger-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>

            <div className="nav-logo">
              <Link to={'/'}><img src={Logo} alt="audiophile Logo" /></Link>
            </div>

            <ul>
              <li><Link to={'/'}><p>HOMEPAGE</p></Link></li>
              <li><Link to={'/headphones'}><p>HEADPHONES</p></Link></li>
              <li><Link to={'/'}><p>EARPHONES</p></Link></li>
              <li><Link to={'/'}><p>SPEAKERS</p></Link></li>
            </ul>

            <div className="nav-cart">
              <img src={Cart} alt="Cart" />
            </div>

          </div>

          <hr />

        </nav>
      </>
    )
}

export default Navbar