import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { loginUser } from '@/services/auth'

const LoginPage = () => {
  const {} = useAuth()
  async function handleSignIn() {
    await loginUser()
  }

  return (
    <div>
      <h1 className="font-bold text-xl my-4">Welcome to Encyclomedia</h1>
      <Button onClick={handleSignIn}>Sign in with Google</Button>
    </div>
  )
}

export default LoginPage
