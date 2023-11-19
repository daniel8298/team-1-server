import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useStylesSingIn } from "../helpers/styles";

const SignInPage = () => {
  const classes = useStylesSingIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isFormValid = email && !emailError && password && !passwordError;

  const handleSignIn = () => {
    // Email validation - check if it's a valid email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Password validation - check if it's at least 8 characters
    if (password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Implement sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // Proceed with sign-in if no errors
    if (!emailError && !passwordError) {
      // Implement sign-in logic here
      console.log("Signing in...");
    }
  };

  return (
    <div className={classes.container}>
      <AccountCircleIcon className={classes.icon} />
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
      <form className={classes.form}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={emailError}
          helperText={emailError && "Invalid email"}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={passwordError}
          helperText={passwordError && "Password must be at least 8 characters"}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignIn}
          className={classes.input}
          disabled={!isFormValid}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
