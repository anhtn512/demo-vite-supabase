import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './button-group'
import { Button } from './button'
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Save, Download, Share } from 'lucide-react'

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const TextFormatting: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Underline className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <AlignRight className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
}

export const Actions: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="ghost" size="icon">
        <Save className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Download className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Share className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <Save className="h-4 w-4 mr-2" />
        Save
      </Button>
      <Button variant="outline">
        <Download className="h-4 w-4 mr-2" />
        Download
      </Button>
      <Button variant="outline">
        <Share className="h-4 w-4 mr-2" />
        Share
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}

export const Mixed: Story = {
  render: () => (
    <div className="flex gap-4">
      <ButtonGroup>
        <Button variant="default">Primary</Button>
        <Button variant="default">Secondary</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="outline">Option 1</Button>
        <Button variant="outline">Option 2</Button>
        <Button variant="outline">Option 3</Button>
      </ButtonGroup>
    </div>
  ),
}
