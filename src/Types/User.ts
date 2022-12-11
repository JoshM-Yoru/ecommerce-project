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
    logged: boolean;
    currentUser: User;
    updateCurrentUser: (user: User) => void;
    loginUser: (user: User) => void;
    logoutUser: () => void;
    currentTab: string;
    addUser: (user: User) => void;
    updateUser: (id: number) => void;
    removeUser: (id: number) => void;
    updateAccountTab: () => void;
}

