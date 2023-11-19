import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useStylesComparison } from "../helpers/styles";
import { addToCart } from "../helpers/actionsCart";
import { carsInCompare } from "../helpers/actionsCompare";

const CarComparison = () => {
  const classes = useStylesComparison();
  const cars = carsInCompare();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Horsepower</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Wheel Width</TableCell>
              <TableCell>Transmission</TableCell>
              <TableCell>Engine</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Add to Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car._id}>
                <TableCell>
                  <img
                    alt={car.model}
                    src={car.imageUrl}
                    className={classes.carImage}
                    onClick={() => handleImageClick(car.imageUrl)}
                  />
                </TableCell>
                <TableCell>{car.specs.horsepower}</TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell>{car.wheelSize}</TableCell>
                <TableCell>{car.specs.transmission}</TableCell>
                <TableCell>{car.specs.engine}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>
                  <IconButton>
                    <AddShoppingCartIcon onClick={() => addToCart(car)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modalContainer}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Enlarged Car"
                className={classes.enlargedImage}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default CarComparison;
