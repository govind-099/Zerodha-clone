import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="text-center text-muted" style={{ fontSize: "28px" }}>
          People
        </h1>
      </div>
      <div
        className="row  p-5 text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        <div className="col-5 p-3">
          <img
            src="media/images/nithin-kamath.jpg"
            alt="nikhilkamtpn"
            style={{
              marginLeft: "100px",
              borderRadius: "100%",
              // height: "60%",
              width: "60%",
            }}
          />
          <h2
            className="fs-5 text-center"
            style={{ marginLeft: "40px", padding: "20px 0px 0px 0px" }}
          >
            Nithin Kamath
          </h2>
          <p
            className="text-center"
            style={{ marginLeft: "40px", fontSize: "15px" }}
          >
            Founder, CEO
          </p>
        </div>
        <div className="col-7 p-3 text-muted ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
