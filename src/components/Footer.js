import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../public/logo.svg";
import { Container } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 30
  },
  footer: {
    backgroundColor: "#1b1b1b",
    color: "white",
    position: "relative",
    bottom: 0,
    paddingBottom: 20
  },
  img: {
    height: "auto",
    width: 150,
    marginBottom: 20,
    marginLeft: 14
  },
  footerContent: {},
  footerSection: {
    paddingLeft: 22,
    paddingTop: 10
  },
  footerSection1: {
    paddingTop: 10,
    color: "#86a1ae"
  },
  blueLink: {
    color: "#0ad0f4"
  }
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container fixed>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <img src={logo} className={classes.img} alt="logo" />
              <div className={classes.footerContent}>
                Testbook Edu Solutions Pvt. Ltd.
              </div>
              <div className={classes.footerSection1}>
                #803-805, The Landmark Building,
                <br /> (Above Croma), Sector 7, Kharghar,
                <br /> Navi Mumbai - 410210 <br /> <br /> support@testbook.com
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <p>Company</p>
              <div>
                <Link className={classes.footerSection1} href="#">
                  About us
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Careers
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Teach Online on Testbook
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Campus Leadership Program
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Franchise
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Associates
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Partners
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Media
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Sitemap
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <p>Products</p>
              <div>
                <Link className={classes.footerSection1} href="#">
                  Test Series
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Testbook Pass
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Online Courses
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Online Videos
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Practice
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Learning Centers
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Blog
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Discuss
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Refer & Earn
                </Link>
                <br />
                <Link className={classes.footerSection1} href="#">
                  Promo
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <p>Our apps</p>
              <div className={classes.footerSection1}>Testbook</div>
              <Link className={classes.blueLink} href="#">
                Download now
              </Link>
              <br />
              <div className={classes.footerSection1}>Current Affairs</div>
              <Link className={classes.blueLink} href="#">
                Download now
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
