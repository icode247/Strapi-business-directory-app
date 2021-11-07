import { useState } from "react";
import axios from "axios";

const Modal = (props) => {
  const [name, setName] = useState();
  const [slogan, setSlogan] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [code, setCode] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      name,
      slogan,
      phone,
      city,
      street,
      postal_code: code,
      isApproved: false,
    };
    const res = await axios.post("http://localhost:1337/businesses", reqBody);
    console.log(res);
  };
  return (
    <div className="modal">
      <div className="close" onClick={() => props.setShowModal(false)}>
       X
      </div>

      <hr />

      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="control"> Name: </label>
        <input
          className="control"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="control"> Slogan: </label>
        <input
          className="control"
          type="text"
          onChange={(e) => setSlogan(e.target.value)}
        />

        <label className="control"> Phone: </label>
        <input
          className="control"
          type="text"
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="control"> Street: </label>
        <input
          className="control"
          type="text"
          onChange={(e) => setStreet(e.target.value)}
        />

        <label className="control"> Postal Code: </label>
        <input
          className="control"
          type="text"
          onChange={(e) => setCode(e.target.value)}
        />

        <label className="control"> City: </label>
        <input
          type="text"
          className="control"
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="control-1">Submit</button>
      </form>
    </div>
  );
};

export default Modal;
