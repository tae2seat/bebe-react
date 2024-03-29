import LoginForm from "../components/form/LoginForm";
import { authApi } from "../api/axios/index";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await authApi.post("/login", data);
      const { isAdmin, userRole } = response.data;
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("isAdmin", isAdmin);
      localStorage.setItem("userRole", userRole);
      if (response.status === 401) {
        alert("비밀번호가 정확하지 않습니다. 로그인을 다시 시도해주세요.");
      }
      dispatch(login({ isAdmin: true, userRole: "admin" }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-[300px] mx-auto">
      <h1 className="text-xl font-semibold my-16">Login</h1>
      <LoginForm handleLogin={handleLogin} />
      <Link to="/register" className="underline">
        회원가입하기
      </Link>
    </section>
  );
}
