# Website HRVN - Công ty TNHH TMDV HRVN

Website chuyên nghiệp cho công ty cung cấp và cho thuê lại lao động thời vụ.

## 🌟 Tính Năng Nổi Bật

- ✅ Thiết kế hiện đại, chuyên nghiệp
- ✅ Responsive hoàn toàn trên mọi thiết bị (Desktop, Tablet, Mobile)
- ✅ Hiệu ứng animation mượt mà
- ✅ Tối ưu hiệu suất và SEO
- ✅ Form liên hệ tương tác
- ✅ Navigation menu động
- ✅ Scroll effects và animations

## 📁 Cấu Trúc Thư Mục

```
HRVN WEB/
│
├── index.html          # Trang chủ chính
├── README.md           # File hướng dẫn
│
├── css/
│   └── style.css       # File CSS chính
│
├── js/
│   └── main.js         # File JavaScript chính
│
└── images/             # Thư mục chứa hình ảnh (tùy chọn)
```

## 🚀 Cách Sử Dụng

### 1. Mở Website

Có 3 cách để xem website:

**Cách 1: Mở trực tiếp file HTML**
- Click đúp vào file `index.html`
- Website sẽ mở trong trình duyệt mặc định

**Cách 2: Sử dụng VS Code Live Server** (Khuyên dùng)
- Mở thư mục trong VS Code
- Click chuột phải vào `index.html`
- Chọn "Open with Live Server"

**Cách 3: Sử dụng Python HTTP Server**
```bash
# Mở terminal trong thư mục website
python -m http.server 8000
# Truy cập: http://localhost:8000
```

### 2. Tùy Chỉnh Thông Tin

#### Thay đổi thông tin liên hệ:
Mở file `index.html` và tìm phần Contact Section (dòng ~400), cập nhật:
- Địa chỉ công ty
- Số điện thoại
- Email
- Giờ làm việc

#### Thay đổi màu sắc chính:
Mở file `css/style.css` và chỉnh sửa CSS Variables (dòng 1-20):
```css
:root {
    --primary-color: #2563eb;     /* Màu chính */
    --secondary-color: #10b981;   /* Màu phụ */
    --accent-color: #f59e0b;      /* Màu nhấn */
}
```

#### Thêm logo công ty:
1. Đặt file logo vào thư mục `images/`
2. Trong `index.html`, tìm `.nav__logo` (dòng ~25)
3. Thay icon bằng:
```html
<img src="images/logo.png" alt="HRVN Logo">
```

## 📱 Các Section Trong Website

1. **Header/Navigation** - Menu điều hướng cố định
2. **Home** - Banner chính với thống kê
3. **About** - Giới thiệu công ty
4. **Services** - 6 dịch vụ chính
5. **Benefits** - 6 ưu điểm vượt trội
6. **Process** - 4 bước quy trình làm việc
7. **Contact** - Form liên hệ và thông tin
8. **Footer** - Thông tin chi tiết và links

## 🎨 Tùy Chỉnh Nâng Cao

### Thay đổi fonts chữ:
Trong file `index.html` (phần `<head>`), thay đổi Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=TênFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Thêm hình ảnh thực:
1. Tạo thư mục `images/` nếu chưa có
2. Thêm hình ảnh vào các card/section
3. Cập nhật đường dẫn trong HTML

### Tích hợp Form gửi email:
Thay thế phần xử lý form trong `js/main.js` (dòng ~150) bằng:
- EmailJS
- Formspree
- API backend riêng

## 🔧 Yêu Cầu Kỹ Thuật

- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm phần mềm
- Hỗ trợ đầy đủ trên mobile

## 📊 Tối Ưu SEO

Website đã được tối ưu sẵn với:
- Meta tags đầy đủ
- Semantic HTML5
- Structured content
- Mobile-friendly
- Fast loading

### Cải thiện SEO thêm:
1. Cập nhật meta description trong `<head>`:
```html
<meta name="description" content="Mô tả chi tiết về công ty">
<meta name="keywords" content="từ khóa 1, từ khóa 2, từ khóa 3">
```

2. Thêm Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🌐 Triển Khai Website

### Lên hosting miễn phí:
1. **GitHub Pages**
   - Tạo repository mới
   - Upload toàn bộ files
   - Bật GitHub Pages trong Settings

2. **Netlify**
   - Kéo thả thư mục vào Netlify
   - Nhận URL miễn phí ngay lập tức

3. **Vercel**
   - Import project từ GitHub
   - Deploy tự động

### Lên hosting trả phí:
- Upload toàn bộ files qua FTP
- Trỏ domain về thư mục chứa `index.html`

## 🔐 Bảo Mật

- Không chứa thông tin nhạy cảm trong code
- Validate input trong form
- Sử dụng HTTPS khi deploy
- Cập nhật thư viện thường xuyên

## 📞 Hỗ Trợ

Nếu cần hỗ trợ tùy chỉnh:
1. Kiểm tra console browser (F12) xem có lỗi không
2. Đảm bảo tất cả files ở đúng vị trí
3. Clear cache browser và refresh (Ctrl + F5)

## 📝 Checklist Trước Khi Đi Live

- [ ] Cập nhật tất cả thông tin liên hệ thật
- [ ] Thay đổi email, số điện thoại
- [ ] Thêm logo công ty
- [ ] Thêm hình ảnh thực tế
- [ ] Test form liên hệ hoạt động
- [ ] Test trên mobile, tablet
- [ ] Kiểm tra tất cả links
- [ ] Thêm Google Analytics
- [ ] Setup email nhận form
- [ ] Test tốc độ tải trang
- [ ] Kiểm tra SEO với Google Search Console

## 🎯 Tính Năng Có Thể Thêm Sau

- [ ] Trang blog/tin tức
- [ ] Gallery hình ảnh dự án
- [ ] Testimonials/đánh giá khách hàng
- [ ] Live chat support
- [ ] Multi-language (Tiếng Anh)
- [ ] Trang tuyển dụng
- [ ] Portal đăng nhập cho khách hàng

## 📄 License

© 2024 Công ty TNHH TMDV HRVN. All rights reserved.

---

**Made with ❤️ for HRVN Company**
