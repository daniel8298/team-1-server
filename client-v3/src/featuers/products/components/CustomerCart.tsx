import { Tooltip, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import the ShoppingCart icon
import { useNavigate } from "react-router-dom";

// עגלת לקוח
const CustomerCart = () => {
    const navigate = useNavigate();
    return (
        <Tooltip title="View Cart" onClick={() => navigate("/cart")}>
            <IconButton>
                <ShoppingCartIcon />
            </IconButton>
        </Tooltip>
    );
};

export default CustomerCart;
