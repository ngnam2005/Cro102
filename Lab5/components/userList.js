import React, { useEffect, useState, useCallback, memo } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, addUser } from '../redux/slices/userSlice';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedUserItem = memo(({ item, isVisible }) => {
    const opacity = useSharedValue(isVisible ? 1 : 0);
    const scale = useSharedValue(isVisible ? 1 : 0.8);

    useEffect(() => {
        opacity.value = withTiming(isVisible ? 1 : 0, { duration: 400 });
        scale.value = withTiming(isVisible ? 1 : 0.95, { duration: 400 });
    }, [isVisible, opacity, scale]); 

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.View style={[styles.userItem, animatedStyle]}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
        </Animated.View>
    );
});

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [visibleItems, setVisibleItems] = useState(new Set());

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const handleAddUser = () => {
        if (name.trim() && email.trim() && phone.trim()) {
            dispatch(addUser({ name, email, phone }));
            setName('');
            setEmail('');
            setPhone('');
        }
    };

    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        setVisibleItems(new Set(viewableItems.map(({ item }) => item.id)));
    }, []);

    return (
        <View style={styles.container}>
            {/* <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tên user"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <Button title="Thêm User" onPress={handleAddUser} />
            </View> */}
            <Button title="Tải lại danh sách" onPress={() => dispatch(getUsers())} />

            {loading && <ActivityIndicator size="large" color="blue" />}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}

            <FlatList
                style={{ flex: 1 }} 
                contentContainerStyle={{ paddingBottom: 20 }}
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AnimatedUserItem item={item} isVisible={visibleItems.has(item.id)} />
                )}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                extraData={visibleItems}  
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    userItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default UserList;
