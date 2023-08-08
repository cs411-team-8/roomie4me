import { React, useState, useEffect } from "react";
import Footer from "../Footer";

function MyInvites() {
  const viewIncoming = async (event) => {
    const semester =
      event.target.closest(".clickable-card").dataset.incomingSemester;
    const id = event.target.closest(".clickable-card").dataset.incomingId;
    window.location.href = `/incomingInvite/${id}/${semester}`;
  };

  const viewOutgoing = async (event) => {
    const semester =
      event.target.closest(".clickable-card").dataset.outgoingSemester;
    const id = event.target.closest(".clickable-card").dataset.outgoingId;
    window.location.href = `/outgoingInvite/${id}/${semester}`;
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setTimer(true);
    }, 50);
  }, []);

  const [incoming, setIncoming] = useState();
  const [outgoing, setOutgoing] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (document.cookie) {
          const accessToken = document.cookie.split("access-token=")[1];
          const incomingUrl = "/api/v1/invite/myincoming";
          const incomingOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          };
          const incomingResponse = await fetch(incomingUrl, incomingOptions);
          const incomingData = await incomingResponse.json();
          setIncoming(incomingData);

          const outgoingEndpoint = "/api/v1/invite/myoutgoing";
          const outgoingUrl = outgoingEndpoint;
          const outgoingOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          };
          const outgoingResponse = await fetch(outgoingUrl, outgoingOptions);
          const outgoingData = await outgoingResponse.json();
          console.log(incomingData);
          console.log(outgoingData);
          setOutgoing(outgoingData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {timer && (
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
              <div className="row" style={{ marginTop: "33px" }}>
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
                  <h2
                    style={{
                      textAlign: "center",
                      marginBottom: "-1px",
                      paddingTop: "0px",
                      marginTop: "0px",
                      marginRight: "0px",
                    }}
                  >
                    These are your invites
                  </h2>
                </div>
                <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center" />
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
            <div
              className="container text-white p-4 p-lg-5 py-4 py-xl-5"
              style={{
                margin: "25px auto",
                background: "#77a6b1",
                borderRadius: "6px",
                paddingBottom: "0px",
              }}
            >
              <div className="accordion" role="tablist" id="accordion-1">
                <div
                  className="accordion-item"
                  style={{ background: "#77a6b1", borderColor: "#77a6b1" }}
                >
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-1"
                      aria-expanded="true"
                      aria-controls="accordion-1 .item-1"
                    >
                      Incoming Invites
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show item-1"
                    role="tabpanel"
                  >
                    <div className="accordion-body">
                      {incoming.length !== 0 ? (
                        incoming.map((request) => (
                          <div
                            className="card clickable-card"
                            style={{
                              background: "#074d5d",
                              borderColor: "#074d5d",
                              marginBottom: "0px",
                            }}
                            onClick={viewIncoming}
                            data-incomingSemester={request.targetSemester}
                            data-incomingId={request.authorId}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-5">
                                  <h4 style={{ color: "rgb(255,255,255)" }}>
                                    {request.senderUser.name.firstName +
                                      " " +
                                      request.senderUser.name.lastName}
                                  </h4>
                                  <p
                                    style={{
                                      color: "rgb(255,255,255)",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    {request._doc.requestSemester}
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
                                    style={{
                                      fontSize: "32px",
                                      color: "rgb(255,255,255)",
                                    }}
                                  >
                                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p
                          style={{
                            color: "rgb(255,255,255)",
                            marginBottom: "0px",
                          }}
                        >
                          You have no incoming invites
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  style={{ background: "#77a6b1", borderColor: "#77a6b1" }}
                >
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-2"
                      aria-expanded="true"
                      aria-controls="accordion-1 .item-2"
                    >
                      Outgoing Invites
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show item-2"
                    role="tabpanel"
                  >
                    <div className="accordion-body">
                      {outgoing.length !== 0 ? (
                        outgoing.map((request) => (
                          <div
                            className="card clickable-card"
                            style={{
                              background: "#074d5d",
                              borderColor: "#074d5d",
                            }}
                            onClick={viewOutgoing}
                            data-outgoingSemester={request.targetSemester}
                            data-outgoingId={request.targetUser.openid}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-5">
                                  <h4 style={{ color: "rgb(255,255,255)" }}>
                                    {request.targetUser.name.firstName +
                                      " " +
                                      request.targetUser.name.lastName}
                                  </h4>
                                  <p
                                    style={{
                                      color: "rgb(255,255,255)",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    {request._doc.requestSemester}
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
                                    style={{
                                      fontSize: "32px",
                                      color: "rgb(255,255,255)",
                                    }}
                                  >
                                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p
                          style={{
                            color: "rgb(255,255,255)",
                            marginBottom: "0px",
                          }}
                        >
                          You have no outgoing invites
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default MyInvites;
