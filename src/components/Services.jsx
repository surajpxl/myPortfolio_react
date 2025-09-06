import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Designing",
    description:
      "Crafting visually appealing and user-friendly website designs tailored to your needs.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
    icon: "fas fa-laptop-code text-blue-600",
  },
  {
    title: "Website Maintenance",
    description:
      "Ensuring your website stays updated, secure, and performs optimally at all times.",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
    icon: "fas fa-tools text-green-600",
  },
  {
    title: "Freelance Projects",
    description:
      "Offering flexible and professional freelance services to bring your ideas to life.",
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300",
    icon: "fas fa-briefcase text-yellow-600",
  },
];

const Services = () => {
  return (
    <section
      className="w-full min-h-screen md:min-h-0 lg:h-180 bg-gray-300 py-16 px-4"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold underline text-center my-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.7 }} // zoomed out
              whileInView={{ opacity: 1, scale: 1 }} // zoom in
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-6">
                <i className={`${service.icon} text-3xl mb-4`}></i>
                <div className="font-semibold text-xl mb-2">
                  {service.title}
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
