import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"
import { ModalProvider } from "./providers/ModalProvider"

function App() {

  return (
    <>
      <ModalProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ModalProvider>
    </>
  )
}

export default App
