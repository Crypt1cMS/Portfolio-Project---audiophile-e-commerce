import '../global.css'
import Navbar from '../components/layout/navbar/navbar'
import Hero from '../components/layout/hero/hero'

function HomePage() {

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <Hero />

    </>
  )
}

export default HomePage
