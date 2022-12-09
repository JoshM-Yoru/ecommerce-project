export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;
}

export interface UserContextState {
    users: User[];
    currentTab: string;
    addUser: (user: User) => void;
    updateUser: (id: number) => void;
    removeUser: (id: number) => void;
    updateAccountTab: () => void;
}

