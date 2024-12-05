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

            <div className="nav-logo">
              <img src={Logo} alt="audiophile Logo" />
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