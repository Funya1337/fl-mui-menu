import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/green";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import MockPage from "./components/Mock/MockPage";
import HomePage from "./components/Home/HomePage";
import Practice from "./components/Practice/Practice";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    type: "light"
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/mock" component={MockPage} />
          <Route exact path="/practice" component={Practice} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
