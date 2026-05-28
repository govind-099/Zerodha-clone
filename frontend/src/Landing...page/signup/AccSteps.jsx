function AccSteps() {
  return (
    <div className="account-div " style={{ backgroundColor: "whitesmoke" }}>
      <h3
        className="text-center  text-muted fs-3"
        style={{ paddingTop: "50px" }}
      >
        Steps to open a demat account with Zerodha
      </h3>
      <div className="row  p-5">
        <div className="col-6 text-center">
          <img
            src="https://zerodha.com/static/images/steps-acop.svg"
            alt=""
            style={{ width: "80%", height: "90%", marginLeft: "140px" }}
          />
        </div>
        <div className="col-6" style={{ paddingTop: "30px" }}>
          <div
            className="border-bottom d-flex p-3"
            style={{ alignItems: "center" }}
          >
            <div
              className="number p-1"
              style={{ border: "1px solid black", borderRadius: "50%" }}
            >
              01
            </div>
            <p
              style={{
                margin: "0",
                marginLeft: "20px",
                fontSize: "22px",
                fontWeight: "600",
              }}
              className="text-muted"
            >
              Enter the requested details
            </p>
          </div>
          <div
            className="border-bottom d-flex p-3"
            style={{ alignItems: "center" }}
          >
            <div
              className="number p-1"
              style={{ border: "1px solid black", borderRadius: "50%" }}
            >
              02
            </div>
            <p
              style={{
                margin: "0",
                marginLeft: "20px",
                fontSize: "22px",
                fontWeight: "600",
              }}
              className="text-muted"
            >
              Complete e-sign & verification
            </p>
          </div>
          <div className=" d-flex p-3" style={{ alignItems: "center" }}>
            <div
              className="number p-1"
              style={{ border: "1px solid black", borderRadius: "50%" }}
            >
              03
            </div>
            <p
              style={{
                margin: "0",
                marginLeft: "20px",
                fontSize: "22px",
                fontWeight: "600",
              }}
              className="text-muted"
            >
              Start investing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccSteps;
