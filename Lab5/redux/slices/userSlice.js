import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/createApi';

// Async action để gọi API lấy danh sách users
export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const data = await fetchUsers();
    return data;
});

// Tạo slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: state.users.length + 1,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
            };
            state.users.push(newUser);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
