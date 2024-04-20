import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBBx0wWX4FXfLDBey7_5LvSUdsZCqgUJjc',
  authDomain: 'mealtime-b6656.firebaseapp.com',
  projectId: 'mealtime-b6656',
  storageBucket: 'mealtime-b6656.appspot.com',
  messagingSenderId: '429269586303',
  appId: '1:429269586303:web:37a126707e700489250a4a',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginRequest = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Extract the user from userCredential
    const user = userCredential.user;
    return user; // Return the user
  } catch (error) {
    console.error('Login failed:', error.code, error.message);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};
