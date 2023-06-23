import React from "react";
import Footer from "../Footer";

function Donation() {
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
                Donations
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
            Thank you for considering a donation to support our website,
            bu.roomie4.me. Your generous contributions are vital in helping us
            maintain and improve our services. Please find below the details for
            making a donation:
          </p>
          <ol>
            <li>
              Purpose of Donations
              <br />
              We rely completely on donations to sustain our website. Your
              contributions will be used to support the following initiatives:
              <ul>
                <li>Server maintenance and hosting costs</li>
                <li>Technical enhancements and updates</li>
                <li>Expansion of features and functionalities</li>
              </ul>
            </li>
            <li>
              Donation options
              <ul>
                <li>
                  One-time Donation: You can make a single donation in any
                  amount you choose.
                </li>
                <li>
                  Recurring Monthly Donation: If you prefer, you can set up a
                  monthly recurring donation to provide ongoing support
                </li>
              </ul>
            </li>
            <li>
              Transparency
              <br />
              We are committed to transparency and will provide periodic updates
              on how your donations are being utilized to support and enhance
              the website.
            </li>
            <li>
              Gratitude and Acknowledgment
              <br />
              We sincerely appreciate your support. Upon making a donation, you
              will receive a thank-you email or acknowledgment to express our
              gratitude for your contribution.
            </li>
            <li>
              Refund Policy
              <br />
              Donations made to our website are voluntary and non-refundable. In
              exceptional circumstances, refunds may be issued at our
              discretion. To request a refund, please contact us using the
              provided contact information.
            </li>
            <li>
              Privacy and Security
              <br />
              Your personal and payment information will be handled securely and
              in accordance with applicable privacy laws. We will not share your
              information with third parties for marketing purposes without your
              explicit consent.
            </li>
            <li>
              Contact Information
              <br />
              If you have any questions or need assistance with your donation,
              please contact us at{" "}
              <a href="mailto: info@roomie4.me">info@roomie4.me</a>.
            </li>
          </ol>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                width: "200px",
                background: "#910909",
                borderColor: "#910909",
                marginTop: "25px",
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Donation;
