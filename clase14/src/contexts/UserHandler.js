import React, {createContext, useContext, useState} from 'react';

export const UserContext = createContext();

const UserHandler = ({children}) => {
  const [photo, updatePhoto] = useState('');
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');

  return (
    <UserContext.Provider
      value={{
        photo,
        updatePhoto,
        name,
        updateName,
        email,
        updateEmail,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserHandler;

export const useUserInformation = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de UserHandler');
  }

  return context;
};
