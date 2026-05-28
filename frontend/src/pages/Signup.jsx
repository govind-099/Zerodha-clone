import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/signup",
        formData,
      );
      //token save
      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      //redirect to home
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="main">
      <div className="container text-center" style={{ padding: "80px 0px" }}>
        <h1 className="fs-3 text-muted">
          Open a free demat and trading account online
        </h1>
        <p className=" fs-5 text-muted mt-3" style={{ fontWeight: "500" }}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://zerodha.com/static/images/account_open.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="col-6" style={{ paddingLeft: "40px" }}>
            <h2 className="fs-3 text-muted" style={{ paddingTop: "20px" }}>
              Signup now
            </h2>
            <p className="text-muted" style={{ fontWeight: "500" }}>
              Or track your existing application
            </p>

            <form onSubmit={handleSubmit}>
              <div className="intputs">
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="btn-div">
                <button type="submit" className="btn btn-primary  ">
                  Signup
                </button>
                <Link to="/login">
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </Link>
              </div>
            </form>
            <p className="small">
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
            <hr style={{ width: "80%" }} />
            <p className="small">
              Looking to open NRI account? <a href="">Click here</a>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
