import { React, useState, useEffect } from "react";

function NoRequests() {
  const handleHome = () => {
    window.location.href = "/";
  };

  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setTimer(true);
    }, 100);
  }, []);

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div>
      {timer && (
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
              <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center">
                <img
                  className="d-inline-flex d-md-flex justify-content-md-center homeImg"
                  src="/assets/img/people.png"
                  width={117}
                  height={100}
                  style={{ marginRight: "0px" }}
                  alt="logo"
                  onClick={handleHome}
                />
              </div>
              <div className="col d-inline-flex justify-content-md-center align-items-md-center">
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "-1px",
                    paddingTop: "0px",
                    marginTop: "-40px",
                  }}
                >
                  <br />
                  No open requests
                </h1>
              </div>
              <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center" />
            </div>
            <div className="row">
              <div
                className="col d-md-flex justify-content-md-center align-items-md-center"
                style={{ marginTop: "-32px" }}
              >
                <p
                  className="d-inline-flex"
                  style={{
                    textAlign: "center",
                    paddingBottom: "0px",
                    marginTop: "56px",
                    marginBottom: "15px",
                  }}
                >
                  Looks like there are no open requests at the moment. Go to the
                  Create Request option in My Dashboard and create one!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col d-md-flex justify-content-md-end align-items-md-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#191e50", borderColor: "#191e50" }}
                  onClick={handleDashboard}
                >
                  Go Back to My Dashboard
                </button>
              </div>
            </div>
          </div>
          <footer className="text-center bg-dark fixed-bottom">
            <div className="container text-white py-4 py-lg-5">
              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <a className="link-light" href="about">
                    About Us
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a className="link-light" href="donate">
                    Donate
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a className="link-light" href="tos">
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="link-light" href="privacy">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item" />
              </ul>
              <p className="text-white-50 mb-0">Copyright © 2023 Roomie4Me</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default NoRequests;
