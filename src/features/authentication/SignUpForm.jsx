import { useState } from "react";
import { useSignup } from "./useSignup";

import LinkButton from "../../ui/LinkButton";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const { signup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !email ||
      !password ||
      !confirmedPassword ||
      password !== confirmedPassword
    )
      return;

    signup({ email, password });
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
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start gap-3"
      >
        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-stone-400">Email</label>
          <input
            className="w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="you@example.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-stone-400">Password</label>
          <input
            className="flex w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="*******"
            type="password"
            id="confirmedPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-stone-400">
            Confirm Password
          </label>
          <input
            className="flex w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
            placeholder="*******"
            type="password"
            id="password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <button className="w-full rounded-md border-2 border-green-400 bg-green-900 p-2 hover:bg-green-800">
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

export default LoginForm;
