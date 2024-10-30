import Brands from "./components/Brands"
import Header from "./components/Header/index"
import Steps from "./components/Steps"
import Types from "./components/Types"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

const App = () =>{
  return(
    
    <div className="full flex flex-col">
      <Header />
      <Steps />
      <Brands />
      <Types />
      <Banner />
      <Footer />
      <div className="w-full"></div>
    </div>
    
  )
}

export default App