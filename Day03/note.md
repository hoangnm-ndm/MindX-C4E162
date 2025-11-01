# Box-sizing

Box-sizing là thuộc tính quy định cách tính kích thước của khối hộp.

## box-sizing: content-box;

Đây là giá trị mặc định của thuộc tính box-sizing. Khi sử dụng content-box, kích thước width và height chỉ áp dụng cho phần nội dung (content) của hộp. Padding và border sẽ được thêm vào bên ngoài kích thước này.

width = content width

## box-sizing: border-box;

Là cách tính kích thước hộp bao gồm cả padding và border. Khi sử dụng border-box, kích thước width và height sẽ bao gồm cả phần nội dung, padding và border. Điều này giúp dễ dàng kiểm soát kích thước tổng thể của hộp.

width = content width + padding + border
