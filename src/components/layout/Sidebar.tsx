import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'

export function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()

  // Chỉ hiển thị sidebar khi user đã đăng nhập
  if (!user) {
    return null
  }

  const isProfileActive = location.pathname.startsWith('/profile')

  return (
    <aside className="w-64 bg-background min-h-screen">
      <nav className="p-4 space-y-2">
        <div className="mb-6">
          <Link to="/" className="flex items-center justify-center gap-3 px-2 py-3">
            <svg
              className="h-8 w-8 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M13 2L3 14h7l-1 8L21 10h-7l0-8z" fill="currentColor" />
            </svg>
            <span className="text-2xl font-bold">My App</span>
          </Link>
        </div>

        <div className="space-y-1">
          <Link
            to="/profile"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors',
              isProfileActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
