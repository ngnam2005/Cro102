import axios from 'axios';

// API giả lập, bạn có thể thay thế bằng API thực tế
const API_URL = 'https://jsonplaceholder.typicode.com';

// Hàm lấy danh sách users
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
