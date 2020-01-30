import { makeStyles } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";
import { red } from "@material-ui/core/colors";

const drawerWidth = 240;
export const useStyles = makeStyles(theme => ({
  root1: {
    padding: theme.spacing(3, 2)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto"
    }
  },
  drawerArrowButton: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 3,
    marginTop: 6,
    marginBottom: 6,
    border: "solid 2px rgba(0,0,0,0.12)",
    cursor: "pointer",
    position: "fixed",
    width: 36,
    backgroundColor: "white",
    zIndex: 1
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: cssVars.darkGrey,
    padding: 10
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    border: "2px solid",
    cursor: "pointer"
  },
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    top: "inherit"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end"
  },
  content: {
    backgroundColor: cssVars.white,
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    [theme.breakpoints.up("lg")]: {
      marginLeft: 0
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  paperCustomButton: {
    background: "none",
    fontSize: 15,
    paddingRight: 25,
    fontFamily: "montserrat",
    color: "black",
    textDecoration: "none",
    transition: "0.2s",
    "&:hover": {
      color: "#0ad0f4"
    }
  },
  textOnImg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    whiteSpace: "nowrap",
    transform: "translate(-50%, -50%)"
  },
  imgClass: {
    marginTop: 26,
    position: "relative",
    textAlign: "center",
    color: "white"
  },
  textOnImgTop: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 24,
    fontWeight: "bold"
  },
  textOnImgBottomRight: {
    position: "absolute",
    bottom: "20%",
    left: "65%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.2vw"
  },
  textOnImgBottomRight1: {
    width: "100%",
    position: "absolute",
    bottom: "10%",
    left: "65%",
    transform: "translate(-50%, -50%)",
    fontSize: "1vw"
  },
  textOnImgBottomLeft: {
    position: "absolute",
    bottom: "20%",
    left: "35%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.2vw"
  },
  textOnImgBottomLeft1: {
    position: "absolute",
    bottom: "10%",
    left: "35%",
    transform: "translate(-50%, -50%)",
    fontSize: "1vw"
  },
  card: {},
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardHeader: {
    margin: "auto",
    width: "fit-content",
    "&>div>span": {
      fontWeight: "bold",
      fontSize: "large"
    }
  },
  circleContainer: {
    width: "100%",
    marginTop: 20
  },
  circle: {
    border: `5px solid ${cssVars.darkGrey}`,
    borderRadius: "50%",
    minHeight: 130,
    minWidth: 130,
    maxWidth: 170,
    maxHeight: 170,
    width: "13vw",
    height: "13vw",
    margin: "auto"
  },
  circleText: {
    position: "relative",
    marginTop: -120,
    marginBottom: 120,
    textAlign: "center",
    "&>div:first-child": {
      fontSize: 30,
      [theme.breakpoints.down("sm")]: {
        fontSize: 24
      }
    },
    "&>div:last-child": {
      fontSize: 15
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: -100
    }
  },
  cardGrid: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    backgroundColor: cssVars.white
  },
  cardGridGrey: {
    backgroundColor: cssVars.darkDarkGrey
  }
}));
