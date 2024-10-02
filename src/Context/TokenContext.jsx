import { createContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [envio, setEnvio] = useState(false);
  const [error, setError] = useState("");
  const [validacion, setValidacion] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Current user:", user); // Verifica el valor de user
  }, [user]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  //ComponenteLogin
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data?.token) {
      localStorage.setItem("token", data.token);
      const user = { email: data.email, token: data.token };
      setUser(user);
      Toast.fire({
        icon: "success",
        title: "Login exitoso",
        color: "white",
        background: "#212529",
      });
    } else {
      Toast.fire({ icon: "error", title: data.error });
    }
    setEmail("");
    setPassword("");
  }

  //ComponenteRegistro
  async function validarInput(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data?.token) {
      localStorage.setItem("token", data.token);
      const user = { email: data.email };
      setUser(user);
      Toast.fire({
        icon: "success",
        title: "Registro Exitoso",
        color: "white",
        background: "#212529",
      });
    } else {
      Toast.fire({ icon: "error", title: data.error });
    }
    setEmail("");
    setPassword("");
    setValidacion("");
  }

  //ComponenteProfile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:4000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);

  return (
    <TokenContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        envio,
        setEnvio,
        error,
        setError,
        validacion,
        setValidacion,
        user,
        setUser,
        handleSubmit,
        validarInput,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
