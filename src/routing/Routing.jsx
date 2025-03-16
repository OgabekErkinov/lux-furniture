import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const MainLayout = lazy(() => import("../pages/MainLayout"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog/:name" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
