import React from "react";
import cms from "./cms.jpg";
import aboutus from "./aboutus.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="homecontainers">
          <div className="homecontainer content">
            <div>
              <br></br>
              <h1>Welcome to CMS Pro</h1>
              <h3>Empower Your Content Management Experience</h3>

              <p>
                CMS Pro is a powerful and intuitive content management system
                designed to streamline your workflow and elevate your digital
                presence. With a user-friendly interface and robust features,
                managing your content has never been easier.
              </p>
            </div>
            <div className="homecontainer images">
              <img src={cms} height="350px" width="550px" alt="cms" />
            </div>
          </div>
          <hr></hr>
          <h1>Key Features</h1>
          <div className="keyfeaturecontainer">
            <div className="keyfeature contentcreation">
              <h4>Easy Content Creation</h4>
              <p>
                Create and publish content effortlessly with our intuitive
                editor. Whether you're writing articles, uploading images, or
                embedding videos, our CMS makes it simple to bring your ideas to
                life.
              </p>
            </div>
            <div className="keyfeature templates">
              <h4>Customizable Templates</h4>
              <p>
                Choose from a variety of professionally designed templates to
                customize the look and feel of your website. With flexible
                layout options and customizable styles, you can create a website
                that reflects your brand identity.
              </p>
            </div>
            <div className="keyfeature multiusercollaboration">
              <h4>Multi-User Collaboration</h4>
              <p>
                Collaborate with your team members in real-time with our
                multi-user editing feature. Whether you're working on a blog
                post, updating product listings, or managing user permissions,
                our CMS makes it easy to collaborate seamlessly.
              </p>
            </div>
            <div className="keyfeature powerfultools">
              <h4>Powerful SEO Tools</h4>
              <p>
                Optimize your content for search engines and improve your
                website's visibility with our built-in SEO tools. From meta tags
                to sitemaps, our CMS provides everything you need to rank higher
                in search results and attract more visitors.
              </p>
            </div>
            <div className="keyfeature analyticsandinsights">
              <h4>Analytics and Insights</h4>
              <p>
                Track your website's performance and gain valuable insights into
                visitor behavior with our integrated analytics dashboard.
                Monitor key metrics such as traffic, engagement, and conversions
                to make data-driven decisions and improve your online presence.
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="aboutcontainercontent">
          <div className="aboutcontainer values">
            <h1>Our Values</h1>
            <p>
              <strong>Simplicity:</strong>We believe in keeping things simple.
              Our platform is designed with ease of use in mind, so you can
              focus on creating great content without getting bogged down by
              complicated tools and interfaces. <br></br>
              <strong>Innovation:</strong> We're always looking for ways to
              innovate and improve. From new features and updates to user
              experience enhancements, we're committed to staying ahead of the
              curve.<br></br>
              <strong>Accessibility:</strong> We believe that everyone should
              have access to the tools they need to succeed. That's why we're
              committed to making our platform accessible to users of all
              backgrounds and abilities.<br></br>
              <strong>Community:</strong>We value the input and feedback of our
              users. Our community is an integral part of who we are, and we're
              grateful for the support and collaboration of our users around the
              world.
            </p>
          </div>
          <div className="aboutcontainer image">
            <img src={aboutus} height="500px" width="500px" alt="aboutus" />
          </div>
        </div>
        <hr></hr>
        <div className=" aboutuscontainer mission">
          <h1>Our Mission</h1>
          <p>
            At CMS Pro, our mission is simple: to empower content creators with
            the tools they need to succeed. We believe that everyone should have
            the ability to create and manage digital content easily, without the
            need for technical expertise or expensive software.
          </p>
        </div>
        <hr></hr>
        <h1>Our Services</h1>
        <div className="ourservicescontainer">
          <div className="ourservices contentmanagement">
            <h4>Content Management</h4>
            <p>
              Our core service offering revolves around content management. With
              CMS Pro, you can create, edit, and publish content effortlessly.
              Whether you're managing a blog, an e-commerce website, or a
              corporate intranet, our platform has you covered.
              <br></br>
              <strong>Content Creation: </strong>Easily create and format text,
              images, videos, and more using our intuitive editor.
              <br></br>
              <strong>Content Organization:</strong> Organize your content with
              categories, tags, and custom taxonomies for easy navigation and
              discovery.
              <br></br>
              <strong>Content Publishing:</strong> Schedule content to be
              published at specific dates and times, or publish it immediately
              with the click of a button.
            </p>
          </div>
          <div className="ourservices websitecustomization">
            <h4>Website Customization</h4>
            <p>
              Make your website stand out with our website customization
              services. With CMS Pro, you can customize the look and feel of
              your website to match your brand identity and engage your
              audience.<br></br>
              <strong>Custom Templates: </strong> Customize colors, fonts,
              layouts, and more to create a unique and memorable website.
              <br></br>
              <strong>Responsive Design: </strong> Ensure your website looks
              great on all devices with responsive design techniques that adapt
              to different screen sizes.
            </p>
          </div>
          <div className="ourservices User Management">
            <h4>User Management</h4>
            <p>
              Manage user accounts and permissions with ease using our user
              management services. With CMS Pro, you can control who has access
              to your website and what they can do.<br></br>
              <strong>User Roles: </strong> Assign different roles to users,
              such as administrators, editors, and contributors, with varying
              levels of access and permissions.<br></br>
              <strong> User Registration:</strong> Allow users to register for
              accounts on your website, or restrict access to authorized users
              only.<br></br>
              <strong>User Profiles:</strong> Allow users to create and manage
              their profiles, including profile pictures, bios, and contact
              information.<br></br>
            </p>
          </div>
          <div className="ourservices powerfultools">
            <h4>SEO Optimization</h4>
            <p>
              Improve your website's visibility in search engine results with
              our SEO optimization services. With CMS Pro, you can optimize your
              content for search engines and attract more visitors to your
              website.<br></br>
              <strong>Keyword Research: </strong> Identify relevant keywords and
              phrases to target in your content, based on search volume and
              competition.<br></br>
              <strong>On-Page Optimization:</strong> Optimize meta tags,
              headings, and content structure to improve your website's ranking
              in search engine results.<br></br>
              <strong>SEO Analytics: </strong>Track your website's performance
              in search engine results with integrated analytics tools and
              reports.<br></br>
            </p>
          </div>
        </div>
        <hr></hr>
        <div class="contactus-container">
          <div class="contact">
            <br></br>
            <h1>Contactus</h1>
            <br></br>
            <p>
              <strong>Email:&emsp;&emsp;</strong>contact@gmail.com
            </p>
            <br></br>
            <p>
              <strong>Phone:&emsp;&emsp;</strong>80125 30321/ 80125 30323
            </p>
            <br></br>
            <p>
              <strong>Location:&emsp;&emsp;</strong>India
            </p>
          </div>

          <div class="message-container">
            <form>
              <br></br>
              <h1>Send Message</h1>
              <br></br>
              <input
                class="detail f-name"
                type="text"
                placeholder="First Name"
              />
              <br></br>
              <br></br>
              <input
                class="detail l-name"
                type="text"
                placeholder="Last Name"
              />
              <br></br>
              <br></br>
              <input
                class="detail phone1"
                type="text"
                placeholder="Phone Number"
              />
              <br></br>
              <br></br>
              <input class="detail mail1" type="text" placeholder="Email" />
              <br></br>
              <br></br>
              <textarea
                class="detail mess1"
                placeholder="Type your Message"
              ></textarea>
              <br></br>
              <br></br>
              <button onclick="submit">Submit</button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
        <hr></hr>
        <div class="google-map">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4810130902933!2d77.69839907512633!3d9.290576190781598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b85670932313%3A0xd8caf94254b94c1a!2sPSR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709367131730!5m2!1sen!2sin"
            width="100%"
            height="450"
            // style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <hr></hr>
        <div className="getstarttoday">
          <h1>Get Started Today</h1>
          <p>
            Ready to take your content management to the next level? Sign up for
            a free trial of CMS Pro and experience the difference for yourself.
          </p>
          <Link to="/signup">Signup...</Link>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Home;
