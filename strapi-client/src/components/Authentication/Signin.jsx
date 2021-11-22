import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const { setActiveUser, setLoggedIn } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `http://localhost:1337/users-details?email=${email}&password=${password}`
    );

    if (res.data.length === 0) {
      setErrorMessage("Incorrect Email or password");
    } else {
      setActiveUser(res.data);
      setLoggedIn(true);
      history.push("/");
    }
  };
  return (
    <section>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h4>Sigin here</h4>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p>{errorMessage},<Link to="/signup"> Signup </Link>instead</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}
export default SignIn;
