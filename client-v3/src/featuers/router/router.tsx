import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../users/pages/SignInPage";
import CategoriesPage from "../products/pages/CategoriesPage";
import CartPage from "../products/pages/CartPage";
import CarsDetailsPage from "../products/pages/CarsDetailsPage";
import CompareCarsPage from "../products/pages/CompareCarsPage";
import PurchasePage from "../users/pages/PurchasePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/:category" element={<CategoriesPage />} />
      <Route path="/:category/compare" element={<CategoriesPage />} />
      <Route path="/model/:model" element={<CarsDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/compare" element={<CompareCarsPage />} />
      {/* <Route path="/map" element={<MapPage />} /> */}
      <Route path="/registration" element={<PurchasePage />} />
    </Routes>
  );
};

export default Router;
