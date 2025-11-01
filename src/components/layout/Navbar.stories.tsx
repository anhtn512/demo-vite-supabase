import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'

const meta = {
  title: 'Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

const mockUser = {
  id: '1',
  email: 'user@example.com',
  aud: 'authenticated',
  role: 'authenticated',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  app_metadata: {},
  user_metadata: {},
}

const mockAuthContextValue = {
  user: mockUser,
  loading: false,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  changePassword: async () => ({ error: null }),
}

const mockAuthContextValueNoUser = {
  user: null,
  loading: false,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  changePassword: async () => ({ error: null }),
}

export const Authenticated: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <AuthContext.Provider value={mockAuthContextValue}>
          <Story />
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
}

export const NotAuthenticated: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <AuthContext.Provider value={mockAuthContextValueNoUser}>
          <Story />
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
}

export const WithBreadcrumbs: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/profile/settings']}>
        <AuthContext.Provider value={mockAuthContextValue}>
          <Story />
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
}
