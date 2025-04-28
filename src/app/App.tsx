import { RouterProvider } from "react-router-dom"
import router from "./router/routes"
import { UserProvider } from "@/feature/auth/context/UserContext"

function App() {

  return (
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  )
}

export default App
