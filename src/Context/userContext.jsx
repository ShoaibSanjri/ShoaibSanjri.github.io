import React, { createContext } from "react";
import { useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    
    
    return (
      <UserContext.Provider value={{ theme, setTheme }}>
        {children}
      </UserContext.Provider>
    );
};
  

export default UserContext