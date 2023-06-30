import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
      var odooLogo = "images/odoo.png";
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <svg style={{  margin: "9% 5% 0 5%" }} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path fill="#83cd29" d="M11.899 24c-.322 0-.64-.084-.923-.247l-2.935-1.738c-.439-.245-.225-.332-.08-.382c.584-.204.703-.25 1.327-.605c.066-.037.152-.024.219.015l2.255 1.339a.298.298 0 0 0 .273 0l8.794-5.077a.277.277 0 0 0 .134-.237V6.919a.282.282 0 0 0-.136-.242l-8.79-5.072a.27.27 0 0 0-.271 0l-8.79 5.072a.28.28 0 0 0-.139.24v10.148c0 .097.053.19.137.236l2.408 1.391c1.308.654 2.107-.116 2.107-.891V7.785a.25.25 0 0 1 .255-.254h1.114c.139 0 .253.11.253.254v10.02c0 1.744-.95 2.745-2.604 2.745c-.509 0-.91 0-2.028-.55l-2.307-1.33a1.86 1.86 0 0 1-.922-1.605V6.917c0-.66.352-1.277.922-1.602L10.976.236a1.928 1.928 0 0 1 1.849 0l8.792 5.08c.568.329.922.943.922 1.603v10.149a1.86 1.86 0 0 1-.922 1.602l-8.792 5.079a1.848 1.848 0 0 1-.927.246V24Zm2.716-6.993c-3.848 0-4.654-1.766-4.654-3.248c0-.14.113-.253.254-.253h1.136c.126 0 .231.091.251.215c.172 1.158.683 1.742 3.01 1.742c1.853 0 2.641-.419 2.641-1.402c0-.566-.225-.986-3.104-1.268c-2.408-.238-3.896-.768-3.896-2.694c0-1.775 1.497-2.831 4.004-2.831c2.815 0 4.211.977 4.387 3.077a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.246-.199c-.275-1.217-.94-1.607-2.747-1.607c-2.023 0-2.259.705-2.259 1.233c0 .64.277.828 3.007 1.189c2.703.359 3.987.865 3.987 2.765c0 1.915-1.599 3.014-4.385 3.014l.012-.01Z"/></svg>
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <img
                    style={{ margin: "0% 0% 0% 35%" }}
                    height="60px"
                    src={odooLogo}
                    alt="Avatar placeholder"
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
