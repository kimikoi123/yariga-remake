import Home from "./pages/Home"
import SignIn from "./pages/SignIn/SignIn"
import { useState } from 'react'



function App() {
  const [isSignIn, setIsSignIn] = useState(false)

  function handleLoginSuccess() {
    setIsSignIn(true)
  }

  return (
    <>
    {isSignIn ? <Home /> : <SignIn handleLoginSuccess={handleLoginSuccess} />}
    
    </>
  )
}

export default App
