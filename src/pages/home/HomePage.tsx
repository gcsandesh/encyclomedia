import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

const HomePage = () => {
  const { currentUser } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  console.log(currentUser)
  console.log(searchQuery)

  function getGreeting() {
    const hours = new Date().getHours()
    let greeting = ''
    if (hours < 12) {
      greeting = 'Good morning!'
    } else if (hours < 17) {
      greeting = 'Good afternoon!'
    } else if (hours < 20) {
      greeting = 'Good evening!'
    } else {
      greeting = 'Good night!'
    }
    return greeting
  }

  return (
    <section className="p-4">
      <p className="mb-4">
        {getGreeting()} {currentUser?.displayName ?? 'User'}
      </p>
      <div>
        <Label htmlFor="searchQuery">
          Search
          <Input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </Label>

        {/*TODO: show search results here when search query changes */}
      </div>
    </section>
  )
}

export default HomePage
