import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
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
    cursor: "pointer",
    transition: "0.2s"
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
    flexGrow: 1,
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
    position: "relative",
    textAlign: "center",
    color: "white"
  },
  textOnImgTop: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2vw",
    fontWeight: "bold"
  },
  textOnImgBottomCenter: {
    position: "absolute",
    bottom: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.2vw"
  },
  textOnImgBottomCenter1: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1vw"
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
      fontSize: 30
    },
    "&>div:last-child": {
      fontSize: 15
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

export default function PracticeTest() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDrawerOpen = () => {
    setOpen(false);
  };

  const handleDrawerClose = () => {
    setOpen(true);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
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
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Paper className={classes.root1}>
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
          <button onClick={handleDrawerClose}>open</button>
          <button onClick={handleDrawerOpen}>close</button>
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
