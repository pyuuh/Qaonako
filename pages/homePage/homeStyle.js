import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D5530',
  },
  
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F8FBF8',
  },

  // Header Styles
  header: {
    backgroundColor: '#2D5530',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 20,
  },
  
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  
  date: {
    fontSize: 14,
    color: '#A8D5AB',
    fontWeight: '500',
  },

  // Section Styles
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 15,
    marginLeft: 5,
  },

  // Summary Cards
  summarySection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    width: (width - 50) / 2,
    marginBottom: 10,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  summaryTitle: {
    fontSize: 12,
    color: '#6B8F6E',
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  summaryValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2D5530',
    marginBottom: 2,
  },
  
  summarySubtext: {
    fontSize: 12,
    color: '#8FA892',
    marginBottom: 10,
  },

  // Progress Bars
  progressBar: {
    height: 6,
    backgroundColor: '#E8F5E8',
    borderRadius: 3,
    overflow: 'hidden',
  },
  
  progressFill: {
    height: '100%',
    backgroundColor: '#52B788',
    borderRadius: 3,
  },

  // Nutrient Bars
  nutrientBars: {
    marginTop: 5,
  },
  
  nutrientBar: {
    height: 4,
    backgroundColor: '#E8F5E8',
    borderRadius: 2,
    marginBottom: 3,
    overflow: 'hidden',
  },
  
  nutrientFill: {
    height: '100%',
    borderRadius: 2,
  },
  
  carbsFill: {
    backgroundColor: '#8FBC8F',
  },
  
  proteinFill: {
    backgroundColor: '#52B788',
  },
  
  fatsFill: {
    backgroundColor: '#2D5530',
  },

  // Quick Add Buttons
  quickAddSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  quickAddGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  
  quickAddButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: (width - 60) / 4,
    marginBottom: 10,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  quickAddIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  
  quickAddText: {
    fontSize: 12,
    color: '#2D5530',
    fontWeight: '600',
    textAlign: 'center',
  },

  // Progress Rings
  progressSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  progressRingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  
  progressRing: {
    alignItems: 'center',
  },
  
  ringOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  
  ringInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#52B788',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  ringPercentage: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  
  ringLabel: {
    fontSize: 12,
    color: '#6B8F6E',
    fontWeight: '600',
  },
  
  streakContainer: {
    backgroundColor: '#FFF3CD',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    borderColor: '#F0C94A',
    borderWidth: 1,
  },
  
  streakText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8B6914',
  },

  // Reminders
  remindersSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  reminderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#52B788',
  },
  
  reminderIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  
  reminderContent: {
    flex: 1,
  },
  
  reminderTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 2,
  },
  
  reminderSubtext: {
    fontSize: 12,
    color: '#6B8F6E',
  },

  // Health Tip
  healthTipSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  healthTipCard: {
    backgroundColor: '#E8F5E8',
    borderRadius: 15,
    padding: 20,
    borderColor: '#A8D5AB',
    borderWidth: 1,
  },
  
  healthTipText: {
    fontSize: 14,
    color: '#2D5530',
    lineHeight: 20,
    fontWeight: '500',
  },

  // Mood Check-in
  moodSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  moodButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  moodButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: (width - 70) / 4,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  
  moodEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  
  moodLabel: {
    fontSize: 11,
    color: '#2D5530',
    fontWeight: '600',
    textAlign: 'center',
  },
});