import { Link } from "react-router-dom";
function BusinessList(props) {
  const { business } = props;
  return (
    <section>
      <div className={"row"}>
        <div className={"card"}>
          <div className={"col-md-12"}>
            <h4>
              <Link to={`/business/${business.id}`}>{business.name}</Link>
            </h4>
          </div>
          <div className={"col-md-12"}>
            <p>{business.slogan}</p>
          </div>
          <div className={"handles"}>
            <button>City: {business.city}</button>
            <button>Call:{business.phone}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessList;
