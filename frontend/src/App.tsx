import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { useState } from "react";
import { Test } from "./pages/test";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const PrivateRoute = () => {
    if (isLogin) return <Outlet />;
    return <Navigate to={"/login"} />;
  };

  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
