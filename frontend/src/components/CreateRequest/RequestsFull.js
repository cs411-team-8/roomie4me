import { React, useState, useEffect } from "react";

function RequestsFull() {
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
                  <span style={{ color: "rgb(0, 0, 0)" }}>
                    No more available semesters
                  </span>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6 className="text-center">
                  Looks like you have already submitted roomie requests for all
                  available semesters.
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestsFull;
