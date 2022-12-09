import React from "react";
import { User, UserContextState } from "../Types/User";
import { useState } from "react";

interface ProviderProps {
    children: React.ReactNode;
}

export const Context = React.createContext<UserContextState | null>(null);

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    const [currentTab, setCurrentTab] = useState<string>('1');

    const addUser = (user: User) => {
        const newUser: User = {
            userId: Math.floor(Math.random() * 1000) + 1,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            password: user.password,
        };

        setUsers([...users, newUser]);
        console.log(
            "Created New User: " +
            newUser.address +
            newUser.firstName +
            newUser.phoneNumber
        );
    };

    const updateUser = (id: number) => {
        users.filter((user: User) => {
            if (user.userId === id) {
                setUsers([...users]);
            }
        });
    };

    const removeUser = (id: number) => {
        setUsers(users.filter((user: User) => user.userId !== id));
    };

    const updateAccountTab = () => {
        if (currentTab === '1') {
            setCurrentTab('2');
        } else { setCurrentTab('1') }
    }

    return (
        <Context.Provider value={{ users, addUser, updateUser, removeUser, currentTab, updateAccountTab }}>
            {children}
        </Context.Provider>
    );
};
