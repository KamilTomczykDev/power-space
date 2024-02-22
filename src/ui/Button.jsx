import { cva } from "class-variance-authority";
import { cn } from "../utils/helpers";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md transition duration-300 border-1 px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "text-white hover:bg-secondary-500 border-secondary bg-secondary-900",
        secondary:
          "text-primary-400 bg-primary-800 hover:bg-primary-700 border-main",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Button({ className, variant, ...props }) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, className }))} />
  );
}

export default Button;
