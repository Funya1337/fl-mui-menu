import React from "react";
import clsx from "clsx";
import ButtonMock from "../../components/ButtonMock/ButtonMock";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";
import Avatar from "@material-ui/core/Avatar";
import WarningIcon from "@material-ui/icons/Warning";
import avatar from "../../public/avatar.jpg";
import RightDrawer from "../RightDrawer/RightDrawer";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const rightBlockWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: -47,
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
    backgroundColor: cssVars.rightBlockColor,
    border: "solid 2px rgba(0,0,0,0.12)",
    marginTop: 66
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
    backgroundColor: "#e4e4e4",
    alignItems: "center",
    boxShadow:
      "0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
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
  leftRow2Flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
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
  circle1: {
    height: 20,
    width: 20,
    backgroundColor: "purple",
    borderRadius: "50%",
    color: "white",
    textAlign: "center"
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
      border: "solid 1px black"
    }
  },
  rightBlockArrow: {
    fontSize: 30,
    paddingTop: 4,
    backgroundColor: cssVars.rightBlockColor,
    border: "solid 2px rgba(0,0,0,0.12)",
    cursor: "pointer"
  }
}));

export default function MockPage() {
  const classes = useStyles();
  const [rightBlockOpened, setRightBlockOpened] = React.useState(true);
  console.log("rightBlockOpened", rightBlockOpened);
  const handleDrawerToggle = () => {
    setRightBlockOpened(!rightBlockOpened);
  };

  const renderTasksTable = () => {
    let el = [...Array(5).keys()];
    const res = el.map((_el, index) => (
      <div className={classes.levelRow}>
        <div style={{ borderRadius: index === 0 ? "40%" : 0 }}>
          {1 + index * 5}
        </div>
        <div>{2 + index * 5}</div>
        <div>{3 + index * 5}</div>
        <div>{4 + index * 5}</div>
        <div>{5 + index * 5}</div>
      </div>
    ));
    return <div>{res}</div>;
  };

  return (
    <div className={classes.root}>
      <div className={clsx(classes.left, { [classes.leftShift]: rightBlockOpened })}>
        <div className={classes.leftRow1}>
          <div>
            SECTIONS <span style={{ color: "lightgrey" }}>&nbsp;|</span>
          </div>
          <ButtonMock
            isTextStylesActive={true}
            isActive={true}
            text={"General Intelligence"}
          />
          <ButtonMock isTextStylesActive={true} text={"General Awareness"} />
          <ButtonMock
            text={"Quantitative Aptitude"}
            isTextStylesActive={true}
          />
          <ButtonMock isTextStylesActive={true} text={"English language"} rootStyle={{flexGrow: 1}}/>
          <div className={classes.rightBlockArrow} onClick={handleDrawerToggle}>{
            rightBlockOpened ? <ArrowForwardIcon/> : <ArrowBackIcon/>
          }</div>
        </div>
        <div className={classes.leftRow2}>
          <div className={classes.leftRow2Flex}>
            <h4 style={{ flexGrow: 1 }}>Question No. 1</h4>
            <WarningIcon />
            <div style={{ paddingLeft: 5 }}>Report</div>
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
        <div className={classes.leftRow4}>
          <ButtonMock
            text="Mark for Review & Next"
            bottomButtonStyleMockActive={true}
            isTextStylesActive={true}
          />
          <ButtonMock
            text="Clear Response"
            bottomButtonStyleMockActive={true}
            isTextStylesActive={true}
            rootStyle={{ flexGrow: 1 }}
          />
          <ButtonMock
            text="Save & Next"
            bottomButtonStyleMockOtherActive={true}
            isTextStylesActive={true}
          />
        </div>
      </div>
      <RightDrawer open={rightBlockOpened} className={classes.right} variant="persistent" anchor="right" classes={{ paper: classes.rightPaper}}>
        <div className={classes.paddingForDrawer}>
          <div className={classes.drawerDivAvatar}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <div style={{ paddingLeft: 10 }}>
              <p>durga</p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid lightgrey" }} />
          <div style={{ paddingBottom: 15 }} />
          <div className={classes.drawerDivMiniButtons}>
            <div className={classes.circle}>0</div>
            <div style={{ fontSize: 13, paddingLeft: 5 }}>Answered</div>
            <div style={{ paddingLeft: 10 }} />
            <div className={classes.circle1}>0</div>
            <div style={{ fontSize: 13, paddingLeft: 5 }}>Marked</div>
            <div style={{ paddingLeft: 10 }} />
            <div className={classes.square}>25</div>
            <div style={{ fontSize: 12, paddingLeft: 5 }}>Not Visited</div>
          </div>
          <div style={{ paddingBottom: 5 }} />
          <div className={classes.drawerDivMiniButtons}>
            <div className={classes.circle1}>0</div>
            <div style={{ fontSize: 12, paddingLeft: 5 }}>
              Marked and Answered
            </div>
            <div style={{ paddingLeft: 10 }} />
            <div className={classes.circle3}>0</div>
            <div style={{ fontSize: 12, paddingLeft: 5 }}>Not Answered</div>
          </div>
          <div style={{ paddingBottom: 15 }} />
          <div style={{ borderBottom: "1px solid lightgrey" }} />
        </div>
        <div style={{ paddingBottom: 30 }} />
        <div className={classes.blueLineStyle}>
          <strong style={{ paddingRight: 2, paddingLeft: 10 }}>SECTION</strong>
          <strong style={{ paddingRight: 2 }}>:</strong>
          <p> General Intelligence & Reason...</p>
        </div>
        <div className={classes.paddingForDrawer}>
          {renderTasksTable()}
          <div style={{ paddingTop: 80 }}>
            <div style={{ borderBottom: "1px solid lightgrey" }} />
            <br />
            <div className={classes.drawerDivDownButtons}>
              <ButtonMock
                text="Clear Response"
                bottomButtonStyleMockActive={true}
                isTextStylesActive={true}
              />
              <ButtonMock
                style={{ width: 114 }}
                text="Instructions"
                bottomButtonStyleMockActive={true}
                isTextStylesActive={true}
              />
            </div>
            <div style={{ paddingBottom: 10 }} />
            <ButtonMock
              text="Submit Test"
              bottomButtonStyleMockOtherActive={true}
              isTextStylesActive={true}
              fullScreenButtonActive={true}
            />
          </div>
        </div>
      </RightDrawer>
    </div>
  );
}
