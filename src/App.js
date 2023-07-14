import "./App.css";
import React, { useContext, useReducer } from "react";
import useColor, { ColorProvider } from "./context/ColorContext";
import colorReducer, { initialState } from "./reducers/colorReducers";
import { type } from "@testing-library/user-event/dist/type";
import ColorsContext from "./context/ColorContext";
// import colorsContext from "./context/ColorContext";
// import {us}

function App() {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  // console.log(Array.isArray(state.colorHistory)); // Output: true

  // console.log(state.colorHistory);

  const handleChange = () => {
    dispatch({
      type: "CHANGE_COLOR",
    });
  };
  return (
    <ColorProvider>
      <div className=" h-screen flex items-center flex-col justify-center gap-[30px]">
        <button
          onClick={handleChange}
          className="py-[10px] px-[20px]"
          style={{ backgroundColor: state.buttonColor }}
        >
          Button
        </button>
        <div className="flex items-center w-[70%] mx-auto flex-wrap">
          {Array.isArray(state.colorHistory) &&
            state.colorHistory.map((item, index) => (
              <div key={index}>
                <p className="" style={{ color: item }}>
                  {item},
                </p>
              </div>
            ))}
        </div>
      </div>
    </ColorProvider>
  );
}

export default App;
