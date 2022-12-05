import styles from "./AboutUs.module.css";
import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className={styles.container}>
        <hr id="aboutUs" />
        <div className={styles.info}>
          <h1>ABOUT US</h1>
          <p>
            Hi. We are Code of Duty, a team of people who worked together to
            create this piece of art. We are from the Philippines and are
            3rd-year students pursuing a degree in Bachelor of Engineering
            Technology Major in Computer Engineering Technology.
          </p>
        </div>
      </div>
    );
  }
}
