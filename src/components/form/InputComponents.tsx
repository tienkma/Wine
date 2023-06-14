import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


type InputProps = {
  label: Path<any>;
  register: UseFormRegister<Record<string, string>>;
  required: boolean;
};

export const Input = (props: InputProps) => {
  const { label, register, required } = props;

  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};
