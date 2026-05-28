import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className="row text-center">
                <h1 className='mt-5 fs-4 text-muted mb-3'>Open a Zerodha account</h1>
                <p className='text-muted fs-5'>Mordern platforms and apps, &#8377;0 investment, and flat &#8377;20 intraday and F&O trades. </p>
               <a href="http://localhost:5173/signup"> <button className='p-2 btn btn-primary  mt-4 fs-5 mb-5' style={{width:"20%" , margin:'0 auto'}}>Sign up Now</button></a>
            </div>
        </div>
     );
}

export default OpenAccount;