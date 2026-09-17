import type { SubmitEvent } from "react";
import { useFormulary } from "../../../hooks/UseForm";
import { useStatusValue } from "../../../hooks/UseStatusValue";
import {
  type FormularyLoginData,
  initFormularyLoginData,
} from "../../../models/FormularyProps";

export function useSectionFormularyLogin() {
  const { value, toggleValue } = useStatusValue(false);
  const { values, handleChange, resetForm } = useFormulary<FormularyLoginData>(
    initFormularyLoginData,
  );

  const submitFormulary = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Datos capturados:", values);
    resetForm();
  };

  return {
    submitFormulary,
    handleChange,
    toggleValue,
    values,
    value,
  };
}
