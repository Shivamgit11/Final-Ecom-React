import React, { Fragment } from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <h2 className={classes.header}> About </h2>
      <h2 className={classes.header}>We are happy that you want to know about us</h2>
      <section className={classes.section}>
        <p className={classes.about}>
         This is About Page
        </p>
        

        <img className={classes.logo} src="https://th.bing.com/th/id/OIP.GyRIZMZyB1EryuHPzSp_RwHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo"></img>
      </section>
    </Fragment>
  );
};

export default About;
