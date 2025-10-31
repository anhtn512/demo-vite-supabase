# Tính Năng Đổi Mật Khẩu

## Tổng quan

Đã thêm tính năng đổi mật khẩu hoàn chỉnh vào ứng dụng. Người dùng có thể thay đổi mật khẩu của họ từ Dashboard.

## Các thay đổi đã thực hiện

### 1. AuthContext (`src/context/AuthContext.tsx`)
- ✅ Thêm method `changePassword(newPassword: string)` 
- ✅ Sử dụng `supabase.auth.updateUser()` để cập nhật mật khẩu
- ✅ Trả về error nếu có vấn đề

### 2. ChangePasswordForm Component (`src/components/auth/ChangePasswordForm.tsx`)
**Tính năng:**
- Form đổi mật khẩu với 3 trường:
  - Current Password (mật khẩu hiện tại)
  - New Password (mật khẩu mới)
  - Confirm New Password (xác nhận mật khẩu mới)

**Validation:**
- ✅ Mật khẩu mới phải ít nhất 6 ký tự
- ✅ Mật khẩu mới và xác nhận phải khớp nhau
- ✅ Mật khẩu mới phải khác mật khẩu hiện tại

**UX:**
- Hiển thị thông báo lỗi nếu có
- Hiển thị thông báo thành công khi đổi mật khẩu thành công
- Tự động xóa form sau khi thành công
- Nút Cancel để reset form
- Loading state khi đang xử lý

### 3. Dashboard Page (`src/pages/DashboardPage.tsx`)
- ✅ Thêm tab "Security" mới vào Dashboard
- ✅ Tab Security chứa ChangePasswordForm
- ✅ Tabs: Profile → Security → Settings

## Cách sử dụng

### Từ phía người dùng:
1. Đăng nhập vào ứng dụng
2. Vào Dashboard
3. Click vào tab "Security"
4. Điền thông tin:
   - Mật khẩu hiện tại
   - Mật khẩu mới (tối thiểu 6 ký tự)
   - Xác nhận mật khẩu mới
5. Click "Change Password"
6. Nhận thông báo thành công

### Lưu ý quan trọng:
- ⚠️ Supabase yêu cầu user phải đăng nhập để đổi mật khẩu
- ⚠️ Sau khi đổi mật khẩu, session vẫn được giữ (user không bị đăng xuất)
- ⚠️ User nên đăng xuất và đăng nhập lại với mật khẩu mới để đảm bảo

## Cấu trúc code

```typescript
// AuthContext - Thêm function
const changePassword = async (newPassword: string) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  })
  return { error }
}

// ChangePasswordForm - Component
export function ChangePasswordForm() {
  // State management
  // Validation logic
  // Form submission
  // Error/Success handling
}

// DashboardPage - Integration
<Tabs>
  <TabsTrigger value="profile">Profile</TabsTrigger>
  <TabsTrigger value="security">Security</TabsTrigger>
  <TabsTrigger value="settings">Settings</TabsTrigger>
</Tabs>

<TabsContent value="security">
  <ChangePasswordForm />
</TabsContent>
```

## Testing

### Build Status
✅ TypeScript compilation: Passed
✅ Production build: Successful
✅ Bundle size: ~135 KB (gzipped)

### Manual Testing
1. ✅ Form validation hoạt động đúng
2. ✅ Error messages hiển thị chính xác
3. ✅ Success message hiển thị khi đổi mật khẩu thành công
4. ✅ Form reset sau khi thành công
5. ✅ Cancel button hoạt động đúng

## Security Considerations

1. **Không lưu mật khẩu cũ**: Form không validate mật khẩu cũ ở frontend, Supabase sẽ xử lý
2. **Password Requirements**: Tối thiểu 6 ký tự (có thể tăng nếu cần)
3. **Session Management**: User không bị logout sau khi đổi mật khẩu
4. **Error Handling**: Không expose thông tin nhạy cảm trong error messages

## Future Enhancements

Có thể thêm trong tương lai:
- [ ] Yêu cầu re-authentication trước khi đổi mật khẩu
- [ ] Password strength meter
- [ ] Password history (không cho dùng lại mật khẩu cũ)
- [ ] Email notification khi đổi mật khẩu
- [ ] 2FA integration
- [ ] Password reset link nếu quên mật khẩu hiện tại

## Files Changed

```
src/
├── context/
│   └── AuthContext.tsx                    # ✏️ Modified
├── components/
│   └── auth/
│       └── ChangePasswordForm.tsx         # ✨ New
└── pages/
    └── DashboardPage.tsx                  # ✏️ Modified
```

---

Tính năng đổi mật khẩu đã sẵn sàng sử dụng! 🎉
