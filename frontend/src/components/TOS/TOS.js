import React from "react";
import Footer from "../Footer";

function TOS() {
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
                Terms of Service
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
            These Terms of Service ("Agreement") govern your access to and use
            of bu.roomie4.me ("Website"). By accessing or using the Website, you
            agree to be bound by this Agreement.
          </p>
          <ol>
            <li>
              Eligibility
              <ol>
                <li type="i">
                  The Website is intended solely for use by Boston University
                  (BU) students with a valid "@bu.edu" email address. Users must
                  have a valid email address to create an account.
                </li>
              </ol>
            </li>
            <li>
              User Accounts
              <ol>
                <li type="i">
                  To access certain features of the Website, you may be required
                  to log in using your Google account with a "@bu.edu" email
                  address.
                </li>
              </ol>
            </li>
            <li>
              Roommate Requests
              <ol>
                <li type="i">
                  The Website allows you to open a roommate request by filling
                  out a form to express your preferences and requirements.
                </li>
              </ol>
            </li>
            <li>
              Connection Requests
              <ol>
                <li type="i">
                  You may browse other roommate requests on the Website and send
                  connection requests to other users. It is your responsibility
                  to reach out to potential roommates.
                </li>
              </ol>
            </li>
            <li>
              Notifications
              <ol>
                <li type="i">
                  The Website may send notifications to users via email or text
                  message using APIs. These notifications may include roommate
                  requests, connection requests, or other relevant updates.
                </li>
              </ol>
            </li>
            <li>
              User Responsibilites
              <ol>
                <li type="i">
                  You are solely responsible for the accuracy of the information
                  you provide on the Website.
                </li>
                <li type="i">
                  You are responsible for your interactions with other users.
                  Exercise caution and conduct your own due diligence when
                  communicating or meeting with potential roommates.
                </li>
              </ol>
            </li>
            <li>
              Prohibited Activities
              <ol>
                <li type="i">
                  You agree not to engage in any of the following activities on
                  the Website:
                  <ul>
                    <li>Harassment, abuse, or intimidation of other users</li>
                    <li>Spamming or sending unsolicited messages</li>
                    <li>Posting false or misleading information</li>
                    <li>Engaging in illegal activities</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Intellectual Property
              <ol>
                <li type="i">
                  All intellectual property rights related to the Website and
                  its content are owned by the Website's owners. You may not
                  use, modify, or distribute any content from the Website
                  without proper authorization.
                </li>
              </ol>
            </li>
            <li>
              Privacy Policy
              <ol>
                <li type="i">
                  Your use of the Website is subject to our{" "}
                  <a href="/privacy">Privacy Policy</a>, which explains how your
                  personal data is collected, stored, and used. By using the
                  Website, you consent to the collection and use of your
                  personal information as described in the Privacy Policy.
                </li>
              </ol>
            </li>
            <li>
              Limitation of Liability
              <ol>
                <li type="i">
                  The Website and its owners shall not be liable for any
                  damages, losses, or liabilities arising from the use of the
                  Website or interactions between users.
                </li>
              </ol>
            </li>
            <li>
              Dispute Resolution
              <ol>
                <li type="i">
                  Any disputes arising out of or relating to this Agreement
                  shall be resolved through arbitration or mediation. The
                  jurisdiction for any legal proceedings shall be determined by
                  the laws of the relevant jurisdiction.
                </li>
              </ol>
            </li>
            <li>
              Modifications to the Terms
              <ol>
                <li type="i">
                  The Terms of Service may be updated or modified at any time.
                  Your continued use of the Website constitutes acceptance of
                  any changes made.
                </li>
              </ol>
            </li>
            <li>
              Termination
              <ol>
                <li type="i">
                  The Website reserves the right to terminate or suspend user
                  accounts for violations of the Terms of Service or for any
                  other reason deemed necessary.
                </li>
              </ol>
            </li>
            <ol />
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TOS;
