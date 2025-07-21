import { auth } from '@/lib/firebase'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextProps {
  isLoggedIn: boolean
  currentUser: User | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  currentUser: null,
  isLoading: true
})

export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // TODO: Look what this effect does
    const unsubscribe = onAuthStateChanged(auth, function (user) {
      if (user) {
        setCurrentUser(user)
        setIsLoggedIn(true)
      } else {
        setCurrentUser(null)
        setIsLoggedIn(false)
      }
      setIsLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    isLoggedIn,
    currentUser,
    isLoading
  }

  // from react 19, we can use AuthContext instead of AuthContext.Provider
  return <AuthContext value={value}>{children}</AuthContext>
}

export default AuthProvider
