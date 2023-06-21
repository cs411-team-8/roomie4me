import { React, useState, useEffect } from "react";

function InDev() {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setTimer(true);
    }, 100);
  }, []);

  return (
    <div>
      {timer && (
        <div>
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
                  data-bss-disabled-mobile="true"
                  className="rubberBand animated"
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
                <h3 className="text-center">
                  <span style={{ color: "rgb(0, 0, 0)" }}>In Development</span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="text-center">
                  This page is currently in development. Please check back
                  later.
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InDev;
