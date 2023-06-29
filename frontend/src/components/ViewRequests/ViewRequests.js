import { React, useEffect, useState } from "react";
import Footer from "../Footer";

function ViewRequests(props) {
  const viewDetailedRequest = async (event) => {
    const semester = event.target.closest(".clickable-card").dataset.semester;
    const authorId = event.target.closest(".clickable-card").dataset.id;
    window.location.href = `/request/${authorId}/${semester}`;
  };

  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setTimer(true);
    }, 50);
  }, []);

  const handleHome = () => {
    window.location.href = "/";
  };

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (document.cookie) {
          const accessToken = document.cookie.split("access-token=")[1];
          const baseUrl = process.env.REACT_APP_BACKEND_URL;
          const requestEndpoint = "/api/v1/roomie/requests";

          const requestQueryParams = new URLSearchParams();
          requestQueryParams.append("page-number", 0);
          requestQueryParams.append("batch-size", 25);
          requestQueryParams.append("sort-mode", "creation");

          const requestUrl =
            baseUrl + requestEndpoint + "?" + requestQueryParams.toString();

          const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          };

          const requestResponse = await fetch(requestUrl, requestOptions);
          const requestData = await requestResponse.json();
          setRequests(requestData);

          const userEndpoint = "/api/v1/user/findall";
          const userUrl = baseUrl + userEndpoint;
          const userOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              userids: requestData.map((request) => request.authorId),
            }),
          };

          const userResponse = await fetch(userUrl, userOptions);
          const userData = await userResponse.json();
          console.log(requestData);
          console.log(userData);
          setUsers(userData);
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
                  src="assets/img/people.png"
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
                  These are the current open roomie requests
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
            {requests.map(
              (request, index) =>
                request.authorId !== props.user.openid && (
                  <div
                    className="card clickable-card"
                    style={{
                      background: "#074d5d",
                      borderColor: "#074d5d",
                      marginBottom: "10px",
                    }}
                    onClick={viewDetailedRequest}
                    data-semester={request.targetSemester}
                    data-id={request.authorId}
                    key={request._id}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-5">
                          <h4
                            style={{
                              color: "#ffffff",
                            }}
                          >
                            {users[index]?.name?.firstName +
                              " " +
                              users[index]?.name?.lastName}
                          </h4>
                          <p
                            style={{
                              color: "#ffffff",
                              marginBottom: "0px",
                            }}
                          >
                            {users[index]?.internationalStatus.country}
                          </p>
                          <p
                            style={{
                              color: "#ffffff",
                              marginBottom: "0px",
                            }}
                          >
                            {request.targetSemester}
                          </p>
                          {request.housingInfo.onCampus !== null && (
                            <p
                              style={{
                                color: "#ffffff",
                                marginBottom: "0px",
                              }}
                            >
                              {request.housingInfo.onCampus === true
                                ? "On Campus"
                                : "Off Campus"}
                            </p>
                          )}
                          <p
                            style={{
                              color: "#ffffff",
                              marginBottom: "0px",
                            }}
                          >
                            {request.numberOfRoomies === 1
                              ? request.numberOfRoomies + " Roomie"
                              : request.numberOfRoomies + " Roomies"}
                          </p>
                        </div>
                        <div className="col">
                          <p
                            style={{
                              color: "#ffffff",
                              marginBottom: "0px",
                            }}
                          >
                            {users[index]?.aboutMe &&
                              (users[index].aboutMe.length <= 450
                                ? users[index].aboutMe
                                : users[index].aboutMe.substring(0, 450) +
                                  " . . .")}
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
                              color: "#ffffff",
                            }}
                          >
                            <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ViewRequests;
