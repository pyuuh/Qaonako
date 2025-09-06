// hooks/useCalories.js
import { useState, useMemo } from 'react';
import { Alert } from 'react-native';
import { caloriesStyles, getProgressBarStyle } from './useCaloriesStyle';

const clamp = (v, min = 0, max = 100) => Math.max(min, Math.min(max, v));

export function useCalories() {
  const [calories, setCalories] = useState(0);
  const [calModalVisible, setCalModalVisible] = useState(false);
  const [calInput, setCalInput] = useState('');

  // Progress percentage (clamped)
  const caloriesPct = useMemo(() => clamp(Math.round((calories / 1800) * 100)), [calories]);

  const saveCalories = () => {
    const n = parseInt(calInput, 10);
    if (isNaN(n) || n < 0) {
      Alert.alert('Invalid input', 'Please enter a valid non-negative number.');
      return;
    }
    setCalories(prev => prev + n);
    setCalModalVisible(false);
    setCalInput('');
  };

  return {
    calories,
    caloriesPct,
    calModalVisible,
    calInput,
    setCalModalVisible,
    setCalInput,
    saveCalories,
    styles: caloriesStyles,
    getProgressBarStyle,
  };
}