import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const handleLinkClick = () => {
    
  };
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-10" />
              <span>SK-SPACE</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                <a
        href="https://www.encyclopedia.com/computing/news-wires-white-papers-and-books/satellite-technology"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >Technology</a>
                </li>
                <li>
                <a
        href="https://en.wikipedia.org/wiki/Milky_Way"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >Galaxy</a>
                </li>
                <li>
                <a
        href="https://en.wikipedia.org/wiki/List_of_Indian_satellites"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >Satelite</a>
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
