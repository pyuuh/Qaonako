// featureCards.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './featureStyle'; 

const FeatureCards = () => {
  return (
    <View style={{ marginBottom: 25 }}>
      <Text style={styles.sectionTitle}>Core Features</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {/* Feature 1 */}
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🍽️</Text>
          <Text style={styles.featureCardTitle}>Meal Tracker</Text>
          <Text style={styles.featureCardText}>
            Log your meals manually to keep track of your daily nutrition with real time and date.
          </Text>
          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureButtonText}>Log Meal</Text>
          </TouchableOpacity>
        </View>

        {/* Feature 2 */}
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🚽</Text>
          <Text style={styles.featureCardTitle}>Poop Tracking</Text>
          <Text style={styles.featureCardText}>
            Log your bowel movements and get personalized insights about your digestive health patterns.
          </Text>
          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureButtonText}>Log Poop</Text>
          </TouchableOpacity>
        </View>

        {/* Feature 3 */}
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📊</Text>
          <Text style={styles.featureCardTitle}>Progress Dashboard</Text>
          <Text style={styles.featureCardText}>
            Track your nutrition, hydration, and digestive health trends with comprehensive reports.
          </Text>
          <TouchableOpacity style={styles.featureButton}>
            <Text style={styles.featureButtonText}>View Stats</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeatureCards;
