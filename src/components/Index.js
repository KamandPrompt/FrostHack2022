import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Prizes } from "./Prizes";
export const Index = (props) => {
  return (
    <div>
      {/* Home */}
      <div id="home">
        {/* background image */}
        <div className="section-bg hero" data-stellar-background-ratio="0.5">
          {/* /background image */}
          {/* home wrapper */}
          <div className="home-wrapper">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* home content */}
                <div className="col-md-8 col-md-offset-2">
                  <div className="home-content">
                    <h1 className="coming-soon">
                      {/* <br /> */}
                      BIZTHON </h1>
                      <br/>
                      <h3>Presents</h3>
                      <br />
                    <h1>  FROSTHACK
                    </h1>
                    <br /><br />
                    <h4 className="lead">
                      <i className="fas fa-map-marker-alt"> IIT Mandi</i>
                      <br />
                      <i className="fas fa-calendar-day">
                        {" "}
                        20th May - 22nd May 2022
                      </i>
                    </h4>
                    {""}
                    
                    <div>
                      {" "}
                      <br />{" "}
                    </div>
                    <div>
                      {" "}
                      <br />{" "}
                    </div>
                    {/* <div className="apply-button" data-hackathon-slug="frosthack2021" data-button-theme="light" style={{ height: '44px', width: '312px' }} /> */}
                  </div>
                </div>
                {/* /home content */}
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
          {/* /home wrapper */}
        </div>
      </div>
      {/* /Home */}
      {/* About */}
      <div id="about" className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* section title */}
            <div className="section-title">
              <h3 className="title">
                <span>About</span>{" "}
                <span style={{ color: "#dd0a37" }}>Event</span>
              </h3>
            </div>
            {/* /section title */}
            <div className="col-md-8 col-md-offset-2 text-center">
              {/* about content */}
              <div className="about-content">
                <p className="changecolor">
                  FrostHack is an Open Hackathon organized by the student
                  community of IIT Mandi with the goal of solving societal
                  problems by collective collaboration among the students using
                  tech.
                </p>
              </div>
              {/* /about content */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* /container */}
        {/* container */}
        <div className="container" style={{ paddingTop: "4em" }}>
          {/* row */}
          <div className="row tracks" style={{ spacing: "2em" }}>
            {/* section title */}
            <div className="section-title">
              <h5 className="title">
                <span>Tracks</span>{" "}
              </h5>
            </div>
            {/* /section title */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/ai.svg" alt="" />
                <h3 className="mt-3">AI</h3>
              </div>
            </div>
            {/* /track */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/blockchain.svg" alt="" />
                <h3 className="mt-3">Blockchain</h3>
              </div>
            </div>
            {/* /track */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/innovation.svg" alt="" />
                <h3 className="mt-3">General</h3>
              </div>
            </div>
            {/* /track */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/iot.svg" alt="" />
                <h3 className="mt-3">Internet of things</h3>
              </div>
            </div>
            {/* /track */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/web.svg" alt="" />
                <h3 className="mt-3">Web</h3>
              </div>
            </div>
            {/* /track */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/ar-glasses.svg" alt="" />
                <h3 className="mt-3">AR/VR</h3>
              </div>
            </div>
            {/* /track */}
            {/* track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/robot.svg" alt="" />
                <h3 className="mt-3">Chat Bot</h3>
              </div>
            </div>
            {/* /track */}
            <div className="col-sm-3">
              <div className="track">
                <img src="img/mobile-phone.svg" alt="" />
                <h3 className="mt-3">Android/iOS</h3>
              </div>
            </div>
            {/* /track */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
        <Prizes />
        {/* </div> */}
        {/* /Themes */}
        {/* <div id="themes" class="section"> */}
        {/* container */}
        {/* <div class="container"> */}
        {/* row */}
        {/* <div class="row">
          <div class="section-title">
              <h3 class="title"><span></span>Frosthack <span style="color: #dd0a37;">Themes</span></h3>
          </div>
              <div class="container-theme">
                  <div class="card">
                  <h3 class="title-theme">Healthcare and Medicine</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
                  </div>
                  <div class="card">
                  <h3 class="title-theme">Finance and Technology</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
                  </div>
                  <div class="card">
                  <h3 class="title-theme">Education</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
                  </div>
                  <div class="card">
                  <h3 class="title-theme">Trading and E-commerce</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
                  </div>
                  <div class="card">
                  <h3 class="title-theme">Event Management</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
                  </div>
                  <div class="card">
                  <h3 class="title-theme">Mental Health Awareness</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
                  </div>
                  <div class="card">
                  <h3 class="title-theme">Blockchain Technology</h3>
                  <div class="bar">
                      <div class="emptybar"></div>
                      <div class="filledbar"></div>
                  </div>
              </div>
              </div>
              <div class="col-md-8 col-md-offset-2 text-center"> */}
        {/* about content */}
        {/* <div id="theme_details" class="about-content">
                      <p class="changecolor">
                          <h3><a href="https://drive.google.com/file/d/1KgGfG7DoovpXUXjqb-hQEa4kHonQ0tBh/view" style="color: #dd0a37;"><span style="color: #dd0a37;">Click here </span><span class="changecolor">to get detailed list of themes</span></a></h3>
                      </p>
                  </div> */}
        {/* /about content */}
        {/* </div>
          </div>
      </div>
      </div> */}
                {/* container */}
                <div className="container">
            <div className="download-btn">
              <a
                rel="noreferrer"
                href="./files/Themes2022.pdf"
                target="_blank"
                className="main-btn"
                style={{ marginBottom: 40 }}
              >
                Themes
              </a>
            </div>
          </div>
          {/* /container */}
          {/* container */}
          <div className="container">
            <div className="download-btn">
              <a
                rel="noreferrer"
                href="http://app.bizthon.com/"
                target="_blank"
                className="main-btn"
                style={{ marginBottom: 40 }}
              >
                Idea Submissions
              </a>
            <h3 class="Cent" className="Cent" style={{color: "white"}}>Deadline 21st May, 11 pm IST</h3>
            </div>
          </div>
          {/* /container */}
        {/* Sponsors */}
        <div id="sponsors" className="section">
          <div className="container">
            <div className="row sponbox">
              {/* section title */}
              <div className="section-title">
                <h3 className="title">
                  <span>Our </span>{" "}
                  <span style={{ color: "#dd0a37" }}>Sponsors</span>
                </h3>
              </div>
              {/* /section title */}
            </div>

            {/* <h3
              className="text-center changecolor"
              style={{
                marginTop: "100px",
                marginBottom: "40px",
                fontSize: "30px",
              }}
            >
              Diamond Sponsors
            </h3>
            <div className="spon-diamond">
              <div className="track sponsor">
                <a
                  rel="noreferrer"
                  href="https://motwanijadejafoundation.com/"
                  target="_blank"
                >
                  <div className="img">
                    <img src="img/spons/MJF_logo.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="track sponsor">
                <a rel="noreferrer" href="https://devfolio.co/" target="_blank">
                  <div className="img">
                    <img src="img/spons/Devfolio2x.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
            */}
             <h3
            className="text-center changecolor"
            style={{
              marginTop: "100px",
              marginBottom: "40px",
              fontSize: "30px",
            }}
          >
            Title Sponsor
          </h3>
           <div className="spon-diamond">
            <div className="track sponsor">
              <a
                rel="noreferrer"
                href="https://www.infotechhub.in/index.html"
                target="_blank"
              >
                <div className="img">
                  <img
                    src="img/spons/top-logo.png"
                    alt=""
                    width={50}
                    height={60}
                  />
                </div>
              </a>
            </div>
          </div>
            <h3
              className="text-center changecolor"
              style={{
                marginTop: "100px",
                marginBottom: "40px",
                fontSize: "30px",
              }}
            >
              Gold Sponsors
            </h3>
            <div className="spon-platinum">
              <div className="spon-diamond">
                <div className="track sponsor">
                  <a
                    rel="noreferrer"
                    href="https://hoverrobotix.com/"
                    target="_blank"
                  >
                    <div className="img-fluid">
                      <img src="img/spons/hoverRobotix.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="track sponsor">
                <a rel="noreferrer" href="https://thementorx.com/" target="_blank">
                  <div className="img-fluid">
                    <img src="img/Mentorx.png" alt="" />
                  </div>
                </a>
              </div>
              {/* <div className="track sponsor">
                <a rel="noreferrer" href="https://celo.org/" target="_blank">
                  <div className="img">
                    <img src="img/spons/Celo.png" alt="not found" />
                  </div>
                </a>
              </div> */}
              {/* <div className="track sponsor">
                <a
                  rel="noreferrer"
                  href="https://www.portis.io"
                  target="_blank"
                >
                  <div className="img">
                    <img
                      src="img/spons/portis.png"
                      alt=""
                      className="spon-logo"
                    />
                  </div>
                </a>
              </div> */}
              {/* <div className="track sponsor">
                <a
                  rel="noreferrer"
                  href="https://ieee.iitmandi.ac.in/"
                  target="_blank"
                >
                  <div className="img">
                    <img
                      src="img/spons/IEEE_logo.png"
                      alt=""
                      className="spon-logo"
                    />
                  </div>
                </a>
              </div> */}
            </div>
          </div>
          {/* <h3
            className="text-center changecolor"
            style={{
              marginTop: "100px",
              marginBottom: "40px",
              fontSize: "30px",
            }}
          >
            Gold Sponsor
          </h3> */}
          {/* <div className="spon-diamond"> */}
            {/* <div className="track sponsor">
              <a
                rel="noreferrer"
                href="https://hoverrobotix.com/"
                target="_blank"
              >
                <div className="img-fluid">
                  <img src="img/spons/hoverRobotix.png" alt="" />
                </div>
              </a>
            </div>
          </div> */}
{/*           
          <h3
            className="text-center changecolor"
            style={{
              marginTop: "100px",
              marginBottom: "40px",
              fontSize: "30px",
            }}
          >
            Silver Sponsor
          </h3>
          <div className="spon-diamond">
            <div className="track sponsor">
              <a
                rel="noreferrer"
                href="https://tesseract.rezzlon.com/"
                target="_blank"
              >
                <div className="img">
                  <img
                    src="img/spons/tesseract.png"
                    alt=""
                    width={50}
                    height={60}
                  />
                </div>
              </a>
            </div>
          </div> */}
          <h3
              className="text-center changecolor"
              style={{
                marginTop: "100px",
                marginBottom: "40px",
                fontSize: "30px",
              }}
            >
              Coding Partner
            </h3>
            <div className="spon-platinum">
              <div className="spon-diamond">
                <div className="track sponsor">
                  <a rel="noreferrer" href="https://www.geeksforgeeks.org/" target="_blank">
                    <div className="img">
                      <img src="img/spons/gfg-new-logo.png" alt="" />
                    </div>
                  </a>
              </div>
              </div>
            </div>
            <h3
              className="text-center changecolor"
              style={{
                marginTop: "100px",
                marginBottom: "40px",
                fontSize: "30px",
              }}
            >
              AR/VR Partner 
            </h3>
            <div className="spon-platinum">
              <div className="spon-diamond">
                <div className="track sponsor">
                  <a rel="noreferrer" href="https://www.echo3d.co/" target="_blank">
                    <div className="img-fluid">
                      <img src={"https://static.wixstatic.com/media/c42fea_29a84adfa04046e69529e73ba3417d5d~mv2.png/v1/fill/w_1650,h_825,al_c/c42fea_29a84adfa04046e69529e73ba3417d5d~mv2.png"} alt="" />
                    </div>
                  </a>
              </div>
              </div>
            </div>
            
          {/* container */}
          <div className="container">
            {/* track */}
            {/* /track */}
            {/* track */}
            {/* /track */}
            {/* track */}
            {/* /track */}
            {/* track */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.edtimes.in/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/edtimes_logo.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
          </div>
          {/* /container */}
          {/* container */}
          <div className="container">
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.gatsbyjs.org/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img src="img/spons/gatsby.svg" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://tezos.com/" target="_blank">
                      <div class="track">
                          <div class="img-adjust" style="width: 100%;">
                              <img src="img/spons/tezos.svg" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.axure.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="extra-wide-adjust" src="img/spons/axure.svg" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://codingblocks.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/Logo_DarkGrey_ NoShadow.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
          </div>
          {/* container */}
          {/* container */}
          <div className="container">
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://doist.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="extra-wide-adjust" src="img/spons/doist-logo.svg" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.wolfram.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/WolframCorporateLogo.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://fold.money/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/fold.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
          </div>
          {/* container */}
          {/* container */}
          <div className="container">
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://zulipchat.com/" target="_blank">
                      <div class="track">
                          <div class="img">
                              <img class="img-adjust" src="img/spons/zulip.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.creative-tim.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/creativeTim.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.bugsee.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/bugsee.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
          </div>
          {/* /container */}
          {/* container */}
          <div className="container">
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://www.producthunt.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/productHunt.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://stickerapp.com/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/stickerapp.jpg" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
            {/* track */}
            {/* <div class="col-md-4">
                  <a rel="noreferrer" href="https://xyz.xyz/" target="_blank">
                      <div class="track">
                          <div class="img" style="width: 100%;">
                              <img class="img-adjust" src="img/spons/XYZ-logo-tagline.png" alt="">
                          </div>
                      </div>
                  </a>
              </div> */}
            {/* /track */}
          </div>
          {/* container */}

        </div>
        {/* /Sponsors */}
        {/* FAQ */}
        <div id="faq" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="section-title">
                <h3 className="title">
                  <span>Frequent </span>{" "}
                  <span style={{ color: "#dd0a37" }}>Questions</span>
                </h3>
              </div>
              {/* /section title */}
              {/* Questions */}
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="faq">
                  <div
                    className="panel-group"
                    id="accordion-left"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab">
                        <h3 className="panel-title">
                          <a
                            rel="noreferrer"
                            className="collapsed changecolor"
                            data-toggle="collapse"
                            data-parent="#accordion-left"
                            href="#collapse1st"
                            aria-expanded="false"
                            aria-controls="collapse1st"
                          >
                            Should team members be of the same college or people
                            of different colleges forming a team would also do ?
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse1st"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          <p className="changecolor">
                            Yes, team members can be from different colleges
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab">
                        <h3 className="panel-title">
                          <a
                            rel="noreferrer"
                            className="collapsed changecolor"
                            data-toggle="collapse"
                            data-parent="#accordion-left"
                            href="#collapse6th"
                            aria-expanded="false"
                            aria-controls="collapse6th"
                          >
                            Can I start working on my hack before the event?
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse6th"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          <p className="changecolor">
                            No. In the interest of fairness, students should not
                            be working on their projects before FROSTHACK begins
                            and we do not allow participants to work on
                            pre-existing projects. However, you can familiarize
                            yourself with all the tools and technologies you
                            intend to use beforehand!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab">
                        <h3 className="panel-title">
                          <a
                            rel="noreferrer"
                            className="collapsed changecolor"
                            data-toggle="collapse"
                            data-parent="#accordion-left"
                            href="#collapse2nd"
                            aria-expanded="false"
                            aria-controls="collapse2nd"
                          >
                            Is this hackathon an online event or offline?
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse2nd"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          <p className="changecolor">
                            The event will be online.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 
                                  <div class="panel panel-default">
                                  <div class="panel-heading" role="tab">
                                      <h3 class="panel-title">
                                          <a rel="noreferrer" class="collapsed" data-toggle="collapse" data-parent="#accordion-left"
                                              href="#collapse3rd" aria-expanded="false" aria-controls="collapse3rd">
                                              Will travel reimbursement be provided to participants?
                                          </a>
                                      </h3>
                                  </div>
                                  <div id="collapse3rd" class="panel-collapse collapse" role="tabpanel"
                                      aria-labelledby="headingTwo">
                                      <div class="panel-body">
                                          <p>
                                              No, unfortunately we cannot provide any travel reimbursement to participants.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              */}
                    {/* <div class="panel panel-default">
                                  <div class="panel-heading" role="tab">
                                      <h3 class="panel-title">
                                          <a rel="noreferrer" class="collapsed" data-toggle="collapse" data-parent="#accordion-left"
                                              href="#collapse7th" aria-expanded="false" aria-controls="collapse7th">
                                              What are the food and accomodation arrangements?
                                          </a>
                                      </h3>
                                  </div>
                                  <div id="collapse7th" class="panel-collapse collapse" role="tabpanel"
                                      aria-labelledby="headingOne">
                                      <div class="panel-body">
                                          <p>
                                              We will be providing accomodation from Friday (27th March) night onwards, for the duration of the hackathon. 
                                              Food (Breakfast, Lunch, Dinner) will also be provided.
                                          </p>
                                      </div>
                                  </div>
                              </div> */}
                  </div>
                </div>
              </div>
              {/* /Questions */}
              {/* Questions */}
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="faq">
                  <div
                    className="panel-group"
                    id="accordion-right"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab">
                        <h3 className="panel-title">
                          <a
                            rel="noreferrer"
                            className="collapsed changecolor"
                            data-toggle="collapse"
                            data-parent="#accordion-right"
                            href="#collapse4th"
                            aria-expanded="false"
                            aria-controls="collapse4th"
                          >
                            Who will own the IP (Intellectual Property) Rights
                            to the product that I have built?
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse4th"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          <p className="changecolor">
                            The developer/developers of the application will
                            have all rights and own the IP of the product.
                            However, all code needs to be in public domain (open
                            source) so that it can be evaluated by the judges.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab">
                        <h3 className="panel-title">
                          <a
                            rel="noreferrer"
                            className="collapsed changecolor"
                            data-toggle="collapse"
                            data-parent="#accordion-right"
                            href="#collapse5th"
                            aria-expanded="false"
                            aria-controls="collapse5th"
                          >
                            What is the team size ?
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse5th"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          <p className="changecolor">
                            Every team can have min 2 and max 3 members.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div class="panel panel-default">
                                  <div class="panel-heading" role="tab">
                                      <h3 class="panel-title">
                                          <a rel="noreferrer" class="collapsed" data-toggle="collapse" data-parent="#accordion-right"
                                              href="#collapse6th" aria-expanded="false" aria-controls="collapse6th">
                                              How and when to reach IIT Mandi?
                                          </a>
                                      </h3>
                                  </div>
                                  <div id="collapse6th" class="panel-collapse collapse" role="tabpanel"
                                      aria-labelledby="headingTwo">
                                      <div class="panel-body">
                                          <p>
                                              You should reach IIT Mandi preferably by Friday (27th March) night and latest by 
                                              Saturday (28th March), early morning. 
                                              Please visit <a rel="noreferrer" style="display: inline;" href="http://www.iitmandi.ac.in/institute/campus/how_to_reach.php">http://www.iitmandi.ac.in/institute/campus/how_to_reach.php</a>
                                              to know how to reach IIT Mandi.  
                                          </p>
                                      </div>
                                  </div>
                              </div> */}
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab">
                        <h3 className="panel-title">
                          <a
                            rel="noreferrer"
                            className="collapsed changecolor"
                            data-toggle="collapse"
                            data-parent="#accordion-right"
                            href="#collapse8th"
                            aria-expanded="false"
                            aria-controls="collapse8th"
                            c
                          >
                            I have a question related to hackathon which is not
                            listed above. What should I do?
                          </a>
                        </h3>
                      </div>
                      <div
                        id="collapse8th"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          <p className="changecolor">
                            Feel free to contact us. Just drop us a mail at
                            team@frosthack.com You can also contact one of our
                            organizers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Questions */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /FAQ */}
      </div>
    </div>
  );
};
