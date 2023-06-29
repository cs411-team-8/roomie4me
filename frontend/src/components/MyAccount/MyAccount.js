import { React, useEffect, useState } from "react";
import Footer from "../Footer";

function MyAccount(props) {
  const handleHome = () => {
    window.location.href = "/";
  };

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = process.env.REACT_APP_BACKEND_URL + "/api/v1/user/update";
    const accessToken = document.cookie.split("access-token=")[1];
    const firstName = document.querySelector(".fname").value;
    const lastName = document.querySelector(".lname").value;
    const gender = document.querySelector(".gender").value;
    const dob = document.querySelector(".dob").value;
    const phone = document.querySelector(".phone").value;
    const email = document.querySelector(".email").value;
    const international = document.querySelector(".international").value;
    const country = document.querySelector(".country").value;
    const graduation = document.querySelector(".graduation").value;
    const smoke = document.querySelector(".smoke").value;
    const drink = document.querySelector(".drink").value;
    const weekdaySleep = document.querySelector(".weekdaySleep").value;
    const weekdayWake = document.querySelector(".weekdayWake").value;
    const weekendSleep = document.querySelector(".weekendSleep").value;
    const weekendWake = document.querySelector(".weekendWake").value;
    const aboutMe = document.querySelector(".aboutMe").value;
    const religion = document.querySelector(".religion").value;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        registered: true,
        name: {
          firstName: firstName,
          lastName: lastName,
        },
        gender: gender,
        dob: dob,
        phone: phone,
        email: email,
        internationalStatus: {
          international: international,
          country: country,
        },
        religiousAffiliation: religion,
        degreeProgram: {
          graduation: graduation,
        },
        drugs: {
          smoking: smoke,
          alcohol: drink,
        },
        weeklySleepSchedule: {
          weekdays: {
            waketime: weekdayWake,
            bedtime: weekdaySleep,
          },
          weekends: {
            waketime: weekendWake,
            bedtime: weekendSleep,
          },
        },
        aboutMe: aboutMe,
      }),
    };
    const response = await fetch(url, options);
    console.log(response.status);
    if (response.status === 200) {
      window.location.href = "/dashboard";
      alert("Your profile details have been updated.");
    }
  };

  const numToOption = ["", "Never", "Rarely", "Sometimes", "Often"];

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
              Edit the fields in the following form and submit it to update your
              profile
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
        {/* {user && ( */}
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="fname">
                    First Name:
                  </label>
                  <input
                    className="form-control form-control-sm fname"
                    type="text"
                    name="fname"
                    defaultValue={props.user.name.firstName}
                    disabled
                    style={{
                      textAlign: "left",
                      marginTop: "-7px",
                      marginBottom: "7px",
                      height: "38px",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="lname">
                    Last Name:
                  </label>
                  <input
                    className="form-control form-control-sm lname"
                    type="text"
                    name="lname"
                    defaultValue={props.user.name.lastName}
                    disabled
                    style={{
                      textAlign: "left",
                      marginTop: "-7px",
                      marginBottom: "7px",
                      height: "38px",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="gender">
                    Gender:
                  </label>
                  <select
                    className="form-select gender"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    name="gender"
                  >
                    <option value={props.user.gender} selected="selected">
                      {props.user.gender[0].toUpperCase() +
                        props.user.gender.substring(1)}
                    </option>
                    {props.user.gender !== "male" && (
                      <option value="male">Male</option>
                    )}
                    {props.user.gender !== "female" && (
                      <option value="female">Female</option>
                    )}
                    {props.user.gender !== "other" && (
                      <option value="other">Other</option>
                    )}
                  </select>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="dob">
                    Date of Birth:
                  </label>
                  <input
                    className="form-control form-control-sm dob"
                    type="date"
                    name="dob"
                    defaultValue={props.user.dob.toString().substring(0, 10)}
                    style={{
                      marginTop: "-7px",
                      marginBottom: "7px",
                      height: "38px",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="phone">
                    Phone Number:
                  </label>
                  <input
                    className="form-control form-control-sm phone"
                    type="text"
                    pattern="^[0-9]{10}$"
                    style={{
                      marginTop: "-7px",
                      marginBottom: "7px",
                      borderRadius: "6px",
                      height: "38px",
                    }}
                    name="phone"
                    defaultValue={props.user.phone}
                  />
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="email">
                    Email Address:
                  </label>
                  <input
                    className="form-control email"
                    type="email"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    name="email"
                    defaultValue={props.user.email}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="graduation">
                Expected Graduation:
              </label>
              <input
                className="form-control graduation"
                type="month"
                style={{ marginTop: "-7px", marginBottom: "7px" }}
                name="graduation"
                defaultValue={props.user.degreeProgram.graduation
                  .toString()
                  .substring(0, 7)}
              />
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="international">
                    International Student:
                  </label>
                  <select
                    className="form-select international"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    name="international"
                  >
                    <option
                      value={props.user.internationalStatus.international}
                      selected="selected"
                    >
                      {props.user.internationalStatus.international === true
                        ? "Yes"
                        : "No"}
                    </option>
                    {props.user.internationalStatus.international !== true && (
                      <option value={true}>Yes</option>
                    )}
                    {props.user.internationalStatus.international !== false && (
                      <option value={false}>No</option>
                    )}
                  </select>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="country">
                    Country:
                  </label>
                  <select
                    className="form-select country"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    name="countries"
                  >
                    <option
                      value={props.user.internationalStatus.country}
                      selected="selected"
                    >
                      {props.user.internationalStatus.country}
                    </option>
                    {props.user.internationalStatus.country !==
                      "Afghanistan" && (
                      <option value="Afghanistan">Afghanistan</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Åland Islands" && (
                      <option value="Åland Islands">Åland Islands</option>
                    )}
                    {props.user.internationalStatus.country !== "Albania" && (
                      <option value="Albania">Albania</option>
                    )}
                    {props.user.internationalStatus.country !== "Algeria" && (
                      <option value="Algeria">Algeria</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "American Samoa" && (
                      <option value="American Samoa">American Samoa</option>
                    )}
                    {props.user.internationalStatus.country !== "Andorra" && (
                      <option value="Andorra">Andorra</option>
                    )}
                    {props.user.internationalStatus.country !== "Angola" && (
                      <option value="Angola">Angola</option>
                    )}
                    {props.user.internationalStatus.country !== "Anguilla" && (
                      <option value="Anguilla">Anguilla</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Antarctica" && (
                      <option value="Antarctica">Antarctica</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Antigua and Barbuda" && (
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Argentina" && (
                      <option value="Argentina">Argentina</option>
                    )}
                    {props.user.internationalStatus.country !== "Armenia" && (
                      <option value="Armenia">Armenia</option>
                    )}
                    {props.user.internationalStatus.country !== "Aruba" && (
                      <option value="Aruba">Aruba</option>
                    )}
                    {props.user.internationalStatus.country !== "Australia" && (
                      <option value="Australia">Australia</option>
                    )}
                    {props.user.internationalStatus.country !== "Austria" && (
                      <option value="Austria">Austria</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Azerbaijan" && (
                      <option value="Azerbaijan">Azerbaijan</option>
                    )}
                    {props.user.internationalStatus.country !== "Bahamas" && (
                      <option value="Bahamas">Bahamas</option>
                    )}
                    {props.user.internationalStatus.country !== "Bahrain" && (
                      <option value="Bahrain">Bahrain</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Bangladesh" && (
                      <option value="Bangladesh">Bangladesh</option>
                    )}
                    {props.user.internationalStatus.country !== "Barbados" && (
                      <option value="Barbados">Barbados</option>
                    )}
                    {props.user.internationalStatus.country !== "Belarus" && (
                      <option value="Belarus">Belarus</option>
                    )}
                    {props.user.internationalStatus.country !== "Belgium" && (
                      <option value="Belgium">Belgium</option>
                    )}
                    {props.user.internationalStatus.country !== "Belize" && (
                      <option value="Belize">Belize</option>
                    )}
                    {props.user.internationalStatus.country !== "Benin" && (
                      <option value="Benin">Benin</option>
                    )}
                    {props.user.internationalStatus.country !== "Bermuda" && (
                      <option value="Bermuda">Bermuda</option>
                    )}
                    {props.user.internationalStatus.country !== "Bhutan" && (
                      <option value="Bhutan">Bhutan</option>
                    )}
                    {props.user.internationalStatus.country !== "Bolivia" && (
                      <option value="Bolivia">Bolivia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Bosnia and Herzegovina" && (
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Botswana" && (
                      <option value="Botswana">Botswana</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Bouvet Island" && (
                      <option value="Bouvet Island">Bouvet Island</option>
                    )}
                    {props.user.internationalStatus.country !== "Brazil" && (
                      <option value="Brazil">Brazil</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "British Indian Ocean Territory" && (
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Brunei Darussalam" && (
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Bulgaria" && (
                      <option value="Bulgaria">Bulgaria</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Burkina Faso" && (
                      <option value="Burkina Faso">Burkina Faso</option>
                    )}
                    {props.user.internationalStatus.country !== "Burundi" && (
                      <option value="Burundi">Burundi</option>
                    )}
                    {props.user.internationalStatus.country !== "Cambodia" && (
                      <option value="Cambodia">Cambodia</option>
                    )}
                    {props.user.internationalStatus.country !== "Cameroon" && (
                      <option value="Cameroon">Cameroon</option>
                    )}
                    {props.user.internationalStatus.country !== "Canada" && (
                      <option value="Canada">Canada</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Cape Verde" && (
                      <option value="Cape Verde">Cape Verde</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Cayman Islands" && (
                      <option value="Cayman Islands">Cayman Islands</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Central African Republic" && (
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Chad" && (
                      <option value="Chad">Chad</option>
                    )}
                    {props.user.internationalStatus.country !== "Chile" && (
                      <option value="Chile">Chile</option>
                    )}
                    {props.user.internationalStatus.country !== "China" && (
                      <option value="China">China</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Christmas Island" && (
                      <option value="Christmas Island">Christmas Island</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Cocos (Keeling) Islands" && (
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Colombia" && (
                      <option value="Colombia">Colombia</option>
                    )}
                    {props.user.internationalStatus.country !== "Comoros" && (
                      <option value="Comoros">Comoros</option>
                    )}
                    {props.user.internationalStatus.country !== "Congo" && (
                      <option value="Congo">Congo</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Cook Islands" && (
                      <option value="Cook Islands">Cook Islands</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Costa Rica" && (
                      <option value="Costa Rica">Costa Rica</option>
                    )}
                    {props.user.internationalStatus.country !== "Croatia" && (
                      <option value="Croatia">Croatia</option>
                    )}
                    {props.user.internationalStatus.country !== "Cuba" && (
                      <option value="Cuba">Cuba</option>
                    )}
                    {props.user.internationalStatus.country !== "Curaçao" && (
                      <option value="Curaçao">Curaçao</option>
                    )}
                    {props.user.internationalStatus.country !== "Cyprus" && (
                      <option value="Cyprus">Cyprus</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Czech Republic" && (
                      <option value="Czech Republic">Czech Republic</option>
                    )}
                    {props.user.internationalStatus.country !== "Denmark" && (
                      <option value="Denmark">Denmark</option>
                    )}
                    {props.user.internationalStatus.country !== "Djibouti" && (
                      <option value="Djibouti">Djibouti</option>
                    )}
                    {props.user.internationalStatus.country !== "Dominica" && (
                      <option value="Dominica">Dominica</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Dominican Republic" && (
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Ecuador" && (
                      <option value="Ecuador">Ecuador</option>
                    )}
                    {props.user.internationalStatus.country !== "Egypt" && (
                      <option value="Egypt">Egypt</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "El Salvador" && (
                      <option value="El Salvador">El Salvador</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Equatorial Guinea" && (
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Eritrea" && (
                      <option value="Eritrea">Eritrea</option>
                    )}
                    {props.user.internationalStatus.country !== "Estonia" && (
                      <option value="Estonia">Estonia</option>
                    )}
                    {props.user.internationalStatus.country !== "Eswatini" && (
                      <option value="Eswatini">Eswatini</option>
                    )}
                    {props.user.internationalStatus.country !== "Ethiopia" && (
                      <option value="Ethiopia">Ethiopia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Falkland Islands (Malvinas)" && (
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Faroe Islands" && (
                      <option value="Faroe Islands">Faroe Islands</option>
                    )}
                    {props.user.internationalStatus.country !== "Fiji" && (
                      <option value="Fiji">Fiji</option>
                    )}
                    {props.user.internationalStatus.country !== "Finland" && (
                      <option value="Finland">Finland</option>
                    )}
                    {props.user.internationalStatus.country !== "France" && (
                      <option value="France">France</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "French Guiana" && (
                      <option value="French Guiana">French Guiana</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "French Polynesia" && (
                      <option value="French Polynesia">French Polynesia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "French Southern Territories" && (
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Gabon" && (
                      <option value="Gabon">Gabon</option>
                    )}
                    {props.user.internationalStatus.country !== "Gambia" && (
                      <option value="Gambia">Gambia</option>
                    )}
                    {props.user.internationalStatus.country !== "Georgia" && (
                      <option value="Georgia">Georgia</option>
                    )}
                    {props.user.internationalStatus.country !== "Germany" && (
                      <option value="Germany">Germany</option>
                    )}
                    {props.user.internationalStatus.country !== "Ghana" && (
                      <option value="Ghana">Ghana</option>
                    )}
                    {props.user.internationalStatus.country !== "Gibraltar" && (
                      <option value="Gibraltar">Gibraltar</option>
                    )}
                    {props.user.internationalStatus.country !== "Greece" && (
                      <option value="Greece">Greece</option>
                    )}
                    {props.user.internationalStatus.country !== "Greenland" && (
                      <option value="Greenland">Greenland</option>
                    )}
                    {props.user.internationalStatus.country !== "Grenada" && (
                      <option value="Grenada">Grenada</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Guadeloupe" && (
                      <option value="Guadeloupe">Guadeloupe</option>
                    )}
                    {props.user.internationalStatus.country !== "Guam" && (
                      <option value="Guam">Guam</option>
                    )}
                    {props.user.internationalStatus.country !== "Guatemala" && (
                      <option value="Guatemala">Guatemala</option>
                    )}
                    {props.user.internationalStatus.country !== "Guernsey" && (
                      <option value="Guernsey">Guernsey</option>
                    )}
                    {props.user.internationalStatus.country !== "Guinea" && (
                      <option value="Guinea">Guinea</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Guinea-Bissau" && (
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                    )}
                    {props.user.internationalStatus.country !== "Guyana" && (
                      <option value="Guyana">Guyana</option>
                    )}
                    {props.user.internationalStatus.country !== "Haiti" && (
                      <option value="Haiti">Haiti</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Heard Island and McDonald Islands" && (
                      <option value="Heard Island and McDonald Islands">
                        Heard Island and McDonald Islands
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Holy See (Vatican City State)" && (
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Honduras" && (
                      <option value="Honduras">Honduras</option>
                    )}
                    {props.user.internationalStatus.country !== "Hong Kong" && (
                      <option value="Hong Kong">Hong Kong</option>
                    )}
                    {props.user.internationalStatus.country !== "Hungary" && (
                      <option value="Hungary">Hungary</option>
                    )}
                    {props.user.internationalStatus.country !== "Iceland" && (
                      <option value="Iceland">Iceland</option>
                    )}
                    {props.user.internationalStatus.country !== "India" && (
                      <option value="India">India</option>
                    )}
                    {props.user.internationalStatus.country !== "Indonesia" && (
                      <option value="Indonesia">Indonesia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Iran, Islamic Republic of" && (
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Iraq" && (
                      <option value="Iraq">Iraq</option>
                    )}
                    {props.user.internationalStatus.country !== "Ireland" && (
                      <option value="Ireland">Ireland</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Isle of Man" && (
                      <option value="Isle of Man">Isle of Man</option>
                    )}
                    {props.user.internationalStatus.country !== "Israel" && (
                      <option value="Israel">Israel</option>
                    )}
                    {props.user.internationalStatus.country !== "Italy" && (
                      <option value="Italy">Italy</option>
                    )}
                    {props.user.internationalStatus.country !== "Jamaica" && (
                      <option value="Jamaica">Jamaica</option>
                    )}
                    {props.user.internationalStatus.country !== "Japan" && (
                      <option value="Japan">Japan</option>
                    )}
                    {props.user.internationalStatus.country !== "Jersey" && (
                      <option value="Jersey">Jersey</option>
                    )}
                    {props.user.internationalStatus.country !== "Jordan" && (
                      <option value="Jordan">Jordan</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Kazakhstan" && (
                      <option value="Kazakhstan">Kazakhstan</option>
                    )}
                    {props.user.internationalStatus.country !== "Kenya" && (
                      <option value="Kenya">Kenya</option>
                    )}
                    {props.user.internationalStatus.country !== "Kiribati" && (
                      <option value="Kiribati">Kiribati</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Korea, Democratic People's Republic of" && (
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Korea, Republic of" && (
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Kuwait" && (
                      <option value="Kuwait">Kuwait</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Kyrgyzstan" && (
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Lao People's Democratic Republic" && (
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Latvia" && (
                      <option value="Latvia">Latvia</option>
                    )}
                    {props.user.internationalStatus.country !== "Lebanon" && (
                      <option value="Lebanon">Lebanon</option>
                    )}
                    {props.user.internationalStatus.country !== "Lesotho" && (
                      <option value="Lesotho">Lesotho</option>
                    )}
                    {props.user.internationalStatus.country !== "Liberia" && (
                      <option value="Liberia">Liberia</option>
                    )}
                    {props.user.internationalStatus.country !== "Libya" && (
                      <option value="Libya">Libya</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Liechtenstein" && (
                      <option value="Liechtenstein">Liechtenstein</option>
                    )}
                    {props.user.internationalStatus.country !== "Lithuania" && (
                      <option value="Lithuania">Lithuania</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Luxembourg" && (
                      <option value="Luxembourg">Luxembourg</option>
                    )}
                    {props.user.internationalStatus.country !== "Macao" && (
                      <option value="Macao">Macao</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Madagascar" && (
                      <option value="Madagascar">Madagascar</option>
                    )}
                    {props.user.internationalStatus.country !== "Malawi" && (
                      <option value="Malawi">Malawi</option>
                    )}
                    {props.user.internationalStatus.country !== "Malaysia" && (
                      <option value="Malaysia">Malaysia</option>
                    )}
                    {props.user.internationalStatus.country !== "Maldives" && (
                      <option value="Maldives">Maldives</option>
                    )}
                    {props.user.internationalStatus.country !== "Mali" && (
                      <option value="Mali">Mali</option>
                    )}
                    {props.user.internationalStatus.country !== "Malta" && (
                      <option value="Malta">Malta</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Marshall Islands" && (
                      <option value="Marshall Islands">Marshall Islands</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Martinique" && (
                      <option value="Martinique">Martinique</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Mauritania" && (
                      <option value="Mauritania">Mauritania</option>
                    )}
                    {props.user.internationalStatus.country !== "Mauritius" && (
                      <option value="Mauritius">Mauritius</option>
                    )}
                    {props.user.internationalStatus.country !== "Mayotte" && (
                      <option value="Mayotte">Mayotte</option>
                    )}
                    {props.user.internationalStatus.country !== "Mexico" && (
                      <option value="Mexico">Mexico</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Micronesia, Federated States of" && (
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Moldova, Republic of" && (
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Monaco" && (
                      <option value="Monaco">Monaco</option>
                    )}
                    {props.user.internationalStatus.country !== "Mongolia" && (
                      <option value="Mongolia">Mongolia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Montenegro" && (
                      <option value="Montenegro">Montenegro</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Montserrat" && (
                      <option value="Montserrat">Montserrat</option>
                    )}
                    {props.user.internationalStatus.country !== "Morocco" && (
                      <option value="Morocco">Morocco</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Mozambique" && (
                      <option value="Mozambique">Mozambique</option>
                    )}
                    {props.user.internationalStatus.country !== "Myanmar" && (
                      <option value="Myanmar">Myanmar</option>
                    )}
                    {props.user.internationalStatus.country !== "Namibia" && (
                      <option value="Namibia">Namibia</option>
                    )}
                    {props.user.internationalStatus.country !== "Nauru" && (
                      <option value="Nauru">Nauru</option>
                    )}
                    {props.user.internationalStatus.country !== "Nepal" && (
                      <option value="Nepal">Nepal</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Netherlands" && (
                      <option value="Netherlands">Netherlands</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "New Caledonia" && (
                      <option value="New Caledonia">New Caledonia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "New Zealand" && (
                      <option value="New Zealand">New Zealand</option>
                    )}
                    {props.user.internationalStatus.country !== "Nicaragua" && (
                      <option value="Nicaragua">Nicaragua</option>
                    )}
                    {props.user.internationalStatus.country !== "Niger" && (
                      <option value="Niger">Niger</option>
                    )}
                    {props.user.internationalStatus.country !== "Nigeria" && (
                      <option value="Nigeria">Nigeria</option>
                    )}
                    {props.user.internationalStatus.country !== "Niue" && (
                      <option value="Niue">Niue</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Norfolk Island" && (
                      <option value="Norfolk Island">Norfolk Island</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "North Macedonia" && (
                      <option value="North Macedonia">North Macedonia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Northern Mariana Islands" && (
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Norway" && (
                      <option value="Norway">Norway</option>
                    )}
                    {props.user.internationalStatus.country !== "Oman" && (
                      <option value="Oman">Oman</option>
                    )}
                    {props.user.internationalStatus.country !== "Pakistan" && (
                      <option value="Pakistan">Pakistan</option>
                    )}
                    {props.user.internationalStatus.country !== "Palau" && (
                      <option value="Palau">Palau</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Palestine, State of" && (
                      <option value="Palestine, State of">
                        Palestine, State of
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Panama" && (
                      <option value="Panama">Panama</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Papua New Guinea" && (
                      <option value="Papua New Guinea">Papua New Guinea</option>
                    )}
                    {props.user.internationalStatus.country !== "Paraguay" && (
                      <option value="Paraguay">Paraguay</option>
                    )}
                    {props.user.internationalStatus.country !== "Peru" && (
                      <option value="Peru">Peru</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Philippines" && (
                      <option value="Philippines">Philippines</option>
                    )}
                    {props.user.internationalStatus.country !== "Pitcairn" && (
                      <option value="Pitcairn">Pitcairn</option>
                    )}
                    {props.user.internationalStatus.country !== "Poland" && (
                      <option value="Poland">Poland</option>
                    )}
                    {props.user.internationalStatus.country !== "Portugal" && (
                      <option value="Portugal">Portugal</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Puerto Rico" && (
                      <option value="Puerto Rico">Puerto Rico</option>
                    )}
                    {props.user.internationalStatus.country !== "Qatar" && (
                      <option value="Qatar">Qatar</option>
                    )}
                    {props.user.internationalStatus.country !== "Réunion" && (
                      <option value="Réunion">Réunion</option>
                    )}
                    {props.user.internationalStatus.country !== "Romania" && (
                      <option value="Romania">Romania</option>
                    )}
                    {props.user.internationalStatus.country !== "Russia" && (
                      <option value="Russia">Russia</option>
                    )}
                    {props.user.internationalStatus.country !== "Rwanda" && (
                      <option value="Rwanda">Rwanda</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Barthélemy" && (
                      <option value="Saint Barthélemy">Saint Barthélemy</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Helena, Ascension and Tristan da Cunha" && (
                      <option value="Saint Helena, Ascension and Tristan da Cunha">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Kitts and Nevis" && (
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Lucia" && (
                      <option value="Saint Lucia">Saint Lucia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Martin (French part)" && (
                      <option value="Saint Martin (French part)">
                        Saint Martin (French part)
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Pierre and Miquelon" && (
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saint Vincent and the Grenadines" && (
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Samoa" && (
                      <option value="Samoa">Samoa</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "San Marino" && (
                      <option value="San Marino">San Marino</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Sao Tome and Principe" && (
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Saudi Arabia" && (
                      <option value="Saudi Arabia">Saudi Arabia</option>
                    )}
                    {props.user.internationalStatus.country !== "Senegal" && (
                      <option value="Senegal">Senegal</option>
                    )}
                    {props.user.internationalStatus.country !== "Serbia" && (
                      <option value="Serbia">Serbia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Seychelles" && (
                      <option value="Seychelles">Seychelles</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Sierra Leone" && (
                      <option value="Sierra Leone">Sierra Leone</option>
                    )}
                    {props.user.internationalStatus.country !== "Singapore" && (
                      <option value="Singapore">Singapore</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Sint Maarten (Dutch part)" && (
                      <option value="Sint Maarten (Dutch part)">
                        Sint Maarten (Dutch part)
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Slovakia" && (
                      <option value="Slovakia">Slovakia</option>
                    )}
                    {props.user.internationalStatus.country !== "Slovenia" && (
                      <option value="Slovenia">Slovenia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Solomon Islands" && (
                      <option value="Solomon Islands">Solomon Islands</option>
                    )}
                    {props.user.internationalStatus.country !== "Somalia" && (
                      <option value="Somalia">Somalia</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "South Africa" && (
                      <option value="South Africa">South Africa</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "South Georgia and the South Sandwich Islands" && (
                      <option value="South Georgia and the South Sandwich Islands">
                        South Georgia and the South Sandwich Islands
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "South Sudan" && (
                      <option value="South Sudan">South Sudan</option>
                    )}
                    {props.user.internationalStatus.country !== "Spain" && (
                      <option value="Spain">Spain</option>
                    )}
                    {props.user.internationalStatus.country !== "Sri Lanka" && (
                      <option value="Sri Lanka">Sri Lanka</option>
                    )}
                    {props.user.internationalStatus.country !== "Sudan" && (
                      <option value="Sudan">Sudan</option>
                    )}
                    {props.user.internationalStatus.country !== "Suriname" && (
                      <option value="Suriname">Suriname</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Svalbard and Jan Mayen" && (
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Sweden" && (
                      <option value="Sweden">Sweden</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Switzerland" && (
                      <option value="Switzerland">Switzerland</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Syrian Arab Republic" && (
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Taiwan, Province of China" && (
                      <option value="Taiwan, Province of China">
                        Taiwan, Province of China
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Tajikistan" && (
                      <option value="Tajikistan">Tajikistan</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Tanzania, United Republic of" && (
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Thailand" && (
                      <option value="Thailand">Thailand</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Timor-Leste" && (
                      <option value="Timor-Leste">Timor-Leste</option>
                    )}
                    {props.user.internationalStatus.country !== "Togo" && (
                      <option value="Togo">Togo</option>
                    )}
                    {props.user.internationalStatus.country !== "Tokelau" && (
                      <option value="Tokelau">Tokelau</option>
                    )}
                    {props.user.internationalStatus.country !== "Tonga" && (
                      <option value="Tonga">Tonga</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Trinidad and Tobago" && (
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Tunisia" && (
                      <option value="Tunisia">Tunisia</option>
                    )}
                    {props.user.internationalStatus.country !== "Turkey" && (
                      <option value="Turkey">Turkey</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Turkmenistan" && (
                      <option value="Turkmenistan">Turkmenistan</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Turks and Caicos Islands" && (
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Tuvalu" && (
                      <option value="Tuvalu">Tuvalu</option>
                    )}
                    {props.user.internationalStatus.country !== "Uganda" && (
                      <option value="Uganda">Uganda</option>
                    )}
                    {props.user.internationalStatus.country !== "Ukraine" && (
                      <option value="Ukraine">Ukraine</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "United Arab Emirates" && (
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "United Kingdom of Great Britain and Northern Ireland" && (
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "United States Minor Outlying Islands" && (
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "United States of America" && (
                      <option value="United States of America">
                        United States of America
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Uruguay" && (
                      <option value="Uruguay">Uruguay</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Uzbekistan" && (
                      <option value="Uzbekistan">Uzbekistan</option>
                    )}
                    {props.user.internationalStatus.country !== "Vanuatu" && (
                      <option value="Vanuatu">Vanuatu</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Venezuela (Bolivarian Republic of)" && (
                      <option value="Venezuela (Bolivarian Republic of)">
                        Venezuela (Bolivarian Republic of)
                      </option>
                    )}
                    {props.user.internationalStatus.country !== "Vietnam" && (
                      <option value="Vietnam">Vietnam</option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Virgin Islands (British)" && (
                      <option value="Virgin Islands (British)">
                        Virgin Islands (British)
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Virgin Islands (U.S.)" && (
                      <option value="Virgin Islands (U.S.)">
                        Virgin Islands (U.S.)
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Wallis and Futuna" && (
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                    )}
                    {props.user.internationalStatus.country !==
                      "Western Sahara" && (
                      <option value="Western Sahara">Western Sahara</option>
                    )}
                    {props.user.internationalStatus.country !== "Yemen" && (
                      <option value="Yemen">Yemen</option>
                    )}
                    {props.user.internationalStatus.country !== "Zambia" && (
                      <option value="Zambia">Zambia</option>
                    )}
                    {props.user.internationalStatus.country !== "Zimbabwe" && (
                      <option value="Zimbabwe">Zimbabwe</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="religion">
                Religion:
              </label>
              <select
                className="form-select religion"
                style={{ marginTop: "-7px", marginBottom: "7px" }}
                name="religion"
              >
                <option
                  value={props.user.religiousAffiliation}
                  selected="selected"
                >
                  {props.user.religiousAffiliation}
                </option>
                {props.user.religiousAffiliation !==
                  "African Traditional and Diasporic" && (
                  <option value="African Traditional and Diasporic">
                    African Traditional and Diasporic
                  </option>
                )}
                {props.user.religiousAffiliation !== "Agnosticism" && (
                  <option value="Agnosticism">Agnosticism</option>
                )}

                {props.user.religiousAffiliation !== "Atheism" && (
                  <option value="Atheism">Atheism</option>
                )}

                {props.user.religiousAffiliation !== "Baha'i" && (
                  <option value="Baha'i">Baha'i</option>
                )}

                {props.user.religiousAffiliation !== "Buddhism" && (
                  <option value="Buddhism">Buddhism</option>
                )}

                {props.user.religiousAffiliation !== "Cao Dai" && (
                  <option value="Cao Dai">Cao Dai</option>
                )}

                {props.user.religiousAffiliation !==
                  "Chinese Traditional Religion" && (
                  <option value="Chinese Traditional Religion">
                    Chinese Traditional Religion
                  </option>
                )}

                {props.user.religiousAffiliation !== "Christianity" && (
                  <option value="Christianity">Christianity</option>
                )}

                {props.user.religiousAffiliation !== "Hinduism" && (
                  <option value="Hinduism">Hinduism</option>
                )}

                {props.user.religiousAffiliation !== "Islam" && (
                  <option value="Islam">Islam</option>
                )}

                {props.user.religiousAffiliation !== "Jainism" && (
                  <option value="Jainism">Jainism</option>
                )}

                {props.user.religiousAffiliation !== "Juche" && (
                  <option value="Juche">Juche</option>
                )}

                {props.user.religiousAffiliation !== "Judaism" && (
                  <option value="Judaism">Judaism</option>
                )}

                {props.user.religiousAffiliation !== "Neo-Paganism" && (
                  <option value="Neo-Paganism">Neo-Paganism</option>
                )}

                {props.user.religiousAffiliation !== "Nonreligious" && (
                  <option value="Nonreligious">Nonreligious</option>
                )}

                {props.user.religiousAffiliation !== "Rastafarianism" && (
                  <option value="Rastafarianism">Rastafarianism</option>
                )}

                {props.user.religiousAffiliation !== "Shinto" && (
                  <option value="Shinto">Shinto</option>
                )}

                {props.user.religiousAffiliation !== "Sikhism" && (
                  <option value="Sikhism">Sikhism</option>
                )}

                {props.user.religiousAffiliation !== "Spiritism" && (
                  <option value="Spiritism">Spiritism</option>
                )}

                {props.user.religiousAffiliation !== "Tenrikyo" && (
                  <option value="Tenrikyo">Tenrikyo</option>
                )}

                {props.user.religiousAffiliation !==
                  "Unitarian Universalism" && (
                  <option value="Unitarian Universalism">
                    Unitarian Universalism
                  </option>
                )}

                {props.user.religiousAffiliation !== "Zoroastrianism" && (
                  <option value="Zoroastrianism">Zoroastrianism</option>
                )}

                {props.user.religiousAffiliation !== "Primal Indigenous" && (
                  <option value="Primal Indigenous">Primal Indigenous</option>
                )}

                {props.user.religiousAffiliation !== "Other" && (
                  <option value="Other">Other</option>
                )}
              </select>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="smoke">
                    How often do you smoke/vape/use drugs:
                  </label>
                  <select
                    className="form-select smoke"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    name="smoke"
                  >
                    <option
                      value={props.user.drugs.smoking}
                      selected="selected"
                    >
                      {numToOption[props.user.drugs.smoking]}
                    </option>
                    {props.user.drugs.smoking !== 1 && (
                      <option value={1}>Never</option>
                    )}
                    {props.user.drugs.smoking !== 2 && (
                      <option value={2}>Rarely</option>
                    )}
                    {props.user.drugs.smoking !== 3 && (
                      <option value={3}>Sometimes</option>
                    )}
                    {props.user.drugs.smoking !== 4 && (
                      <option value={4}>Often</option>
                    )}
                  </select>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="drink">
                    How often do you drink:
                  </label>
                  <select
                    className="form-select drink"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    name="drink"
                  >
                    <option
                      value={props.user.drugs.alcohol}
                      selected="selected"
                    >
                      {numToOption[props.user.drugs.alcohol]}
                    </option>
                    {props.user.drugs.alcohol !== 1 && (
                      <option value={1}>Never</option>
                    )}
                    {props.user.drugs.alcohol !== 2 && (
                      <option value={2}>Rarely</option>
                    )}
                    {props.user.drugs.alcohol !== 3 && (
                      <option value={3}>Sometimes</option>
                    )}
                    {props.user.drugs.alcohol !== 4 && (
                      <option value={4}>Often</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="weekdaySleep">
                    When do you usually sleep on weekdays:
                  </label>
                  <input
                    className="form-control weekdaySleep"
                    type="time"
                    name="weekdaySleep"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    defaultValue={
                      props.user.weeklySleepSchedule.weekdays.bedtime
                    }
                  />
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="weekdayWake">
                    When do you usually wake up on weekdays:
                  </label>
                  <input
                    className="form-control weekdayWake"
                    type="time"
                    name="weekdayWake"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    defaultValue={
                      props.user.weeklySleepSchedule.weekdays.waketime
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="weekendSleep">
                    When do you usually sleep on weekends:
                  </label>
                  <input
                    className="form-control weekendSleep"
                    type="time"
                    name="weekendSleep"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    defaultValue={
                      props.user.weeklySleepSchedule.weekends.bedtime
                    }
                  />
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="weekendWake">
                    When do you usually wake up on weekends:
                  </label>
                  <input
                    className="form-control weekendWake"
                    type="time"
                    name="weekendWake"
                    style={{ marginTop: "-7px", marginBottom: "7px" }}
                    defaultValue={
                      props.user.weeklySleepSchedule.weekends.waketime
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="about">
                About you:
              </label>
              <textarea
                className="form-control aboutMe"
                style={{
                  height: "100px",
                  marginTop: "-7px",
                  marginBottom: "7px",
                }}
                name="about"
                defaultValue={props.user.aboutMe}
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
        {/* )} */}
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
