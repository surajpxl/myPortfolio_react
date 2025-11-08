"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setToast({ message: "✅ Message sent successfully!", type: "success" });
      form.reset();
    } else {
      setToast({ message: "❌ Oops! Something went wrong.", type: "error" });
    }

    // Hide popup after 4 seconds
    setTimeout(() => setToast({ message: "", type: "" }), 4000);
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 py-16 w-screen overflow-hidden relative"
    >
     {/*Toast Popup  */}
      <AnimatePresence>
        {toast.message && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium ${
              toast.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 underline mt-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-lg mt-2 text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          If you have any questions or would like to get in touch, feel free to
          send me a message using the form below.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mvgkjvvj"
          method="POST"
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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

          <motion.button
            type="submit"
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-12 text-center space-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
