import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from './pages/MainLayout'
import CatalogPage from "./pages/CatalogPage";



function App() {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<MainLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path="/catalog/:name" element = {<CatalogPage/>}/>
      </Route>
    </Routes> 
    </>
  );
}

export default App;
