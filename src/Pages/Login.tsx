import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      {" "}
      <Navbar />
<div className="container-l background-image" style={{ backgroundImage: 'url("./images/Signup.jpg")' }} >
    <div className="box">  
      <form className="form-container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <Link to="/" className="btn btn-primary">Login</Link>
        <Link to="/signup" className="btn btn-secondary signup-button">Sign Up</Link>
      </form>
    </div>
</div>
<Footer />
 
    </>
  );
}
export default Login;
