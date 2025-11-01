import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithColoredFallback: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500 text-white">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-orange-500 text-white">GH</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const UserList: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">shadcn</p>
          <p className="text-xs text-muted-foreground">@shadcn</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">@johndoe</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-blue-500 text-white">JS</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Jane Smith</p>
          <p className="text-xs text-muted-foreground">@janesmith</p>
        </div>
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-4">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-green-500 text-white">JS</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-purple-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-gray-500 text-white">+5</AvatarFallback>
      </Avatar>
    </div>
  ),
};
