import React from "react";
import { Container, Typography } from "@material-ui/core";

export default function HomePage() {
  return (
    <div>
      <div
        className="promotions-banner pt-0 js-lazy-load-img ng-scope"
        style={{
          backgroundColor: "rgb(119, 7, 23)",
          backgroundImage:
            "url('https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/gdgs_course_home_bg-1-4363a229.jpg')"
        }}
      >
        <div className="position-relative">
          <div className="">
            <a className="d-flex" href="/pass">
              <img
                className="mx-auto img-fluid"
                src="https://blogmedia.testbook.com/blog/wp-content/uploads/2020/01/gdgs_course_home_fg-1-1-3b339a50.png"
                style={{ width: "1410px", height: "310px" }}
              ></img>
            </a>
          </div>
          <div className="right-promo-timer">
            <div style={{ color: "#EBF727", fontSize: "16px" }}>
              Offer Ends In
            </div>
            <div
              style={{ fontSize: "24px", lineHeight: 1 }}
              className="js-promotional-offer-timer js- promotional-learn-pass-sold"
              end-time="1579717799000"
            >
              22:03:15
            </div>
          </div>
          <span class="dashboard-timer-animation"></span>
          <span class="dashboard-timer-animation"></span>
        </div>
      </div>
    </div>
  );
}
