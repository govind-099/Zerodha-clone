import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  centeringImg,
  padding
}) {
  return (
    <div className="container">
       <div className="row mt-3" style={{padding: padding ? "80px 20px 0px 20px" : "40px 20px 0px 20px"}}>
        <div className="col-8">
            <img src={imageURL}  className ={centeringImg?"d-block mx-auto" :"" }/>
        </div>
        <div className="col-4 mt-5">
            <h1 className="text-muted fs-3 mb-4">{productName}</h1>
            <p className="text-muted" style={{fontWeight:"500", lineHeight:"1.9"}}>{productDescription}</p>
            <div>
                <a href={ tryDemo} style={{textDecoration:"none", fontSize:"1rem" , fontWeight:"600"}}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none", fontSize:"1rem" , fontWeight:"600"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
            </div>
           <div className="mt-3">
                <a href={ googlePlay}> <img src="media/images/google-play-badge-light.svg"/></a>
                <a href={ appStore} style={{marginLeft:"50px"}}> <img src="media/images/appstore-badge-light.svg" /></a>
           </div>
            
        </div>
        </div>
    </div>
  );
}

export default LeftSection;
