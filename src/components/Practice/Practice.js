import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cssVars from "../../constants/cssVars";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import bank from "../../public/bank.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
    height: 500,
    width: 500
  },
  spaceClass: {
    paddingTop: 200
  }
}));

export default function Practice() {
  const classes = useStyles();
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
    </div>
  );
}
