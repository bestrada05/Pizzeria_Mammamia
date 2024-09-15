import { createContext, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        setPizza,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
