import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./pages/MainLayout";
import Loading from "./components/Loading";

// Sahifalarni lazy load qilish
const Home = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog/:name" element={<CatalogPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
