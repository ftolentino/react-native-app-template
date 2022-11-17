import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default function ApiLoader () {
  const animationProgress =useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue:1,
      duration:1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [])

  return (
    <LottieView
      source={require('../assets/loading.json')}
      progress={animationProgress.current}
      />
  );
}