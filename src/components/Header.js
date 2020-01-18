import React from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../public/logo.svg";
import arrow from "../public/arrow.svg";
import languageIcon from "../public/languageicon.png";
import cssVars from "../constants/cssVars";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "white"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  img: {
    height: "30px",
    width: "50%",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  arrow: {
    height: 15
  },
  langIcon: {
    height: 30
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  butpudding: {
    paddingRight: "50px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  search: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    },
    position: "relative",
    border: "solid 2px",
    borderColor: cssVars.darkGrey,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    color: cssVars.darkGrey,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 250,
      "&:focus": {
        width: 300
      }
    }
  },
  currentLanguage: {
    textTransform: "none",
    color: cssVars.grey,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      marginLeft: 4
    }
  },
  mybtn: {
    whiteSpace: "nowrap",
    color: cssVars.grey,
    fontFamily: "helvetica",
    textDecoration: "none",
    textDecoration: "none",
    transition: "0.2s",
    "&:hover": {
      color: "#0ad0f4"
    }
  },
  loginBtn: {
    whiteSpace: "nowrap",
    border: "1px solid transparent",
    background: "none",
    padding: "10px 30px",
    fontSize: ".875rem",
    borderRadius: ".25rem",
    borderColor: cssVars.darkGrey,
    color: cssVars.grey,
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#0ad0f4",
      color: "white"
    },
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  loginBtnpadding: {
    paddingLeft: 15
  },
  signupBtn: {
    whiteSpace: "nowrap",
    border: "1px solid transparent",
    background: "#0ECE6D",
    padding: "10px 30px",
    fontSize: ".875rem",
    borderRadius: ".25rem",
    borderColor: "#0ECE6D",
    color: "white",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#25aa68",
      color: "white"
    },
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [languageEn, setLanguageEn] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);

  const openLanguageDropdown = event => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const changeLanguage = () => {
    setLanguageEn(!languageEn);
    setLanguageAnchorEl(null);
  };

  const closeLanguageDropdown = () => {
    setLanguageAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const currentLanguage = languageEn ? "English" : "Hindi";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img src={logo} className={classes.img} alt="logo" />
          </Typography>
          <div className={classes.butpudding}>
            <a href="#" className={classes.mybtn}>
              Exams
            </a>
          </div>
          <div className={classes.butpudding}>
            <a href="#" className={classes.mybtn}>
              Courses
            </a>
          </div>
          <div className={classes.butpudding}>
            <a href="#" className={classes.mybtn}>
              Test Series
            </a>
          </div>
          <div className={classes.butpudding}>
            <a href="#" className={classes.mybtn}>
              Practice
            </a>
          </div>
          <div className={classes.butpudding}>
            <a href="#" className={classes.mybtn}>
              Pass
            </a>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div style={{ flexGrow: 1 }} />
          <div className={classes.langPos}>
            <Button
              className={classes.dropBtn}
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              aria-label="Change language"
              onClick={openLanguageDropdown}
            >
              <img
                src={languageIcon}
                className={classes.langIcon}
                alt="languageicon"
              />
              <span className={classes.currentLanguage}>{currentLanguage}</span>
              <img src={arrow} className={classes.arrow} alt="arrow" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={languageAnchorEl}
              keepMounted
              open={Boolean(languageAnchorEl)}
              onClose={closeLanguageDropdown}
            >
              <MenuItem onClick={changeLanguage} selected={languageEn}>
                English
              </MenuItem>
              <MenuItem onClick={changeLanguage} selected={!languageEn}>
                Hindi
              </MenuItem>
            </Menu>
          </div>
          <div className={classes.loginBtnpadding}>
            <button className={classes.loginBtn}>Login</button>
          </div>
          <div className={classes.loginBtnpadding}>
            <button className={classes.signupBtn}>Sign up</button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Exams", "Courses", "Test Series", "Practice", "Pass"].map(
            (text, index) => (
              <ListItem style={{ paddingLeft: 30 }} button key={text}>
                <ListItemText style={{ color: cssVars.grey }} primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
