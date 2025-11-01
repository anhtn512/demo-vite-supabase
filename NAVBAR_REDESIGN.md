# Navbar Redesign

## Tổng quan

Navbar đã được thiết kế lại với các tính năng mới:

### ✨ Tính năng mới

1. **Breadcrumbs Navigation** - Hiển thị đường dẫn hiện tại của người dùng
2. **Button Group** - Nhóm các button action lại thành một group có khoảng cách đồng nhất
3. **Improved Layout** - Bố cục tốt hơn với breadcrumbs ở bên trái và actions ở bên phải

## Components

### 1. Breadcrumb Component

Component breadcrumb giúp hiển thị đường dẫn điều hướng hiện tại.

**Location**: `src/components/ui/breadcrumb.tsx`

**Usage**:
```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

**Props**:
- `Breadcrumb`: Container chính
- `BreadcrumbList`: Danh sách các breadcrumb items
- `BreadcrumbItem`: Mỗi item trong breadcrumb
- `BreadcrumbLink`: Link có thể click được
- `BreadcrumbPage`: Trang hiện tại (không thể click)
- `BreadcrumbSeparator`: Dấu phân cách giữa các items (mặc định là ChevronRight icon)
- `BreadcrumbEllipsis`: Hiển thị "..." khi có quá nhiều items

### 2. ButtonGroup Component

Component để nhóm các button lại với nhau.

**Location**: `src/components/ui/button-group.tsx`

**Usage**:
```tsx
import { ButtonGroup } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'

<ButtonGroup>
  <Button variant="ghost" size="icon">
    <Icon1 />
  </Button>
  <Button variant="ghost" size="icon">
    <Icon2 />
  </Button>
  <Button variant="ghost" size="icon">
    <Icon3 />
  </Button>
</ButtonGroup>
```

**Props**:
- `orientation`: `"horizontal"` (mặc định) hoặc `"vertical"` - Hướng sắp xếp buttons
- `className`: Custom CSS classes

### 3. useBreadcrumbs Hook

Hook tự động tạo breadcrumbs từ route hiện tại.

**Location**: `src/hooks/useBreadcrumbs.tsx`

**Usage**:
```tsx
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'

function MyComponent() {
  const breadcrumbs = useBreadcrumbs()
  // Returns: [{ label: 'Home', path: '/', icon: <HomeIcon /> }, ...]
}
```

**Customization**:
Bạn có thể tùy chỉnh labels cho các routes trong file `src/hooks/useBreadcrumbs.tsx`:

```tsx
const routeLabels: Record<string, string> = {
  '': 'Home',
  'profile': 'Hồ sơ',
  'settings': 'Cài đặt',
  'dashboard': 'Bảng điều khiển',
  // Thêm các route của bạn ở đây
}
```

## Navbar Structure

Navbar mới có cấu trúc như sau:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Home > Profile > Settings    [🖥️][🌙][🔔]  [Avatar▼]     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
     ↑                                ↑            ↑
  Breadcrumbs               Button Group    User Menu
```

### Phần Breadcrumbs (Trái)
- Hiển thị khi user đã đăng nhập
- Tự động cập nhật dựa trên route hiện tại
- Icon Home cho trang chủ
- Có thể click để quay lại các trang trước

### Phần Actions (Phải)
- **Button Group**: Chứa 3 buttons được nhóm lại:
  - Toggle Fullscreen (Maximize2 icon)
  - Toggle Theme (Sun/Moon icon)
  - Notifications (Bell icon)
- **User Menu**: Dropdown menu với avatar và các options

## Storybook

Bạn có thể xem preview các component trong Storybook:

```bash
npm run storybook
```

**Stories available**:
- `UI/Breadcrumb` - Các ví dụ về breadcrumb
- `UI/ButtonGroup` - Các ví dụ về button group
- `Layout/Navbar` - Preview navbar với các trạng thái khác nhau

## Responsive Design

- Navbar được thiết kế responsive
- Breadcrumbs có thể wrap xuống dòng mới nếu quá dài
- Button group vẫn giữ được hình dạng và khoảng cách đồng đều

## Accessibility

- Tất cả buttons đều có `aria-label` rõ ràng
- Breadcrumbs có `aria-label="breadcrumb"` và role phù hợp
- Support keyboard navigation
- Contrast colors đáp ứng WCAG standards

## Dark Mode Support

Tất cả components đều hỗ trợ dark mode thông qua Tailwind CSS dark mode classes.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

**Created**: November 1, 2025
**Version**: 1.0.0
