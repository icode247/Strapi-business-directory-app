import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const { setActiveUser, setLoggedIn } = props;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      fullname: name,
      email,
      password,
    };
    const res = await axios.post(
      "http://localhost:1337/users-details",
      reqBody
    );
    if (res.statusText === "OK") {
      setActiveUser(res.data);
      setLoggedIn(true);
      history.push('/')
    }
  };
  
  return (
    <section>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h4>Sigup here</h4>
          <input
            type="text"
            placeholder="Fullname"
            onChange={(e) => setName(e.target.value)}
            name="Name"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}
export default SignUp;
