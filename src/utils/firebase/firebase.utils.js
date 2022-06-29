// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC_LFtZDB2NvGPUvAbtn2rqSAkYadK-MFc',
	authDomain: 'crown-clothing-db-5f1af.firebaseapp.com',
	projectId: 'crown-clothing-db-5f1af',
	storageBucket: 'crown-clothing-db-5f1af.appspot.com',
	messagingSenderId: '130865784136',
	appId: '1:130865784136:web:86f0d0837732a6e536ff7d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select-account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
