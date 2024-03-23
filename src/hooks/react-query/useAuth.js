import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/authService";

export const useLoginMutation = () => {
  return useMutation((credentials) =>
    login(credentials.email, credentials.password)
  );
};
