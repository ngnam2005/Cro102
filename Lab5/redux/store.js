import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import imageReducer from './slices/cameraSlice';
import userReducer from './slices/userSlice';


// Cấu hình persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Gộp reducer và áp dụng persist
const rootReducer = combineReducers({
  image: imageReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store với persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt cảnh báo không cần thiết
    }),
});

// Tạo persistor
export const persistor = persistStore(store);

export default store;
