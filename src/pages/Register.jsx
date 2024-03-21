import { useNavigate } from "react-router-dom";
import { authApi } from "../api/axios";
import JoinForm from "../components/form/JoinForm";

export default function Register() {
  const navigate = useNavigate();

  const handleJoin = async (data) => {
    try {
      const response = await authApi.post("/join", data);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mx-auto w-[400px] text-center">
      <h1 className="text-2xl mt-20 font-semibold">회원가입하기</h1>
      <JoinForm handleJoin={handleJoin} />
    </section>
  );
}
