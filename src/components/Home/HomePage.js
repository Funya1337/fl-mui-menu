import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../../public/home1.png";
import SliderImg2 from "../../public/home2.webp";
import SliderImg3 from "../../public/home3.png";
import SliderImg4 from "../../public/home4.png";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 20,
    [theme.breakpoints.up("md")]: {
      padding: 40
    }
  },
  imgClass1: {
    backgroundImage:
      "url(" +
      "https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/ttp-4.0_home_bg-778e6f4c.jpg" +
      ")",
    width: "100%",
    backgroundColor: "#31369A"
  },
  imgClass2: {
    backgroundImage:
      "url(" +
      "https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/ssc-cgl-2020-crash-course-for-tier-i-1752x406-bg-1a1ba771.jpg" +
      ")",
    width: "100%",
    backgroundColor: "#34540C"
  },
  imgClass3: {
    backgroundImage:
      "url(" +
      "https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/drdo-mts-1752x406-bg-4afea793.png" +
      ")",
    width: "100%",
    backgroundColor: "#23354F"
  },
  imgClass4: {
    backgroundImage:
      "url(" +
      "https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/web_banner_homepage_1752-x-406_bg-fe428997.jpg" +
      ")",
    width: "100%",
    backgroundColor: "#503c24"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const settings = {
    dots: true,
    autoplay: true,
    infinity: true,
    speed: 500
  };
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        <div>
          <img className={classes.imgClass1} src={SliderImg1} alt="picture1" />
        </div>
        <div>
          <img className={classes.imgClass2} src={SliderImg2} alt="picture2" />
        </div>
        <div>
          <img className={classes.imgClass3} src={SliderImg3} alt="picture3" />
        </div>
        <div>
          <img className={classes.imgClass4} src={SliderImg4} alt="picture4" />
        </div>
      </Slider>
    </div>
  );
}
