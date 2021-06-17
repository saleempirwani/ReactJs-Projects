import React from "react";

function Footer() {
  return (
    <div
      className={
        window.innerWidth > 600
          ? "fixed-bottom p-2 bg-dark text-left text-white"
          : "mt-5 p-2 bg-dark text-white text-left"
      }
    >
      Copyright &copy; {year()}, Muhammad Saleem Raza
    </div>
  );
}

export default Footer;

const year = () => new Date().getFullYear();
