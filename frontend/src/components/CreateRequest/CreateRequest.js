import React, { useState, useEffect } from "react";
import Footer from "../Footer";

function CreateRequest(props) {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setTimer(true);
    }, 50);
  }, []);

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
    const onCampusValue = document.querySelector(".onCampus").value;
    const onCampus = onCampusValue === "" ? null : onCampusValue;
    const currentHousing = document.querySelector(".currentHousing").value;
    const address = document.querySelector(".address")
      ? document.querySelector(".address").value
      : null;
    const residence = document.querySelector(".residence")
      ? document.querySelector(".residence").value
      : null;
    const expiry = document.querySelector(".expiry").value;
    const similarAge = document.querySelector(".similarAge").value;
    const similarReligion = document.querySelector(".similarReligion").value;
    const similarCountry = document.querySelector(".similarCountry").value;
    const similarDrugIntake =
      document.querySelector(".similarDrugIntake").value;
    const similarAlcoholIntake = document.querySelector(
      ".similarAlcoholIntake"
    ).value;
    const similarSleepSchedule = document.querySelector(
      ".similarSleepSchedule"
    ).value;

    console.log(onCampus);

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
        },
        expiry: expiry,
        preferences: {
          similarAge: similarAge,
          similarReligion: similarReligion,
          similarCountry: similarCountry,
          similarDrugIntake: similarDrugIntake,
          similarAlcoholIntake: similarAlcoholIntake,
          similarSleepSchedule: similarSleepSchedule,
        },
        currentStatus: "open",
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
                  className="d-inline-flex d-md-flex justify-content-md-center"
                  src="assets/img/people.png"
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
                  Please fill out the following form to create a new roomie
                  request.
                </h2>
              </div>
              <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center"></div>
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
            <section>
              <form onSubmit={handleSubmit}>
                {/* <div
                  className="card clickable-card"
                  style={{
                    background: "#074d5d",
                    borderColor: "#074d5d",
                    marginBottom: "25px",
                  }}
                >
                  <div className="card-body"> */}
                <div className="form-group required">
                  <label
                    className="form-label"
                    htmlFor="semester"
                    style={{ color: "#ffffff" }}
                  >
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
                    <option
                      value=""
                      selected="selected"
                      disabled="disabled"
                    ></option>
                    {!props.requests.some(
                      (request) => request.targetSemester === "Summer 1 2023"
                    ) && <option value="Summer 1 2023">Summer 1 2023</option>}

                    {!props.requests.some(
                      (request) => request.targetSemester === "Summer 2 2023"
                    ) && <option value="Summer 2 2023">Summer 2 2023</option>}

                    {!props.requests.some(
                      (request) => request.targetSemester === "Fall 2023"
                    ) && <option value="Fall 2023">Fall 2023</option>}

                    {!props.requests.some(
                      (request) => request.targetSemester === "Spring 2024"
                    ) && <option value="Spring 2024">Spring 2024</option>}

                    {!props.requests.some(
                      (request) => request.targetSemester === "Summer 1 2024"
                    ) && <option value="Summer 1 2024">Summer 1 2024</option>}

                    {!props.requests.some(
                      (request) => request.targetSemester === "Summer 2 2024"
                    ) && <option value="Summer 2 2024">Summer 2 2024</option>}

                    {!props.requests.some(
                      (request) => request.targetSemester === "Fall 2024"
                    ) && <option value="Fall 2024">Fall 2024</option>}
                  </select>
                </div>
                <div className="form-group required">
                  <label
                    className="form-label"
                    htmlFor="numRoomies"
                    style={{ color: "#ffffff" }}
                  >
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
                      <label
                        className="form-label"
                        htmlFor="onCampus"
                        style={{ color: "#ffffff" }}
                      >
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
                        <option
                          value=""
                          selected="selected"
                          disabled="disabled"
                        ></option>
                        <option value={true}>
                          I want to/already live on campus
                        </option>
                        <option value={false}>
                          I don't want to live on campus
                        </option>
                        <option value="">I am indifferent</option>
                      </select>
                    </div>
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="currentHousing"
                        style={{ color: "#ffffff" }}
                      >
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
                        <option
                          value=""
                          selected="selected"
                          disabled="disabled"
                        ></option>
                        <option value={false}>I don't have housing</option>
                        <option value={true}>I already have housing</option>
                      </select>
                    </div>
                  </div>
                </div>
                {currentHousing && (
                  <div className="form-group required">
                    <label
                      className="form-label"
                      htmlFor="address"
                      style={{ color: "#ffffff" }}
                    >
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
                    <label
                      className="form-label"
                      htmlFor="residence"
                      style={{ color: "#ffffff" }}
                    >
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
                  <label
                    className="form-label"
                    htmlFor="expiry"
                    style={{ color: "#ffffff" }}
                  >
                    Request Deadline:
                  </label>
                  <input
                    className="form-control form-control-sm expiry"
                    type="date"
                    name="expiry"
                    style={{
                      marginTop: "-7px",
                      marginBottom: "25px",
                      height: "38px",
                      borderRadius: "6px",
                    }}
                    required
                  />
                </div>
                {/* </div>
                </div>
                <div
                  className="card clickable-card"
                  style={{
                    background: "#074d5d",
                    borderColor: "#074d5d",
                    marginBottom: "10px",
                  }}
                >
                  <div className="card-body"> */}
                <h5 style={{ color: "#ffffff" }}>
                  On a scale of 1 (not important) to 5 (very important), how
                  important is similarity in these categories to your potential
                  roomie(s):
                </h5>
                <div className="form-group required">
                  <div className="row">
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="similarAge"
                        style={{ color: "#ffffff" }}
                      >
                        Age:
                      </label>
                      <input
                        className="form-control form-control-sm similarAge"
                        type="number"
                        name="similarAge"
                        style={{
                          marginTop: "-7px",
                          marginBottom: "7px",
                          height: "38px",
                          borderRadius: "6px",
                        }}
                        min={1}
                        max={5}
                        required
                      />
                    </div>
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="similarReligion"
                        style={{ color: "#ffffff" }}
                      >
                        Religion:
                      </label>
                      <input
                        className="form-control form-control-sm similarReligion"
                        type="number"
                        name="similarReligion"
                        style={{
                          marginTop: "-7px",
                          marginBottom: "7px",
                          height: "38px",
                          borderRadius: "6px",
                        }}
                        min={1}
                        max={5}
                        required
                      />
                    </div>
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="similarCountry"
                        style={{ color: "#ffffff" }}
                      >
                        Country:
                      </label>
                      <input
                        className="form-control form-control-sm similarCountry"
                        type="number"
                        name="similarCountry"
                        style={{
                          marginTop: "-7px",
                          marginBottom: "7px",
                          height: "38px",
                          borderRadius: "6px",
                        }}
                        min={1}
                        max={5}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="similarDrugIntake"
                        style={{ color: "#ffffff" }}
                      >
                        Smoking/Drug Intake:
                      </label>
                      <input
                        className="form-control form-control-sm similarDrugIntake"
                        type="number"
                        name="similarDrugIntake"
                        style={{
                          marginTop: "-7px",
                          marginBottom: "7px",
                          height: "38px",
                          borderRadius: "6px",
                        }}
                        min={1}
                        max={5}
                        required
                      />
                    </div>
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="similarAlcoholIntake"
                        style={{ color: "#ffffff" }}
                      >
                        Alcohol Intake:
                      </label>
                      <input
                        className="form-control form-control-sm similarAlcoholIntake"
                        type="number"
                        name="similarAlcoholIntake"
                        style={{
                          marginTop: "-7px",
                          marginBottom: "7px",
                          height: "38px",
                          borderRadius: "6px",
                        }}
                        min={1}
                        max={5}
                        required
                      />
                    </div>
                    <div className="col">
                      <label
                        className="form-label"
                        htmlFor="similarSleepSchedule"
                        style={{ color: "#ffffff" }}
                      >
                        Sleep Schedule:
                      </label>
                      <input
                        className="form-control form-control-sm similarSleepSchedule"
                        type="number"
                        name="similarSleepSchedule"
                        style={{
                          marginTop: "-7px",
                          marginBottom: "7px",
                          height: "38px",
                          borderRadius: "6px",
                        }}
                        min={1}
                        max={5}
                        required
                      />
                    </div>
                  </div>
                  {/* </div>
                  </div> */}
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
      )}
    </div>
  );
}

export default CreateRequest;
