import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/green";

import Header from "./components/Header";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: purple,
    type: "light"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
