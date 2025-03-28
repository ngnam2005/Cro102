import React, { useRef } from "react";
import {
    View, Text, Image, ScrollView, TouchableOpacity, StyleSheet,
    Animated, PanResponder
} from "react-native";

const quizzes = [
    { category: "Product Design", title: "Design System", author: "Brandon", count: 10 },
    { category: "Development", title: "React Native 101", author: "Jennifer", count: 16 },
    { category: "Al Engineer", title: "Al in live", author: "Jess", count: 28 },
];

const QuizScreen = () => {
    const quizContainerHeight = useRef(new Animated.Value(50)).current;
    const headerOpacity = useRef(new Animated.Value(1)).current;
    const tabsTranslateY = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy < -30) {
                    Animated.timing(quizContainerHeight, {
                        toValue: 75,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();

                    Animated.timing(headerOpacity, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();

                    Animated.timing(tabsTranslateY, {
                        toValue: -120,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
                } else if (gestureState.dy > 30) {
                    Animated.timing(quizContainerHeight, {
                        toValue: 50,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();

                    Animated.timing(headerOpacity, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();

                    Animated.timing(tabsTranslateY, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <View style={styles.logoHeader}>
                <Text style={styles.logoText}>
                    <Text style={styles.logoMain}>N</Text> netguru{" "}
                    <Text style={styles.logoHighlight}>quiz</Text>
                </Text>
            </View>
            <View style={styles.header}>
                <Animated.View style={{ opacity: headerOpacity }}>
                    <Image
                        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
                        style={styles.avatar}
                    />
                    <Text style={styles.greeting}>Mornin’ Mark!</Text>
                    <Text style={styles.subText}>Ready for a quiz?</Text>
                </Animated.View>
                <Animated.View style={[styles.tabsContainer, { transform: [{ translateY: tabsTranslateY }] }]}>
                    {["Popular", "Product Design", "Development", "Projects"].map((tab, index) => (
                        <TouchableOpacity key={index} style={[styles.tab, index === 0 && styles.activeTab]}>
                            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </Animated.View>
            </View>

            <Animated.View
                style={[styles.quizContainer, {
                    height: quizContainerHeight.interpolate({
                        inputRange: [55, 75],
                        outputRange: ["55%", "75%"]
                    })
                }]}
                {...panResponder.panHandlers} // Bắt sự kiện vuốt
            >
                <Text style={styles.quizTitle}>Popular Quizzes</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {quizzes.map((quiz, index) => (
                        <View key={index} style={styles.quizCard}>
                            <View>
                                <Text style={styles.quizCategory}>{quiz.category}</Text>
                                <Text style={styles.quizName}>{quiz.title}</Text>
                                <Text style={styles.quizAuthor}>By {quiz.author}</Text>
                            </View>
                            <View style={[
                                styles.quizCount, 
                                { 
                                    backgroundColor: quiz.count > 25 ? "#FFD8A8" : "#EDEAFF" 
                                }
                            ]}>
                                <Text style={[
                                    styles.quizCountText, 
                                    { color: quiz.count > 25 ? "#D35400" : "#5D5FEF" }
                                ]}>
                                    Q {quiz.count}
                                </Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </Animated.View>
        </View>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#007A4E",
    },
    logoHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    logoMain: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
    },
    logoHighlight: {
        color: "#8CFAC7",
        fontWeight: "bold",
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
    },
    greeting: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 5,
    },
    subText: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 10,
    },
    tabsContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    tab: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: "#fff",
    },
    tabText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
    activeTabText: {
        color: "#007A4E",
    },
    quizContainer: {
        backgroundColor: "#F9F9F9",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    quizTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },
    quizCard: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quizCount: {
        backgroundColor: "#EDEAFF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
    },
    quizCountText: {
        color: "#5D5FEF",
        fontWeight: "bold",
    },
});
