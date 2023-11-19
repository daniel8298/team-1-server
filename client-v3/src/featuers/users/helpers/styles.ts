import { makeStyles } from "@mui/styles";

export const useStylesSingIn = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  icon: {
    fontSize: "64px",
    marginBottom: "16px",
  },
  form: {
    width: "300px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    // Styles for input fields
  },
  divider: {
    width: "100%",
    marginBottom: "20px",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: "0.8em",
    textAlign: "left",
  },
});

export const useStylesRegistration = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px", // New property to add space between child elements
  },
  icon: {
    fontSize: "64px",
    marginBottom: "16px",
  },
  form: {
    width: "300px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Add space between form fields
  },
});
