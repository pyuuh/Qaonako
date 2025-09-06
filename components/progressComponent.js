// components/ProgressSection.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../pages/homePage/homeStyle';

export const ProgressSection = ({ caloriesPct, hydrationPct, lastPoopTime }) => {
  return (
    <View style={styles.progressSection}>
      <Text style={styles.sectionTitle}>Daily Goals</Text>
      <View style={styles.progressRingsContainer}>
        <View style={styles.progressRing}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner}>
              <Text style={styles.ringPercentage}>{caloriesPct}%</Text>
            </View>
          </View>
          <Text style={styles.ringLabel}>Food</Text>
        </View>
        
        <View style={styles.progressRing}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner}>
              <Text style={styles.ringPercentage}>{lastPoopTime ? '100' : '0'}%</Text>
            </View>
          </View>
          <Text style={styles.ringLabel}>Poop</Text>
        </View>
        
        <View style={styles.progressRing}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner}>
              <Text style={styles.ringPercentage}>{hydrationPct}%</Text>
            </View>
          </View>
          <Text style={styles.ringLabel}>Water</Text>
        </View>
      </View>
      
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>🔥 5 day streak!</Text>
      </View>
    </View>
  );
};