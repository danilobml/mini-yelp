import MyNavbar from "../../Navbar/MyNavbar";
import "./Register.css";
import { Container } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <MyNavbar />
      <Container className="container-log">
        <h2>Please register:</h2>
        <div className="form">
          <form>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="input-container">
              <label>Full Name </label>
              <input type="text" name="fname" required />
            </div>
            <div className="input-container">
              <label>Email </label>
              <input type="e-mail" name="uname" required />
            </div>
            <div className="input-container">
              <label>Address </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Date of Birth </label>
              <input type="text" name="uname" required />
            </div>
            <div className="button-container">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;
