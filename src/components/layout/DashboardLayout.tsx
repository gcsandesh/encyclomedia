import React from 'react'
import { Button } from '../ui/button'
import { logoutUser } from '@/services/auth'
import { Separator } from '../ui/separator'
import { LogOutIcon } from 'lucide-react'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
  async function handleLogout() {
    await logoutUser()
    return
  }

  return (
    <div className="w-full">
      {/* TODO: separate this header component */}
      <header className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold ">Encyclomedia🍿</h1>
        {/* TODO: create and use a logo/graphic */}
        <nav>
          <ul className="flex gap-4 items-center justify-around">
            <li>
              <Button
                color="red"
                onClick={handleLogout}
                variant={'destructive'}
              >
                <LogOutIcon />
                Log out
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <Separator className="w-full" />
      <main>{props.children}</main>
    </div>
  )
}

export default DashboardLayout
