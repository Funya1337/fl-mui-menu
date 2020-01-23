import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import bank from "../../public/bank.svg";
import screen from "../../public/screen.png";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Link from "@material-ui/core/Link";

const tutorialSteps = [
  {
    label: "Abhinav Gupta",
    feedback:
      "Testbook test series was the only one I had purchased for my Tier II Examination. The test series improved my speed to a great extent"
  },
  {
    label: "Pratibha Chaudhary",
    feedback:
      "I had attempted both, sectional as well as full length tests of Testbook. Test analysis aided me in self-evaluation, which was"
  },
  {
    label: "Sunkara Venkata Tejaswi",
    feedback:
      "If you really want to crack any exam by enjoying your preparation then Testbook is the right choice. Tests are at par with the actual exam, plus the quality of questions"
  },
  {
    label: "Sonia Devi",
    feedback:
      "From self evaluation to learning time management, TB's tests helped me in every aspect of exam preparation."
  },
  {
    label: "Subhadeep Patra",
    feedback:
      "Unaware of the methods to solve puzzles and maths, I started off with building up the basics through various books. But I came to know that one needs to practice online tests"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  root1: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    lineHeight: "3rem",
    textAlign: "center"
  },
  utitleStyle: {
    fontSize: "6",
    margin: "0 0 15",
    lineHeight: "1.3125rem",
    color: cssVars.grey,
    textAlign: "center",
    marginBottom: 50
  },
  card: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: -60
  },
  bank: {
    height: 70,
    width: 70
  },
  imgdiv: {
    textAlign: "center"
  },
  screenClass: {
    width: "100%",
    height: "auto",
    display: "block",
    [theme.breakpoints.up("md")]: {
      height: 500,
      width: 600,
      paddingLeft: 100
    }
  },
  spaceClass: {
    paddingTop: 200
  },
  pStyle: {
    color: cssVars.grey
  },
  btnC: {
    paddingRight: 10
  },
  mybtn: {
    whiteSpace: "nowrap",
    color: cssVars.grey,
    fontFamily: "helvetica",
    border: "1px solid black",
    textDecoration: "none",
    transition: "0.2s",
    padding: "8px 18px",
    "&:hover": {
      color: "#0ad0f4",
      border: "1px solid #0ad0f4"
    }
  }
}));

export default function Practice() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return (
    <div>
      <Container fixed>
        <div className={classes.root}>
          <h1 className={classes.title}>Practice Best Questions, for Free!</h1>
          <p className={classes.utitleStyle}>
            Practice thousands of questions created by experts & toppers, review
            answers with detailed solutions, track your progress with
            performance analysis,
            <br /> and master all your subjects at no cost.
          </p>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <div className={classes.imgdiv}>
                    <img src={bank} className={classes.bank} alt="logo" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.spaceClass} />
      </Container>
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className={classes.secondDiv}>
                <img src={screen} className={classes.screenClass} alt="img" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a href="#" className={classes.mybtn}>
                TestBook app
              </a>
              <span className={classes.btnC}></span>
              <a href="#" className={classes.mybtn}>
                Current affairs app
              </a>
              <h2>
                Practice, Analyze and Improve. Now on <br /> the Go!
              </h2>
              <p className={classes.pStyle}>
                All of Testbook and more in the palm of your hands! Practice
                thousands <br /> of questions for free while having fun! Take
                free quizzes <br />
                <br /> Testbook App gives you the easiest and smoothest
                test-taking <br /> experience on your mobile device.
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <center>
        <Container fixed>
          <h1>Hear it Directly from our Students</h1>
          <br />
          <div className={classes.root1}>
            <Paper square elevation={0} className={classes.header}>
              <Typography style={{ color: cssVars.grey }}>
                {tutorialSteps[activeStep].feedback}
              </Typography>
            </Paper>
            <br />
            <Paper square elevation={0} className={classes.header}>
              <Typography style={{ fontWeight: "bold" }}>
                {tutorialSteps[activeStep].label}
              </Typography>
            </Paper>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="large"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </Container>
      </center>
      <br />
      <br />
    </div>
  );
}
