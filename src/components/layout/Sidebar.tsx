import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
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
    <aside className="w-64 border-r bg-background min-h-screen">
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
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isProfileActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
