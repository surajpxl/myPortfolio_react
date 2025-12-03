// File: Footer.jsx

const Footer = () => {

  const currentDate = new Date()
  const year = currentDate.getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <span className="text-sm">
        Created By{" "}
        <a
          href="https://www.linkedin.com/in/suraj-gupta-profilepxl"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          codexsuraj
        </a>{" "}
        | <span className="inline-block align-middle">&copy;</span> {year} All
        rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
