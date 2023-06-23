import React from "react";

function HomeLogin() {
  return (
    <div
      className="container text-white p-4 p-lg-5 py-4 py-xl-5"
      style={{
        margin: "25px auto",
        background: "var(--bs-red)",
        borderRadius: "6px",
      }}
    >
      <div className="row">
        <div className="col d-inline-flex d-md-flex justify-content-md-center align-items-md-center">
          <h1 className="d-md-flex">Sign Up / Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ marginTop: "12px" }}>
          <p
            style={{
              paddingBottom: "0px",
              marginBottom: "1px",
              marginTop: "13px",
            }}
          >
            By registering for this site, you agree to our Terms of Service and
            Privacy Policy. Please note you must use a valid @bu.edu email in
            order to register for this site.
          </p>
        </div>
        <div className="col d-inline-flex d-md-flex justify-content-md-center align-items-md-center">
          <a href={`http://localhost:8082/oauth/url`}>
            <picture>
              <img
                src="assets/img/btn_google_signin_dark_normal_web@2x.png"
                style={{ marginTop: "15px" }}
                alt="google login"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeLogin;
