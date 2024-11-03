import Header from "./components/Header/index"
import Steps from "./components/Steps"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Fields from "./Pages/Fields"
import Schools from "./Pages/Schools"
import Agents from "./Pages/Agents"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{
  return(
    
    <div className="full flex flex-col">

      <BrowserRouter>

      <Routes>
        <Route path="../Pages/Fields" element={<Fields />} />
        <Route path="./Pages/Schools" element={<Schools />} />
        <Route path="./Pages/Agents" element={<Agents />} />
      </Routes>

        <Header />
        <Steps />
        <Banner />
        <Footer />
   

      </BrowserRouter>

        

      <div className="w-full"></div>
    </div>
    
  )
}

export default App