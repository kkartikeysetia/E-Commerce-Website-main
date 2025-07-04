import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/kartikey-setia/"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="https://github.com/kkartikeysetia/E-Commerce-Website-main"
            icon={BsGithub}
          />
          <Footer.Icon
            href="mailto:kartikeysetia22@gmail.com"
            icon={BsEnvelope}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
