// hooks/useCaloriesStyle.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const caloriesStyles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },

  // Calorie Display Card
  calorieCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  calorieTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
    textAlign: 'center',
  },

  calorieCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 8,
  },

  calorieTarget: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Progress Bar
  progressContainer: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    height: 20,
    overflow: 'hidden',
    marginBottom: 12,
  },

  progressBar: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#27ae60',
  },

  progressBarWarning: {
    backgroundColor: '#f39c12',
  },

  progressBarDanger: {
    backgroundColor: '#e74c3c',
  },

  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: 4,
  },

  // Action Button
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: 'center',
    marginTop: 16,
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    width: width * 0.85,
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Input Field
  inputContainer: {
    marginBottom: 24,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#34495e',
    marginBottom: 8,
  },

  textInput: {
    borderWidth: 2,
    borderColor: '#bdc3c7',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#2c3e50',
  },

  textInputFocused: {
    borderColor: '#3498db',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  // Modal Buttons
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },

  saveButton: {
    backgroundColor: '#27ae60',
  },

  cancelButton: {
    backgroundColor: '#95a5a6',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Status Indicators
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
  },

  statusItem: {
    alignItems: 'center',
    flex: 1,
  },

  statusValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },

  statusLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Utility Classes
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  shadowMedium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  // Responsive margins
  marginSmall: {
    margin: 8,
  },

  marginMedium: {
    margin: 16,
  },

  marginLarge: {
    margin: 24,
  },
});

// Helper function to get progress bar color based on percentage
export const getProgressBarStyle = (percentage) => {
  if (percentage >= 100) return caloriesStyles.progressBarDanger;
  if (percentage >= 80) return caloriesStyles.progressBarWarning;
  return {}; // Default green color
};

// Helper function to format calorie display
export const formatCalories = (calories) => {
  return calories.toLocaleString();
};

// Helper function to get dynamic progress bar width
export const getProgressWidth = (percentage) => {
  return `${Math.min(percentage, 100)}%`;
};