import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  path: string
  icon?: React.ReactNode
}

const routeLabels: Record<string, string> = {
  '': 'Home',
  'profile': 'Profile',
  'settings': 'Settings',
  'dashboard': 'Dashboard',
  // Thêm các route khác tại đây
}

export function useBreadcrumbs() {
  const location = useLocation()

  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split('/').filter(Boolean)
    
    const items: BreadcrumbItem[] = [
      {
        label: 'Home',
        path: '/',
        icon: <Home className="h-4 w-4" />
      }
    ]

    let currentPath = ''
    paths.forEach((path) => {
      currentPath += `/${path}`
      items.push({
        label: routeLabels[path] || path.charAt(0).toUpperCase() + path.slice(1),
        path: currentPath
      })
    })

    return items
  }, [location.pathname])

  return breadcrumbs
}
