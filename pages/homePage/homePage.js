import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from './homeStyle.js';

const Homepage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5530" />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning! 🌱</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>

        {/* Daily Summary Cards */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Today's Summary</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Calories</Text>
              <Text style={styles.summaryValue}>1,240</Text>
              <Text style={styles.summarySubtext}>/ 1,800 kcal</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '69%' }]} />
              </View>
            </View>
            
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Hydration</Text>
              <Text style={styles.summaryValue}>6</Text>
              <Text style={styles.summarySubtext}>/ 8 glasses 💧</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '75%' }]} />
              </View>
            </View>

            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Last Poop</Text>
              <Text style={styles.summaryValue}>2h ago</Text>
              <Text style={styles.summarySubtext}>Normal 🟤</Text>
            </View>

            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Nutrients</Text>
              <View style={styles.nutrientBars}>
                <View style={styles.nutrientBar}>
                  <View style={[styles.nutrientFill, styles.carbsFill, { width: '60%' }]} />
                </View>
                <View style={styles.nutrientBar}>
                  <View style={[styles.nutrientFill, styles.proteinFill, { width: '45%' }]} />
                </View>
                <View style={styles.nutrientBar}>
                  <View style={[styles.nutrientFill, styles.fatsFill, { width: '70%' }]} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Add Buttons */}
        <View style={styles.quickAddSection}>
          <Text style={styles.sectionTitle}>Quick Add</Text>
          <View style={styles.quickAddGrid}>
            <TouchableOpacity style={styles.quickAddButton}>
              <Text style={styles.quickAddIcon}>🍽️</Text>
              <Text style={styles.quickAddText}>Meal</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAddButton}>
              <Text style={styles.quickAddIcon}>🚽</Text>
              <Text style={styles.quickAddText}>Poop</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAddButton}>
              <Text style={styles.quickAddIcon}>💧</Text>
              <Text style={styles.quickAddText}>Water</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickAddButton}>
              <Text style={styles.quickAddIcon}>🏃</Text>
              <Text style={styles.quickAddText}>Activity</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Rings */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Daily Goals</Text>
          <View style={styles.progressRingsContainer}>
            <View style={styles.progressRing}>
              <View style={styles.ringOuter}>
                <View style={styles.ringInner}>
                  <Text style={styles.ringPercentage}>69%</Text>
                </View>
              </View>
              <Text style={styles.ringLabel}>Food</Text>
            </View>
            
            <View style={styles.progressRing}>
              <View style={styles.ringOuter}>
                <View style={styles.ringInner}>
                  <Text style={styles.ringPercentage}>100%</Text>
                </View>
              </View>
              <Text style={styles.ringLabel}>Poop</Text>
            </View>
            
            <View style={styles.progressRing}>
              <View style={styles.ringOuter}>
                <View style={styles.ringInner}>
                  <Text style={styles.ringPercentage}>75%</Text>
                </View>
              </View>
              <Text style={styles.ringLabel}>Water</Text>
            </View>
          </View>
          
          <View style={styles.streakContainer}>
            <Text style={styles.streakText}>🔥 5 day streak!</Text>
          </View>
        </View>

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
              <Text style={styles.reminderSubtext}>You're doing great! 2 more glasses to go.</Text>
            </View>
          </View>
        </View>

        {/* Health Tip */}
        <View style={styles.healthTipSection}>
          <Text style={styles.sectionTitle}>Health Tip of the Day 📝</Text>
          <View style={styles.healthTipCard}>
            <Text style={styles.healthTipText}>
              Add more fiber to your lunch today! Try including some berries or a small salad to support your digestive health.
            </Text>
          </View>
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

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;