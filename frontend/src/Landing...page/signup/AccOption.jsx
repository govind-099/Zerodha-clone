function AccOption() {
  return (
    <div className="container" style={{ padding: "100px 0px" }}>
      <h2 className="fs-3 text-muted text-center ">
        Investment options with Zerodha demat account
      </h2>
      <div className="investment-group">
        <div className="box b1">
          <img src="https://zerodha.com/static/images/stocks-acop.svg" alt="" />
          <div>
            <h3 className="fs-4 text-muted">Stocks</h3>
            <p style={{ fontWeight: "500" }} className="text-muted">
              Invest in all exchange-listed securities
            </p>
          </div>
        </div>
        <div className="box b2">
          <img src="https://zerodha.com/static/images/mf-acop.svg" alt="" />
          <div>
            <h3 className="fs-4 text-muted">Mutual funds</h3>
            <p style={{ fontWeight: "500" }} className="text-muted">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>
        <div className="box b3">
          <img src="https://zerodha.com/static/images/ipo-acop.svg" alt="" />
          <div>
            <h3 className="fs-4 text-muted">IPO</h3>
            <p style={{ fontWeight: "500" }} className="text-muted">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
        </div>
        <div className="box b4">
          <img src="https://zerodha.com/static/images/fo-acop.svg" alt="" />
          <div>
            <h3 className="fs-4  text-muted">Futures & options</h3>
            <p style={{ fontWeight: "500" }} className="text-muted">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="p-2 btn btn-primary mt-4 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Explore Investment
        </button>
      </div>
    </div>
  );
}

export default AccOption;
