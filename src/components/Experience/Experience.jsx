// import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h2>{`${historyItem.role}, ${historyItem.organisation}`}</h2>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                   <ul>
//                     {historyItem.experiences2.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h2>{`${historyItem.role}, ${historyItem.organisation}`}</h2>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                
                {/* Render projects from experiences */}
                {historyItem.experiences.map((experience, index) => (
                  <div key={index}>
                    <h3>{experience.project}</h3>
                    <p>{experience.description}</p>
                    <h4>Responsibilities:</h4>
                    <ul>
                      {experience.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    <h4>Technologies:</h4>
                    <ul>
                      {experience.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Render experiences2 */}
                {historyItem.experiences2.map((experience, id) => (
                  <div key={id}>
                    <h3>{experience.project}</h3>
                    <p>{experience.description}</p>
                    <h4>Technologies:</h4>
                    <ul>
                      {experience.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
