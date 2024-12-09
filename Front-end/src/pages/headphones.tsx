import CategoryHeader from '../components/layout/categoryHeader/categoryHeader'
import Navbar from '../components/layout/navbar/navbar'

import Categories from '../components/layout/categories/categories'
import AboutHomePage from '../components/layout/aboutHomePage/aboutHomePage'
import Footer from '../components/layout/footer/footer'

function Headphones() {

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <CategoryHeader
        category="Headphones"
      />

      <div className="wrapper">
        <Categories />
          <AboutHomePage />
      </div>

      <Footer />
      
    </>
  )
}

export default Headphones
