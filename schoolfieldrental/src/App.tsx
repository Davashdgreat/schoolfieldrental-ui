import Brands from "./components/Brands"
import Header from "./components/Header/index"
import Steps from "./components/Steps"
import Types from "./components/Types"

const App = () =>{
  return(
    
    <div className="full flex flex-col">
      <Header />
      <Steps />
      <Brands />
      <Types />
      <div className="w-full h-[500px]"></div>
    </div>
    
  )
}

export default App