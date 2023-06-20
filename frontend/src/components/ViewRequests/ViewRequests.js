import React from "react";

function ViewRequests(props) {
  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <div
        className="container text-white p-4 p-lg-5 py-4 py-xl-5"
        style={{
          margin: "25px auto",
          background: "var(--bs-red)",
          borderRadius: "6px",
        }}
      >
        <div className="row" style={{ marginTop: "33px" }}>
          <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center">
            <img
              className="d-inline-flex d-md-flex justify-content-md-center"
              src="assets/img/people.png"
              width={117}
              height={100}
              style={{ marginRight: "0px" }}
              alt="logo"
            />
          </div>
          <div className="col d-inline-flex justify-content-md-center align-items-md-center">
            <h3
              style={{
                textAlign: "center",
                marginBottom: "-1px",
                paddingTop: "0px",
                marginTop: "0px",
                marginRight: "0px",
              }}
            >
              Hi {props.user.name.firstName}! These are the current roomie
              requests.
            </h3>
          </div>
          <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center" />
        </div>
        <div className="row">
          <div className="col d-md-flex justify-content-md-end align-items-md-center">
            <button
              className="btn btn-primary"
              type="button"
              style={{ background: "#074d5d", borderColor: "#074d5d" }}
              onClick={handleDashboard}
            >
              Go Back to My Dashboard
            </button>
          </div>
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
        <div
          className="card clickable-card"
          style={{
            background: "#074d5d",
            borderColor: "#074d5d",
            marginBottom: "10px",
          }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <h4 style={{ color: "rgb(255,255,255)" }}>Munir Siddiqui</h4>
                <p style={{ color: "rgb(255,255,255)", marginBottom: "0px" }}>
                  Class of 2024
                </p>
                <p style={{ color: "rgb(255,255,255)", marginBottom: "0px" }}>
                  Pakistan
                </p>
                <p style={{ color: "rgb(255,255,255)", marginBottom: "0px" }}>
                  On Campus
                </p>
                <p style={{ color: "rgb(255,255,255)", marginBottom: "0px" }}>
                  3 Roomies
                </p>
              </div>
              <div className="col">
                <p style={{ color: "rgb(255,255,255)", marginBottom: "0px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col d-md-flex justify-content-md-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  style={{ fontSize: "32px", color: "rgb(255,255,255)" }}
                >
                  <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRequests;
