import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">
          © {new Date().getFullYear()} GravityWrite —
          <a
            href="https://www.gravitywrite.com"
            className="text-white ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GravityWrite
          </a>
        </p>
        {/* Additional footer links or information */}
      </div>
    </footer>
  );
};

export default Footer;
