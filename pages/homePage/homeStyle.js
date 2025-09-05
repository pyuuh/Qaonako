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
    marginTop: 30,
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

  // Calendar Styles
  calendarSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F5E8',
  },
  
  calendarHeaderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B8F6E',
    textAlign: 'center',
    width: 35,
  },
  
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  calendarDay: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
  },
  
  calendarToday: {
    backgroundColor: '#52B788',
  },
  
  futureDay: {
    opacity: 0.5,
  },
  
  calendarDayNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 8,
  },
  
  todayNumber: {
    color: '#FFFFFF',
  },
  
  futureNumber: {
    color: '#8FA892',
  },
  
  calendarIndicators: {
    flexDirection: 'row',
    gap: 2,
  },
  
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  
  mealIndicator: {
    backgroundColor: '#52B788',
  },
  
  poopIndicator: {
    backgroundColor: '#8B4513',
  },
  
  waterIndicator: {
    backgroundColor: '#4A90E2',
  },
  
  incomplete: {
    backgroundColor: '#E0E0E0',
  },

  // AI Section Styles
  aiSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  aiCard: {
    marginBottom: 10,
  },
  
  aiAlertGood: {
    backgroundColor: '#D4EDDA',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: '#52B788',
  },
  
  aiAlertWarning: {
    backgroundColor: '#FFF3CD',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: '#F0C94A',
  },
  
  aiAlertIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  
  aiAlertContent: {
    flex: 1,
  },
  
  aiAlertTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 4,
  },
  
  aiAlertText: {
    fontSize: 13,
    color: '#2D5530',
    lineHeight: 18,
  },

  // Body Rhythm Styles
  rhythmSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  rhythmCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  rhythmTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 15,
    textAlign: 'center',
  },
  
  rhythmChart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 60,
    marginBottom: 15,
  },
  
  rhythmBar: {
    alignItems: 'center',
  },
  
  rhythmLevel: {
    width: 20,
    backgroundColor: '#52B788',
    borderRadius: 10,
    marginBottom: 8,
  },
  
  rhythmTime: {
    fontSize: 10,
    color: '#6B8F6E',
    fontWeight: '600',
  },
  
  rhythmInsight: {
    fontSize: 13,
    color: '#2D5530',
    textAlign: 'center',
    fontWeight: '500',
  },

  // Challenge Styles
  challengeSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  challengeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  challengeCard: {
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
    alignItems: 'center',
  },
  
  challengeIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  
  challengeTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 4,
    textAlign: 'center',
  },
  
  challengeProgress: {
    fontSize: 12,
    color: '#6B8F6E',
    marginBottom: 8,
  },
  
  challengeBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E8F5E8',
    borderRadius: 2,
    marginBottom: 8,
    overflow: 'hidden',
  },
  
  challengeFill: {
    height: '100%',
    backgroundColor: '#52B788',
    borderRadius: 2,
  },
  
  challengeReward: {
    fontSize: 11,
    color: '#F0C94A',
    fontWeight: '700',
  },

  // Reports Styles
  reportsSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  
  reportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#2D5530',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  reportContent: {
    flex: 1,
  },
  
  reportTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D5530',
    marginBottom: 4,
  },
  
  reportScore: {
    fontSize: 24,
    fontWeight: '800',
    color: '#52B788',
    marginBottom: 2,
  },
  
  reportSubtext: {
    fontSize: 14,
    color: '#6B8F6E',
    marginBottom: 2,
  },
  
  reportChange: {
    fontSize: 12,
    color: '#52B788',
    fontWeight: '600',
  },
  
  reportIcon: {
    fontSize: 24,
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