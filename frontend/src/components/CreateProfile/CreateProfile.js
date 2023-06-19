import Footer from "../Footer";
import { useEffect, useState } from "react";

function CreateProfile() {
  const [user, setUser] = useState();
  let counter = 0;
  useEffect(() => {
    try {
      const test = async () => {
        if (document.cookie) {
          const accessToken = document.cookie.split("access-token=")[1];
          const url = "http://localhost:8082" + "/api/v1/user/myinfo";
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
          setUser(data);
        }
      };
      if (counter === 0) {
        test();
        counter++;
      }
    } catch (error) {
      console.log(error);
    }
  }, [counter]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8082" + "/api/v1/user/update";
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
        <div className="row">
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
            <h1
              style={{
                textAlign: "center",
                marginBottom: "-1px",
                paddingTop: "0px",
                marginTop: "0px",
              }}
            >
              <br />
              Hey there, welcome to Roomie4Me!
              <br />
              <br />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-md-flex justify-content-md-center align-items-md-center">
            <p
              className="d-inline-flex"
              style={{
                textAlign: "center",
                paddingBottom: "0px",
                marginTop: "36px",
                marginBottom: "29px",
              }}
            >
              We're so glad you're here! Please fill out the following form to
              create your profile, and get started on your journey to find the
              perfect roomies!
            </p>
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
        {user && (
          <section>
            <form onSubmit={handleSubmit}>
              <div className="form-group required">
                <div className="row">
                  <div className="col">
                    <label className="form-label" htmlFor="fname">
                      First Name:
                    </label>
                    <input
                      className="form-control form-control-sm fname"
                      type="text"
                      name="fname"
                      required
                      defaultValue={user.name.firstName}
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
                      required
                      defaultValue={user.name.lastName}
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
              <div className="form-group required">
                <div className="row">
                  <div className="col">
                    <label className="form-label" htmlFor="gender">
                      Gender:
                    </label>
                    <select
                      className="form-select gender"
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
                      name="gender"
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
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
                      style={{
                        marginTop: "-7px",
                        marginBottom: "7px",
                        height: "38px",
                        borderRadius: "6px",
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group required">
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
                      required
                      placeholder="This is not shared without your consent"
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
                      required
                      defaultValue={user.email}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="form-group required">
                <div className="row">
                  <div className="col">
                    <label className="form-label" htmlFor="international">
                      International Student:
                    </label>
                    <select
                      className="form-select international"
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
                      name="international"
                      required
                    >
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
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
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curaçao">Curaçao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and The Grenadines">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group required">
                <label className="form-label" htmlFor="graduation">
                  Expected Graduation:
                </label>
                <input
                  className="form-control graduation"
                  type="month"
                  style={{ marginTop: "-7px", marginBottom: "7px" }}
                  name="graduation"
                  required
                />
              </div>
              <div className="form-group required">
                <div className="row">
                  <div className="col">
                    <label className="form-label" htmlFor="smoke">
                      How often do you smoke/use drugs:
                    </label>
                    <select
                      className="form-select smoke"
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
                      name="smoke"
                      required
                    >
                      <option value={1}>Never</option>
                      <option value={2}>Rarely</option>
                      <option value={3}>Sometimes</option>
                      <option value={4}>Often</option>
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
                      required
                    >
                      <option value={1}>Never</option>
                      <option value={2}>Rarely</option>
                      <option value={3}>Sometimes</option>
                      <option value={4}>Often</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group required">
                <div className="row">
                  <div className="col">
                    <label className="form-label" htmlFor="weekdaySleep">
                      When do you usually sleep on weekdays:
                    </label>
                    <input
                      className="form-control weekdaySleep"
                      type="time"
                      name="weekdaySleep"
                      required
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
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
                      required
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
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
                      required
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
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
                      required
                      style={{ marginTop: "-7px", marginBottom: "7px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group required">
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
                  placeholder="Please provide a short introduction of yourself"
                  required
                  defaultValue={""}
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
                    background: "rgb(204,61,72)",
                    borderColor: "rgb(190,67,74)",
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
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CreateProfile;
