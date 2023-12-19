import React from "react";
import "../assets/index.css";
import Aboutus from "./About";
import Services from "./Services";
import Contactus from "./Contactus";
import Footer from "./Footer";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Index() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

  });
  return (
    <div>
      <navbar />
      <section className="firstsection">
        <div className="leftsection">
          Hi,I'm <span className="purple">Sricha Parajuli</span>
          <div>and I am a passionate</div>
          <span id="element">Web Developer</span>
          <div>
            <div class="icons">
              <li>

                <Link to=""> <FaFacebook /></Link>

              </li>
              <li>

                <Link to=""><FaInstagram /> </Link>

              </li>
              <li>
                <Link to=""><FaLinkedin /> </Link>


              </li>
            </div>
          </div>
        </div>

        <div className="home-image">
          <div className="rightsection">
            <img src="./img/me2.png" alt="" />
            {/* <img src="./images/MT-15.PNG" className="" /> */}
          </div>
          <div className="liquid-shape">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <path fill="#8d1bf8">
                <animate
                  attributeName="d"
                  dur="20000ms"
                  repeatCount="indefinite"
                  values="
              M312.5,355.5Q128,461,131.5,255.5Q135,50,316,150Q497,250,312.5,355.5Z;
             
               "
                ></animate>
              </path>
            </svg>
          </div>
          <div className="liquid-shape">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              ondragover="hidden"
              id="blobSvg"
            >
              <path fill="#8d1bf8">
                <animate
                  attributeName="d"
                  dur="20000ms"
                  repeatCount="indefinite"
                  values="
              M312.5,355.5Q128,461,131.5,255.5Q135,50,316,150Q497,250,312.5,355.5Z;
               "
                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </section>
      <hr />
      <Aboutus />
      <Services />
      <Contactus />
      <Footer />
    </div>
  );
}

export default Index;
