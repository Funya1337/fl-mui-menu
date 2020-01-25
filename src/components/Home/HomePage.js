import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 20,
    [theme.breakpoints.up('md')]: {
      padding: 40,
    },
  },
  imgClass1: {
    backgroundImage:
      'url(' +
      'https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/ttp-4.0_home_bg-778e6f4c.jpg' +
      ')',
    width: '100%',
    backgroundColor: '#31369A',
  },
  imgClass2: {
    backgroundImage:
      'url(' +
      'https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/ssc-cgl-2020-crash-course-for-tier-i-1752x406-bg-1a1ba771.jpg' +
      ')',
    width: '100%',
    backgroundColor: '#34540C',
  },
  imgClass3: {
    backgroundImage:
      'url(' +
      'https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/drdo-mts-1752x406-bg-4afea793.png' +
      ')',
    width: '100%',
    backgroundColor: '#23354F',
  },
  imgClass4: {
    backgroundImage:
      'url(' +
      'https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/web_banner_homepage_1752-x-406_bg-fe428997.jpg' +
      ')',
    width: '100%',
    backgroundColor: '#503c24',
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const settings = {
    dots: true,
    autoplay: true,
    infinity: true,
    speed: 500,
  };
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        <div>
          <img
            className={classes.imgClass1}
            src="https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/ttp-4.0_home-35bb1884.png"
          />
        </div>
        <div>
          <img
            className={classes.imgClass2}
            src="https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/ssc-cgl-2020-crash-course-for-tier-i-1752x406-fg-281f148a.png"
          />
        </div>
        <div>
          <img
            className={classes.imgClass3}
            src="https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/drdo-mts-1752x406-fg-8b927788.png"
          />
        </div>
        <div>
          <img
            className={classes.imgClass4}
            src="https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/web_banner_homepage_1752-x-406_fg-cda09b0a.png"
          />
        </div>
      </Slider>
    </div>
  );
}
