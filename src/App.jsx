import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Team from "./pages/Team"
import Servicios from "./pages/Servicios"
import FAQ from "./pages/FAQ"
import Contacto from "./pages/Contacto"

function App() {

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/contacto" element={<Contacto/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
