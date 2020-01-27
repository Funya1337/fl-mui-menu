import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/green";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import MockPage from "./components/Mock/MockPage";
import HomePage from "./components/Home/HomePage";
import Practice from "./components/Practice/Practice";
import PracticeTest from "./components/PracticeTest/PracticeTest";
import { MENU_STATE } from "./constants/menuState";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    type: "light"
  }
});

function App() {
  const [menuState, setMenuState] = React.useState(MENU_STATE.ALL_MENUS_CLOSED);

  const openFirstMenu = () => {
    setMenuState(MENU_STATE.FIRST_MENU_OPENED);
  };

  const openSecondMenu = () => {
    setMenuState(MENU_STATE.SECOND_MENU_OPENED);
  };

  const closeMenus = () => {
    setMenuState(MENU_STATE.ALL_MENUS_CLOSED);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/mock" component={MockPage} />
          <Route exact path="/practicetest">
            <Header
              menuState={menuState}
              openFirstMenu={openFirstMenu}
              closeMenus={closeMenus}
            />
            <PracticeTest
              menuState={menuState}
              openSecondMenu={openSecondMenu}
              closeMenus={closeMenus}
            />
          </Route>
          <Route path="/">
            <Header
              menuState={menuState}
              openFirstMenu={openFirstMenu}
              closeMenus={closeMenus}
            />
            <Route exact path="/practice" component={Practice} />
            <Route exact path="/" component={HomePage} />
            <Footer />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
