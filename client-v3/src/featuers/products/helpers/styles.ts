import { makeStyles } from "@mui/styles";
import { HeaderStyles } from "../interfaces/interface";
export const useStyles = makeStyles({
  card: {
    cursor: "pointer",
    position: "relative",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)", // Adjust the scale factor as needed
    },
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "16px", // Adjust the margin as needed
  },
});

export const useStylesCart = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    minWidth: 275,
    margin: "10px",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "10px",
  },
});

export const getHeaderStyles = ({ visible }: HeaderStyles) => ({
  position: "fixed",
  left: 0,
  right: 0,
  width: "100%",
  backgroundColor: "rgba(130, 130, 130, .5)",
  padding: "15px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  transition: "top 0.3s",
  top: visible ? "0" : "-100px", // Adjust the hiding and appearing height
  zIndex: 1000, // Add this line to set the z-index
});

export const useStylesComparison = makeStyles({
  tableContainer: {
    maxWidth: "800px",
    margin: "auto",
    marginTop: "20px",
  },
  carImage: {
    width: "70px",
    height: "auto",
    cursor: "pointer", // Add cursor pointer to indicate clickable
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    outline: "none",
    textAlign: "center",
  },
  enlargedImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
  },
});

export const backgroundStyle = {
  zIndex: 2,
  backgroundImage: `url(https://ychef.files.bbci.co.uk/1600x900/p0c99n41.webp)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: "center",
  padding: "20px",
  display: "flex",
};

export const textStyle = {
  position: "absolute",
  zIndex: 1,
  textAlign: "center",
  padding: "20px",
  display: "flex",
  marginTop: "60px",
  width: "100%",
  justifyContent: "space-evenly",
};
