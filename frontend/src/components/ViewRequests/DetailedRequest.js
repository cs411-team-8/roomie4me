import { React, useEffect, useState } from "react";
import Footer from "../Footer";

function DetailedRequest() {
  const [timer, setTimer] = useState(false);

  const [request, setRequest] = useState([]);
  useEffect(() => {
    const test = async (event) => {
      if (document.cookie) {
        const accessToken = document.cookie.split("access-token=")[1];
        const baseUrl = "http://localhost:8082";
        const endpoint = "/api/v1/roomie/request";
        const decodedString = decodeURIComponent(
          window.location.pathname.split("/request/")[1]
        );
        const authorId = decodedString.split("/")[0];
        const semester = decodedString.split("/")[1];
        console.log(authorId, semester);
        const queryParams = new URLSearchParams();
        queryParams.append("authorId", authorId);
        queryParams.append("targetSemester", semester);

        const url = baseUrl + endpoint + "?" + queryParams.toString();

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setRequest(data);
      }
    };

    try {
      test();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setTimer(true);
    }, 50);
  }, []);

  const handleBack = () => {
    window.location.href = "/viewRequests";
  };

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
                    className="d-inline-flex d-md-flex justify-content-md-center"
                    src="/assets/img/people.png"
                    width={117}
                    height={100}
                    style={{ marginRight: "0px" }}
                    alt="logo"
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
                    You are viewing Munir's roomie request
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
                    onClick={handleBack}
                  >
                    Go Back to All Requests
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
              <div>
                <div
                  className="card"
                  style={{
                    background: "#074d5d",
                    borderColor: "#074d5d",
                    marginBottom: "25px",
                  }}
                >
                  <div className="card-body">
                    <h3
                      style={{
                        color: "rgb(255,255,255)",
                        marginBottom: "27px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-info-circle"
                        style={{ fontSize: "27px", marginBottom: "3px" }}
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                      &nbsp; Profile Info
                    </h3>
                    <div className="row d-md-flex">
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5 style={{ color: "rgb(255,255,255)" }}>
                              First Name
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p style={{ color: "rgb(255,255,255)" }}>
                              Muhammad Aseef
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row d-md-flex">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5
                              className="text-start d-md-flex"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              Last Name
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              Imran
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5 style={{ color: "rgb(255,255,255)" }}>Email</h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p style={{ color: "rgb(255,255,255)" }}>
                              aseef@bu.edu
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              Age
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              20
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5 style={{ color: "rgb(255,255,255)" }}>
                              Gender
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p style={{ color: "rgb(255,255,255)" }}>Male</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              Graduation
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              May 2025
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5 style={{ color: "rgb(255,255,255)" }}>
                              Religion
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p style={{ color: "rgb(255,255,255)" }}>Islam</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div
                            className="col-lg-5 d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <h5
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              Country
                            </h5>
                          </div>
                          <div
                            className="col d-md-flex"
                            style={{ background: "#074d5d" }}
                          >
                            <p
                              className="text-start"
                              style={{ color: "rgb(255,255,255)" }}
                            >
                              United States
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card clickable-card"
                  style={{
                    background: "#074d5d",
                    marginBottom: "25px",
                    borderColor: "#074d5d",
                  }}
                >
                  <div className="card-body">
                    <h3 style={{ color: "#ffffff", marginBottom: "27px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ fontSize: "27px", marginBottom: "3px" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                          fill="currentColor"
                        />
                      </svg>
                      &nbsp; About Me
                    </h3>
                    <p style={{ color: "#ffffff" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis ut diam quam nulla porttitor massa id neque.
                      Egestas fringilla phasellus faucibus scelerisque. Tellus
                      integer feugiat scelerisque varius morbi. Turpis massa sed
                      elementum tempus egestas sed sed. Elementum nibh tellus
                      molestie nunc non. Eget magna fermentum iaculis eu.
                      Pulvinar mattis nunc sed blandit libero volutpat sed cras.
                      Eu feugiat pretium nibh ipsum consequat nisl. Viverra
                      adipiscing at in tellus integer feugiat scelerisque varius
                      morbi.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col">
                    <div
                      className="card clickable-card"
                      style={{
                        background: "#074d5d",
                        marginBottom: "25px",
                        borderColor: "#074d5d",
                      }}
                    >
                      <div className="card-body">
                        <h3 style={{ color: "#ffffff", marginBottom: "27px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{ fontSize: "27px", marginBottom: "3px" }}
                          >
                            <path
                              d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z"
                              fill="currentColor"
                            />
                            <path
                              d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
                              fill="currentColor"
                            />
                            <path
                              d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z"
                              fill="currentColor"
                            />
                          </svg>
                          &nbsp; Request Details
                        </h3>
                        <div className="row">
                          <div className="col">
                            <h6
                              className="d-inline-flex"
                              style={{ color: "#ffffff" }}
                            >
                              Semester
                            </h6>
                            <p
                              className="d-inline-flex"
                              style={{ marginLeft: "14px", color: "#ffffff" }}
                            >
                              {request.targetSemester}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h6
                              className="d-inline-flex"
                              style={{ color: "#ffffff" }}
                            >
                              Number of Roomies
                            </h6>
                            <p
                              className="d-inline-flex"
                              style={{ marginLeft: "14px", color: "#ffffff" }}
                            >
                              {request.numberOfRoomies}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h6
                              className="d-inline-flex"
                              style={{ color: "#ffffff" }}
                            >
                              On Campus
                            </h6>
                            <p
                              className="d-inline-flex"
                              style={{ marginLeft: "14px", color: "#ffffff" }}
                            >
                              Yes/No/Indifferent
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h6
                              className="d-inline-flex"
                              style={{ color: "#ffffff" }}
                            >
                              Already Has Housing
                            </h6>
                            <p
                              className="d-inline-flex"
                              style={{ marginLeft: "14px", color: "#ffffff" }}
                            >
                              No/Yes
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h6
                              className="d-inline-flex"
                              style={{ color: "#ffffff" }}
                            >
                              Desired Residence:
                            </h6>
                            <p
                              className="d-inline-flex"
                              style={{ marginLeft: "14px", color: "#ffffff" }}
                            >
                              Kilachand Hall/N/A
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card clickable-card"
                      style={{
                        background: "#074d5d",
                        marginBottom: "25px",
                        borderColor: "#074d5d",
                        "-bsPrimary": "#074d5d",
                        "-bsPrimaryRgb": "7,77,93",
                      }}
                    >
                      <div className="card-body">
                        <h3 style={{ color: "#ffffff", marginBottom: "27px" }}>
                          <i
                            className="fa fa-bed"
                            style={{ fontSize: "27px", marginBottom: "3px" }}
                          />
                          &nbsp; Sleep Schedule
                        </h3>
                        <div className="row" style={{ marginTop: "62.45px" }}>
                          <div className="col">
                            <h5 style={{ color: "#ffffff" }}>Weekday</h5>
                            <h6 style={{ color: "#ffffff" }}>Bedtime</h6>
                            <p style={{ color: "#ffffff" }}>10:00 PM</p>
                            <h6 style={{ color: "#ffffff" }}>Wake Up Time</h6>
                            <p style={{ color: "#ffffff" }}>06:00 AM</p>
                          </div>
                          <div className="col">
                            <h5
                              className="text-end"
                              style={{ color: "#ffffff" }}
                            >
                              Weekend
                            </h5>
                            <h6
                              className="text-end"
                              style={{ color: "#ffffff" }}
                            >
                              Bedtime
                            </h6>
                            <p
                              className="text-end"
                              style={{ color: "#ffffff" }}
                            >
                              11:00 PM
                            </p>
                            <h6
                              className="text-end"
                              style={{ color: "#ffffff" }}
                            >
                              Wake Up Time
                            </h6>
                            <p
                              className="text-end"
                              style={{ color: "#ffffff" }}
                            >
                              07:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card clickable-card"
                  style={{
                    background: "#074d5d",
                    marginBottom: "25px",
                    borderColor: "#074d5d",
                  }}
                >
                  <div className="card-body">
                    <h3 style={{ color: "#ffffff", marginBottom: "27px" }}>
                      <i
                        className="la la-glass"
                        style={{ fontSize: "27px", marginBottom: "3px" }}
                      />
                      &nbsp; Substance Use
                    </h3>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Smoking/Vaping/Other Drugs
                        </h5>
                        <div
                          className="progress"
                          style={{
                            "-bsPrimary": "#191e50",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            40%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ marginBottom: "14px" }}>
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Alcohol
                        </h5>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={15}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "15%" }}
                          >
                            15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card clickable-card"
                  style={{
                    background: "#074d5d",
                    borderColor: "#074d5d",
                    marginBottom: "25px",
                  }}
                >
                  <div className="card-body">
                    <h3 style={{ color: "#ffffff", marginBottom: "27px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icon-tabler-circle-check"
                        style={{ fontSize: "27px", marginBottom: "3px" }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={12} cy={12} r={9} />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                      &nbsp; Roomie Preferences
                    </h3>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Similar Age
                        </h5>
                        <div
                          className="progress"
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ textAlign: "center", marginBottom: "15px" }}
                        >
                          <div className="col">
                            <div
                              className="row"
                              style={{ textAlign: "center" }}
                            >
                              <div
                                className="col"
                                style={{ textAlign: "left" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Doesn't Matter
                                </p>
                              </div>
                              <div
                                className="col"
                                style={{ textAlign: "right" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Very Important
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Similar Religion
                        </h5>
                        <div
                          className="progress"
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ textAlign: "center", marginBottom: "15px" }}
                        >
                          <div className="col">
                            <div
                              className="row"
                              style={{ textAlign: "center" }}
                            >
                              <div
                                className="col"
                                style={{ textAlign: "left" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Doesn't Matter
                                </p>
                              </div>
                              <div
                                className="col"
                                style={{ textAlign: "right" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Very Important
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Similar Country
                        </h5>
                        <div
                          className="progress"
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ textAlign: "center", marginBottom: "15px" }}
                        >
                          <div className="col">
                            <div
                              className="row"
                              style={{ textAlign: "center" }}
                            >
                              <div
                                className="col"
                                style={{ textAlign: "left" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Doesn't Matter
                                </p>
                              </div>
                              <div
                                className="col"
                                style={{ textAlign: "right" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Very Important
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Similar Drug Intake
                        </h5>
                        <div
                          className="progress"
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ textAlign: "center", marginBottom: "15px" }}
                        >
                          <div className="col">
                            <div
                              className="row"
                              style={{ textAlign: "center" }}
                            >
                              <div
                                className="col"
                                style={{ textAlign: "left" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Doesn't Matter
                                </p>
                              </div>
                              <div
                                className="col"
                                style={{ textAlign: "right" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Very Important
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Similar Alcohol Intake
                        </h5>
                        <div
                          className="progress"
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ textAlign: "center", marginBottom: "15px" }}
                        >
                          <div className="col">
                            <div
                              className="row"
                              style={{ textAlign: "center" }}
                            >
                              <div
                                className="col"
                                style={{ textAlign: "left" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Doesn't Matter
                                </p>
                              </div>
                              <div
                                className="col"
                                style={{ textAlign: "right" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "5px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Very Important
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5 className="mb-2" style={{ color: "#ffffff" }}>
                          Similar Sleep Schedule
                        </h5>
                        <div
                          className="progress"
                          style={{
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "40%" }}
                          >
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <div className="row" style={{ textAlign: "center" }}>
                          <div className="col">
                            <div
                              className="row"
                              style={{ textAlign: "center" }}
                            >
                              <div
                                className="col"
                                style={{ textAlign: "left" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "9px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Doesn't Matter
                                </p>
                              </div>
                              <div
                                className="col"
                                style={{ textAlign: "right" }}
                              >
                                <p
                                  style={{
                                    marginBottom: "9px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Very Important
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div
                  className="card clickable-card"
                  style={{
                    background: "#074d5d",
                    borderColor: "#074d5d",
                    marginBottom: "0px",
                  }}
                >
                  <div className="card-body">
                    <h3 style={{ color: "#ffffff", marginBottom: "27px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        style={{ fontSize: "27px", marginBottom: "3px" }}
                      >
                        <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
                      </svg>
                      &nbsp; Request to Connect
                    </h3>
                    <div className="form-group required">
                      <label
                        className="form-label"
                        htmlFor="message"
                        style={{ color: "rgb(255,255,255)" }}
                      >
                        Message:
                      </label>
                      <textarea
                        className="form-control"
                        style={{
                          height: "100px",
                          marginTop: "-7px",
                          marginBottom: "7px",
                        }}
                        name="message"
                        placeholder="Please enter a message for Munir"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <input
                        className="btn btn-primary"
                        type="submit"
                        name="connect"
                        required
                        style={{
                          textAlign: "center",
                          background: "#910909",
                          marginTop: "25px",
                          borderColor: "#910909",
                          width: "200px",
                          marginBottom: "20px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default DetailedRequest;
