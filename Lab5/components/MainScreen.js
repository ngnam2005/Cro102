import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserList from './userList';
import ImagePickerComponent from './ImagePicker';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>📋 Danh sách người dùng</Text>
            <View style={styles.card}>
                <UserList />
            </View>
            <ImagePickerComponent/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1, // Đảm bảo UserList có thể cuộn
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default MainScreen;
