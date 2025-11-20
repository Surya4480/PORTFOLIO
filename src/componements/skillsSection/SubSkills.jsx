import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SubSkills = () => {
  return (
    <motion.section
      variants={fadeIn("left")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-[1200px] mx-auto px-4 py-20 z-40"
    >
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Additional Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: "Frontend", skills: ["Next.js", "Vue.js", "Sass", "Bootstrap"] },
            { category: "Backend", skills: ["Python", "Django", "PostgreSQL", "Redis"] },
            { category: "Tools", skills: ["Docker", "AWS", "Figma", "VS Code"] },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700"
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SubSkills;
