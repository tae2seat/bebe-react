import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function JoinForm({ handleJoin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleJoin)} className="flex flex-col p-12">
      <input
        type="text"
        {...register("name", {
          required: "이름은 필수 입력 사항입니다.",
        })}
        placeholder="이름"
      />
      {errors.name && <p className="text-xs">{errors.name.message}</p>}
      <input
        type="email"
        {...register("email", {
          required: "이메일은 필수 입력 사항입니다.",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "유효한 이메일 주소를 입력해주세요.",
          },
        })}
        placeholder="이메일"
      />
      {errors.email && <p className="text-xs">{errors.email.message}</p>}
      <input
        type="password"
        {...register("password", {
          required: "비밀번호는 필수 입력 사항입니다.",
          minLength: { value: 8, message: "8글자 이상 써주세요." },
        })}
        placeholder="비밀번호"
      />
      {errors.password && <p className="text-xs">{errors.password.message}</p>}
      <input
        type="date"
        {...register("birthDate", {
          required: "생년월일은 필수 입력 사항입니다.",
        })}
        placeholder="생년월일"
      />
      {errors.birthDate && (
        <p className="text-xs">{errors.birthDate.message}</p>
      )}
      <select
        className="p-4 outline-none border border-gray-300 my-1 text-gray-400"
        {...register("gender", {
          required: "성별은 필수 선택 사항입니다.",
        })}
      >
        <option value="">Select gender</option>
        <option value="남자">남자</option>
        <option value="여자">여자</option>
      </select>
      {errors.gender && <p className="text-xs">{errors.gender.message}</p>}
      <button>회원가입하기</button>
    </form>
  );
}

JoinForm.propTypes = {
  handleJoin: PropTypes.func.isRequired,
};
