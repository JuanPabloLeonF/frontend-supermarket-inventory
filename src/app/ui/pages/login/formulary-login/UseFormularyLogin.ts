import type { SubmitEvent } from "react";
import { useState } from "react";
import { useFormulary } from "../../../../share/hooks/UseFormulary";
import { useAuthentication } from "../../../../modules/authentication/presentation/hooks/UseAuthentication";
import { useNavigate } from "react-router";
import { PATH_ROUTES } from "../../../../share/utils/ConstantsApp";

export interface InitialStateFormularyLogin {
  email: string;
  password: string;
}

const initialStateFormularyLoginData: InitialStateFormularyLogin = {
  email: "",
  password: "",
};

export function useFormularyLogin() {
  const navigate = useNavigate();

  const { loginCredential, error, isLoading } = useAuthentication();

  const { handleChange, resetData, data } =
    useFormulary<InitialStateFormularyLogin>(initialStateFormularyLoginData);

  const [isActivePassword, setActivePassword] = useState<boolean>(false);

  const toggleActivePassword = () => {
    setActivePassword((prev) => !prev);
  };

  const submitFormulary = async (
    event: SubmitEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const isSuccess: boolean = await loginCredential(
      data.email,
      data.password
    );

    if (isSuccess) {
      resetData();
      navigate(PATH_ROUTES.DASHBOARD);
    }
  };

  return {
    toggleActivePassword,
    handleChange,
    submitFormulary,
    isActivePassword,
    data,
    error,
    isLoading,
  };
}