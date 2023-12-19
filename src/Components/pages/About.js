import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../assets/about.css";

function About() {
  function personaldata(a) {
    if (a == 1) {
      document.getElementById("personal").style.display = "block";
      document.getElementById("Address").style.display = "none";
    } else {
      document.getElementById("personal").style.display = "none";
      document.getElementById("Address").style.display = "block";
    }
  }

  return (
    <div>
      <navbar />
      <section class="hidden">
      <div id="aboutUs">
        <img src="../img/me1.jpg" alt="computer user"/>
        <div class="content">
            <h2>About Me</h2>
            <h4>WEB DEVELOPER </h4>
            <p class="description">
                I am a Front-end web developer. I can provide clean code and pixel perfect design. I also make the
                website more & more interactive with web animations. I can provide clean code and pixel perfect. I also
                make the website more & more interactive with web animations. A responsive design makes your website
                accessible to all users. regardless of their device.
            </p>
            <button class="btnn">Hire Me</button>
        </div>
    </div>
      </section>

      
{/* <section className="about" id="about">
        <div class="about-img">
             <img src="../img/me1.jpg" alt="" className="aboutHero"/>
            
            <div class="showcase-ring">
              
            </div>
        </div>
        <div class="about-content">
            <h2 class="heading">About Me</h2>
            <h3>3 Year's Experience on Product Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatem autem ex in. Temporibus et maiores ipsum recusandae voluptas consequatur!</p>
           
            </div>
            <div class="cvContent">
                <a href="img/resume.pdf" target="_blank" class="btn d-CV">Download CV <i class='bx bx-download'></i></a>
            </div>
      
 

    </section> */}



      {/* education */}
      <div class="button mt-3 text-center">
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={() => personaldata(1)}
          data-toggle="modal"
          data-target="#personal"
        >
          Work EXPERIENCE
        </button>

        <button
          type="button"
          class="btn btn-outline-info"
          // onClick="personaldata(2)"
          onClick={() => personaldata(2)}
          // onClick={() => this.PersonalData(2)}
          data-toggle="modal"
          data-target="#Address"
        >
          EDUCATION
        </button>
      </div>
      {/* work experience */}
      <section class="hidden">
        {/* <section class="secondSection" id="personal">
          <span class="text-grey">What I have done so far</span>
          <h1>WORK EXPERIENCE</h1>
          <div class="box">
            <div class="vertical">
              <img class="image-top" src="../img/working.png" alt="" />
              <div class="vertical-title">Canva Designer()</div>
              <div class="vertical-desc">
                I began my web development journey by immersing myself in the
                creative process of designing and crafting unique logos using
                Canva. This allowed me to explore various styles and experiment
                with different elements, honing my skills in visual aesthetics.
                It served as a stepping stone towards my broader goal of
                becoming a proficient web developer.
              </div>
            </div>

            <div class="vertical">
              <img class="image-top" src="../img/working.png" alt="" />
              <div class="vertical-title">Web Developer(2021-2022)</div>
              <div class="vertical-desc">
                My interest in web programming grew even stronger as I began my
                Bachelor's degree in IT. I dabbled in HTML and CSS, creating
                interesting site designs and entertaining games. I also took the
                initiative to create my own portfolio utilizing HTML, CSS, and
                JavaScript. This was a crucial milestone in my web development
                path because it allowed me to showcase my talents and projects
                to potential companies and clients.
              </div>
            </div>
            <div class="vertical">
              <img class="image-top" src="../img/working.png" alt="" />
              <div class="vertical-title">Internship(2021-2022)</div>
              <div class="vertical-desc">
                During my internship at Technology Solution Nepal, I gained
                valuable experience working on diverse projects that encompassed
                a wide range of technologies. I honed my skills in HTML, CSS,
                Bootstrap, JavaScript, jQuery, React, and .NET through hands-on
                assignments. This expands my expertise in web development and
                enhancing my understanding of these essential tools and
                frameworks.
              </div>
            </div>
            <div class="vertical">
              <img class="image-top" src="../img/working.png" alt="" />
              <div class="vertical-title">freelancing(2021-2024)</div>
              <div class="vertical-desc">
                I undertook numerous freelance projects in my local area,
                including the development of a website for Tirupati Auto City.
                Through these projects, I gained practical experience in
                creating functional and visually appealing websites. These
                experiences not only enhanced my web development skills but also
                strengthened my ability to effectively communicate and
                collaborate with clients to achieve their desired outcomes.
              </div>
            </div>
          </div>
        </section> */}
        
<section class="timeline-section" id="personal">
	<div class="timeline-items">
  What I have done so far
		<div class="timeline-item">
			<div class="timeline-dot"><img class="image-top" src="../img/working.png" alt="" /></div>
			<div class="timeline-date">2019</div>
			<div class="timeline-content">
				<h3>Canva Designer</h3>
				<p>I began my web development journey by immersing myself in the
                creative process of designing and crafting unique logos using
                Canva. This allowed me to explore various styles and experiment
                with different elements, honing my skills in visual aesthetics.
                It served as a stepping stone towards my broader goal of
                becoming a proficient web developer. </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"><img class="image-top" src="../img/working.png" alt="" /></div>
			<div class="timeline-date">2021</div>
			<div class="timeline-content">
				<h3>Web Developer</h3>
				<p>My interest in web programming grew even stronger as I began my
                Bachelor's degree in IT. I dabbled in HTML and CSS, creating
                interesting site designs and entertaining games. I also took the
                initiative to create my own portfolio utilizing HTML, CSS, and
                JavaScript. This was a crucial milestone in my web development
                path because it allowed me to showcase my talents and projects
                to potential companies and clients. </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"><img class="image-top" src="../img/working.png" alt="" /></div>
			<div class="timeline-date">2022</div>
			<div class="timeline-content">
				<h3>InternShip</h3>
				<p>  During my internship at Technology Solution Nepal, I gained
                valuable experience working on diverse projects that encompassed
                a wide range of technologies. I honed my skills in HTML, CSS,
                Bootstrap, JavaScript, jQuery, React, and .NET through hands-on
                assignments. This expands my expertise in web development and
                enhancing my understanding of these essential tools and
                frameworks. </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"><img class="image-top" src="../img/working.png" alt="" /></div>
			<div class="timeline-date">PRESENT</div>
			<div class="timeline-content">
				<h3>Freelancing</h3>
				<p>I undertook numerous freelance projects in my local area,
                including the development of a website for Tirupati Auto City.
                Through these projects, I gained practical experience in
                creating functional and visually appealing websites. These
                experiences not only enhanced my web development skills but also
                strengthened my ability to effectively communicate and
                collaborate with clients to achieve their desired outcomes. </p>
			</div>
		</div>
		
	</div>
</section>
      </section>

      {/* Eduaction  */}
      <section class="hidden">
        {/* <section class="secondSection" id="Address">
          <span class="text-grey">My Education Qualification</span>
          <h1>EDUCATION</h1>
          <div class="box">
            <div class="vertical">
              <img class="image-top" src="../img/education.png" alt="" />
              <div class="vertical-title">School (2021-2022)</div>
              <div class="verticaltitle-name">
                <p>Nepal DVM academy</p>
              </div>
              <div class="vertical-desc">
                I completed my schooling at Nepal DVM School, where I received
                my primary education.
              </div>
            </div>

            <div class="vertical">
              <img class="image-top" src="../img/education.png" alt="" />
              <div class="vertical-title">Higher Education (2021-2022)</div>
              <div class="verticaltitle-name">
                <p>Sushma Godawari College</p>
              </div>
              <div class="vertical-desc">
                I obtained my higher education from Sushma Memorial College,
                focusing primarily on science as my major subject.
              </div>
            </div>
            <div class="vertical">
              <img class="image-top" src="../img/education.png" alt="" />
              <div class="vertical-title">Bachelore (2021-2022)</div>
              <div class="verticaltitle-name">
                <p>Itahari international college</p>
              </div>
              <div class="vertical-desc">
                I obtained my Bachelor's degree in Information Technology from
                Itahari International College.
              </div>
            </div>
            <div class="vertical">
              <img class="image-top" src="../img/education.png" alt="" />
              <div class="vertical-title">Masters</div>
              <div class="verticaltitle-name">
                <p>Itahari international college,Usa</p>
              </div>
              <div class="vertical-desc">
                This educational experience equipped me with the necessary
                knowledge and skills to thrive in the field of Information
                Technology.
              </div>
            </div>
          </div>
        </section> */}
        <section class="timeline-section" id="Address">
	<div class="timeline-items">
  My Education Qualification
		<div class="timeline-item">
			<div class="timeline-dot"> <img class="image-top" src="../img/education.png" alt="" /></div>
			<div class="timeline-date">2019</div>
			<div class="timeline-content">
				<h3>Schooling</h3>
				<p> I completed my schooling at Nepal DVM School, where I received
                my primary education.
 </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"> <img class="image-top" src="../img/education.png" alt="" /></div>
			<div class="timeline-date">2021</div>
			<div class="timeline-content">
				<h3>Higher Education</h3>
				<p> I obtained my higher education from Sushma Memorial College,
                focusing primarily on science as my major subject. </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"> <img class="image-top" src="../img/education.png" alt="" /></div>
			<div class="timeline-date">2022</div>
			<div class="timeline-content">
				<h3>Bachelor Degree</h3>
				<p>   I obtained my Bachelor's degree in Information Technology from
                Itahari International College.</p>
			</div>.
		</div>
	
		</div>
		
	
</section>
      </section>
    </div>
  );
}

export default About;
