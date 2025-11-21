import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Netfix",
    year: "Mar2023",
    align: "right",
    image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/Netflix-New-Feature-Audio-Only_1200x768.jpeg?size=690:388",
    link: "#",
  },
  {
    name: "Tic Tac Toe",
    year: "Sept2023",
    align: "left",
    image: "https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU=w480-h960-rw",
    link: "#",
  },
  {
    name: "Amazon",
    year: "Jan2023",
    align: "right",
    image: "https://www.shutterstock.com/image-illustration/seattle-usa-april-5-2023-600nw-2286327737.jpg",
    link: "#",
  },
  // {
  //   name: "coming soon",
  //   year: "#",
  //   align: "left",
  //   image: "#",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
