import React from "react";
import Footer from "../Footer";

function Privacy() {
  const handleHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div>
        <div
          className="container text-white p-4 p-lg-5 py-4 py-xl-5"
          style={{
            margin: "25px auto",
            background: "var(--bs-red)",
            borderRadius: "6px",
          }}
        >
          <div className="row" style={{ marginTop: "0px" }}>
            <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center homeImg">
              <img
                className="d-inline-flex d-md-flex justify-content-md-center"
                src="/assets/img/people.png"
                width={117}
                height={100}
                style={{ marginRight: "0px" }}
                alt="logo"
                onClick={handleHome}
              />
            </div>
            <div className="col d-inline-flex justify-content-md-center align-items-md-center">
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "-1px",
                  paddingTop: "0px",
                  marginTop: "0px",
                  marginRight: "0px",
                }}
              >
                Privacy Policy
              </h2>
            </div>
            <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center" />
          </div>
        </div>
        <div
          className="container text-white p-4 p-lg-5 py-4 py-xl-5"
          style={{
            margin: "25px auto",
            background: "#77a6b1",
            borderRadius: "6px",
            paddingBottom: "0px",
          }}
        >
          <p>
            This Privacy Policy ("Policy") explains how bu.roomie4.me
            ("Website") collects, uses, discloses, and protects the personal
            information of its users. By accessing or using the Website, you
            consent to the collection and use of your personal information as
            described in this Policy.
          </p>
          <ol>
            <li>
              Information We Collect
              <ol>
                <li type="i">
                  Personal Information: When you create an account on the
                  Website, we may collect personal information, such as your
                  name, email address, and other relevant details.
                </li>
                <li type="i">
                  Usage Data: We may collect non-personal information about your
                  interactions with the Website, such as your IP address,
                  browser type, operating system, and referring URLs. This
                  information is used to analyze trends and administer the site.
                </li>
              </ol>
            </li>
            <li>
              Use of Collected Information
              <ol>
                <li type="i">
                  We use the collected information for the following purposes:
                  <ul>
                    <li>
                      To provide and maintain the Website's functionality.
                    </li>
                    <li>To personalize your experience on the Website.</li>
                    <li>
                      To communicate with you, including responding to inquiries
                      and sending notifications.
                    </li>
                    <li>
                      To analyze and improve the performance and effectiveness
                      of the Website.
                    </li>
                    <li>
                      To enforce our Terms of Service and prevent fraudulent or
                      unauthorized activity.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Sharing of Information
              <ol>
                <li type="i">
                  We may share your personal information in the following
                  circumstances:
                  <ul>
                    <li>With your explicit consent.</li>
                    <li>
                      In response to a legal request, such as a court order or
                      government inquiry.
                    </li>
                    <li>
                      To protect our rights, property, or safety, or the rights,
                      property, or safety of others.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Cookies
              <ol>
                <li type="i">
                  The Website may use cookies to collect information about your
                  browsing activities. This helps us analyze trends, track
                  users' movements, and improve the functionality of the
                  Website.
                </li>
              </ol>
            </li>
            <li>
              Data Security
              <ol>
                <li type="i">
                  We take reasonable measures to protect the personal
                  information we collect from unauthorized access, disclosure,
                  alteration, or destruction. However, no method of transmission
                  over the Internet or electronic storage is entirely secure,
                  and we cannot guarantee absolute security.
                </li>
              </ol>
            </li>
            <li>
              Children's Privacy
              <ol>
                <li type="i">
                  The Website is not intended for use by individuals under the
                  age of 13. We do not knowingly collect personal information
                  from children under 13. If you believe that we may have
                  collected personal information from a child under 13, please
                  contact us immediately, and we will promptly take appropriate
                  actions to delete such information.
                </li>
              </ol>
            </li>
            <li>
              Updates to this Policy
              <ol>
                <li type="i">
                  We may update this Policy from time to time. The updated
                  version will be posted on the Website. We encourage you to
                  review this Policy periodically to stay informed about how we
                  collect, use, and protect your personal information.
                </li>
              </ol>
            </li>
            <li>
              Contact Us
              <ol>
                <li type="i">
                  If you have any questions, concerns, or requests regarding
                  this Policy or the handling of your personal information,
                  please contact us at{" "}
                  <a href="mailto: info@roomie4.me">info@roomie4.me</a>.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
