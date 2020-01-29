import React, { useState, useEffect } from "react";
import clsx from "clsx";
import ButtonMock from "../../components/ButtonMock/ButtonMock";
import { useTheme } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";
import Avatar from "@material-ui/core/Avatar";
import WarningIcon from "@material-ui/icons/Warning";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import avatar from "../../public/avatar.jpg";
import RightDrawer from "../RightDrawer/RightDrawer";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Card from "@material-ui/core/Card";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { useStyles } from "./style";

const calculator = timerTime => {
  let mins = Math.floor(timerTime / 60);
  let sec = timerTime % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  const res = mins + ":" + sec;
  return res;
};

export default function MockPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [rightBlockOpened, setRightBlockOpened] = React.useState(true);
  const [timerTime, setTimerTime] = useState(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const handleDrawerToggle = () => {
    setRightBlockOpened(!rightBlockOpened);
  };

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.paddingForDrawer}>
        <div className={classes.drawerDivAvatar}>
          <Avatar alt="Remy Sharp" src={avatar} />
          <div style={{ paddingLeft: 10 }}>
            <p>durga</p>
          </div>
        </div>
        <div style={{ paddingTop: 10 }} />
        <div className={classes.drawerDivMiniButtons}>
          <div className={classes.circle}>0</div>
          <div style={{ fontSize: 10, paddingLeft: 5 }}>Answered</div>
          <div style={{ paddingLeft: 10 }} />
          <div className={classes.circle1}>0</div>
          <div style={{ fontSize: 10, paddingLeft: 5 }}>Marked</div>
          <div style={{ paddingLeft: 10 }} />
          <div className={classes.square}>25</div>
          <div style={{ fontSize: 10, paddingLeft: 5 }}>Not Visited</div>
        </div>
        <div style={{ paddingTop: 10 }} />
        <div className={classes.drawerDivMiniButtons}>
          <div className={classes.circle1}>0</div>
          <div style={{ fontSize: 11, paddingLeft: 5 }}>
            Marked and Answered
          </div>
          <div style={{ paddingLeft: 10 }} />
          <div className={classes.circle3}>0</div>
          <div style={{ fontSize: 11, paddingLeft: 5 }}>Not Answered</div>
        </div>
      </div>
      <div style={{ paddingBottom: 30 }} />
      <div className={classes.blueLineStyle}>
        <strong style={{ paddingRight: 2, paddingLeft: 20 }}>SECTION</strong>
        <strong style={{ paddingRight: 2 }}>:&nbsp;</strong>
        <p>Test</p>
      </div>
      <div className={classes.paddingForDrawer}>
        {renderTasksTableMobile()}
        <div className={classes.drawerDivDownButtons}>
          <ButtonMock
            rootStyle={{
              flexBasis: 100,
              flexGrow: 1,
              flexShrink: 0,
              marginLeft: 0
            }}
            style={{ width: "100%" }}
            text="Clear"
            bottomButtonStyleMockActive={true}
            isTextStylesActive={true}
          />
          <ButtonMock
            rootStyle={{ flexBasis: 100, flexGrow: 1, flexShrink: 0 }}
            style={{ width: "100%" }}
            text="Instructions"
            bottomButtonStyleMockActive={true}
            isTextStylesActive={true}
          />
        </div>
        <div style={{ paddingBottom: 10 }} />
        <ButtonMock
          rootStyle={{ marginLeft: 0 }}
          text="Submit Test"
          bottomButtonStyleMockOtherActive={true}
          isTextStylesActive={true}
          fullScreenButtonActive={true}
        />
      </div>
    </div>
  );

  const renderTasksTable = () => {
    let el = [...Array(5).keys()];
    const res = el.map((_el, index) => (
      <div className={classes.levelRow} key={index}>
        <div style={{ borderRadius: index === 0 ? "40%" : 0 }} key={0}>
          {1 + index * 5}
        </div>
        <div key={1}>{2 + index * 5}</div>
        <div key={2}>{3 + index * 5}</div>
        <div key={3}>{4 + index * 5}</div>
        <div key={4}>{5 + index * 5}</div>
      </div>
    ));
    return <div>{res}</div>;
  };

  const renderTasksTableMobile = () => {
    let el = [...Array(5).keys()];
    const res = el.map((_el, index) => (
      <div className={classes.levelRow1} key={index}>
        <div style={{ borderRadius: index === 0 ? "40%" : 0 }} key={0}>
          {1 + index * 5}
        </div>
        <div key={1}>{2 + index * 5}</div>
        <div key={2}>{3 + index * 5}</div>
        <div key={3}>{4 + index * 5}</div>
        <div key={4}>{5 + index * 5}</div>
      </div>
    ));
    return <div>{res}</div>;
  };

  useEffect(() => {
    const updateTimer = () => setTimerTime(timerTime + 1);
    setTimeout(updateTimer, 1000);
  }, [timerTime]);

  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.left, {
          [classes.leftShift]: rightBlockOpened
        })}
      >
        {isDesktop ? (
          <Card className={classes.card}>
            <div className={classes.headerButtonFlex}>
              SECTIONS <span style={{ color: "lightgrey" }}>&nbsp;|</span>
              <ButtonMock
                isTextStylesActive={true}
                isActive={true}
                text={"General Intelligence"}
              />
              <ButtonMock
                isTextStylesActive={true}
                text={"General Awareness"}
              />
              <ButtonMock
                text={"Quantitative Aptitude"}
                isTextStylesActive={true}
              />
              <ButtonMock
                isTextStylesActive={true}
                text={"English language"}
                rootStyle={{ flexGrow: 1 }}
              />
              {isDesktop ? (
                <div
                  className={classes.rightBlockArrow}
                  onClick={handleDrawerToggle}
                >
                  {rightBlockOpened ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                </div>
              ) : (
                ""
              )}
            </div>
          </Card>
        ) : (
          <Card className={classes.card}>
            <div className={classes.headerButtonFlex}>
              <ButtonMock
                rootStyle={{ margin: 0 }}
                isTextStylesActive={true}
                isActive={true}
                text={"Tes"}
              />
              <div style={{ flexGrow: 1 }} />
              <select className={classes.mobileSelectStyle}>
                <option value="0">English</option>
                <option value="1">Hindi</option>
              </select>
            </div>
          </Card>
        )}

        <div className={classes.leftRow2}>
          <div className={classes.leftRow2Flex}>
            {isDesktop ? (
              <h4 style={{ flexGrow: 1 }}>Question No. 1</h4>
            ) : (
              <h4 style={{ flexGrow: 1 }}>Que No. 1</h4>
            )}
            <div>
              <div style={{ textAlign: "center", marginBottom: 3 }}>Marks</div>
              <div>
                <div className={classes.leftRow2Flex}>
                  <div className={classes.oval}>+2</div>
                  <div style={{ paddingLeft: 5 }} />
                  <div className={classes.oval2}>-0.5</div>
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: 15 }}>
              <div style={{ paddingRight: 20, marginBottom: 3 }}>Time</div>
              <div style={{ paddingRight: 20 }}>{calculator(timerTime)}</div>
            </div>
            <WarningIcon />
            {isDesktop ? <div style={{ paddingLeft: 5 }}>Report</div> : ""}
          </div>
        </div>
        <div className={classes.leftRow3}>
          <div>
            In the following question, select the related word from the given
            alternatives.
          </div>
          <div>Certainty: Contingency :: Cause : ? </div>
          <br />
          <div>
            <div>
              <input type="radio" name="imgsel" value="Reason" />
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
          </div>
          {/* <Button onClick={toggleDrawer("right", true)}>Open Right</Button> */}
          {isDesktop ? (
            ""
          ) : (
            <FormatListBulletedIcon
              onClick={toggleDrawer("right", true)}
              className={classes.rightBlockArrowMobile}
            />
          )}
        </div>
        <Card className={classes.mockPageFooter}>
          {isDesktop ? (
            <div className={classes.footerFixer}>
              <ButtonMock
                rootStyle={{ marginLeft: 0 }}
                text="Mark for Review & Next"
                bottomButtonStyleMockActive={true}
                isTextStylesActive={true}
              />
              <ButtonMock
                text="Clear Response"
                bottomButtonStyleMockActive={true}
                isTextStylesActive={true}
                rootStyle={{ float: "right" }}
              />
              <ButtonMock
                text="Save & Next"
                bottomButtonStyleMockOtherActive={true}
                isTextStylesActive={true}
              />
            </div>
          ) : (
            <div className={classes.footerFixer}>
              <ButtonMock
                rootStyle={{ marginLeft: 0 }}
                text="Mark for Review"
                bottomButtonStyleMockActive={true}
                isTextStylesActive={true}
              />
              <ButtonMock
                text="Clear"
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
          )}
        </Card>
      </div>
      {isDesktop ? (
        <RightDrawer
          open={rightBlockOpened}
          className={classes.right}
          variant="persistent"
          anchor="right"
          classes={{ paper: classes.rightPaper }}
        >
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
            <strong style={{ paddingRight: 2, paddingLeft: 20 }}>
              SECTION
            </strong>
            <strong style={{ paddingRight: 2 }}>:&nbsp;</strong>
            <p>General Intelligence</p>
          </div>
          <div className={classes.paddingForDrawer}>
            {renderTasksTable()}
            <div style={{ paddingTop: 80 }}>
              <div style={{ borderBottom: "1px solid lightgrey" }} />
              <br />
              <div className={classes.drawerDivDownButtons}>
                <ButtonMock
                  rootStyle={{
                    flexBasis: 100,
                    flexGrow: 1,
                    flexShrink: 0,
                    marginLeft: 0
                  }}
                  style={{ width: "100%" }}
                  text="Clear Response"
                  bottomButtonStyleMockActive={true}
                  isTextStylesActive={true}
                />
                <ButtonMock
                  rootStyle={{ flexBasis: 100, flexGrow: 1, flexShrink: 0 }}
                  style={{ width: "100%" }}
                  text="Instructions"
                  bottomButtonStyleMockActive={true}
                  isTextStylesActive={true}
                />
              </div>
              <div style={{ paddingBottom: 10 }} />
              <ButtonMock
                rootStyle={{ marginLeft: 0 }}
                text="Submit Test"
                bottomButtonStyleMockOtherActive={true}
                isTextStylesActive={true}
                fullScreenButtonActive={true}
              />
            </div>
          </div>
        </RightDrawer>
      ) : (
        <Drawer
          anchor="right"
          style={{ backgroundColor: "whi" }}
          open={state.right}
          classes={{ paper: classes.paperDrawer }}
          onClose={toggleDrawer("right", false)}
        >
          {sideList("right")}
        </Drawer>
      )}
    </div>
  );
}
