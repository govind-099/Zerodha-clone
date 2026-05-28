import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-3 mb-5 ticket-row">
        <h1 className="fs-2 mb-4 text-muted">To create a ticket , select a relevant topic</h1>
        <div className="col-4 p-3 mt-2 mb-2">
          <h4 className=" text-muted" style={{ fontSize: "20px",paddingBottom:"25px" }}>
            <i class="fa-solid fa-circle-plus"></i>Account Opening{" "}
          </h4>
          <a href="">Online Account Opening</a>
          <br />
          <a href="">Offline Account Opening</a>
          <br />
          <a href="">Company, Partnership and HUF Account Opening</a>
          <br />
          <a href="">NRI Account Opening</a>
          <br />
          <a href="">Changes at Zerodha</a>
          <br />
          <a href="">Zerodha IDFC First 3-in-1 Account</a>
          <br />
          <a href="">Getting Started</a>
          <br />
        </div>
        <div className="col-4 p-3 mt-2 mb-2">
          <h4 className=" text-muted" style={{ fontSize: "20px" ,paddingBottom:"25px"}}>
            <i class="fa-solid fa-user"></i>Your Zerodha Account
          </h4>
          <a href="">Login Credentials</a>
          <br />
          <a href="">Account Modification and Segment Addition</a>
          <br />
          <a href="">DP ID and bank details</a>
          <br />
          <a href="">Your Profile</a>
          <br />
          <a href="">Transfer and conversion of shares</a>
          <br />
        </div>
        <div className="col-4 p-3 mt-2 mb-2 ">
          <h4 className="text-muted" style={{ fontSize: "20px", paddingBottom:"25px"}}>
            <i class="fa-solid fa-arrow-trend-up"></i>Your Zerodha Account
          </h4>
          <a href="">Margin/Leverage, Product and Order Type</a><br />
          <a href="">Kite Web and Mobile</a><br />
          <a href="">Trading FAQs</a><br />
          <a href="">Corporate Actions</a><br />
          <a href="">Sentinels</a><br />
          <a href="">Kite API</a><br />
          <a href="">PI and Other Platforms</a><br />
          <a href="">StockReports</a><br />
          <a href="">GTT</a><br />
        </div>
        <div className="col-4 p-3 mt-2 mb-2">
          <h4 className=" text-muted" style={{ fontSize: "20px",paddingBottom:"25px" }}>
            <i class="fa-solid fa-circle-plus"></i>Coins{" "}
          </h4>
          <a href="">Mutual Funds</a>
          <br />
          <a href="">National Pension Scheme (NPS)</a>
          <br />
          <a href="">Fixed Deposit (FD)</a>
          <br />
          <a href="">Features On Coins</a>
          <br />
          <a href="">Payments and Orders</a>
          <br />
          <a href="">General</a>
          <br />
        </div>
        <div className="col-4 p-3 mt-2 mb-2">
          <h4 className=" text-muted" style={{ fontSize: "20px" ,paddingBottom:"25px"}}>
            <i class="fa-solid fa-user"></i>Fund
          </h4>
          <a href="">Add Money</a>
          <br />
          <a href="">Widthdraw Money</a>
          <br />
          <a href="">Add Bank Account</a>
          <br />
          <a href="">eMandates</a>
          <br />
        </div>
        <div className="col-4 p-3 mt-2 mb-2">
          <h4 className="text-muted" style={{ fontSize: "20px", paddingBottom:"25px"}}>
            <i class="fa-solid fa-arrow-trend-up"></i>Console
          </h4>
          <a href="">Portfolio</a><br />
          <a href="">Corporate Actions</a><br />
          <a href="">Funds Statments</a><br />
          <a href="">Reports</a><br />
          <a href="">Profile</a><br />
          <a href="">Segments</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
