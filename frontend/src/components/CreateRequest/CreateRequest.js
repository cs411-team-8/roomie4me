import React, { useState } from "react";
import Footer from "../Footer";

function CreateRequest(props) {
  const [currentHousing, setCurrentHousing] = useState(false);

  const handleCurrentHousingChange = (event) => {
    setCurrentHousing(event.target.value === "true");
  };

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8082" + "/api/v1/roomie/create";
    const accessToken = document.cookie.split("access-token=")[1];
    const semester = document.querySelector(".semester").value;
    const numRoomies = document.querySelector(".numRoomies").value;
    const onCampus = document.querySelector(".onCampus").value;
    const currentHousing = document.querySelector(".currentHousing").value;
    const address = document.querySelector(".address")
      ? document.querySelector(".address").value
      : null;
    const residence = document.querySelector(".residence")
      ? document.querySelector(".residence").value
      : null;
    const expiry = document.querySelector(".expiry").value;

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        targetSemester: semester,
        numberOfRoomies: numRoomies,
        housingInfo: {
          onCampus: onCampus,
          hasHousing: currentHousing,
          address: address,
          desiredResidence: residence,
          expiry: expiry,
          currentStatus: "open",
        },
      }),
    };

    const response = await fetch(url, options);
    console.log(response);
    if (response.status === 200) {
      window.location.href = "/dashboard";
      alert("Your roomie request has been submitted.");
    }
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
              Hi, {props.user.name.firstName}! Please fill out the following
              form to create a new roomie request.
            </h3>
          </div>
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
        <section>
          <form onSubmit={handleSubmit}>
            <div className="form-group required">
              <label className="form-label" htmlFor="semester">
                Target Semester:
              </label>
              <select
                className="form-select semester"
                style={{
                  paddingBottom: "6px",
                  marginTop: "-7px",
                  marginBottom: "7px",
                }}
                name="semester"
                required
              >
                <option value="Summer 2023">Summer 2023</option>
                <option value="Fall 2023">Fall 2023</option>
                <option value="Spring 2024">Spring 2024</option>
                <option value="Summer 2024">Summer 2024</option>
                <option value="Fall 2024">Fall 2024</option>
              </select>
            </div>
            <div className="form-group required">
              <label className="form-label" htmlFor="numRoomies">
                Number of Roomies:
              </label>
              <input
                className="form-control form-control-sm numRoomies"
                type="number"
                name="numRoomies"
                style={{
                  marginTop: "-7px",
                  marginBottom: "7px",
                  height: "38px",
                  borderRadius: "6px",
                }}
                min={1}
                max={7}
                required
                placeholder="Please enter the number of roomies you want (1 to 7)"
              />
            </div>
            <div className="form-group required">
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="onCampus">
                    On Campus:
                  </label>
                  <select
                    className="form-select onCampus"
                    style={{
                      paddingBottom: "6px",
                      marginTop: "-7px",
                      marginBottom: "7px",
                    }}
                    name="onCampus"
                    required
                  >
                    <option value={true}>
                      I want to/already live on campus
                    </option>
                    <option value={false}>
                      I don't want to live on campus
                    </option>
                    <option value>I am indifferent</option>
                  </select>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="currentHousing">
                    Current Housing:
                  </label>
                  <select
                    className="form-select currentHousing"
                    style={{
                      paddingBottom: "6px",
                      marginTop: "-7px",
                      marginBottom: "7px",
                    }}
                    name="currentHousing"
                    onChange={handleCurrentHousingChange}
                    required
                  >
                    <option value={false}>I don't have housing</option>
                    <option value={true}>I already have housing</option>
                  </select>
                </div>
              </div>
            </div>
            {currentHousing && (
              <div className="form-group required">
                <label className="form-label" htmlFor="address">
                  Current Housing Address:
                </label>
                <input
                  className="form-control address"
                  type="text"
                  name="address"
                  required
                  style={{ marginTop: "-7px", marginBottom: "7px" }}
                />
              </div>
            )}
            {!currentHousing && (
              <div className="form-group required">
                <label className="form-label" htmlFor="residence">
                  Desired Residence
                </label>
                <input
                  className="form-control residence"
                  type="text"
                  name="residence"
                  style={{ marginTop: "-7px", marginBottom: "7px" }}
                  required
                />
              </div>
            )}
            <div className="form-group required">
              <label className="form-label" htmlFor="expiry">
                Request Deadline:
              </label>
              <input
                className="form-control form-control-sm expiry"
                type="date"
                name="expiry"
                style={{
                  marginTop: "-7px",
                  marginBottom: "7px",
                  height: "38px",
                  borderRadius: "6px",
                }}
                required
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <input
                className="btn btn-primary"
                type="submit"
                name="submitProfile"
                required
                style={{
                  width: "200px",
                  textAlign: "center",
                  background: "#910909",
                  borderColor: "#910909",
                  borderTopColor: "rgb(255,",
                  borderRightColor: "255,",
                  borderBottomColor: "255)",
                  borderLeftColor: "255,",
                  marginBottom: "0px",
                  marginTop: "25px",
                }}
              />
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default CreateRequest;
