// imports for home page
import home_picture from "./assets/home/cover1.png";
import about_picture from "./assets/home/BMES4 - Club.jpg";
import resume from "./assets/home/Resume_LaurenPaffrath.pdf";

// imports for research page
import thesis1 from "./assets/research/thesis/Thesis1.jpg";
import thesis2 from "./assets/research/thesis/Thesis2.jpg";
import thesis3 from "./assets/research/thesis/Thesis3.jpg";
import thesis4 from "./assets/research/thesis/Thesis4.jpg";
import thesis5 from "./assets/research/thesis/Thesis5.jpg";
import thesis6 from "./assets/research/thesis/Thesis6.jpg";

import conf1 from "./assets/research/conferences/conf1.jpg";
import conf2 from "./assets/research/conferences/conf2.jpg";
import conf3 from "./assets/research/conferences/conf3.jpg";

import alice1 from "./assets/research/alice/ALICE1.jpg";
import alice2 from "./assets/research/alice/ALICE2.jpg";
import alice3 from "./assets/research/alice/ALICE3.jpg";

import wear1 from "./assets/research/wear/wear1.jpg";
import wear2 from "./assets/research/wear/wear2.jpg";

import irl1 from "./assets/research/irl/irl1.jpg";
import irl2 from "./assets/research/irl/irl2.jpg";

//imports for experience
import biodesign1 from "./assets/experience/bioDesign/BioDesign Intership.jpg";
import biodesign2 from "./assets/experience/bioDesign/BioDesign Internship2.jpg";
import biodesign3 from "./assets/experience/bioDesign/BioDesign Internship 3.jpg";

import gracemed1 from "./assets/experience/graceMedical/Gracemedical logo.png"
import gracemed2 from "./assets/experience/graceMedical/Grace Medical Internship 2.jpg"
import gracemed3 from "./assets/experience/graceMedical/Grace Medical Internship3.jpg"

import exactech1 from "./assets/experience/exactech/exactech1.jpeg"

//imports for projects
import bmes1 from "./assets/projects/bmes/bmes1.jpg";
import bmes2 from "./assets/projects/bmes/bmes2.jpg";
import bmes3 from "./assets/projects/bmes/bmes3.jpg";
import bmes4 from "./assets/projects/bmes/bmes4.jpg";

import chess1 from "./assets/projects/interactiveChess/photo1.jpg";
import chess2 from "./assets/projects/interactiveChess/photo2.jpg";
import chess3 from "./assets/projects/interactiveChess/photo3.jpg";
import chess4 from "./assets/projects/interactiveChess/photo4.jpg";
import chess5 from "./assets/projects/interactiveChess/photo5.png";
import chess6 from "./assets/projects/interactiveChess/photo6.jpg";
import chess7 from "./assets/projects/interactiveChess/photo7.jpg";
import chess8 from "./assets/projects/interactiveChess/photo8.jpg";

import choc1 from "./assets/projects/designer/photo1.jpg";
import choc2 from "./assets/projects/designer/photo2.png";
import choc3 from "./assets/projects/designer/photo3.png";
import choc4 from "./assets/projects/designer/photo4.png";

import flux1 from "./assets/projects/fluxFlow/photo1.jpg";
import flux2 from "./assets/projects/fluxFlow/photo2.jpg";
import flux3 from "./assets/projects/fluxFlow/photo3.jpg";
import flux4 from "./assets/projects/fluxFlow/photo4.png";
import flux5 from "./assets/projects/fluxFlow/photo5.png";
import flux6 from "./assets/projects/fluxFlow/photo6.jpg";

import maze1 from "./assets/projects/mazeRacing/photo1.jpeg";
import maze2 from "./assets/projects/mazeRacing/photo2.jpeg";
import maze3 from "./assets/projects/mazeRacing/photo3.jpeg";

import thetatau1 from "./assets/projects/thetatau/thetatau1.jpg";
import thetatau2 from "./assets/projects/thetatau/thetatau2.jpg";

import sd1 from "./assets/projects/seniorDesign/sd1.jpeg";
import sd2 from "./assets/projects/seniorDesign/sd2.jpeg";
import sd5 from "./assets/projects/seniorDesign/sd5.jpg";
import sd6 from "./assets/projects/seniorDesign/sd6.jpg";
import sd7 from "./assets/projects/seniorDesign/sd7.jpg";
import sd9 from "./assets/projects/seniorDesign/sd9.jpg";

import cad1 from "./assets/projects/solidworkPrints/photo1.jpg";
import cad2 from "./assets/projects/solidworkPrints/photo2.jpg";
import cad3 from "./assets/projects/solidworkPrints/photo3.png";
import cad4 from "./assets/projects/solidworkPrints/photo4.jpg";

import ADM1 from "./assets/projects/adm/adm1.jpg";
import ADM2 from "./assets/projects/adm/adm2.jpg";
import ADM3 from "./assets/projects/adm/adm3.jpg";

export const data = {
  home: {
    title: "Lauren Paffrath",
    subtitle: "Passionate Biomedical Engineer driven to innovate at the intersection of engineering and healthcare. ",
    about: [
      "Witnessing open-heart surgery inspired my passion for engineering innovations that advance health care. I’m an M.Eng student in Medical Technology Design at Duke University with a B.S. in Mechanical Engineering from UCF.",
      "Through product development internships at Exactech and Grace Medical, I designed and iterated surgical instruments and implants, collaborating with cross-functional teams to enhance functionality, manufacturability, and usability. My research and senior design projects span assistive robotics, rehabilitation devices, and MRI-guided surgical systems.",
      "This website highlights my recent projects, professional experience, and research in medical devices.",
      "Specialties: CAD (SolidWorks | NX Siemens | Fusion) • Prototyping • DFM • Technical Writing • Excel • Python • MATLAB",
    ],
    pictures: [home_picture, about_picture],
    resume: resume,
    email: "lauren.g.paffrath@gmail.com",
    linkedin: "https://www.linkedin.com/in/lauren-paffrath",
  },
  research: {
    title: "Research",
    itemList: [
      {
        name: "Honors Undergraduate Thesis",
        path: "thesis",
        images: [thesis1, thesis2, thesis3, thesis4, thesis5, thesis6],
        description:
          "Throughout my Honors Undergraduate Thesis, I spearheaded the development of an assistive device that couples the arms to the ankle to aid with plantarflexion during push-off. To investigate gait patterns and results, I conducted a pilot study using EMG and IMU, and analyzed the data with Matlab. Additionally, I created and prototyped parts for the assistive rehab system, including pulleys, using SolidWorks and 3D printing.",
      },
      {
        name: "Conferences",
        path: "conferences",
        images: [conf1, conf2, conf3],
        description:
          "In October 2022, I attended the Biomedical Engineering Society Annual Conference in San Antonio, where I presented a poster on the safety analysis of a tissue retraction ring for knee arthroplasty, highlighting my design innovations aimed at protecting surrounding tissue. In 2021, I attended BMES in Orlando to stay updated on the latest advancements in biomedical engineering technologies. At the Microsurgery Conference, I presented a publication on the design and analysis of a semi-robotic tool support system for laparoscopic surgery. I lectured to an audience of over 20 surgeons, discussing the development of a pedal-controlled system that enables the secure positioning and locking of laparoscopic instruments to enhance precision.",
      },
      {
        name: "ALICE Experiment",
        path: "amelias-experiment",
        images: [alice1, alice2, alice3],
        description:
          "I had the opportunity to participate in a pilot study in a master's thesis on the effects of the Arm-Leg Interactive Coupling Exosuit (ALICE). Throughout the sessions, I wore a metabolic rate mask, IMU (Inertial Measurement Unit), EMGs (Electromyography sensors), and pressure insoles to collect comprehensive data. It was an incredible experience to contribute to innovative biomedical engineering technology as a participant in this study.",
      },
      {
        name: "Interventional Robotics Lab",
        path: "interventional-robotics-lab",
        images: [irl2, irl1],
        description:
          "In the Innovational Robotics Lab, I pioneered advanced methods to develop an autonomous system for drilling and performing knee arthroplasty. I managed the entire design process, encompassing research, brainstorming, and rapid prototyping, and used SolidWorks and 3D printing to test the prototypes. Additionally, I designed and constructed a 4-degree-of-freedom robotic manipulator for MRI-guided prostate needle biopsy, programming four rotational disks in Python to enhance accuracy by tracking and precisely locating target coordinates based on MRI guidance. Throughout my time at the lab, I attended three conferences and conducted two comprehensive experiments.",
      },
      {
        name: "WEAR Lab",
        path: "wear-lab",
        images: [wear1, wear2],
        description:
          "During my time in the WEAR Lab, I contributed to two projects: WULL (Work Sharing of the Upper and Lower Limbs) and HAULC (Human Augmentation via Upper Lower-Body Cooperation). In WULL, our focus was on developing a mechanical pathway to transfer upper limb motion and force to the lower limbs. My role involved designing the mechanical mechanism to connect the shoulder to the hip, where we explored various pulley techniques to achieve our goals effectively. Meanwhile, in HAULC, I concentrated on designing an ankle mechanism that could link the ankle to the hip and hand, enabling the cables to pull effectively. The objective of HAULC was to create an exoskeleton suit that allows users to use cables connected to the heels to rotate the ankle joint in the plantarflexion direction, enhancing mobility and functionality.",
      },
    ],
  },
  experience: {
    title: "Experience",
    itemList: [
        {
            name: "Product and Development Engineering Internship with Exactech",
            tabname: "Exactech",
            images: [exactech1],
            description: "During my internship at Exactech, I developed and executed a simulated use validation protocol for a cadaver lab study with eight orthopedic surgeons. I designed a tibial reamer in NX Siemens featuring a detachable, stackable mechanism and incorporated design-for-manufacturing principles to optimize metal machining. I also authored quality management system design control documentation, including technical reports, protocols, and gap analyses of ISO and ASTM standards. Additionally, I streamlined inspection processes by coordinating updates among vendors, drafting, and quality teams to ensure precise and consistent GD&T specifications on engineering prints."
          },
        {
            name: "Product and Development Engineering Internship with Grace Medical",
            tabname: "Grace Medical",
            images: [gracemed1, gracemed2, gracemed3],
            description: "During my Grace Medical Internship, I revised SolidWorks models and drawings of ear implants and tubes while concurrently writing an engineering report. I developed a technique for laser welding exotic alloys used in implants, enhancing their manufacturability. I designed and manufactured a Tympanic Membrane Simulator to enable new product Design Validation of ear tubes. I participated in the implant trial at UT's cadaver lab, observing the product's functionality in cadaver specimens. I produced 3D printed and injection silicone molded models of ear anatomy and the tympanic membrane for marketing purposes. Additionally, I created and modified multiple engineering reports, COs, drawings, and controlled documents within the QMS. I conducted testing on novel manufacturing processes, compiling and presenting results in a comprehensive report. I utilized microscopes to assess implants and operated lathes, laser welders, and various machinery for manufacturing processes."
        },
        {
            name: "BioDesign Clinical Immersion Internship",
            tabname: "BioDesign",
            images: [biodesign1, biodesign2, biodesign3],
            description: "At the BioDesign Clinical Immersion Internship, I attended Hanger’s Clinic, Orlando Health, and Brooke’s Rehab. Here, I collaborated with physical therapists and patients to identify clinical needs and translate them into practical solutions. I brainstormed 110 engineering design ideas aimed at addressing and enhancing the challenges faced by clinicians in their daily practice. Additionally, we tried various types of physical therapy equipment, as seen in the accompanying images, to better understand their functionality and identify potential areas for improvement."
        }
    ]
  },
  projects: {
    title: "Projects",
    itemList: [
      {
        name: "Redesign Cystoscope Project",
        path: "admclass",
        images: [ADM1, ADM2, ADM3],
        description:
          `Cystoscopes allow physicians to visualize the urinary bladder through the urethra, but existing designs are often outdated and uncomfortable to handle. I developed a redesigned cystoscope with improved ergonomics to enhance comfort and maneuverability for clinicians. The new form also features a non-threatening aesthetic suitable for use with conscious patients.
           The device design incorporated several functional requirements, including a power connection, inlet and outlet tubing for water flow, a flow valve control mechanism, and a module housing a photon engine for imaging.
           To guide the design process, I began by creating a mood board to establish the desired aesthetic direction, followed by sketching and clay modeling to explore form and ergonomics. The final model was developed in Fusion 360, incorporating draft angles to enable low-cost injection molding.`,
      },
      {
        name: "Senior Design Project - PAEX",
        path: "senior-design",
        images: [sd1, sd2, sd6, sd5, sd7, sd9],
        description:
          "As the team lead on the Push Assistive Exoboot (PAEX) senior design project, I oversaw the development of an advanced foot orthotic designed to assist individuals with gastrocnemius and ankle deficiencies in walking. My responsibilities included researching ankle-foot orthotic mechanisms to identify and select optimal components for the design process. I also managed the electrical aspects of the project, currently evaluating electrical components, motors, drivers, control boards, and pressure sensors to enable gait detection algorithms for the AFO. I lead the wiring and coding efforts with my team. Additionally, I organized weekly meetings to establish clear objectives, set goals, and delegate assignments for a team of five.",
      },
      {
        name: "Biomedical Engineering Society",
        path: "bmes-events",
        images: [bmes1, bmes2, bmes3, bmes4],
        description:
          "During my time as an Executive in the Biomedical Engineering Society (BMES), I organized a CAD workshop in collaboration with the UCF Engineering in Medicine club. This workshop aimed to teach students how to use SolidWorks effectively. Additionally, I coordinated talks by three professors to discuss UCF research initiatives and arranged a tour of the BRaIN Lab's motion capture system, providing members with valuable insights into cutting-edge technologies and research methodologies.",
      },
      {
        name: "Interactive Chess Board",
        path: "interactive-chess-board",
        images: [
          chess4,
          chess2,
          chess3,
          chess1,
          chess8,
          chess6,
          chess7,
          chess5,
        ],
        description:
          "The Interactive Chess Board is an innovative game featuring a 3D-printed robotic arm that moves chess pieces using a solenoid. The solenoid's magnetic field interacts with the ferromagnetic cores—iron fillings—inside the chess pieces, enabling precise movement around the board. This magnetic field not only facilitates piece manipulation but also introduces a unique release mechanism. Currently in its preliminary stages, the project offers multiple future directions, such as developing AI capabilities for the robotic arm to autonomously decide moves or implementing a panel control system. The continuation of this project promises to enhance future modules with a cutting-edge experience.",
      },
      {
        name: "Chocolate Digital Dessert Designer",
        path: "chocolate-digital-dessert-designer",
        images: [choc1, choc2, choc3, choc4],
        description:
          "The Digital Dessert Designer is a tool that allows chefs to print intricate designs and patterns on cakes, cookies, and other decoratable foods. This culinary 3D printer features an extruder attached to a servo motor that moves in a radial motion. Users can program the speed of the extruder’s movement and control the rate of extrusion. Together, my partner and I built this innovative culinary experience, transforming the way chefs create edible art.",
      },
      {
        name: "Maze Racing",
        path: "maze-racing",
        images: [maze1, maze2, maze3],
        description:
          "Robot Maze Racing was a project created for a UCF engineering competition, where our team competed in navigating random and unique mazes. Given only five minutes to study the course design before each run, we swiftly coded turns and bumper sensor responses in C language. Our efforts resulted in a 3rd place finish among 350 competing teams, demonstrating our ability to adapt and innovate under pressure.",
      },
      {
        name: "Flux Flow",
        path: "flux-flow",
        images: [flux1, flux2, flux3, flux4, flux5, flux6],
        description:
          "Flux Flow establishes direct communication between a person's presence and specific room air conditioning. As an individual moves between rooms, the air conditioning adjusts to their location, guided by location sensors that detect light presence in each room. I wired the connections between the light sensors and air ducts to control the airflow panels, while my partner focused on the design aspect. This innovative system conserves energy and reduces costs for homeowners by directing air only where it is needed, maintaining a continuous and efficient airflow throughout the house.",
      },
      {
        name: "CAD projects",
        path: "cad-projects",
        images: [cad1, cad2, cad3, cad4],
        description:
          "A personal project to explore Solidwork modeling and 3D printing.",
      },
    ],
  },
};
