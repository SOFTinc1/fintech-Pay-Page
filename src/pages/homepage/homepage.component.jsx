import React from "react";
import "./homepage.styles.scss";
import Section1 from "../../components/section1/section1.component";
import Section2 from "../../components/section2/section2.component";
import Section3 from "../../components/section3/section3.component";
import Section4 from "../../components/section4/section4.component";

const Homepage = () => (
  <div className="homepage">
    <hr style={{ width: "100%" }} />
    <Section1 />
    <Section2 />
    <hr style={{ width: "100%" }} />
    <Section3 />
    <hr style={{ width: "100%" }} />
    <Section4 />
  </div>
);

export default Homepage;
