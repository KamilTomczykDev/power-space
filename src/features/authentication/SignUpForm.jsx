// import { useState } from "react";
import { useSignup } from "./useSignup";
import { useForm } from "react-hook-form";

import LinkButton from "../../ui/LinkButton";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit({ username, email, password }) {
    signup({ username, email, password });
  }

  return (
    <>
      <div>
        <h3 className="text-4xl font-semibold">Welcome!</h3>
        <h4 className="font-semibold text-primary-400">Create new account</h4>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-3"
      >
        <FormRow label={"Username"} error={errors?.username?.message}>
          <input
            className="w-full rounded-md border-1 border-main bg-primary-800 p-2 disabled:bg-primary-700"
            placeholder="topLifter123"
            type="text"
            id="username"
            disabled={isLoading}
            {...register("username", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label={"Email"} error={errors?.email?.message}>
          <input
            className="w-full rounded-md border-1 border-main bg-primary-800 p-2 disabled:bg-primary-700"
            placeholder="you@example.com"
            type="email"
            id="email"
            disabled={isLoading}
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
            className="flex w-full rounded-md border-1 border-main bg-primary-800 p-2 disabled:bg-primary-700"
            placeholder="*******"
            type="password"
            id="password"
            disabled={isLoading}
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
            className="flex w-full rounded-md border-1 border-main bg-primary-800 p-2 disabled:bg-primary-700"
            placeholder="*******"
            type="password"
            id="passwordConfirm"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>
        <Button className="mt-5 w-full">
          {isLoading ? <SpinnerMini /> : "Sign up"}
        </Button>
      </form>
      <span className="flex gap-1 text-sm">
        {`Already registered? `}
        <LinkButton to="/login">Log in now</LinkButton>
      </span>
    </>
  );
}

export default SignupForm;
