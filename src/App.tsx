import { Button } from './components/ui/button'

const App = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="font-bold text-xl my-4">Welcome to Encyclomedia</h1>
      <Button variant="secondary" color="green">
        Sign up
      </Button>
    </div>
  )
}

export default App
