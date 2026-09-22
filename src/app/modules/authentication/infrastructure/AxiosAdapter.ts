import { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";
import type { IAuthenticationServices } from "../domain/AuthenticationServices";
import type { TokenModel } from "../domain/AuthenticationModel";

export const axiosAdapterRepository = (
  apiClient: AxiosInstance,
): IAuthenticationServices => {
  return {
    async login(email: string, password: string): Promise<string> {
      //   const response: AxiosResponse<TokenModel> = await apiClient.post("data/login-response.json", {email, password});
      try {
        if (email !== "papo123leon@gmail.com" || password !== "Papo1234567@")
          throw new Error("email o contraseña incorrectos");

        const response: AxiosResponse<TokenModel> = await apiClient.get(
          "/data/login-response.json",
        );

        return response.data.token;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.message);
        }

        if (error instanceof Error) {
          throw error;
        }

        throw new Error("Ocurrió un error inesperado al iniciar sesión");
      }
    },
  };
};
