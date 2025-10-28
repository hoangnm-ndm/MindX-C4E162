## Có 3 cách CSS cho HTML

Có 3 cách để áp dụng CSS cho HTML:

**Cách 1: Inline.**

- Khó có thể tái sử dụng.
- Khó bảo trì.
- Có độ ưu tiên cao nhất.

**Cách 2: Internal (Nội bộ).**

- Dễ bảo trì hơn so với Inline.
- Tuy nhiên thì vẫn chỉ áp dụng được cho 1 file HTML đó thôi.
- Khi dự án phình to, code có thể vài trăm dòng và khó maintain.

**Cách 3: External (Bên ngoài).**

- Dễ bảo trì nhất.
- Có thể tái sử dụng cho nhiều file HTML khác nhau.
- Thường xuyên được sử dụng trong thực tế.

## Tính xếp chồng (Cascading)

Thuộc tính CSS có cùng bộ selector có thể được định nghĩa nhiều lần với các giá trị khác nhau. Khi đó, trình duyệt sẽ áp dụng quy tắc xếp chồng (Cascading) để xác định giá trị nào sẽ được sử dụng.

## Các thuộc tính CSS thường dùng

### Các thuộc tính liên quan đến font chữ

- `font-family`: Chỉ định họ font chữ.
- `font-size`: Chỉ định kích thước font chữ.
- `font-weight`: Chỉ định độ đậm của font chữ.
- `font-style`: Chỉ định kiểu dáng font chữ (như in nghiêng).
- `text-align`: Căn chỉnh văn bản (trái, phải, giữa, justify).
- `text-decoration`: Thêm các hiệu ứng như gạch chân, gạch ngang.

### Các thuộc tính liên quan đến box-model

- background-color: Chỉ định màu nền của phần tử.
- margin: Chỉ định khoảng cách bên ngoài của phần tử.
- padding: Chỉ định khoảng cách bên trong của phần tử.
- border: Chỉ định viền của phần tử.
- outline: Tương tự như border nhưng không chiếm không gian trong box-model.
- width: Chỉ định chiều rộng của phần tử.
- height: Chỉ định chiều cao của phần tử.
- box-shadow: Thêm hiệu ứng bóng đổ cho phần tử.

### Các thuộc tính liên quan đến bố cục (layout)

- display: Xác định cách phần tử được hiển thị (block, inline, flex, grid, none).
- position: Xác định cách phần tử được định vị (static, relative, absolute, fixed, sticky).
- top, right, bottom, left: Xác định vị trí của phần tử khi sử dụng thuộc tính position.

### Các thuộc tính liên quan đến làm chuyển động

- transition: Tạo hiệu ứng chuyển đổi mượt mà giữa các trạng thái khác nhau của phần tử.
- animation: Tạo các hiệu ứng hoạt hình phức tạp hơn cho phần tử.

### Các bước để style các phần tử HTML phổ biến

- Code từ tổng quan (layout) đến chi tiết (màu sắc, kiểu cách).
- Code từ ngoài vào trong (container -> section -> component -> element).
- Sử dụng class để style thay vì tag hoặc id, không nên lạm dụng việc đặt class.

### Cách đặt tên class

- Sử dụng tên có ý nghĩa, dễ hiểu, bằng tiếng Anh.
- Sử dụng quy tắc đặt tên BEM (Block Element Modifier) để tổ chức và quản lý class hiệu quả hơn.
- Không đặt tên chung chung, không đặt số ở đầu, không đặt viết hoa, không sử dụng ký tự đặc biệt.
