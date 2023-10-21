import { Outlet } from "react-router-dom"
import { Navbar, Footer} from "./components/UI Componets/index"

function App() {

  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />  
    </div>
  )
}

export default App
