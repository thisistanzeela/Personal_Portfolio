// import React from "react";
// import { stackList } from "../../data/ProjectData";
// import {
//   Image,
//   Technologies,
//   Tech,
//   TechImg,
//   TechName,
//   ContactWrapper,
// } from "./AboutElements";
// import ScrollAnimation from "react-animate-on-scroll";
// function About() {
//   return (
//     <ContactWrapper id="about">
//       <div className="Container">
//         <div className="SectionTitle">About Me</div>
//         <div className="BigCard">
//         <ScrollAnimation animateIn="fadeInLeft">
//           <Image
//             src="/man-svgrepo-com.svg"
//             alt="man-svgrepo"
//           />
//         </ScrollAnimation>
//           <div className="AboutBio">
//             <ScrollAnimation animateIn="fadeInLeft">
//             Hello! My name is <strong>Pedro Muniz</strong>. I'm originally from Brazil and have been living in Canada for the past three years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
//             </ScrollAnimation>

//             <br /><br />
            
//             <ScrollAnimation animateIn="fadeInLeft">
//             My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
//             Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.
//             </ScrollAnimation>

//             <br /><br />

//             <ScrollAnimation animateIn="fadeInLeft">
//               Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
//               <div className="tagline2">
//                 I have become confident using the following technologies:
//               </div>
//             </ScrollAnimation>
            

//             <Technologies>
//               {stackList.map((stack, index) => (
//                 <ScrollAnimation animateIn="fadeInLeft" key={index}>
//                   <Tech key={index} className="tech">
//                     <TechImg src={stack.img} alt={stack.name} />
//                     <TechName>{stack.name}</TechName>
//                   </Tech>
//                 </ScrollAnimation>
//               ))}
//             </Technologies>
//           </div>

//         </div>
//       </div>
//     </ContactWrapper>
//   );
// }

// export default About;


import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Tanzeela Mansoor</strong>  a passionate software engineer with a strong focus on front-end development. My journey in the world of technology has equipped me with a diverse skill set, including proficiency in HTML, CSS, JavaScript and React. Guided by a deep understanding of user-centered design principles, I am dedicated to delivering immersive and user-friendly digital experiences.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey in software development has been enriched by hands-on experience, dedication, and collaboration with cross-functional teams. I am committed to making a positive impact through technology and continually strive to enhance my skills. Let's connect and explore the possibilities of creating innovative software solutions together.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
