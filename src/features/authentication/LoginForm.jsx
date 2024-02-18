import { useState } from "react";
import { useLogin } from "./useLogin";

import LinkButton from "../../ui/LinkButton";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  function handleClick() {
    login({ email: "test.test@test.pl", password: "testtest" });
  }

  return (
    <>
      <div>
        <h3 className="text-4xl font-semibold">Hello!</h3>
        <label className="font-semibold text-primary-400">
          Log in to your account
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start gap-3"
      >
        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-primary-400">Email</label>
          <input
            className="w-full rounded-md border-1 border-main bg-primary-800 p-2 disabled:bg-primary-700"
            placeholder="you@example.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-primary-400">Password</label>
          <input
            className="flex w-full rounded-md border-1 border-main bg-primary-800 p-2 disabled:bg-primary-700"
            placeholder="*******"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <Button disabled={isLoading} className="w-full">
          {isLoading ? <SpinnerMini /> : "Log in"}
        </Button>
      </form>
      <div className="my-[-1rem] flex justify-center text-primary-500">OR</div>
      <Button disabled={isLoading} onClick={handleClick}>
        {isLoading ? <SpinnerMini /> : "TEST"}
      </Button>

      <span className="flex gap-1 text-sm">
        {`Don't have an account? `}
        <LinkButton to="signup">Sign Up Now</LinkButton>
      </span>
    </>
  );
}

export default LoginForm;
