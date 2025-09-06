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

 
//feature

coreFeaturesSection: {
  marginBottom: 25,
  paddingHorizontal: 20,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: '700',
  color: '#2D5530',
  marginBottom: 15,
},

featureScroll: {
  paddingHorizontal: 10,
},

featureCard: {
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: 16,
  width: width * 0.8,  
  alignSelf: "center",  
  marginHorizontal: 10,
  marginBottom: 12,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  elevation: 3,
  alignItems: "center",
  justifyContent: "center",
},

featureIcon: {
  fontSize: 40,
  marginBottom: 12,
  textAlign: "center",
},
featureCardTitle: {
  fontSize: 18,
  fontWeight: "700",
  color: "#2D5530",
  marginBottom: 8,
  textAlign: "center",
},
featureCardText: {
  fontSize: 14,
  color: "#555",
  textAlign: "center",
  marginBottom: 16,
},
featureButton: {
  backgroundColor: "#52B788",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 20,
  alignSelf: "center",
},
featureButtonText: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 14,
  textAlign: "center",
},

});