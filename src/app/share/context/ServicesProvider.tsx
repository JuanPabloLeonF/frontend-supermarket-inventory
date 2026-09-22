import { createContext, useContext, type ReactNode } from "react";
import { apiClient } from "../configurations/ConfigurationAxios";
import { authenticationUseCase } from "../../modules/authentication/application/AuthenticationUseCase";
import { axiosAdapterRepository } from "../../modules/authentication/infrastructure/AxiosAdapter";
import type { IAuthenticationServices } from "../../modules/authentication/domain/AuthenticationServices";


interface ServicesContainer {
  authenticationServices: IAuthenticationServices
}

const ServicesContext = createContext<ServicesContainer | null>(null);

export const ServicesProvider = ({ children }: { children: ReactNode }) => {

    const services: ServicesContainer = {
      authenticationServices: authenticationUseCase(axiosAdapterRepository(apiClient))
    }

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServicesContainer => {
  const context = useContext(ServicesContext);
  
  if (!context) {
    throw new Error("useServices debe ser utilizado dentro de un ServicesProvider");
  }
  
  return context;
};