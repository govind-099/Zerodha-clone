import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  paddingTop
}) {
  return (
    <div className="container">
      <div className="row " style={{ padding: "80px 20px 0px 20px" }} >
        <div className="col-4 mt-5 " style={{paddingTop: paddingTop?"160px" : "0px"}}>
          <h1 className="text-muted fs-3 mb-4">{productName}</h1>
          <p
            className="text-muted"
            style={{ fontWeight: "500", lineHeight: "1.9" }}
          >
            {productDescription}
          </p>
          <div>
            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-8 text-center "  style={{paddingLeft:"80px"}}>
              <img src={ imageURL } />
               {/* className ={paddingTop?"pt-5 mb-5 " :"" }style={{marginTop:paddingTop}} */}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
