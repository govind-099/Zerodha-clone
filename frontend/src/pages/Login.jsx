import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        "https://zerodha-backend-kc0s.onrender.com/api/auth/login",
        formData,
      );

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      //redirect to home page
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="row mb-5">
      <div style={{ padding: "40px" }} >
        <h1 className="fs-1 text-muted mb-3" style={{ paddingTop: "20px" }}>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="intputs" style={{ width: "50%" }}>
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

          <div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "15%" }}
            >
              Login
            </button>
          </div>
        </form>
        <hr style={{ width: "40%", marginBottom: "10px" }} />
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "10px" }}>If you dont have User Accout?</p>
          <Link to="/signup">Go To Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
