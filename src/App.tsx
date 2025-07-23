import DashboardLayout from './components/layout/DashboardLayout'
import { useAuth } from './contexts/AuthContext'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'

const App = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      {/* TODO: use react router dom */}
      {isLoggedIn ? (
        <DashboardLayout>
          <HomePage />
        </DashboardLayout>
      ) : (
        <LoginPage />
      )}
    </div>
  )
}

export default App
