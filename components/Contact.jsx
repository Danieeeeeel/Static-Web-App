import styles from "./Contact.module.css";
import { Link } from "react-scroll";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => alert(JSON.stringify(d));

  return (
    <div className={styles.container}>
        <div id="contact">
          <div>
            <h1>CONTACT</h1>
            <p>
              Get in touch with us on{" "}
              <a href="mailto:codeofduty@gmail.com">codeofduty@gmail.com</a>
            </p>
          </div>
          <div className={styles.smallContainer}>
          <form className={styles.contactBox} onSubmit={handleSubmit(onSubmit)}>

              <input
                {...register("Name", { required: true })}
                type="text"
                placeholder="Name"
              />
              <input
                {...register("Email", { required: true })}
                type="text"
                placeholder="Email"
              />
              <textarea
                className={styles.message}
                {...register("Message")}
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
            </form>
            <div className={styles.contactInfo}>
              <h6>Our Location</h6>
              <p>8XW8+2CH, Carlos Trinidad Ave, Salawag, Dasmariñas, Cavite</p>
              <h6>Call Us On</h6>
              <p>+63 906 784 0348</p>
            </div>
          </div>
          <div className={styles.arrowUp}>
            <button>
              <Link to="home" spy={true} smooth={true}>
                <img
                  src="Arrow Up.png"
                  alt="Arrow Up Button"
                  width={50}
                  height={50}
                />
              </Link>
            </button>
          </div>
        </div>
      </div>
  );
}

