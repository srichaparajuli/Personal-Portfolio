import React from "react";
import "../assets/footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <ul class="social_icon">
          <li>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>

        <div class="menu">
          <ul>
            <li>
              <a href="index.html"> Home </a>
            </li>
            <li>
              <a href="#about"> About Me </a>
            </li>
            <li>
              <a href="#section"> Services </a>
            </li>
            {/* <!-- <li><a href="/"> Project </a></li> --> */}
            <li>
              <a href="#Contactus"> Contact Me</a>
            </li>
          </ul>
        </div>

        <div class="footer-down">
          www.srichaportfolio.com | All right reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;
