import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function LoginForm({ handleLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <input
        type="email"
        onSubmit={handleSubmit(handleLogin)}
        {...register("email", {
          required: "이메일은 필수 입력 사항입니다.",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "유효한 이메일 주소를 입력해주세요.",
          },
        })}
        placeholder="이메일"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        type="password"
        {...register("password", {
          required: "비밀번호는 필수 입력 사항입니다.",
          minLength: { value: 8, message: "8글자 이상 써주세요." },
        })}
        placeholder="비밀번호"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button>로그인하기</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
