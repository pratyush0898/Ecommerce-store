import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase/firebase.js";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Redirect or handle after successful sign-in here
      console.log("Signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email and password sign-in here
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login__googleButton-wapper">
            <p>or</p>
            <button className="login__googleButton" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
