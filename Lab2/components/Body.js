import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Body = ({ updateInfo, changeColor }) => {
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nhập thông tin để cập nhật</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên mới..."
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Dán link ảnh mới..."
                value={linkImage}
                onChangeText={setLinkImage}
            />
            
            {/* Bọc Button trong View để căn chỉnh */}
            <View style={styles.buttonWrapper}>
                <Button title="CẬP NHẬT THÔNG TIN" onPress={() => updateInfo(name, linkImage)} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="ĐỔI MÀU FOOTER" onPress={changeColor} />
            </View>
        </View>
    );
};

export default React.memo(Body);

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', padding: 20 },
    text: { fontSize: 16, color: '#666' },
    input: {
        width: '90%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
        padding: 10, marginTop: 10, backgroundColor: '#FFF', marginBottom: 20
    },
    buttonWrapper: { 
        width: "90%", 
        marginTop: 10 
    },
});
