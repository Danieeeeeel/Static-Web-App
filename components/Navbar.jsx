import styles from "./Navbar.module.css";
import React, {Component} from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from 'hamburger-react'



export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
      isToggleOn: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    return (
      <div className={this.state.show ? styles.container : styles.hidden} >
        <div className={styles.logo}>
          <button>
            <Link to="home" spy={true} smooth={true}>
              <div>
                <img src="Gear.png" alt="Logo" width={70} height={70} />
                <h2>CODE OF DUTY</h2>
              </div>
            </Link>
          </button>
      </div>
      <div className={styles.logom}>
          <button>
            <Link to="home" spy={true} smooth={true}>
              <div>
                <img src="Gear.png" alt="Logo" width={70} height={70} />
                <h2>COD</h2>
              </div>
            </Link>
          </button>
          <nav className={styles.mmenu}>
          <Hamburger size={30} onToggle={this.handleClick}/>
          </nav>
      </div>
      <div className={styles.navbarActions}>
          <button>
            <Link to="aboutUs" spy={true} smooth={true} offset={-80} >
              About Us
            </Link>
          </button>
          <button>
            <Link to="experience" spy={true} smooth={true} offset={-80}>
              Experience
            </Link>
          </button>
          <button>
            <Link to="services" spy={true} smooth={true} offset={-80}>
              Services
            </Link>
          </button>
          <button>
            <Link to="contact" spy={true} smooth={true} offset={-80}>
              Contact
            </Link>
          </button>
          </div>
          <nav className={styles.navm}>
        <div className={`${this.state.isToggleOn ? styles.expanded : styles.collapsed}`}>
          <div className={styles.navbarActionsm}>
          <button>
            <Link to="aboutUs" spy={true} smooth={true} offset={-80}>
              About Us
            </Link>
          </button>
          <button>
            <Link to="experience" spy={true} smooth={true} offset={-80}>
              Experience
            </Link>
          </button>
          <button>
            <Link to="services" spy={true} smooth={true} offset={-80}>
              Services
            </Link>
          </button>
          <button>
            <Link to="contact" spy={true} smooth={true} offset={-80}>
              Contact
            </Link>
          </button>
          </div>
          </div>
          </nav>
          </div>
    );
  }
}