import { useState, type ChangeEvent } from "react";

export function useFormulary<T>(initialStateFormulary: T) {
  const [data, setData] = useState<T>(initialStateFormulary);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetData = (): void => {
    setData(initialStateFormulary);
  };

  return {
    handleChange,
    resetData,
    data,
  };
}
