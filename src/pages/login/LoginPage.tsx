import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { loginUser } from '@/services/auth'
import googleG from '@/assets/google-g.png'

const LoginPage = () => {
  async function handleSignIn() {
    await loginUser()
  }

  return (
    <div>
      <h1 className="font-bold text-5xl my-4 tracking-wide text-center">
        Encyclomedia🍿
      </h1>

      <p>
        Get information on movies, save to watchlist, or keep track of watched
        movies or shows.
      </p>

      <Card className="mt-4">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="uppercase">Sign in</CardTitle>
          <CardDescription>Lets get you signed in!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button onClick={handleSignIn} className="my-4" variant="outline">
            <img src={googleG} width={27} />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
