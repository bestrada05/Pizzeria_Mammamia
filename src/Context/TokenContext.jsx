import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [envio, setEnvio] = useState(false);
  const [error, setError] = useState("");
  const [validacion, setValidacion] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <TokenContext.Provider
      value={{
        mail,
        setMail,
        contrasena,
        setContrasena,
        envio,
        setEnvio,
        error,
        setError,
        validacion,
        setValidacion,
        checkboxChecked,
        setCheckboxChecked,
        user,
        setUser,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
