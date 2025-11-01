import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export function Layout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="max-w-6xl mx-auto px-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
