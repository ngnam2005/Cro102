import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ title, hideIcon, hideTitle, hideMenuIcon }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.back}>
                {hideIcon && <Icon size={24} name="chevron-left" color="black" />}
            </TouchableOpacity>
            {hideTitle && <Text style={styles.headerTitle}>{title}</Text>}
            {hideMenuIcon && (
                <TouchableOpacity style={styles.menu}>
                    <Icon size={24} name="user" color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#f8f8f8",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
        textAlign: "center",
    },
    back: {
        padding: 8,
    },
    menu: {
        padding: 8,
    },
});

export default Header;