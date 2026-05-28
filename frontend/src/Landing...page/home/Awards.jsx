// import React from 'react';

function Awards () {
    return ( 
        <div className="container mt-2">
            <div className="row">
                <div className="col-6 p-2">
                    <img src='media/images/newWinner.png' alt="awards image" style={{width:"30rem",height:'26rem'}} />
                </div>
                <div className="col-6 p-2 mt-5">
                    <h1>Largest stock broker in india</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retial order volumes in india daily by trading and investing in.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                             <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                     <img src="media/images/press-logos.png" alt="" srcset="" style={{height:"2.5rem", width:"35rem",margin:"5px"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;