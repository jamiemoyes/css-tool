import { createContext, useContext, useReducer, useState } from "react";

import { constants } from "../contants";

const { GLASSMORPHISM, NEUMORPHISM, GRADIENT, SHADOW, BASE_64_NOISE } =
  constants;

const GlobalContext = createContext({});

const initModes = [
  {
    id: GRADIENT,
    label: "Gradient",
    primary: "#A7FFC0",
    secondary: "#FF5252",
    angle: "90",
    styles: {
      background: "linear-gradient(90deg, #A7FFC0, #FF5252)",
    },
  },
  {
    id: GLASSMORPHISM,
    label: "Glassmorphism",
    blur: "4",
    opacity: 0.4,
    noise: true,
    styles: {
      background: `rgba( 255, 255, 255, 0.4 )`,
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: `blur( 4px )`,
      WebkitBackdropFilter: `blur( 4px )`,
      borderRadius: "1em",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
      backgroundImage: `url(data:image/png;base64,${BASE_64_NOISE})`,
    },
  },
  {
    id: NEUMORPHISM,
    label: "Neumorphism",
    blur: 51,
    radius: 1,
    styles: {
      borderRadius: "1em",
      background: "linear-gradient(145deg, #323232, #3b3b3b)",
      boxShadow: "26px 26px 51px #303030, -26px -26px 51px #404040",
    },
  },
  {
    id: SHADOW,
    label: "Shadow",
    blur: 15,
    spread: 5,
    color: "#000",
    x: 5,
    y: 5,
    styles: {
      boxShadow: "5px 5px 15px 5px #000000",
    },
  },
];

const modeReducer = (state, action) => {
  const activeMode = state.find(({ id }) => id === action.id);
  const activeIndex = state.findIndex(({ id }) => id === action.id);
  const addAtIndex = (newObject, mode) => {
    const newState = state.filter((s) => s.id !== mode);
    newState.splice(activeIndex, 0, newObject);
    return newState;
  };
  switch (action.id) {
    case GRADIENT: {
      const { primary, secondary, angle } = action.payload;
      activeMode.styles.background = `linear-gradient(${angle}deg, ${primary}, ${secondary})`;
      activeMode.primary = primary;
      activeMode.secondary = secondary;
      activeMode.angle = angle;
      return addAtIndex(activeMode, GRADIENT);
    }
    case GLASSMORPHISM: {
      const { blur, opacity, noise } = action.payload;
      activeMode.styles.backdropFilter = `blur(${blur}px)`;
      activeMode.blur = blur;
      activeMode.styles.background = `rgba( 255, 255, 255, ${opacity} )`;
      activeMode.opacity = opacity;
      console.log("---noise", noise);
      activeMode.noise = noise;
      activeMode.styles.backgroundImage = noise
        ? `url(data:image/png;base64,${BASE_64_NOISE})`
        : undefined;
      return addAtIndex(activeMode, GLASSMORPHISM);
    }
    case NEUMORPHISM: {
      const { blur, radius } = action.payload;
      activeMode.styles.borderRadius = `${radius}px`;
      activeMode.radius = radius;
      activeMode.styles.boxShadow = `26px 26px ${blur}px #303030, -26px -26px ${blur}px #404040`;
      activeMode.blur = blur;
      return addAtIndex(activeMode, NEUMORPHISM);
    }
    case SHADOW: {
      const { x, y, blur, spread, color } = action.payload;
      activeMode.x = x;
      activeMode.y = y;
      activeMode.blur = blur;
      activeMode.spread = spread;
      activeMode.color = color;
      activeMode.styles.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
      return addAtIndex(activeMode, SHADOW);
    }
    default:
      console.log("unimplemented");
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [modes, changeModeStyles] = useReducer(modeReducer, initModes);

  const [activeMode, setActiveMode] = useState(
    modes.find(({ id }) => id === GRADIENT)
  );

  const changeMode = (modeId) => {
    setActiveMode(modes.find(({ id }) => id === modeId));
  };

  return (
    <GlobalContext.Provider
      value={{ activeMode, changeMode, modes, changeModeStyles }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { AppProvider, useGlobalContext };
