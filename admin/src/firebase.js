
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBEkBu25TDRrfHC-oBYIDthYTEcRB74B-s",
	authDomain: "netflix-e6a38.firebaseapp.com",
	projectId: "netflix-e6a38",
	storageBucket: "netflix-e6a38.appspot.com",
	messagingSenderId: "175311658437",
	appId: "1:175311658437:web:e3ba344193935dbadc7fac",
	measurementId: "G-EE664QNS83"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
