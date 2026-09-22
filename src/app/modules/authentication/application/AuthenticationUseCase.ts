import type { IAuthenticationServices } from "../domain/AuthenticationServices";

export const authenticationUseCase = (services: IAuthenticationServices) => {
  return {
    login: (email: string, password: string): Promise<string> => {
      return services.login(email, password);
    },
  };
};