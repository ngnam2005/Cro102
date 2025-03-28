import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";
import { View, Button } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import QuizScreen from './components/QuizScreen';

const Stack = createStackNavigator();

const AnimatedBox = () => {
  const pressed = useSharedValue(false);
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const handlePress = () => { width.value = withSpring(width.value + 50); };
  const handlePressTranslateRight = () => { translateX.value = withSpring(translateX.value + 50); };
  const handlePressTranslateLeft = () => { translateX.value = withSpring(translateX.value - 50); };
  const handlePressTranslateUp = () => { translateY.value = withSpring(translateY.value - 50); };
  const handlePressTranslateDown = () => { translateY.value = withSpring(translateY.value + 50); };

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));

  const tap = Gesture.Tap()
    .onBegin(() => { pressed.value = true; })
    .onFinalize(() => { pressed.value = false; });

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[{ height: 100, backgroundColor: "violet" }, animatedStyle]} />
      </GestureDetector>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
        <Button onPress={handlePress} title="Increase Width" />
        <Button onPress={handlePressTranslateLeft} title="Move Left" />
        <Button onPress={handlePressTranslateRight} title="Move Right" />
        <Button onPress={handlePressTranslateUp} title="Move Up" />
        <Button onPress={handlePressTranslateDown} title="Move Down" />
      </View>
    </GestureHandlerRootView>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'col', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 20 }}>
        <Button onPress={() => navigation.navigate('MainScreen')} title="Go To MainScreen" />
        <Button onPress={() => navigation.navigate('QuizScreen')} title="Go To QuizScreen" />
      </View>
      <AnimatedBox />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
