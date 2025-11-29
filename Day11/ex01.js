const students = [
  { id: 1, name: "Nguyen Minh Hoang", address: "Bắc Ninh" },
  { id: 2, name: "Thao Nguyen", address: "Ho Chi Minh" },
  { id: 3, name: "Trong Nguyen", address: "Thai Binh" },
  { id: 4, name: "Minh Vu", address: "Ho Chi Minh" },
];

// * Hãy tạo ra một object nhóm các sinh viên từ mảng students theo quê quán. Ví dụ:

const result = {
  "Bắc Ninh": [{ id: 1, name: "Nguyen Minh Hoang", address: "Bắc Ninh" }],
  "Ho Chi Minh": [
    { id: 2, name: "Thao Nguyen", address: "Ho Chi Minh" },
    { id: 4, name: "Minh Vu", address: "Ho Chi Minh" },
  ],
  "Thai Binh": [{ id: 3, name: "Trong Nguyen", address: "Thai Binh" }],
};
