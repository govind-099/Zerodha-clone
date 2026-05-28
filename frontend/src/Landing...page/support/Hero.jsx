import React from "react";

function Hero() {
  return (
    <section className="conatiner-fluid" id="supportHero">
      <div className=" p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">
          Track Ticket
        </a>
      </div>
      <div className="row" style={{margin:"0px 150px", color:"white"}}>
        <div className="col-6 p-4 mb-5">
          <h1 className="fs-5 mb-3">
            Search for an answer or browser help topics to crearte a ticket
          </h1>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Eg: how do i activate F&O, why is my order getting rejected."
              style={{width:"100%", padding:"10px" , marginBottom:"20px" ,outline:"none", border:"2px solid white" ,borderRadius:"3px"}}
            />
          </form>
          <a href="" >Track account opening</a>
          <a href="">Track segment activation </a>
          <a href="">intraday</a>
          <a href="">margins</a>
          <a href="">Kites user manual  </a>
        </div>
        <div className="col-6 mb-5" style={{padding:" 20px 0px 0px 100px"}}>
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li className="mb-2"> <a href="">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
