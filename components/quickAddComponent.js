// components/QuickAddSection.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../pages/homePage/homeStyle';

export const QuickAddSection = ({
  onMealPress,
  onPoopPress,
  onWaterPress,
  onActivityPress,
}) => {
  return (
    <View style={styles.quickAddSection}>
      <Text style={styles.sectionTitle}>Quick Add</Text>
      <View style={styles.quickAddGrid}>
        <TouchableOpacity style={styles.quickAddButton} onPress={onMealPress}>
          <Text style={styles.quickAddIcon}>🍽️</Text>
          <Text style={styles.quickAddText}>Meal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAddButton} onPress={onPoopPress}>
          <Text style={styles.quickAddIcon}>🚽</Text>
          <Text style={styles.quickAddText}>Poop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAddButton} onPress={onWaterPress}>
          <Text style={styles.quickAddIcon}>💧</Text>
          <Text style={styles.quickAddText}>Water</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAddButton} onPress={onActivityPress}>
          <Text style={styles.quickAddIcon}>🏃</Text>
          <Text style={styles.quickAddText}>Activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};