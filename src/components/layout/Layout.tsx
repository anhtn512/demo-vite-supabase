import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Card } from '@/components/ui/card'

export function Layout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 py-8 bg-[rgb(245_247_249)]">
          <div className="max-w-6xl mx-auto px-10">
            <Card className="p-6 bg-white">
              <Outlet />
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
