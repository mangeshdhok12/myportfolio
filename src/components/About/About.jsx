import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutboy.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Front end developer with industry experience in developing and implementing web applications using a range of technologies and languages such as JavaScript, React JS, React Hooks, React Router, Redux, Typescript, HTML5, CSS3, AJAX, Bootstrap. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
          <p>Also have knowledge on NodeJS, Express, MongoDB, Graphql . Worked on various tools like

VS code, Soap UI, Postman, browser developer tools, code versioning tools like Git.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
