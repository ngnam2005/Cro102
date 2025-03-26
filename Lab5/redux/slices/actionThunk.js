import { loadTodo } from "./sliceTodo";

export function fetchTodo() {
    return async (dispatch) => {
        try {
            const response = await fetch("https://67b37c2b392f4aa94fa75ff8.mockapi.io/account");
            const json = await response.json();

            if (!Array.isArray(json)) {
                throw new Error("API trả về dữ liệu không hợp lệ");
            }

            console.log("Dữ liệu từ API:", json);
            dispatch(loadTodo(json)); // Đảm bảo dispatch một mảng hợp lệ
        } catch (error) {
            console.error("Lỗi API:", error);
        }
    };
}
