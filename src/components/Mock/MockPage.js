import React from "react";
import clsx from "clsx";
import ButtonMock from "../../components/ButtonMock/ButtonMock";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import cssVars from "../../constants/cssVars";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import arrowIcon from "../../public/arrowicon.png";

const rightBlockWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: -47,
    backgroundColor: "white"
  },
  left: {
    flexGrow: 1
  },
  right: {
    backgroundColor: "#d9edf6",
    boxShadow:
      "-1px 0px 1px 1px rgba(0,0,0,0.2), 0px 0px 1px 1px rgba(0,0,0,0.14), 0px 0px 1px 1px rgba(0,0,0,0.12)",
    padding: cssVars.gapM
  },
  leftRow1: {
    paddingLeft: cssVars.gapM,
    paddingRight: cssVars.gapM,
    display: "flex",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    boxShadow:
      "0px 1px 2px -1px rgba(0,0,0,0.2), 0px 2px 3px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)"
  },
  leftRow2: {
    paddingLeft: cssVars.gapM,
    paddingRight: cssVars.gapM,
    marginTop: cssVars.gapS,
    marginBottom: cssVars.gapS,
    borderBottom: "1px solid lightgrey"
  },
  leftRow3: {
    paddingLeft: cssVars.gapM,
    paddingRight: cssVars.gapM,
    minHeight: 500
  },
  rightRow1: {},
  rightRow2: {},
  rightRow3: {},
  rightBlockHide: {
    flexGrow: 0,
    flexBasis: rightBlockWidth,
    flexShrink: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -rightBlockWidth
  },
  rightBlockShow: {
    flexGrow: 0,
    flexBasis: rightBlockWidth,
    flexShrink: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

export default function MockPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [rightBlockOpened, setRightBlockOpened] = React.useState(true);
  console.log("rightBlockOpened", rightBlockOpened);
  const handleDrawerToggle = () => {
    setRightBlockOpened(!rightBlockOpened);
  };

  const rightBlockClasses = rightBlockOpened
    ? `${classes.right} ${classes.rightBlockShow}`
    : `${classes.right} ${classes.rightBlockHide}`;
  console.log("rightBlockClasses", rightBlockClasses);
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.leftRow1}>
          <div style={{}}>
            SECTIONS <span style={{ color: "lightgrey" }}>&nbsp;|</span>
          </div>
          <ButtonMock text={"General Intelligence"} isActive={true} />
          <ButtonMock text={"General Awareness"} />
          <ButtonMock text={"Quantitative Aptitude"} />
          <ButtonMock text={"English language"} />
        </div>
        <div className={classes.leftRow2}>
          <div className={classes.questClass}>
            <h4>Question No. 1</h4>
          </div>
        </div>
        <div className={classes.leftRow3}>
          <div>
            In the following question, select the related word from the given
            alternatives.
          </div>
          <div>Certainty: Contingency :: Cause : ? </div>
          <p>
            <div>
              <input
                type="radio"
                name="imgsel"
                value="Reason"
                checked="checked"
              />
              Reason
            </div>
            <div>
              <input type="radio" name="imgsel" value="Improbability" />
              Improbability
            </div>
            <div>
              <input type="radio" name="imgsel" value="Crisis" />
              Crisis
            </div>
            <div>
              <input type="radio" name="imgsel" value="Repercussion" />
              Repercussion
            </div>
          </p>
          <p>
            <button onClick={handleDrawerToggle}>Toggle side bar</button>
          </p>
        </div>
      </div>
      <div className={rightBlockClasses}>
        <div className={classes.rightRow1}>one</div>
        <div className={classes.rightRow2}>two</div>
        <div className={classes.rightRow3}>three</div>
      </div>
    </div>
  );
}
