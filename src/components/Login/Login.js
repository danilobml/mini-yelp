import MyNavbar from "../../Navbar/MyNavbar";
import "./Login.css";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <MyNavbar />
      <Container className="container-log">
        <h2>Login info:</h2>
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
            <div className="button-container">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
