import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/login");
      toast.success("Account created successfully!");
    },
    onError: () =>
      toast.error("Unfortunatly, We couldn't create your account."),
  });

  return { signup, isLoading };
}
