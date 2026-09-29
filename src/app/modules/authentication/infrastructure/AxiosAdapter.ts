import { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";
import type { IAuthenticationServices } from "../domain/AuthenticationServices";
import type { TokenModel } from "../domain/AuthenticationModel";

export const axiosAdapterRepository = (
  apiClient: AxiosInstance,
): IAuthenticationServices => {
  return {
    async login(email: string, password: string): Promise<string> {
      try {
        if (email !== "papo123leon@gmail.com" || password !== "Papo1234567@") {
          throw new Error("Email o contraseña incorrectos.");
        }

        const response: AxiosResponse<TokenModel> = await apiClient.get(
          "data/login-response.json",
        );
        
        return response.data.token;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            switch (error.response.status) {
              case 400:
                throw new Error("Datos de inicio de sesión inválidos.");
              case 401:
                throw new Error("Credenciales incorrectas.");
              case 404:
                throw new Error(
                  "El servicio de autenticación no está disponible temporalmente.",
                );
              case 500:
                throw new Error(
                  "Error interno en el servidor. Inténtalo más tarde.",
                );
              default:
                throw new Error(
                  "Ocurrió un problema al procesar la solicitud.",
                );
            }
          }

          if (error.request) {
            throw new Error(
              "No se pudo conectar con el servidor. Revisa tu conexión a internet.",
            );
          }
        }

        if (error instanceof Error) {
          throw error;
        }

        throw new Error("Ocurrió un error inesperado al iniciar sesión.");
      }
    },
  };
};
