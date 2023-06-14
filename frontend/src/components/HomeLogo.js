import React from "react";

function HomeLogo() {
  return (
    <header style={{ textAlign: "center", padding: "50px" }}>
      <img
        className="d-inline-flex justify-content-md-center rubberBand animated"
        src="assets/img/logo.png"
        style={{ boxShadow: "0px 0px" }}
        width="30%"
        height="30%"
        alt="logo"
      />
    </header>
  );
}

export default HomeLogo;
