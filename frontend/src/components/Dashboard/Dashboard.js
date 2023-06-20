import React from "react";
import Footer from "../Footer";

function Dashboard(props) {
  const handleSignOut = () => {
    // Delete the "access-token" cookie by setting it to a time in the past
    document.cookie =
      "access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to "/dashboard"
    window.location.href = "/";
  };

  const handleCard1 = () => {
    window.location.href = "/createRequest";
  };

  const handleCard2 = () => {
    window.location.href = "/viewRequests";
  };

  const handleCard3 = () => {
    window.location.href = "/myAccount";
  };

  const handleCard4 = () => {
    window.location.href = "/myDMs";
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
            <h1
              style={{
                textAlign: "center",
                marginBottom: "-1px",
                paddingTop: "0px",
                marginTop: "0px",
                marginRight: "0px",
              }}
            >
              Welcome, {props.user.name.firstName}!
            </h1>
          </div>
          <div className="col-md-2 d-inline-flex d-md-flex justify-content-md-center align-items-md-center"></div>
        </div>
        <div className="row">
          <div className="col d-md-flex justify-content-md-end align-items-md-center">
            <button
              className="btn btn-primary"
              type="button"
              style={{ background: "#910909", borderColor: "#910909" }}
              onClick={handleSignOut}
            >
              Sign Out
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
        <div className="row">
          <div className="col">
            <div
              className="card clickable-card"
              style={{
                background: "#074d5d",
                color: "rgb(255,255,255)",
                height: "210px",
              }}
              onClick={handleCard1}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h3>Create Roomie Request</h3>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col d-md-flex justify-content-md-center"
                    style={{ marginTop: "12px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      style={{ fontSize: "101px" }}
                    >
                      <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z" />
                    </svg>
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
                      style={{ fontSize: "32px" }}
                    >
                      <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                    </svg>
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
                color: "rgb(255,255,255)",
                height: "210px",
              }}
              onClick={handleCard2}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h3>View Roomie Requests</h3>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col d-md-flex justify-content-md-center"
                    style={{ marginTop: "12px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -32 576 576"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      style={{ fontSize: "101px" }}
                    >
                      <path d="M128 192C110.3 192 96 177.7 96 160C96 142.3 110.3 128 128 128C145.7 128 160 142.3 160 160C160 177.7 145.7 192 128 192zM200 160C200 146.7 210.7 136 224 136H448C461.3 136 472 146.7 472 160C472 173.3 461.3 184 448 184H224C210.7 184 200 173.3 200 160zM200 256C200 242.7 210.7 232 224 232H448C461.3 232 472 242.7 472 256C472 269.3 461.3 280 448 280H224C210.7 280 200 269.3 200 256zM200 352C200 338.7 210.7 328 224 328H448C461.3 328 472 338.7 472 352C472 365.3 461.3 376 448 376H224C210.7 376 200 365.3 200 352zM128 224C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224zM128 384C110.3 384 96 369.7 96 352C96 334.3 110.3 320 128 320C145.7 320 160 334.3 160 352C160 369.7 145.7 384 128 384zM0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V96C528 87.16 520.8 80 512 80H64C55.16 80 48 87.16 48 96z" />
                    </svg>
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
                      style={{ fontSize: "32px" }}
                    >
                      <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginTop: "30px" }}>
            <div
              className="card clickable-card"
              style={{
                background: "#074d5d",
                color: "rgb(255,255,255)",
                height: "210px",
              }}
              onClick={handleCard3}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h3>Manage My Account</h3>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col d-md-flex justify-content-md-center"
                    style={{ marginTop: "12px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-32 0 512 512"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      style={{ fontSize: "101px" }}
                    >
                      <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                    </svg>
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
                      style={{ fontSize: "32px" }}
                    >
                      <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "30px" }}>
            <div
              className="card clickable-card"
              style={{
                background: "#074d5d",
                color: "rgb(255,255,255)",
                height: "210px",
              }}
              onClick={handleCard4}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h3>My DMs (3 new)</h3>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col d-md-flex justify-content-md-center"
                    style={{ marginTop: "12px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      style={{ fontSize: "101px" }}
                    >
                      <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" />
                    </svg>
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
                      style={{ fontSize: "32px" }}
                    >
                      <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
