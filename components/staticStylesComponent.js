// components/StaticSections.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../pages/homePage/homeStyle';

export const StaticSections = ({ hydration, hydrationPct }) => {
  return (
    <>
      {/* Reminders Panel */}
      <View style={styles.remindersSection}>
        <Text style={styles.sectionTitle}>Reminders</Text>
        <View style={styles.reminderCard}>
          <Text style={styles.reminderIcon}>⏰</Text>
          <View style={styles.reminderContent}>
            <Text style={styles.reminderTitle}>Next meal in 2h 30m</Text>
            <Text style={styles.reminderSubtext}>Don't forget your afternoon snack!</Text>
          </View>
        </View>
        
        <View style={styles.reminderCard}>
          <Text style={styles.reminderIcon}>💧</Text>
          <View style={styles.reminderContent}>
            <Text style={styles.reminderTitle}>Hydration check</Text>
            <Text style={styles.reminderSubtext}>You're doing great! {8 - hydration} more glasses to go.</Text>
          </View>
        </View>
      </View>

      {/* AI Features & Alerts */}
      <View style={styles.aiSection}>
        <Text style={styles.sectionTitle}>AI Insights 🧠</Text>
        <View style={styles.aiCard}>
          <View style={styles.aiAlertGood}>
            <Text style={styles.aiAlertIcon}>✅</Text>
            <View style={styles.aiAlertContent}>
              <Text style={styles.aiAlertTitle}>Great Choice!</Text>
              <Text style={styles.aiAlertText}>Your breakfast was rich in fiber - perfect for gut health!</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.aiCard}>
          <View style={styles.aiAlertWarning}>
            <Text style={styles.aiAlertIcon}>⚠️</Text>
            <View style={styles.aiAlertContent}>
              <Text style={styles.aiAlertTitle}>Consider This</Text>
              <Text style={styles.aiAlertText}>Try to balance your macronutrients for optimal health.</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Body Rhythm Analysis */}
      <View style={styles.rhythmSection}>
        <Text style={styles.sectionTitle}>Body Rhythm Analysis 🌊</Text>
        <View style={styles.rhythmCard}>
          <Text style={styles.rhythmTitle}>Your Digestive Pattern</Text>
          <View style={styles.rhythmChart}>
            <View style={styles.rhythmBar}>
              <Text style={styles.rhythmTime}>6AM</Text>
              <View style={[styles.rhythmLevel, { height: 20 }]} />
            </View>
            <View style={styles.rhythmBar}>
              <Text style={styles.rhythmTime}>12PM</Text>
              <View style={[styles.rhythmLevel, { height: 45 }]} />
            </View>
            <View style={styles.rhythmBar}>
              <Text style={styles.rhythmTime}>6PM</Text>
              <View style={[styles.rhythmLevel, { height: 35 }]} />
            </View>
            <View style={styles.rhythmBar}>
              <Text style={styles.rhythmTime}>12AM</Text>
              <View style={[styles.rhythmLevel, { height: 10 }]} />
            </View>
          </View>
          <Text style={styles.rhythmInsight}>Your gut is most active around lunch time 🍽️</Text>
        </View>
      </View>

      {/* Gamified Challenges */}
      <View style={styles.challengeSection}>
        <Text style={styles.sectionTitle}>Today's Challenges 🎯</Text>
        <View style={styles.challengeGrid}>
          <TouchableOpacity style={styles.challengeCard}>
            <Text style={styles.challengeIcon}>🥗</Text>
            <Text style={styles.challengeTitle}>Veggie Hero</Text>
            <Text style={styles.challengeProgress}>2/5 servings</Text>
            <View style={styles.challengeBar}>
              <View style={[styles.challengeFill, { width: '40%' }]} />
            </View>
            <Text style={styles.challengeReward}>+50 points</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.challengeCard}>
            <Text style={styles.challengeIcon}>💧</Text>
            <Text style={styles.challengeTitle}>Hydration Master</Text>
            <Text style={styles.challengeProgress}>{hydration}/8 glasses</Text>
            <View style={styles.challengeBar}>
              <View style={[styles.challengeFill, { width: `${hydrationPct}%` }]} />
            </View>
            <Text style={styles.challengeReward}>+30 points</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.challengeCard}>
            <Text style={styles.challengeIcon}>⏰</Text>
            <Text style={styles.challengeTitle}>Consistency King</Text>
            <Text style={styles.challengeProgress}>Log 3 meals</Text>
            <View style={styles.challengeBar}>
              <View style={[styles.challengeFill, { width: '67%' }]} />
            </View>
            <Text style={styles.challengeReward}>+75 points</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Reports Access */}
      <View style={styles.reportsSection}>
        <Text style={styles.sectionTitle}>Weekly Reports 📊</Text>
        <TouchableOpacity style={styles.reportCard}>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Gut Health Score</Text>
            <Text style={styles.reportScore}>8.2/10</Text>
            <Text style={styles.reportChange}>↗️ +0.3 from last week</Text>
          </View>
          <Text style={styles.reportIcon}>📈</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.reportCard}>
          <View style={styles.reportContent}>
            <Text style={styles.reportTitle}>Digestive Insights</Text>
            <Text style={styles.reportSubtext}>Your best day was Tuesday!</Text>
            <Text style={styles.reportChange}>View detailed analysis →</Text>
          </View>
          <Text style={styles.reportIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Mood Check-In */}
      <View style={styles.moodSection}>
        <Text style={styles.sectionTitle}>How are you feeling?</Text>
        <View style={styles.moodButtons}>
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodEmoji}>😊</Text>
            <Text style={styles.moodLabel}>Great</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodEmoji}>😐</Text>
            <Text style={styles.moodLabel}>Okay</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodEmoji}>😴</Text>
            <Text style={styles.moodLabel}>Tired</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodEmoji}>🤢</Text>
            <Text style={styles.moodLabel}>Unwell</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};