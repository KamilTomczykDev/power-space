import { useState } from "react";
import { useLogin } from "./useLogin";

import LinkButton from "../../ui/LinkButton";
import SpinnerMini from "../../ui/SpinnerMini";

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

  return (
    <>
      <div>
        <h3 className="text-4xl font-semibold">Hello!</h3>
        <label className="font-semibold text-stone-400">
          Log in to your account
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start gap-3"
      >
        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-stone-400">Email</label>
          <input
            className="w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2 disabled:bg-stone-700"
            placeholder="you@example.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold text-stone-400">Password</label>
          <input
            className="flex w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2 disabled:bg-stone-700"
            placeholder="*******"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-md border-2 border-green-400 bg-green-900 p-2 hover:bg-green-800"
        >
          {isLoading ? <SpinnerMini /> : "Log in"}
        </button>
      </form>
      <span className="text-sm">
        {`Don't have an account? `}
        <LinkButton to="signup">Sign Up Now</LinkButton>
      </span>
    </>
  );
}

export default LoginForm;
