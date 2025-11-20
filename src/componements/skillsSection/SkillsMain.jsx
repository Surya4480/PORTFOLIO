import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <motion.section
      variants={fadeIn("right")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="skills"
      className="max-w-[1200px] mx-auto px-4 min-h-screen flex items-center justify-center py-20 z-40"
    >
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git",
            "GitHub",
            "Redux",
            "TypeScript",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 text-white rounded-2xl shadow-lg text-center font-semibold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-600"
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="block text-white">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsMain;
