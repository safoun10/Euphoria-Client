import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		})
	};

	const GoogleProvider = new GoogleAuthProvider();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		loginUser,
		logout,
		loading,
		GoogleProvider,
		updateUserProfile
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
