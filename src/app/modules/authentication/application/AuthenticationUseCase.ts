import { validatedField } from "../domain/AuthenticationModel";
import type { IAuthenticationServices } from "../domain/AuthenticationServices";

export const authenticationUseCase = (services: IAuthenticationServices) => {
  return {
    login: (email: string, password: string): Promise<string> => {
      validatedField(email, "email");
      validatedField(password, "password");
      return services.login(email, password);
    },
  };
};
