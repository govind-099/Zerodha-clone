import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="charges-head text-center" style={{padding:"100px 0px"}}>
                <h2 className='mb-2 text-muted'>Charges</h2>
                <p style={{color:"gray", fontSize:"21px"}}>List of all charges and taxes</p>
            </div>
            <div className="row">
                <div className="charges-row prices text-center">
                        <div className="col-4">
                            <img src="media/images/pricing-eq.svg" style={{width:"65%"}} />
                            <h2 className='mt-3  fs-3 text-muted '>Free equity delivery</h2>
                            <p className='p-4 text-muted ' style={{fontSize:"16px", fontWeight:"600"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        </div>
                        <div className="col-4">
                            <img src="media/images/other-trades.svg" style={{width:"65%"}}/>
                            <h2 className='mt-3 fs-3 text-muted'>Intraday and F&O trades</h2>
                            <p className='p-4 text-muted' style={{fontSize:"16px", fontWeight:"600"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                        </div>
                        <div className="col-4">
                            <img src="media/images/pricing-eq.svg" style={{width:"65%"}} />
                            <h2 className='mt-3 fs-3 text-muted'>Free direct MF</h2>
                            <p className='p-4 text-muted' style={{fontSize:"16px", fontWeight:"600"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                        </div>
                </div>
                <h1>hello world</h1>
                <div className="charges-tab">
                    <nav className='tabs'>
                        <a class="tab tab-equities sel" href="#tab-equities" data-id="equities">Equity</a>
                        <a class="tab tab-fo" href="#tab-fo" data-id="fo">F&amp;O</a>
                        <a class="tab tab-currency" href="#tab-currency" data-id="currency">Currency</a>
                        <a class="tab tab-commodities" href="#tab-commodities" data-id="commodities">Commodity</a>
                    </nav>
                    
                </div>
                <h2>hello world</h2>
            </div>
        </div>
     );
}

export default Hero;