import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { logoutUser } from '@/services/auth'

type Props = {}

const HomePage = (props: Props) => {
  const { currentUser } = useAuth()

  console.log(currentUser)

  async function handleLogout() {
    await logoutUser()
    return
  }

  return (
    <div>
      Hola! {currentUser?.displayName}
      <Button color="red" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  )
}

export default HomePage
