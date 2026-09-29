import { useState } from "react";
import { useServices } from "../../../../share/context/ServicesProvider";
import { login } from "../slices/AuthenticationSlice";
import { useAppDispatch } from "../../../../share/context/Store";

export function useAuthentication() {
  const services = useServices();
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginCredential = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    setError("");
    setIsLoading(true);

    try {
      const token: string = await services.authenticationServices.login(
        email,
        password
      );
      dispatch(login(token));
      return true;
    } catch (exception: unknown) {
      if (exception instanceof Error) {
        setError(exception.message);
      } else {
        setError("Ocurrió un error inesperado al iniciar sesión.");
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginCredential,
    error,
    isLoading,
  };
}