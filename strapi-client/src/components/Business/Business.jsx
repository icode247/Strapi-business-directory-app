import BusinessList from "./BusinessList";
import { useState } from "react";
import Modal from "../Modal";

function Business(props) {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, business } = props;
  return (
    <section className="container">
      <h4>Business Listings</h4>
      <div className={"form"}>
        {isLoggedIn && (
          <button className={"btn-danger"} onClick={() => setShowModal(true)}>
            Add business
          </button>
        )}
        <input type="text" name="" id="" />
        <button className={"btn-info"}>Search</button>
      </div>
      <div className={"row"}>
        {business.map((data) => (
          <BusinessList business={data} />
        ))}
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="modal-background"
        ></div>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}
    </section>
  );
}
export default Business;
