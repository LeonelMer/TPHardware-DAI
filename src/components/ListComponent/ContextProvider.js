import React, { createContext, useState } from 'react';

// Crear el contexto
export const context = createContext();

// Crear el proveedor del contexto
export const ContextProvider = (props) => {
  const [estado, setEstado] = useState(null);

  return (
    <context.Provider value={{ estado, setEstado }}>
      {props.children}
    </context.Provider>
  );
};
