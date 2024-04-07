import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export default function Theme() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div
        style={{
          minWidth: 400,
          minHeight: 400,
          background: theme === "light" ? "lightblue" : "darkblue",
        }}
      >
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

function Header(props) {
  return <Title />;
}

function Title(props) {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Click
      </button>
    </div>
  );
}
