import styles from "./OurTeam.module.css";
import React, { Component } from "react";

export default class OurMission extends Component {
  render() {
    return (
      <div id="home" className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.ourTeam}>OUR TEAM IS COMPOSED OF BEGINNER</h2>
          <h2 className={styles.webDev}>WEB DEVELOPERS</h2>
          <p>
            With the goal of designing and producing a Web App just like this.
          </p>
        </div>
        <div className={styles.image}>
          <img src="Team Logo.png" alt="Team Logo" />
        </div>
      </div>
    );
  }
}
