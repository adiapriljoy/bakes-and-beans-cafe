export interface IUser {
  id: number;
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

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  suffix?: string;
  dateOfBirth: string;
  gender: string;
  emailAddress: string;
  mobileNumber: string;
  nationality: string;
  civilStatus: string;
  department: string;
  position: string;
  employmentStatus: string;
  dateHired: string;
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

export interface ISelectOption {
  id: number;
  label: string;
}