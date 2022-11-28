import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../Context/UserContext";
import { User, ContextState } from "../../Types/User";

export const UserProfile: React.FC<User> = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  password,
}) => {
  const { updateUser, removeUser } = useContext(Context) as ContextState;

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
