import Home from "./pages/Home"
import SignIn from "./pages/SignIn/SignIn"
import { useMainContext } from "./contexts/MainContext"



function App() {
  const { isSignIn } = useMainContext()


  return (
    <>
    {isSignIn ? <Home /> : <SignIn />}
    </>
  )
}

export default App
