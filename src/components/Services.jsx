import React from 'react';

const Services = () => {
  return (
    <section
      className="w-full min-h-screen md:min-h-0 lg:h-180 bg-gray-50 py-16 px-4"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold underline  text-center my-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300"
              alt="Website Designing"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-6">
              <i className="fas fa-laptop-code text-blue-600 text-3xl mb-4"></i>
              <div className="font-semibold text-xl mb-2">Website Designing</div>
              <p className="text-gray-600">
                Crafting visually appealing and user-friendly website designs tailored to your needs.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div  id='maint' className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300"
              alt="Website Maintenance"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-6">
              <i className="fas fa-tools text-green-600 text-3xl mb-4"></i>
              <div className="font-semibold text-xl mb-2 ">Website Maintenance</div>
              <p className="text-gray-600">
                Ensuring your website stays updated, secure, and performs optimally at all times.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div id='free' className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=300"
              alt="Freelance Projects"
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-6">
              <i className="fas fa-briefcase text-yellow-600 text-3xl mb-4"></i>
              <div className="font-semibold text-xl mb-2">Freelance Projects</div>
              <p className="text-gray-600">
                Offering flexible and professional freelance services to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
