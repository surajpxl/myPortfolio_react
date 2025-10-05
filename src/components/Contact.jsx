// File: Contact.jsx

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 w-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 underline mt-6">
          Contact Me
        </h2>
        <p className="text-center text-lg mt-2 text-gray-600 mb-8">
          If you have any questions or would like to get in touch, feel free to
          send me a message using the form below.
        </p>

        <form
          action="https://formspree.io/f/mvgkjvvj"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center space-y-2">
          <p className="text-lg text-gray-800">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:guptasuraj4455@gmail.com"
              className="text-blue-600 hover:underline"
            >
              guptasuraj4455@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-800">
            <strong>Phone:</strong>{" "}
            <a href="tel:+9119614132" className="text-blue-600 hover:underline">
              +91 9119614132
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
