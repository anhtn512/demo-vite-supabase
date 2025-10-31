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
    <aside className="w-64 border-r bg-background min-h-[calc(100vh-4rem)] sticky top-16">
      <nav className="p-4 space-y-2">
        <div className="mb-6">
          <h2 className="text-lg font-semibold px-2">Menu</h2>
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
