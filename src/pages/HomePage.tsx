import { Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function HomePage() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to My App
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A modern web application with React, TypeScript, and Supabase authentication
        </p>
      </div>

      {user ? (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription>You're signed in as {user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard">
              <Button className="w-full">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="flex gap-4">
          <Link to="/register">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
