/** Tên hàm, biến: camelCase */

// console.log(Math);

// console.log(Math.max(1, 2, 3, 4, 5));

// Bài 10:

function max(...rest) {
  let max = rest[0];
  for (let i = 1; i < rest.length; i++) {
    if (max < rest[i]) max = rest[i];
  }
  return max;
}

console.log(max(1, 10, 5, 3, 5, 100, 0));

/**
 * * Bước 1: Gán phần tử đầu là max.
 * * Bước 2: Dùng for loop để duyệt mảng rest -> Nếu phần từ nào > max -> gán phần tử đó là max.
 * * Bước 3: Trả về max.
 */

// Bai 7.
function checkPalindromeString(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
}

console.log(checkPalindromeString("abcba"));
console.log(checkPalindromeString("Hoang"));

/**
 * * Viết 1 hàm randomPassword(n)
 * * Output: trả về một chuỗi password ngẫu nhiên chỉ dùng chữ cái viết hoa, viết thường, ký tự số và password này có độ dài n.
 * n phải >=6, <=40
 */
const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
