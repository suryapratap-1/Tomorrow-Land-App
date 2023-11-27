import { Outlet } from "react-router-dom"
import { Navbar, Footer} from "./components/UI Componets/index"
import { Provider } from "react-redux"
import { store } from './app/store'
import { Toaster } from "react-hot-toast"



function App() {

  return (
    <main className="overflow-x-hidden">
        <Provider store={store}>
            <Toaster />
            <Navbar />
            <Outlet />
            <Footer />
        </Provider>
    </main>
  )
}

export default App
