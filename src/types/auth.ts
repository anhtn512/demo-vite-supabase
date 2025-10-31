export interface User {
  id: string
  email: string
  created_at: string
  updated_at?: string
  user_metadata?: {
    avatar_url?: string
    full_name?: string
  }
}

export interface AuthState {
  user: User | null
  loading: boolean
}
