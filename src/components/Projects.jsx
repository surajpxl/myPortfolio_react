// File: Projects.jsx

const projects = [
    {
      title: "Weather App",
      description:
        "A web application that provides real-time weather updates for any location using APIs.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
      link: "https://weather-soft.netlify.app/",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce platform with features like product listing, cart, and checkout.",
      image:
        "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
      link: "https://suraj-ecommerce.netlify.app/",
    },
    {
      title: "Currency Converter",
      description:
        "A tool to convert currencies in real-time using live exchange rates from APIs.",
      image:
        "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
      link: "https://currency-co.netlify.app/",
    },
    {
      title: "Password Generator",
      description:
        "A secure password generator tool that creates strong and unique passwords to enhance online security.",
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KDUWoSI8R4I4VKTgHtSacQ.png",
      link: "https://pass-genre.netlify.app/",
    },
  ];
  
  const Projects = () => {
    return (
      <section className="projects w-screen min-h-screen bg-gray-50 py-16" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
          <h2 className="title text-3xl font-bold text-center my-12">My Projects</h2>
          <div className="projects-content grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="project-card bg-white  shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  