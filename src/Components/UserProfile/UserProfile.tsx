import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../Context/UserContext";
import { UserContextState, User } from "../../Types/User";

export const UserProfile: React.FC<User> = ({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {
    const { updateUser, removeUser } = useContext(Context) as UserContextState;

    const editProfile = () => {
        updateUser(id);
    };

    const deleteProfile = () => {
        removeUser(id);
    };

    return (
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <h3>{email}</h3>
            <h3>{phoneNumber}</h3>
            <h3>{address}</h3>
        </div>
    );
};
