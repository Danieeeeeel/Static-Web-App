import styles from "./Exp.module.css";
import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
        <Tabs>
          Frontend Developer
          <div>
          <h3>Frontend Developer</h3>
              <li>Develop user interfaces and useful user experiences</li>
              <li>Coding using JavaScript (ReactJS), HTML, and CSS</li>
          </div>
          Backend Developer
          <div>
            <h3>Backend Developer</h3>
              <li>CRUD Application</li>
              <li>Skills in using Python, SQL, MySQL, C#, and JavaScript</li>
              </div>
          Figma Designer
          <div>
            <h3>Figma Designer</h3>
              <li>High-Fidelity UI/UX Design and Prototyping</li>
              <li>Web & Mobile Designer</li>
              </div>
          Graphic Designer
          <div>
            <h3>Graphic Designer</h3>
              <li>Adobe Photoshop</li>
              <li>Wondershare Filmora</li>
              <li>Vegas Pro</li>
              </div>
        </Tabs>
    );
  }
}


class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }
  
  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        return <button key={i} onClick={this.select(i)} className={this.state.active === i ? styles.active: styles.button}>{item}</button>;
      }
    });
  }
  
  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        return <div key={i} className={styles.infoBox}>{item}</div>;
      } else {
        return;
      }
    });
  }
  
  render() {
    return (
      <div className={styles.container}>
      <hr id="experience" className={styles.scrollGuide} />
      <div>
        <h1>EXPERIENCE</h1>
      </div>
      
      <div className={styles.smallContainer}>
      <div className={styles.SidebarActions}>
        {this.renderTabs()}
        </div>
        {this.renderContent()}
      </div>
      </div>
    );
  }
}
