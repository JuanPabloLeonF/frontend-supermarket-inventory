// Roles según la estructura de tu backend
export type Roles = 'ADMIN' | 'EMPLOYEE';

export interface UserModel {
  id: string; 
  name: string;
  lastName: string;
  email: string;
  password?: string;
  rol: Roles;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeModel {
  id: string;
  userModel: UserModel;
  nationalId: string;
  phone: string;
  address: string;
  urlImg?: string;
  position: string;
  salary: number;
  hireDate: string;
}