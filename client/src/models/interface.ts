export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserForm {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  role: string;
}