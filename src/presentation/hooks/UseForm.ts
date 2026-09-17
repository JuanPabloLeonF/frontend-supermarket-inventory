import { useState, type ChangeEvent } from "react";

export function useFormulary<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = (): void => {
    setValues(initialValues);
  };

  return {
    handleChange,
    resetForm,
    values,
  };
}
