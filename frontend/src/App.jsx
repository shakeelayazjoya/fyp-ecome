import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>header component </h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
      </Routes>
    </div>
  );
};

export default App;
