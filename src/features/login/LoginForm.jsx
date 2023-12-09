import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <form onSubmit={"dupa"} className="flex w-full flex-col items-start gap-3">
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
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold text-stone-400">Password</label>
        <input
          className="flex w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2"
          placeholder="*******"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="w-full rounded-md border-2 border-green-400 bg-green-900 p-2 hover:bg-green-800">
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
