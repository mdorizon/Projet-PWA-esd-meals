import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // pages // sections
  page: {
    flex: 1,
    paddingTop: 96,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 64,
    gap: 48,
    flexDirection: 'column',
    backgroundColor: "#FFFFFF"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "auto",
    gap: 12,
  },
  navbar: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingLeft: 32,
    paddingRight: 32,
    height: 96,
    backgroundColor: "#ff5478"
  },
  logo: {
    width: 64,
    height: 64
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 32
  },
  mealsContainer: {
    display: "flex",
    alignItems: 'center',
    gap: 22
  },
  mealsListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 22,
  },
  mealsList: {
    width: '100%',
    paddingBottom: 64,
  },
  mealCard: {
    backgroundColor: "#ff5478",
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'center',
    width: '75%',
  },
  mealImage: {
    width: '100%',
    height: 100
  },
  singleMealImage: {
    width: '100%',
    height: 200
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
    marginBottom: 50,
  },
  singleMealContent: {
    display: "flex",
    gap: 22
  },
  // items
  navitem: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500
  },
  h1: {
    fontSize: 26,
    fontWeight: "600",
    color: "#2B2C28"
  },
  h2: {
    fontSize: 22,
    fontWeight: "500",
    color: "#2B2C28"
  },
  h3: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#2B2C28"
  },
  p: {
    fontSize: 16,
    color: "#2B2C28"
  },
  mealText: {
    fontSize: 16,
    padding: 16,
    color: "#fff"
  }
})

export default styles;