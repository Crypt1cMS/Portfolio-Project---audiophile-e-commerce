import '../global.css'
import Navbar from '../components/layout/navbar/navbar'
import Hero from '../components/layout/hero/hero'
import Categories from '../components/layout/categories/categories'
import HomeFeaturedProducts from '../components/layout/homeFeaturedProducts/homeFeaturedProducts'

function HomePage() {

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <Hero />

      <div className="wrapper">
        <Categories />
          <HomeFeaturedProducts />
      </div>
    </>
  )
}

export default HomePage
