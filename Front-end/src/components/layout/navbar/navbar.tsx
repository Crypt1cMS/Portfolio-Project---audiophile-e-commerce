import './navbar.css'
import '../../../global.css'
import Logo from '../../../../public/audiophile 2.svg'
import Cart from '../../../../public/icon-cart.svg'

function Navbar() {

    return (
      <>
        <nav>

            <div className="main-container">
                <img src={Logo} alt="Logo audiophile" />

                <ul className='content'>
                    <li>HOME</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>

                <img src={Cart} alt="Cart Icon" />
            </div>

            <hr />

        </nav>
      </>
    )
}

export default Navbar