import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ name, linkImage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Image
                source={linkImage && linkImage !== 'default' ? { uri: linkImage } : require("../assets/user.png")}
                style={styles.image}
            />

                <View style={styles.textContainer}>
                    <Text style={styles.greeting}>Chào ngày mới</Text>
                    <Text style={styles.text}>{name || 'Chưa có tên'}</Text>
                </View>
            </View>
        </View>
    );
};

export default React.memo(Header);

const styles = StyleSheet.create({
    container: { backgroundColor: '#ddd', width: '100%', padding: 15 },
    row: { flexDirection: 'row', alignItems: 'center' },
    textContainer: { marginLeft: 10 },
    greeting: { fontSize: 16, fontWeight: 'bold' },
    text: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    image: { width: 50, height: 50, borderRadius: 25, marginHorizontal: 10 },
});
