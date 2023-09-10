import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { AnimatePresence } from 'framer-motion'


function App() {
  return (
    <>
      <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/*" element = {<UserRoutes/>} />
          <Route path="/admin/*" element  = {<AdminRoutes />} />
        </Routes>
      </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
