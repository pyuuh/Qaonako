import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#444",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 12,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  quickAddContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quickButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 2,
  },
  quickText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
