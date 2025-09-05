import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './homeStyle';

const Homepage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Key Metric State - Meals logged today
  const [mealsLogged, setMealsLogged] = useState(2);

  const incrementMeals = () => {
    setMealsLogged(mealsLogged + 1);
  };

  const decrementMeals = () => {
    if (mealsLogged > 0) {
      setMealsLogged(mealsLogged - 1);
    }
  };

  // Feature Cards data
  const features = [
    {
      id: 1,
      icon: '📸',
      title: 'AI Food Analysis',
      description: 'Get instant health ratings and nutritional insights by simply taking a photo of your food.',
      action: 'Scan Now',
      onPress: () => console.log('Scan food pressed')
    },
    {
      id: 2,
      icon: '🚽',
      title: 'Poop Tracking',
      description: 'Log your bowel movements and get personalized insights about your digestive health patterns.',
      action: 'Log Poop',
      onPress: () => console.log('Log poop pressed')
    },
    {
      id: 3,
      icon: '📊',
      title: 'Progress Dashboard',
      description: 'Track your nutrition, hydration, and digestive health trends with comprehensive visual reports.',
      action: 'View Stats',
      onPress: () => console.log('View stats pressed')
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5530" />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning! 🌱</Text>
          <Text style={styles.appName}>QAONAKO</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>

        {/* Key Metric Section */}
        <View style={styles.keyMetricContainer}>
          <Text style={styles.keyMetricTitle}>Meals Logged Today</Text>
          <Text style={styles.keyMetricValue}>{mealsLogged}</Text>
          <View style={styles.metricButtons}>
            <TouchableOpacity 
              style={[styles.metricButton, mealsLogged === 0 && styles.disabledButton]} 
              onPress={decrementMeals}
              disabled={mealsLogged === 0}
            >
              <Text style={styles.metricButtonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.metricButton} onPress={incrementMeals}>
              <Text style={styles.metricButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feature Cards Section */}
        <View style={styles.featureSection}>
          <Text style={styles.sectionTitle}>Core Features</Text>
          <View style={styles.featureGrid}>
            {features.map((feature) => (
              <View key={feature.id} style={styles.featureCard}>
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
                <TouchableOpacity 
                  style={styles.featureButton}
                  onPress={feature.onPress}
                >
                  <Text style={styles.featureButtonText}>{feature.action}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Rest of your existing content */}
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

        {/* The rest of your existing code continues here */}
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
                <Text style={styles.aiAlertText}>Too much processed sugar detected. Try swapping for natural alternatives.</Text>
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
              <Text style={styles.challengeProgress}>6/8 glasses</Text>
              <View style={styles.challengeBar}>
                <View style={[styles.challengeFill, { width: '75%' }]} />
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

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;