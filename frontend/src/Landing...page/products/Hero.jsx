import React from 'react';

function Hero() {
    return ( 
       <div className="container">
        <div className="text-center mt-5  border-bottom " style={{paddingBottom:" 90px", paddingTop:"50px"}}>
            <h1 className='text-muted fs-3'>Zerodha Products</h1>
            <h3 className='text-muted mt-3  mb-3 fs-5'>Sleek, modern and intuitive trading platforms</h3>
            <p className='mt-3 text-muted' style={{fontWeight:"400" , fontSize:"1.1rem"}}>Check out our  <a href="" style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
       </div>
     );
}

export default Hero;