import { ReactNode, createContext, useContext, useState } from "react"
import { useGoogleLogin, googleLogout } from "@react-oauth/google"

interface MainContextProviderProps {
  children: ReactNode
}

interface UserDataProps {
  name: string
  email: string
  picture: string
}

interface MainContextProps {
  handleLoginSuccess: () => void
  isSignIn: boolean
  handleUpdateUserData: (data: UserDataProps) => void
  userData: UserDataProps
  handleLogout: () => void
}

const MainContext = createContext({} as MainContextProps)

export function useMainContext() {
  return useContext(MainContext)
}

export default function MainContextProvider({
  children,
}: MainContextProviderProps) {
  const [isSignIn, setIsSignIn] = useState(true)
  const [userData, setUserData] = useState({name: 'Test', email: 'test@email.com', picture: '/profile-01.png'} as UserDataProps)

  function handleLoginSuccess() {
    setIsSignIn(true)
  }
 
  function handleLogout() {
    setIsSignIn(false)
    alert('Logged out successfully')
  }

  async function handleUpdateUserData(data: UserDataProps) {
    setUserData(data)
  }

  const value = {
    isSignIn,
    handleLoginSuccess,
    handleUpdateUserData,
    userData,
    handleLogout
  }

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
