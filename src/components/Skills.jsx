// File: Skills.jsx

const skills = [
    { name: "React Js", level: "65%" },
    { name: "JavaScript", level: "80%" },
    { name: "HTML5", level: "90%" },
    { name: "Tailwind CSS", level: "75%" },
    { name: "MongoDB", level: "60%" },
    { name: "Git & Github", level: "85%" },
    { name: "MySQL", level: "70%" },
  ];
  
  const Skills = () => {
    return (
      <section
        className="w-full min-h-screen sm:min-h-0 md:min-h-0 lg:h-180 bg-gray-300 py-16 px-4"
        id="skills"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold underline text-center my-12">
            My Skills
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                My creative skills & experiences.
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                "I bring creative flair and extensive experience to HTML, CSS,
                JavaScript, and React development, crafting visually stunning and
                interactive web experiences that engage users and exceed
                expectations."
                <br />
                <br />
                I also leverage SQL expertise to seamlessly integrate data-driven
                features into web applications.
              </p>
              <a
                href="https://github.com/surajpxl"
                className="inline-block mt-8 px-6 py-2 border-2 border-red-600 bg-gray-600 text-white rounded-lg hover:bg-transparent hover:text-red-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
  
            {/* Right Column: Skills Bars */}
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm  text-gray-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-red-600 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  