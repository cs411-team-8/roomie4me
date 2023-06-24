import React from "react";
import Footer from "../Footer";

function AboutUs() {
  const handleHome = () => {
    window.location.href = "/";
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
        <div className="row" style={{ marginTop: "0px" }}>
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
            <h1
              style={{
                textAlign: "center",
                marginBottom: "-1px",
                paddingTop: "0px",
                marginTop: "0px",
                marginRight: "0px",
              }}
            >
              About Us
            </h1>
          </div>
          <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center" />
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
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0px" }}>
            Our Mission
          </h2>
          <hr />
          <p style={{ textAlign: "center" }}>
            At Roomie4Me, our mission is to empower BU students in their search
            for roommates by providing a user-friendly platform that fosters
            meaningful connections. We believe that finding the right roommate
            is crucial to creating a positive and successful living environment,
            and we are committed to helping students navigate this important
            decision with confidence.&nbsp;We recognize the challenges that
            students face when embarking on their college journey. Moving away
            from home, adjusting to a new environment, and building a network of
            friends can be overwhelming. That's why we are committed to
            simplifying the roommate search process and helping students make
            informed decisions that positively impact their college experience.
            Join us in our mission to make finding the perfect roommate an
            exciting and rewarding experience. Discover the possibilities, forge
            connections, and embark on your college journey with confidence.
            Together, let's create an environment where BU students can thrive,
            and make memories that last.
          </p>
        </div>
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0px" }}>
            Key Features and Benefits
          </h2>
          <hr />
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              <div className="d-flex">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-26 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
                  </svg>
                </div>
                <div className="px-3">
                  <h4 className="text-white">Advanced Filters</h4>
                  <p>
                    Take advantage of our comprehensive and advanced search
                    filters and sorters to find just the right roommate for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-32 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
                  </svg>
                </div>
                <div className="px-3">
                  <h4 className="text-white">Notifications</h4>
                  <p>
                    Receive email and SMS notifications in real time to stay up
                    to date on who wants to connect with you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -32 576 576"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M288 64C39.52 64 0 182.1 0 273.5C0 379.5 78.8 448 176 448c27.33 0 51.21-6.516 66.11-36.79l19.93-40.5C268.3 358.6 278.1 352.4 288 352.1c9.9 .3711 19.7 6.501 25.97 18.63l19.93 40.5C348.8 441.5 372.7 448 400 448c97.2 0 176-68.51 176-174.5C576 182.1 536.5 64 288 64zM160 320c-35.35 0-64-28.65-64-64s28.65-64 64-64c35.35 0 64 28.65 64 64S195.3 320 160 320zM416 320c-35.35 0-64-28.65-64-64s28.65-64 64-64c35.35 0 64 28.65 64 64S451.3 320 416 320z" />
                  </svg>
                </div>
                <div className="px-3">
                  <h4 className="text-white">Privacy Conscious</h4>
                  <p>
                    We don't sell or market your data. We collect the bare
                    minimum data needed to provide our services. See our{" "}
                    <a href="/privacy">Privacy Policy</a> for details.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z" />
                  </svg>
                </div>
                <div className="px-3">
                  <h4 className="text-white">AI Powered</h4>
                  <p>
                    Take advantage of the age of AI through our AI powered
                    content tagging to help you find just the perfect match.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-32 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
                  </svg>
                </div>
                <div className="px-3">
                  <h4 className="text-white">Secure</h4>
                  <p>
                    All site data is restricted to BU students. Outsiders do not
                    have access to this websites. This site is for the students
                    by the students.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -32 576 576"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM287.1 352C332.2 352 368 309 368 255.1C368 202.1 332.2 159.1 287.1 159.1C243.8 159.1 207.1 202.1 207.1 255.1C207.1 309 243.8 352 287.1 352zM63.1 416H127.1C127.1 380.7 99.35 352 63.1 352V416zM63.1 143.1V207.1C99.35 207.1 127.1 179.3 127.1 143.1H63.1zM512 303.1C476.7 303.1 448 332.7 448 368H512V303.1zM448 95.1C448 131.3 476.7 159.1 512 159.1V95.1H448z" />
                  </svg>
                </div>
                <div className="px-3">
                  <h4 className="text-white">Free</h4>
                  <p>
                    This site is completely free. We rely on your donations to
                    stay afloat. If you have found this site useful, please
                    consider <a href="/donate">donating</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0px" }}>Our Team</h2>
          <hr />
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              <figure className="figure">
                <img
                  className="figure-img border rounded border-0"
                  src="/assets/img/Aseef.jpg"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "6px",
                    border: "15px none rgb(218,218,216)",
                  }}
                  alt="Aseef"
                />
                <figcaption
                  className="figure-caption"
                  style={{ fontSize: "20px", color: "rgb(255,255,255)" }}
                >
                  Muhammad Aseef Imran
                </figcaption>
              </figure>
            </div>
            <div className="col" style={{ textAlign: "center" }}>
              <figure className="figure">
                <img
                  className="figure-img border rounded border-0"
                  src="/assets/img/Munir.jpg"
                  style={{
                    width: "300px",
                    borderRadius: "6px",
                    border: "15px none rgb(218,218,216)",
                    height: "300px",
                  }}
                  alt="Munir"
                />
                <figcaption
                  className="figure-caption"
                  style={{ fontSize: "20px", color: "rgb(255,255,255)" }}
                >
                  Munir Siddiqui
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0px" }}>
            Contact Us
          </h2>
          <hr />
          <p text-align="center">
            We value your feedback and are here to assist you. If you have any
            questions, suggestions, or need support, please don't hesitate to
            reach out to us at{" "}
            <a href="mailto: info@roomie4.me">info@roomie4.me</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
