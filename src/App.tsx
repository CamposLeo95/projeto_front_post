import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"
import { ModalProvider } from "./providers/ModalProvider"
import NavProvider from "./providers/NavProvider"

function App() {

  return (
    <>
      <ModalProvider>
        <NavProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </NavProvider>
      </ModalProvider>
    </>
  )
}

export default App
