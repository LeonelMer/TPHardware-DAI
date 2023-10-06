import React, { useContext } from "react";

export const initialState = {
  precioTotal: 0,
  token: "",
  healthScore: 0,
  cantPlatos: 0,
  cantPlatosVeganos: 0,
  cantPlatosNoVeganos: 0,
  platos: []
};

export const ActionTypes = {
  setPrecioTotalPLUS: "SET_PRECIOTOTALPLUS",
  setPrecioTotalMINUS: "SET_PRECIOTOTALMINUS",
  setToken: "SET_TOKEN",
  setCantPlatosPLUS: "SET_CANTPLATOSPLUS",
  setCantPlatosMINUS: "SET_CANTPLATOSMINUS",
  setCantPlatosVeganosPLUS: "SET_CANTPLATOSVEGANOSPLUS",
  setCantPlatosVeganosMINUS: "SET_CANTPLATOSVEGANOSMINUS",
  setCantPlatosNoVeganosPLUS: "SET_CANTPLATOSNOVEGANOSPLUS",
  setCantPlatosNoVeganosMINUS: "SET_CANTPLATOSNOVEGANOSMINUS",
  setHealthScorePLUS: "SET_HEALTHSCOREPLUS",
  setHealthScoreMINUS: "SET_HEALTHSCOREMINUS",
  setPlatosPLUS: "SET_PLATOSPLUS",
  setPlatosMINUS: "SET_PLATOSMINUS"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setPrecioTotalPLUS: {
      return { ...state, precioTotal: state.precioTotal + action.newValue};
    }
    case ActionTypes.setPrecioTotalMINUS: {
      return { ...state, precioTotal: state.precioTotal - action.newValue};
    }
    case ActionTypes.setToken: {
      return { ...state, token: action.newValue };
    }
    case ActionTypes.setCantPlatosPLUS: {
      return { ...state, cantPlatos: state.cantPlatos + 1 };
    }
    case ActionTypes.setCantPlatosMINUS: {
      return { ...state, cantPlatos: state.cantPlatos - 1 };
    }
    case ActionTypes.setCantPlatosVeganosPLUS: {
      return { ...state, cantPlatosVeganos: state.cantPlatosVeganos + 1 };
    }
    case ActionTypes.setCantPlatosVeganosMINUS: {
      return { ...state, cantPlatosVeganos: state.cantPlatosVeganos - 1 };
    }
    case ActionTypes.setCantPlatosNoVeganosPLUS: {
      return { ...state, cantPlatosNoVeganos: state.cantPlatosNoVeganos + 1 };
    }
    case ActionTypes.setCantPlatosNoVeganosMINUS: {
      return { ...state, cantPlatosNoVeganos: state.cantPlatosNoVeganos - 1 };
    }
    case ActionTypes.setPlatosPLUS: {
      return { ...state, platos: [...state.platos, action.newValue]};
    }
    case ActionTypes.setPlatosMINUS: {
      const nuevosPlatos = state.platos.filter(plato => plato.title !== action.newValue);
      return { ...state, platos: nuevosPlatos };
    }
    case ActionTypes.setHealthScorePLUS: {
      let platos = 0
      if(state.cantPlatos>1)
      {
        platos = state.cantPlatos-1
      }
      else 
      {
        platos = state.cantPlatos
      }
      return { ...state, healthScore:  (state.healthScore * platos / state.cantPlatos) + (action.newValue / state.cantPlatos)};
    }
    case ActionTypes.setHealthScoreMINUS: {
      if(state.cantPlatos==0)
      {
        return {... state, healthScore: 0};
      }
      else
      {
      return { ...state, healthScore: ((state.healthScore * (state.cantPlatos + 1) - (action.newValue ))/state.cantPlatos)};
      }
    }
    default: {
      return state;
    }
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(initialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      {children}
    </Context.Provider>
  );
}

export const useContextState = () => useContext(Context);
