# Storybook Documentation

## Giới thiệu

Storybook đã được tích hợp thành công vào dự án để quản lý và phát triển UI components.

## 🚀 Chạy Storybook

### Development Mode
```bash
npm run storybook
```
Storybook sẽ chạy tại: http://localhost:6006

### Build Static Version
```bash
npm run build-storybook
```
Tạo static files trong thư mục `storybook-static/`

## 📁 Cấu trúc

```
.storybook/
├── main.ts              # Cấu hình chính của Storybook
├── preview.ts           # Cấu hình preview (themes, globals, decorators)
└── vitest.setup.ts      # Cấu hình testing

src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── button.stories.tsx    # Stories cho Button
│   │   ├── input.tsx
│   │   ├── input.stories.tsx     # Stories cho Input
│   │   ├── card.tsx
│   │   ├── card.stories.tsx      # Stories cho Card
│   │   ├── avatar.tsx
│   │   └── avatar.stories.tsx    # Stories cho Avatar
│   └── auth/
│       ├── LoginForm.tsx
│       └── LoginForm.stories.tsx # Stories cho LoginForm
└── stories/
    ├── Introduction.mdx          # Trang giới thiệu
    └── Styling.mdx               # Hướng dẫn styling
```

## 📚 Components có sẵn

### UI Components
- **Button** - Các variants: default, destructive, outline, secondary, ghost, link
- **Input** - Input fields với nhiều types khác nhau
- **Card** - Card component với header, content, footer
- **Avatar** - Avatar với image và fallback

### Auth Components
- **LoginForm** - Form đăng nhập hoàn chỉnh

## ✨ Tính năng

### 1. Auto Documentation
Tất cả components đều có tài liệu tự động với:
- Props table
- Controls để thay đổi props
- Examples với nhiều variants

### 2. Accessibility Testing
- Addon A11y tích hợp sẵn
- Kiểm tra tự động accessibility issues
- Xem violations trong tab "Accessibility"

### 3. Visual Testing
- Xem components trong nhiều states khác nhau
- Test responsive design
- Compare variants side-by-side

### 4. Component Testing với Vitest
```bash
npx vitest --project=storybook
```

## 📝 Tạo Stories mới

### Bước 1: Tạo Component
```tsx
// src/components/MyComponent.tsx
export function MyComponent({ text }: { text: string }) {
  return <div>{text}</div>
}
```

### Bước 2: Tạo Stories
```tsx
// src/components/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    text: 'Hello World',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Custom text here',
  },
};
```

### Bước 3: Xem trong Storybook
Stories sẽ tự động xuất hiện trong Storybook UI

## 🎨 Styling

Dự án sử dụng **Tailwind CSS v4**:
- Tất cả Tailwind utilities có sẵn
- CSS đã được import trong `.storybook/preview.ts`
- Sử dụng `cn()` utility để merge class names

## 🧪 Testing

### Component Testing
```bash
# Chạy tất cả tests
npx vitest --project=storybook

# Watch mode
npx vitest --project=storybook --watch
```

### Accessibility Testing
1. Mở story trong Storybook
2. Click tab "Accessibility"
3. Xem violations và recommendations

## 📦 Addons đã cài đặt

- **@chromatic-com/storybook** - Visual regression testing
- **@storybook/addon-docs** - Auto documentation
- **@storybook/addon-a11y** - Accessibility testing
- **@storybook/addon-vitest** - Component testing
- **@storybook/addon-onboarding** - Onboarding guide

## 💡 Best Practices

### 1. Organize Stories
```
title: 'Category/Subcategory/ComponentName'
```

### 2. Multiple Stories per Component
Tạo stories cho:
- Default state
- All variants
- Edge cases
- Interactive examples

### 3. Use ArgTypes
```tsx
argTypes: {
  variant: {
    control: 'select',
    options: ['default', 'primary', 'secondary'],
  },
  disabled: { control: 'boolean' },
}
```

### 4. Add Documentation
```tsx
parameters: {
  docs: {
    description: {
      component: 'Component mô tả chi tiết',
    },
  },
}
```

## 🔗 Resources

- [Storybook Docs](https://storybook.js.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs)
- [Vitest](https://vitest.dev)

## 🤝 Contribution

Khi thêm component mới:
1. Tạo component trong `src/components/`
2. Tạo file `.stories.tsx` tương ứng
3. Thêm ít nhất 3 stories (default, variants, examples)
4. Test accessibility
5. Chạy `npm run build-storybook` để verify

## 📞 Support

Nếu có vấn đề:
1. Check console logs
2. Xem Storybook documentation
3. Check GitHub issues của Storybook
