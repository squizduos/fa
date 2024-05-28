import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { // ok
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    elevation: 9,
  },
  sidePanelView: { // ok
    paddingTop: 20,
  },
  sidePanel: { // ok
    width: 250,
    backgroundColor: '#f4f4f4',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    zIndex: -1,
    paddingTop: 10,
  },
  folderListContainer: {
    paddingVertical: 15,
  },
  folderName: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  feedListContainer: {
    // styles
  },
  feedTitle: {
    alignItems: 'center',
    // flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  feedTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  feedItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  feedItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedItemDescription: {
    fontSize: 14,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  formContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  feedItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: '#fff',
  },
  
  sideMenuContainer: {
    backgroundColor: '#f4f4f4',
    position: 'absolute',
    top: 70,
    bottom: 0,
    left: 0,
    zIndex: 1000, // To make sure the menu is above other content
    overflow: 'hidden', // Prevents menu content from being visible while menu is closed,
  },
  folder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 15,
    // You can add more styling for the folder items here
  },
  folderText: {
    fontSize: 16,
    // More folder text styling if needed
  },
  menuButton: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  htmlContentContainer: {
    flex: 1,
    borderRadius: 15,           // Rounded corners
    overflow: 'hidden',         // Ensures the corners look rounded
    borderWidth: 1,             // Adds border to the container
    borderColor: '#e1e1e1',     // Sets border color
    margin: 10,                 // Margin around the container
    backgroundColor: 'white',   // Background color for the container
    padding: 15,
  },

});
