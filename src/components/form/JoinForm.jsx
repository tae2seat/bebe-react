import { useForm } from "react-hook-form";

export default function JoinForm({ handleJoin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form>
      <input type="name" />
    </form>
  );
}
