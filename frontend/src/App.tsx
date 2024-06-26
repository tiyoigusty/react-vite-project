import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { api } from "./libs/api";
import { FollowPage } from "./pages/follow-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import { HomePage } from "./pages/home-page";
import LoginPage from "./pages/login-page";
import { ProfilePage } from "./pages/profile-page";
import RegisterPage from "./pages/register-page";
import { ReplyPage } from "./pages/reply-page";
import ResetPasswordPage from "./pages/reset-password-page";
import { SearchPage } from "./pages/search-page";
import WelcomePage from "./pages/welcome-page";
import { SET_USER } from "./redux/slices/auth";
import { RootState } from "./redux/store";
import { EditProfile } from "./features/right-bar/components/edit-profile";

function App() {
  const currentUser = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const PrivateRoute = () => {
    if(!isLoading) {
      if (currentUser.email) return <Outlet />;
      return <Navigate to={"/auth/login"} />;
    }
  };

  async function authCheck() {
    try {
      const token = localStorage.token;
      const response = await api.post("/auth/check", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(SET_USER(response.data))
      setIsLoading(false)
    } catch (error) {
      localStorage.removeItem("token");
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.token;

    if (token) authCheck();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/threads/:id" element={<ReplyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/follow" element={<FollowPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
