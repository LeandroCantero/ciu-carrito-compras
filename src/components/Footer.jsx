import React from "react";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 w-full">
        <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
          <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
            <span>© 2023 Copyright: </span>
            <a className="text-neutral-800 dark:text-neutral-400" href="/">
              Tienda de autos
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
