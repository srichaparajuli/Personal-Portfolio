import React from "react";
import "../assets/services.css";
import { GrServices, GrPersonalComputer, GrWorkshop } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { BsFillDisplayFill } from "react-icons/bs";
function Services() {
  return (
    <div>
      <section class="hidden">
        <div class="section-service" id="section">
          <div class="title">
            <h1>Our Services</h1>
          </div>
          <div class="services">
            <div class="card">
              <div class="icons">
                {/* <BsFillDisplayFill /> */}
                <GrPersonalComputer />
              </div>
              <h2>Web Development</h2>
              {/* <img class="image-web" src="../img/lo.png" alt="" /> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                dicta, modi aliquid sunt nostrum voluptatem maxime? Debitis est
                vel facilis, veniam dignissimos suscipit provident dolore
                ducimus voluptatem quis quisquam nisi!
              </p>
              <a href="" class="button">
                Read More
              </a>
            </div>

            <div class="card">
              <div class="icons">
                <GrServices />
              </div>
              <h2>Project Management</h2>
              {/* <img class="image-service" src="../img/Developer.png" alt="" /> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                dicta, modi aliquid sunt nostrum voluptatem maxime? Debitis est
                vel facilis, veniam dignissimos suscipit provident dolore
                ducimus voluptatem quis quisquam nisi!
              </p>
              <a href="" class="button">
                Read More
              </a>
            </div>

            <div class="card">
              <div class="icons">
                {/* <MdDesignServices /> */}
                <GrWorkshop />
              </div>
              <h2>UI/UX</h2>
              {/* <img class="image-ui" src="../img/uii.png" alt="" /> */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                dicta, modi aliquid sunt nostrum voluptatem maxime? Debitis est
                vel facilis, veniam dignissimos suscipit provident dolore
                ducimus voluptatem quis quisquam nisi!
              </p>
              <a href="" class="button">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
