import styles from "./Services.module.css";
import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div className={styles.container}>
        <hr id="services" />
        <div>
          <h1>SERVICES</h1>
        </div>
        <div className={styles.smallContainer}>
          <div className={styles.softDev}>
            <img src="Desktop.png" alt="Desktop Icon" width={60} height={60} />
            <h6>Web Design / Development</h6>
            <p>Creating top-quality design and useful user experiences</p>
          </div>
          <div className={styles.frontDev}>
            <img src="Video Edit.png" alt="Edit Icon" width={60} height={60} />
            <h6>Graphic Design</h6>
            <p>Editing videos and photos</p>
          </div>
        </div>
      </div>
    );
  }
}
