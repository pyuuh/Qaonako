// components/SummarySection.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../pages/homePage/homeStyle';

export const SummarySection = ({
  calories,
  caloriesPct,
  hydration,
  hydrationPct,
  lastPoopTime,
  totals,
  mostConsumed,
  onCaloriesPress,
  onPoopPress,
  onNutrientsPress,
  onHydrationIncrement,
  onHydrationDecrement,
  formatTimeObj,
}) => {
  return (
    <View style={styles.summarySection}>
      <Text style={styles.sectionTitle}>Today's Summary</Text>
      <View style={styles.summaryGrid}>
        {/* Calories Card */}
        <TouchableOpacity style={styles.summaryCard} onPress={onCaloriesPress}>
          <Text style={styles.summaryTitle}>Calories</Text>
          <Text style={styles.summaryValue}>{calories}</Text>
          <Text style={styles.summarySubtext}>/ 1,800 kcal</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${caloriesPct}%` }]} />
          </View>
        </TouchableOpacity>

        {/* Hydration Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Hydration</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.summaryValue}>{hydration}</Text>
              <Text style={styles.summarySubtext}>/ 8 glasses 💧</Text>
            </View>
            <View style={styles.hydrationButtonsRow}>
              <TouchableOpacity style={styles.hydrationBtn} onPress={onHydrationDecrement}>
                <Text style={[styles.hydrationBtnText, {fontSize: 20}]}>−</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hydrationBtn} onPress={onHydrationIncrement}>
                <Text style={[styles.hydrationBtnText, {fontSize: 20}]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${hydrationPct}%` }]} />
          </View>
        </View>

        {/* Poop Card */}
        <TouchableOpacity style={styles.summaryCard} onPress={onPoopPress}>
          <Text style={styles.summaryTitle}>Last Poop</Text>
          <Text style={styles.summaryValue}>{formatTimeObj(lastPoopTime)}</Text>
          <Text style={styles.summarySubtext}>Tap to set time</Text>
        </TouchableOpacity>

        {/* Nutrients Card */}
        <TouchableOpacity style={styles.summaryCard} onPress={onNutrientsPress}>
          <Text style={styles.summaryTitle}>Nutrients</Text>
          <View style={styles.nutrientBars}>
            <View style={styles.nutrientBar}>
              <View
                style={[styles.nutrientFill, styles.carbsFill, { 
                  width: `${Math.min(100, Math.round((totals.carbs / Math.max(1, totals.carbs + totals.protein + totals.fats)) * 100))}%` 
                }]}
              />
            </View>
            <View style={styles.nutrientBar}>
              <View
                style={[styles.nutrientFill, styles.proteinFill, { 
                  width: `${Math.min(100, Math.round((totals.protein / Math.max(1, totals.carbs + totals.protein + totals.fats)) * 100))}%` 
                }]}
              />
            </View>
            <View style={styles.nutrientBar}>
              <View
                style={[styles.nutrientFill, styles.fatsFill, { 
                  width: `${Math.min(100, Math.round((totals.fats / Math.max(1, totals.carbs + totals.protein + totals.fats)) * 100))}%` 
                }]}
              />
            </View>
          </View>
          <Text style={styles.smallNote}>Most consumed: {mostConsumed}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};