import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ bgColor, updateTime }) => {
    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={styles.text}>Thời gian bạn cập nhật thông tin: {updateTime || '---'}</Text>
        </View>
    );
};

export default React.memo(Footer);

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center', width: '100%', marginTop: 20 },
    text: { fontSize: 14, fontWeight: 'bold', color: '#333' },
});
