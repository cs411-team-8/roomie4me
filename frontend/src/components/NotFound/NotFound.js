import React from "react";

function NotFound() {
  return (
    <div
      className="container text-white p-4 p-lg-5 py-4 py-xl-5"
      id="notFound"
      style={{
        background: "#77a6b1",
        borderRadius: "6px",
        width: "500px",
        height: "300px",
        marginTop: "-150px",
        marginLeft: "-250px",
      }}
    >
      <div className="row">
        <div className="col">
          <h1
            style={{
              fontSize: "100px",
              textAlign: "center",
              color: "var(--bs-red)",
            }}
          >
            Oops!
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="text-center">
            <span style={{ color: "rgb(204, 61, 72)" }}>404 </span>
            <span style={{ color: "rgb(0, 0, 0)" }}>- Page Not Found</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6 className="text-center">
            The page you are looking for may have been moved, deleted, or
            possibly never existed
          </h6>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
