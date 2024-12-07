import './homeFeaturedProducts.css'
import '../../../global.css'
import SpeakerZX9 from '../../../assets/image-speaker-zx9.png'
import CirclePattern from '../../../assets/pattern-circles.svg'
import { Link } from 'react-router'

function HomeFeaturedProducts() {
    return (
        <>
            <div className="featured-container">

                <div className="featured-grid-container">
                    <div className="featured-1">

                        <div className="flex-container">

                            <div className="left-content">
                                <img id="speaker" src={SpeakerZX9} alt="Speaker ZX9" />
                                <img id="circle-pattern" src={CirclePattern} alt="Circle Pattern" />
                            </div>

                            
                            <div className="right-content">
                                <h2>ZX9 <br/>SPEAKER</h2>
                                <p>Upgrade to premium speakers that are <br />phenomenally built to deliver truly remarkable <br />sound.</p>
                                <Link className='secondary-btn' to={'/'}><p>SEE PRODUCT</p></Link>
                            </div>

                        </div>
                                                
                    </div>

                    <div className="featured-2">
                        
                    </div>

                    <div className="featured-3">
                    
                    </div>

                    <div className="featured-4">
                    
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeFeaturedProducts;