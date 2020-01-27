import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import cssVars from "../../constants/cssVars";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Container } from "@material-ui/core";
import banner from "../../public/banner.jpg";
import Grid from "@material-ui/core/Grid";
import MockButton from "../../components/ButtonMock/ButtonMock";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import folderIcon from "../../public/folder.svg";
import ReceiptIcon from "@material-ui/icons/Receipt";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import SpeedIcon from "@material-ui/icons/Speed";
import { MENU_STATE } from "../../constants/menuState";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles } from "./styles";

export default function PracticeTest(props) {
  const { menuState, openSecondMenu, closeMenus } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  console.log("isDesktop", isDesktop);

  console.log(123, props);

  const handleToggleDrawer = () => {
    if (menuState === MENU_STATE.SECOND_MENU_OPENED) {
      closeMenus();
    } else {
      openSecondMenu();
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDesktop || menuState === MENU_STATE.SECOND_MENU_OPENED}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Divider />
        <div className={classes.toolbar} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ color: "grey" }} />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <List>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Quantitative Aptitude
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Data Interpretation
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>English</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Verbal Reasoning
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Computer</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Logical Reasoning
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                General Awareness New
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <Paper className={classes.root1}>
          <button>asdfasdf</button>
          <Container fixed>
            <p style={{ color: cssVars.grey }}>Home</p>
            <Typography
              variant="h1"
              style={{
                fontSize: "xx-large",
                lineHeight: "1.75rem",
                color: "black",
                fontWeight: 600
              }}
              component="h3"
            >
              Bank PO Practice
            </Typography>
            <br />
          </Container>
          <Divider />
          <br />
          <Container fixed>
            <a href="#" className={classes.paperCustomButton}>
              Home
            </a>
            <a href="#" className={classes.paperCustomButton}>
              Analysis
            </a>
            <a href="#" className={classes.paperCustomButton}>
              Saved Questions
            </a>
            <Typography component="p"></Typography>
          </Container>
        </Paper>
        <Container fixed>
          <br />
          <br />
          <div className={classes.imgClass}>
            <img src={banner} style={{ width: "100%" }} alt="banner" />
            <div className={classes.textOnImgTop}>Bank PO | Practice</div>
            <div className={classes.textOnImg}>
              <MockButton
                text="Start Practice"
                style={{
                  textTransform: "none",
                  display: "block",
                  width: "100%"
                }}
                bottomButtonStyleMockOtherActive={true}
              />
            </div>
            <div>
              <div className={classes.textOnImgBottomCenter}>64</div>
              <div className={classes.textOnImgBottomCenter1}>Chapters</div>
            </div>
            <div>
              <div className={classes.textOnImgBottomRight}>2682</div>
              <div className={classes.textOnImgBottomRight1}>Questions</div>
            </div>
            <div>
              <div className={classes.textOnImgBottomLeft}>7</div>
              <div className={classes.textOnImgBottomLeft1}>Subjects</div>
            </div>
          </div>
          <button onClick={handleToggleDrawer}>Toggle Drawer</button>
          <h3>Overall Progress Status</h3>
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={<ReceiptIcon />}
                    title="Progress - 0%"
                  />
                  <div className={classes.circleContainer}>
                    <div className={classes.circle} />
                    <div className={classes.circleText}>
                      <div>64</div>
                      <div>Chapter</div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={clsx(classes.cardGrid, classes.cardGridGrey)}
                    >
                      <div style={{ flexGrow: 1 }}>Completed</div>
                      <div>0</div>
                    </div>
                    <div className={classes.cardGrid}>
                      <div style={{ flexGrow: 1 }}>Ongoing</div>
                      <div>0</div>
                    </div>
                    <div
                      className={clsx(classes.cardGrid, classes.cardGridGrey)}
                    >
                      <div style={{ flexGrow: 1 }}>Unseen</div>
                      <div>64</div>
                    </div>
                    <div className={classes.cardGrid} />
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={<TrackChangesIcon />}
                    title="Accuracy - 0%"
                  />
                  <div className={classes.circleContainer}>
                    <div className={classes.circle} />
                    <div className={classes.circleText}>
                      <div>0</div>
                      <div>Completed</div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={clsx(classes.cardGrid, classes.cardGridGrey)}
                    >
                      <div style={{ flexGrow: 1 }}>Correct</div>
                      <div>0</div>
                    </div>
                    <div className={classes.cardGrid}>
                      <div style={{ flexGrow: 1 }}>Incorrect</div>
                      <div>0</div>
                    </div>
                    <div
                      className={clsx(classes.cardGrid, classes.cardGridGrey)}
                    >
                      <div style={{ flexGrow: 1 }}>Skipped</div>
                      <div>64</div>
                    </div>
                    <div className={classes.cardGrid} />
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={<SpeedIcon />}
                    title="Speed- 0 Que/hr"
                  />
                  <div className={classes.circleContainer}>
                    <div className={classes.circle} />
                    <div className={classes.circleText}>
                      <div>00:00:00</div>
                      <div>Time Spent</div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={clsx(classes.cardGrid, classes.cardGridGrey)}
                    >
                      <div style={{ flexGrow: 1 }}>Correct</div>
                      <div>00:00:00</div>
                    </div>
                    <div className={classes.cardGrid}>
                      <div style={{ flexGrow: 1 }}>Incorrect</div>
                      <div>00:00:00</div>
                    </div>
                    <div
                      className={clsx(classes.cardGrid, classes.cardGridGrey)}
                    >
                      <div style={{ flexGrow: 1 }}>Skipped</div>
                      <div>00:00:00</div>
                    </div>
                    <div className={classes.cardGrid} />
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
}
