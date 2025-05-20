import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-500 pt-6 pb-4 mt-2">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
