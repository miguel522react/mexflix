import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home";
import { DataProvider } from "../context/context";
import Favorites from "../views/favorites";
import Layout from "../layout";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
