import { useState, type ChangeEvent, type SubmitEvent } from "react";

export function useForm<T>(initialValues: T) {

    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setValues((prev) => ({
        ...prev,
        [name]: value,
        }));
    }

    const submitFormulary = (event: SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault(); 
        console.log("Datos capturados:", values);
        resetForm();
    };

    const resetForm = (): void => {
        setValues(initialValues);
    };

    return  {
        handleChange,
        submitFormulary,
        values
    }
}