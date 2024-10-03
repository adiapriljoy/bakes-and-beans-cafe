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

export interface IUserData {
  username: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAddress: string;
  role: string;
  status: string;
}

// FORM INTERFACES
export interface IUserForm {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  role: string;
}

export interface ILoginForm {
  username: string;
  password: string;
}