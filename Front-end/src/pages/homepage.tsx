import '../global.css'
import Navbar from '../components/layout/navbar/navbar'
import Hero from '../components/layout/hero/hero'
import Categories from '../components/layout/categories/categories'

function HomePage() {

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <Hero />

      <div className="wrapper">
        <Categories />
        
      </div>
      
    </>
  )
}

export default HomePage
