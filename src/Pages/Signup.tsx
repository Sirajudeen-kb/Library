import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      {" "}
      <Navbar />
<div className="container-s background-image" style={{ backgroundImage: 'url("./images/Signup.jpg")' }} >
    <div className="box"> 
      <form className="form-container">
      <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Phone No
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhone1"
            aria-describedby="phoneHelp"
          />
        </div> 
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
        <Link to="/login" className="btn btn-primary">Submit</Link>
      </form>
    </div>
</div>   
<Footer />  
    </>
  );
}
export default Signup;
