import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';

const meta: Meta<typeof LoginForm> = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex items-center justify-center p-4">
            <Story />
          </div>
        </AuthProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <Story />
          </div>
        </AuthProvider>
      </BrowserRouter>
    ),
  ],
};
