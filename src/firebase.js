// Init
import firebase from "firebase";

// Configuration
const firebaseConfig = {
	// Add the configuration of your firebase portal project
	// Also you can clone the portal of this website from git@github.com:yousufkalim/portfolio-portal
	// We have to fetch articles, portfolio and quotes from database in this case I have used firestore database from Portal project
	// You can also fetch your data from wherever you want, to do this go to controllers/dataFetch
	// For more info read the Readme.md
};

// Initializing App
firebase.initializeApp(firebaseConfig);

// Initializing Firestore Database
const database = firebase.firestore();

// Export
export default database;
