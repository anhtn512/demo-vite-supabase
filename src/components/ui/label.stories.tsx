import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from './input';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label Text',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="input-example">Email Address</Label>
      <Input id="input-example" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="required-input">
        Username <span className="text-red-500">*</span>
      </Label>
      <Input id="required-input" placeholder="Enter username" required />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled-input" className="peer-disabled:opacity-70">
        Disabled Field
      </Label>
      <Input id="disabled-input" placeholder="Cannot edit" disabled />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="w-80 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" placeholder="John Doe" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email Address <span className="text-red-500">*</span>
        </Label>
        <Input id="email" type="email" placeholder="john@example.com" required />
        <p className="text-xs text-muted-foreground">
          We'll never share your email with anyone else.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Tell us about yourself"
        />
        <p className="text-xs text-muted-foreground">
          Brief description for your profile. URLs are hyperlinked.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subscribe" className="flex items-center gap-2 cursor-pointer">
          <input
            id="subscribe"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
          />
          <span>Subscribe to newsletter</span>
        </Label>
      </div>
    </form>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="••••••••" />
      <p className="text-xs text-muted-foreground">
        Must be at least 8 characters long
      </p>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Label htmlFor="error-input" className="text-red-500">
        Email Address
      </Label>
      <Input
        id="error-input"
        type="email"
        placeholder="john@example.com"
        className="border-red-500 focus-visible:ring-red-500"
      />
      <p className="text-xs text-red-500">
        Please enter a valid email address
      </p>
    </div>
  ),
};

export const MultipleFields: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Acme Inc." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" placeholder="https://example.com" />
      </div>
    </div>
  ),
};
