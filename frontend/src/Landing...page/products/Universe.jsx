import React from "react";

function Universe() {
  return (
    <div className="container center mt-5 p-5">
      <h2 className="text-center mb-4 ">The Zerodha Universe</h2>
      <p className="text-center fs-5">
        {" "}
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5 ">
        <div className="col-4 p-3 ">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
            className="div-uni"
          />
          <div className="text-center small ">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </div>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibull-logo.svg"
            style={{ width: "60%", padding: "10px", marginBottom: "25px" }}
            className="div-uni"
          />
          <div className="text-center small">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </div>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/tijori.svg"
            style={{ width: "45%", padding: "10px", marginBottom: "10px" }}
            className="div-uni"
          />
          <div className="text-center small">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </div>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/streak-logo.png"
            style={{ width: "50%", padding: "10px", marginBottom: "10px" }}
            className="div-uni"
          />
          <div className="text-center small">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </div>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/smallcase-logo.png"
            style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
            className="div-uni"
          />
          <div className="text-center small">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </div>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/ditto-logo.png"
            style={{ width: "40%", padding: "10px", marginBottom: "10px" }}
            className="div-uni"
          />
          <div className="text-center small mb-2">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </div>
        </div>
        <a
          href="http://localhost:5173/signup"
          className="p-2  btn btn-primary mt-5  mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <button className="btn btn-primary fs-5">Sign up Now</button>
        </a>
      </div>
    </div>
  );
}

export default Universe;
