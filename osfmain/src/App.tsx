import Header from "./components/Header/index"
import Steps from "./components/Steps"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Fields from "./Pages/Fields"
import Schools from "./Pages/Schools"
import Agents from "./Pages/Agents"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginForm from "./Pages/Login/Login"

const App = () =>{
  return(
    
    <div className="full flex flex-col">

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="Pages/Fields" element={<Fields />} />
        <Route path="Pages/Schools" element={<Schools />} />
        <Route path="Pages/Agents" element={<Agents />} />
        <Route path="Pages/Login" element={<LoginForm />} />
        <Route path="Pages/Login" element={<Navigate replace to="/Login.html" />} />
      </Routes>       
        <Steps />
        <Banner />
        <Footer />

      </BrowserRouter>

      <div className="w-full"></div>
    </div>
    
  )
}

export default App