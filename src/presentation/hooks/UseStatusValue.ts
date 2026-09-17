import { useState } from "react";

export function useStatusValue(initialValue: boolean) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = (): void => {
    setValue((prev) => !prev);
  };

  return {
    toggleValue,
    value
  };
}
