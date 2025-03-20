import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Main = () => {
    const [headerData, setHeaderData] = useState({ name: '', linkImage: null });
    const [footerBg, setFooterBg] = useState('#FFFFFF');
    const [updateTime, setUpdateTime] = useState('');

    // Cập nhật thông tin từ Body lên Header
    const handleUpdateInfo = useCallback((name, linkImage) => {
        if (name === "") {
            Alert.alert("Vui lòng nhập tên người dùng");
            return ;
        }

        const currentTime = new Date().toLocaleString();
        setUpdateTime(currentTime);

        // Nếu không nhập ảnh mới thì giữ ảnh cũ hoặc đặt mặc định
        setHeaderData(prevData => ({
            name,
            linkImage: linkImage ? linkImage :  'default'
            //link ảnh : https://i.pravatar.cc/150?img=3
        }));
    }, []);
    const colors = ['red', 'yellow', 'blue', 'green', 'orange', 'aqua'];

    const handleRandomColor = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setFooterBg(colors[randomIndex]);
    }, []);

    return (
        <View style={styles.container}>
            <Header name={headerData.name} linkImage={headerData.linkImage} />
            <Body updateInfo={handleUpdateInfo} changeColor={handleRandomColor} />
            <Footer bgColor={footerBg} updateTime={updateTime} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5', marginTop: 40 },
});

export default Main;
