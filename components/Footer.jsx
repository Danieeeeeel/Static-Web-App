import styles from "./Footer.module.css";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className={styles.container}>
      <hr />
      <footer className={styles.smallContainer}>
        <div className={styles.copyright}>
          <p>&copy; 2022 CODE OF DUTY</p>
        </div>
        <div className={styles.footerActions}>
          <button>
            <Link to="home" spy={true} smooth={true} offset={-90}>
              Home
            </Link>
          </button>
          <button>
            <Link to="aboutUs" spy={true} smooth={true} offset={-90}>
              About Us
            </Link>
          </button>
          <button>
            <Link to="experience" spy={true} smooth={true} offset={-90}>
              Experience
            </Link>
          </button>
          <button>
            <Link to="services" spy={true} smooth={true} offset={-90}>
              Services
            </Link>
          </button>
          <button>
            <Link to="contact" spy={true} smooth={true} offset={-90}>
              Contact
            </Link>
          </button>
          </div>
      </footer>
    </div>
  );
}
