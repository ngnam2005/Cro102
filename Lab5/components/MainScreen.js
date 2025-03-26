import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ImagePickerComponent from '../components/ImagePicker';
import UserList from './userList';

const MainScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>📸 Chọn hoặc chụp ảnh</Text>

            {/* Card chứa Image Picker */}
            <View style={styles.card}>
                <ImagePickerComponent />
            </View>

            <Text style={styles.header}>📋 Danh sách người dùng</Text>

            {/* Card chứa danh sách người dùng */}
            <View style={styles.card}>
                <UserList />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
});

export default MainScreen;
