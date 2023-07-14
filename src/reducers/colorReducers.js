export const initialState = {
  buttonColor: "red",
  colorHistory: [],
};

// var separatedColors = colorHistory.join(',');

const colors = ["red", "green", "blue", "black", "orange"];

// Function to get random color
function getRandomColor(previousColor) {
  const availableColors =
    previousColor === "blue"
      ? colors.filter((color) => color !== "blue")
      : colors;
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  return availableColors[randomIndex];
}

const colorReducer = (state, action) => {
  //   const { type, payload } = action;

  switch (action.type) {
    case "CHANGE_COLOR":
      const { buttonColor, colorHistory } = state;
      let newColor;
      if (buttonColor === "blue") {
        newColor = "green";
      } else {
        newColor = getRandomColor(buttonColor);
      }
      // const newColor = getRandomColor(buttonColor);
      const joinedColors = colorHistory.concat(newColor).join(",");
      return {
        buttonColor: newColor,
        colorHistory: [...colorHistory, newColor],
      };
    default:
      return state;
  }
};

export default colorReducer;
