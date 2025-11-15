## Kiểm tra số cùng dấu

- Cho trước 2 số a, b. Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình.

```javascript
// Input:
function isSameSign(a, b) {
  // Viết logic kiểm tra 2 số cùng dấu ở đây
}

// Output:
isSameSign(10, 20); // true
isSameSign(-10, -20); // true
isSameSign(10, -20); // false
```

## Viết hàm tính và đưa ra gợi ý sức khoẻ trên cơ sở chỉ số BMI

Viết hàm `calcBMI(weight, height)` nhận vào cân nặng `weight` (kg) và chiều cao `height` (m) của một người từ bàn phím (gợi ý sử dụng `window.prompt()`), trả về chỉ số BMI và gợi ý sức khoẻ tương ứng:

- BMI < 18.5: Thiếu cân
- 18.5 <= BMI < 23: Bình thường
- 23 <= BMI < 25: Thừa cân
- BMI >= 25: Béo phì

Với công thức: BMI = weight / height^2 (làm tròn 2 chữ số thập phân)

```javascript
// Input:
function calcBMI(weight, height) {
  // logic
}

// Output:
calcBMI(60, 1.7); // "BMI = 20.76, Bình thường"
```

## Sắp xếp 3 số

Cho trước 3 số a, b, c.

Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần nhưng không được dùng phương thức `sort()` của mảng, cũng không được dùng biến trung gian.

```javascript
// Input:
function sortNumber(a, b, c) {
  // Xử lý và in ra kết quả
}

// Output:
sortNumber(3, 2, 1); // 1 2 3
```

# Tính tiền taxi

Viết hàm tính tiền taxi với số km nhập vào từ bàn phím.

- Số km <= 1 giá: 10000đ/km. (giá mở cửa 10.000đ)
- Số km > 1 đến <= 30 giá: 8000đ/km.
- Số km từ > 30 giá: 7000đ/km.
- Nếu số km nhập vào không hợp lệ thì thông báo "Số km không hợp lệ".

```javascript
// Input:
function taxiBill(km) {
  // Xử lý và in ra kết quả
}

// Output:
taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
taxiBill(1); // Output: Số tiền cần trả: 10000đ
taxiBill(10); // Output: Số tiền cần trả: 82000đ
taxiBill(-5); // Output: Số km không hợp lệ
taxiBill("abc"); // Output: Số km không hợp lệ
```
