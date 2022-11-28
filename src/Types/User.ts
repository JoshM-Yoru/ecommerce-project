export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  password: string;
}

export interface ContextState {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: number) => void;
  removeUser: (id: number) => void;
}
