// import { useState } from "react";
import { useSignup } from "./useSignup";
import { useForm } from "react-hook-form";

import LinkButton from "../../ui/LinkButton";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRow from "../../ui/FormRow";

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  console.log(register, errors);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmedPassword, setConfirmedPassword] = useState("");

  const { signup, isLoading } = useSignup();
  console.log(signup);

  function onSubmit() {
    //   if (
    //     !email ||
    //     !password ||
    //     !confirmedPassword ||
    //     password !== confirmedPassword
    //   )
    //     return;
    //   signup({ email, password });
  }

  return (
    <>
      <div>
        <h3 className="text-4xl font-semibold">Welcome!</h3>
        <label className="font-semibold text-stone-400">
          Create new account
        </label>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-3"
      >
        <FormRow label={"Username"} error={errors?.username?.message}>
          <input
            className="w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="topLifter123"
            type="text"
            id="username"
            {...register("username", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label={"Email"} error={errors?.email?.message}>
          <input
            className="w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="you@example.com"
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide a valid email",
              },
            })}
          />
        </FormRow>

        <FormRow label={"Password"} error={errors?.password?.message}>
          <input
            className="flex w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="*******"
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Min. 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label={"Confirm password"}
          error={errors?.passwordConfirm?.message}
        >
          <input
            className="flex w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="*******"
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>
        <button className="mt-5 w-full rounded-md border-2 border-green-400 bg-green-900 p-2 hover:bg-green-800">
          {isLoading ? <SpinnerMini /> : "Sign up"}
        </button>
      </form>
      <span className="text-sm">
        {`Already registered? `}
        <LinkButton to="/login">Log in now</LinkButton>
      </span>
    </>
  );
}

export default SignupForm;
