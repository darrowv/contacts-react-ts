import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { AnimatePresence } from "framer-motion";
import "./app.scss";

const App = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/contacts"
          element={!token ? <Navigate to="/login" /> : <Contacts />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
