// FeatureCards.js
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './homeStyle';

const FeatureCards = () => {
  // Feature data - reusable with props
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
  );
};

export default FeatureCards;