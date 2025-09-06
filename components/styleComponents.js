// hooks/usePoopStyle.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const poopStyles = StyleSheet.create({
  // Modal Base Styles
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

  // Time Input Container
  timeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },

  timeInputSection: {
    alignItems: 'center',
    marginHorizontal: 12,
    flex: 1,
  },

  timeSeparator: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },

  separatorText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7f8c8d',
  },

  // Input Styles
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#34495e',
    marginBottom: 8,
  },

  timeInput: {
    borderWidth: 2,
    borderColor: '#bdc3c7',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#ffffff',
    color: '#2c3e50',
    textAlign: 'center',
    minWidth: 60,
  },

  timeInputFocused: {
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

  // AM/PM Selector
  periodContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },

  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },

  periodButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },

  periodButtonActive: {
    backgroundColor: '#3498db',
  },

  periodButtonInactive: {
    backgroundColor: 'transparent',
  },

  periodButtonText: {
    fontWeight: '600',
    fontSize: 16,
  },

  periodButtonTextActive: {
    color: '#ffffff',
  },

  periodButtonTextInactive: {
    color: '#7f8c8d',
  },

  // Action Buttons
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 20,
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

  // Utility Styles
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

   modalContainerLarge: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    width: width * 0.9,  // Wider than poop modal
    maxWidth: 450,       // Larger max width
    maxHeight: '85%',    // Height constraint
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

  // Text input (different from timeInput)
  textInput: {
    borderWidth: 2,
    borderColor: '#e0e6ed',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    color: '#2c3e50',
    marginBottom: 8,
  },

  // Numeric input for grams
  numericInput: {
    borderWidth: 2,
    borderColor: '#e0e6ed',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '600',
  },

  // Nutrient category containers
  nutrientCategoryContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },

  nutrientCategoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 12,
    textAlign: 'center',
  },

  nutrientInputRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-end',
  },

  nutrientInputFlex: {
    flex: 2,
  },

  nutrientInputSmall: {
    flex: 1,
  },

  // Selector (different from period selector)
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    padding: 4,
  },

  selectorButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 2,
  },

  selectorButtonActive: {
    backgroundColor: '#3498db',
    shadowColor: '#3498db',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },

  selectorButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },

  selectorButtonTextActive: {
    color: '#ffffff',
  },

  selectorButtonTextInactive: {
    color: '#7f8c8d',
  },

  // Food list styles
  foodListContainer: {
    maxHeight: 160,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginVertical: 16,
  },

  foodListTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 12,
    textAlign: 'center',
  },

  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  foodItemText: {
    fontSize: 14,
    color: '#2c3e50',
    flex: 1,
  },

  removeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  removeButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },

  emptyListText: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Summary styles
  summaryContainer: {
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 12,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },

  summaryLabel: {
    fontSize: 14,
    color: '#34495e',
    fontWeight: '500',
  },

  summaryValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '700',
  },

  // Additional button styles
  primaryButton: {
    backgroundColor: '#27ae60',
  },

  secondaryButton: {
    backgroundColor: '#3498db',
  },

  singleButtonContainer: {
    marginTop: 16,
    marginBottom: 8,
  },

  singleButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
  },

  // Utility styles
  inputGroup: {
    marginBottom: 16,
  },

  scrollContainer: {
    maxHeight: 180,
  },
});

// Helper function for nutrient category colors
export const getNutrientColor = (nutrient) => {
  const colors = {
    carbs: '#f39c12',
    protein: '#e74c3c',
    fats: '#9b59b6',
  };
  return colors[nutrient] || '#3498db'; };
