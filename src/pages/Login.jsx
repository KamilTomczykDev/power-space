import LoginForm from "../features/authentication/LoginForm";
import LinkButton from "../ui/LinkButton";

import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full items-center justify-center border-stone-600 xl:border-r-2 2xl:w-[50%]">
        <div className="flex min-h-screen w-full max-w-[450px] flex-col justify-center gap-8 p-4 text-white xl:max-w-[550px] xl:p-[50px]">
          <img src={logo} className="w-[100px]" />
          <div>
            <h3 className="text-4xl font-semibold">Hello!</h3>
            <label className="font-semibold text-stone-400">
              Log in to your account
            </label>
          </div>
          <LoginForm />
          <span className="text-sm">
            {`Don't have an account? `}
            <LinkButton>Sign Up Now</LinkButton>
          </span>
        </div>
      </div>

      <div className="hidden min-h-screen w-full items-center justify-center bg-stone-950 p-10 text-center text-7xl font-semibold tracking-wide text-white xl:flex">
        <span className="max-w-[700px]">Keep calm and take an action.</span>
      </div>
    </div>
  );
}

export default Login;
