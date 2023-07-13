import React from "react";
import "../assets/contact.css";
function Contactus() {
  return (
    <div>
      <section class="hidden">
        <div class="contactUs" id="Contactus">
          <div class="title">
            <h2>GET IN TOUCH</h2>
          </div>
          <div class="box-contact">
            <div class="contact form">
              <h3>Send a Message</h3>
              <form>
                <div class="formBox">
                  <div class="row50">
                    <div class="inputBox">
                      <span>First Name</span>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="inputBox">
                      <span>Last Name</span>
                      <input type="text" placeholder="" />
                    </div>
                  </div>

                  <div class="row50">
                    <div class="inputBox">
                      <span>Email-Address</span>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="inputBox">
                      <span>Mobile</span>
                      <input type="text" placeholder="" />
                    </div>
                  </div>

                  <div class="row100">
                    <div class="inputBox">
                      <span>Message</span>
                      <textarea placeholder="write your message "></textarea>
                    </div>
                  </div>

                  <div class="row100">
                    <div class="inputBox">
                      <input type="submit" value="send" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- InfoBox --> */}
            <div class="contact info">
              <h3>My Contact info</h3>
              <div class="infoBox">
                <div>
                  <span>
                    <ion-icon name="person"></ion-icon>{" "}
                  </span>

                  <p>Sricha Parajuli</p>
                </div>
                <div>
                  <span>
                    {" "}
                    <ion-icon name="pin"></ion-icon>{" "}
                  </span>
                  <p>
                    Itahari,Sunsari
                    <br />
                    Nepal
                  </p>
                </div>

                <div>
                  <span>
                    {" "}
                    <ion-icon name="chatboxes"></ion-icon>{" "}
                  </span>
                  <a href="sricha.com">Shrichaparajuli6@gmail.com</a>
                </div>

                {/* <!-- Social media --> */}
                <ul class="sci">
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
                  {/* <!-- <li>
                  <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                </li> --> */}
                </ul>
              </div>
            </div>
            {/* <!-- maps --> */}
            <div class="contact map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.5287841371996!2d87.2692288!3d26.663565800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c6ff4fddfeb%3A0x101be3308e36e8a2!2sTirupati%20Auto%20City%20(Yamaha%20Showroom)!5e0!3m2!1sen!2snp!4v1685707687007!5m2!1sen!2snp"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
