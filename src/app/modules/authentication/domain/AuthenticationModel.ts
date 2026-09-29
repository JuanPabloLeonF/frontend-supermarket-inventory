export interface LoginModel {
  email: string;
  password: string;
}

export interface TokenModel {
  token: string;
}

export function validatedField(field: string | undefined | null, nameField: string): void {
  if (!field || field.trim().length === 0) {
    throw new Error(`El campo ${nameField} no puede estar vacío.`);
  }
}