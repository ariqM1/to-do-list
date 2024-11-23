import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";

export const SignInPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log("this is the user", user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage, errorCode);
			});
	};

	return (
		<div>
			<h2>Sign In</h2>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSignUp}>Sign Up</button>
		</div>
	);
};

export default SignInPage;
