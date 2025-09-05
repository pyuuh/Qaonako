
import styles from "homeStyles"; // Import styles
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Gut Health Dashboard</Text>

      {/* Daily Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Summary</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Calories</Text>
            <Text style={styles.cardValue}>1,250 kcal</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Meals</Text>
            <Text style={styles.cardValue}>3</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Poop Logs</Text>
            <Text style={styles.cardValue}>2</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Hydration</Text>
            <Text style={styles.cardValue}>1.5 L</Text>
          </View>
        </View>
      </View>

      {/* Quick Add Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Add</Text>
        <View style={styles.quickAddContainer}>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickText}>+ Meal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickText}>+ Poop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickText}>+ Water</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
