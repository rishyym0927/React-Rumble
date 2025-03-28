import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </ThemeProvider>
  );
}
