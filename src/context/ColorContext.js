import { createContext, useContext, useReducer } from "react";
import colorReducer, { initialState } from "../reducers/colorReducers";

const ColorsContext = createContext(initialState);
//not used
export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorsContext.Provider value={state}>{children}</ColorsContext.Provider>
  );
};

export default ColorsContext;

// export default useColor;
