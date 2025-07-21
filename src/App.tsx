import { useAuth } from './contexts/AuthContext'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'

const App = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div className="p-4 flex flex-col items-center">
      {isLoggedIn ? <HomePage /> : <LoginPage />}
    </div>
  )
}

export default App
