// src/components/AnimatedButton.js

import React, { useRef } from 'react';
import { TouchableOpacity, Animated, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const AnimatedButton = ({ title, onPress, style, textStyle }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <TouchableOpacity onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} activeOpacity={1}>
      {/* Voltamos a usar um Animated.View com uma cor de fundo sólida */}
      <Animated.View style={[styles.button, animatedStyle, style]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary, // Cor de fundo sólida
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    // A fonte pode dar erro se o problema de tipografia ainda existir, mas vamos manter por enquanto
    // fontFamily: 'Poppins_700Bold', 
    fontWeight: 'bold',
  },
});

export default AnimatedButton;