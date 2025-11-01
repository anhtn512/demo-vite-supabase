import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card';
import { Button } from './button';
import { Input } from './input';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content goes here.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>This is a simple card with only content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to sign in</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="email@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Premium Plan</CardTitle>
        <CardDescription>Perfect for growing teams</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span>✓</span>
              <span>Unlimited projects</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              <span>Priority support</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              <span>Advanced analytics</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-lg">New Message</CardTitle>
        <CardDescription>You received a new message from John</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Hey! I wanted to follow up on our conversation from yesterday.
          Let me know when you're available to chat.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm">
          Dismiss
        </Button>
        <Button size="sm">Reply</Button>
      </CardFooter>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Your activity overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Views</span>
              <span className="font-semibold">1,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Clicks</span>
              <span className="font-semibold">567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Conversions</span>
              <span className="font-semibold">89</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">User signed up</p>
              <p className="text-muted-foreground">2 minutes ago</p>
            </div>
            <div>
              <p className="font-medium">New order received</p>
              <p className="text-muted-foreground">1 hour ago</p>
            </div>
            <div>
              <p className="font-medium">Payment processed</p>
              <p className="text-muted-foreground">3 hours ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};
