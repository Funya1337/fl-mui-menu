import { makeStyles } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";
const rightBlockWidth = 320;

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white"
  },
  left: {
    zIndex: 10,
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -rightBlockWidth
  },
  leftShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  right: {
    width: rightBlockWidth,
    flexShrink: 0
  },
  rightPaper: {
    width: rightBlockWidth,
    backgroundColor: cssVars.rightBlockColor,
    border: "solid 2px rgba(0,0,0,0.12)"
  },
  card: {
    minHeight: 50,
    background: "#f9f9f9"
  },
  leftRow1: {
    paddingLeft: cssVars.gapM,
    display: "flex",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    boxShadow:
      "0px 1px 2px -1px rgba(0,0,0,0.2), 0px 2px 3px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)"
  },
  headerButtonFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  blueLineStyle: {
    display: "flex",
    flexDirection: "row",
    height: 35,
    backgroundColor: cssVars.lightBlue,
    alignItems: "center"
  },
  leftRow4: {
    paddingLeft: cssVars.gapM,
    paddingRight: cssVars.gapM,
    display: "flex",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    boxShadow:
      "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  leftRow4Mobile: {
    backgroundColor: "#f9f9f9",
    boxShadow:
      "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    height: 50
  },
  drawerDivAvatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  drawerDivMiniButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  drawerDivDownButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  fixDrawerContent: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
  },
  leftRow2Flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  leftRow2: {
    paddingLeft: cssVars.gapM,
    paddingRight: cssVars.gapM,
    marginBottom: cssVars.gapS,
    borderBottom: "1px solid lightgrey"
  },
  leftRow3: {
    paddingLeft: cssVars.gapM,
    paddingRight: cssVars.gapM,
    minHeight: "calc(100vh - 172px)"
  },
  paddingForDrawer: {
    padding: cssVars.gapM
  },
  rightRow1: {},
  rightRow2: {},
  rightRow3: {},
  circle: {
    height: 20,
    width: 20,
    backgroundColor: "green",
    borderRadius: "50%",
    color: "white",
    textAlign: "center"
  },
  mobileSelectStyle: {
    height: 36
  },
  mockPageFooter: {
    position: "fixed",
    width: "100%",
    left: 0,
    bottom: 0,
    minHeight: 50,
    backgroundColor: "#f9f9f9"
  },
  footerFixer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    whiteSpace: "nowrap"
  },
  circle1: {
    height: 20,
    width: 20,
    backgroundColor: "purple",
    borderRadius: "50%",
    color: "white",
    textAlign: "center"
  },
  list: {
    width: 250
  },
  paperDrawer: {
    backgroundColor: cssVars.rightBlockColor,
    border: "solid 2px rgba(0,0,0,0.12)"
  },
  fullList: {
    width: "auto"
  },
  circle3: {
    height: 20,
    width: 20,
    backgroundColor: "red",
    borderRadius: "50%",
    color: "white",
    textAlign: "center"
  },
  square: {
    height: 20,
    width: 20,
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    border: "solid 1px black"
  },
  levelRow: {
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between",
    "&>div": {
      height: 23,
      width: 39,
      backgroundColor: "white",
      textAlign: "center",
      border: "solid 1px black",
      cursor: "pointer",
      paddingTop: 3
    }
  },
  levelRow1: {
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between",
    "&>div": {
      height: 23,
      width: 30,
      backgroundColor: "white",
      textAlign: "center",
      border: "solid 1px black",
      cursor: "pointer",
      paddingTop: 3
    }
  },
  rightBlockArrow: {
    fontSize: 30,
    paddingTop: 4,
    backgroundColor: cssVars.rightBlockColor,
    border: "solid 2px rgba(0,0,0,0.12)",
    cursor: "pointer"
  },
  rightBlockArrowMobile: {
    fontSize: 30,
    position: "absolute",
    right: 0,
    backgroundColor: cssVars.rightBlockColor,
    border: "solid 2px rgba(0,0,0,0.12)",
    cursor: "pointer"
  },
  oval: {
    height: 20,
    width: 44,
    backgroundColor: "green",
    borderRadius: "40%",
    textAlign: "center",
    color: "white"
  },
  oval2: {
    height: 20,
    width: 44,
    backgroundColor: "red",
    borderRadius: "40%",
    textAlign: "center",
    color: "white"
  }
}));
