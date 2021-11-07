import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BusinessDetails(props) {
  const { id } = useParams();
  const [comment, setComment] = useState();
  const [comments, setComments] = useState();
  const { business, activeUser, isLoggedIn } = props;
  const businessDetail = business.filter((data) => data.id == id);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:1337/comments?businessId=${id}`
      );
      setComments(response.data);
    }
    fetchData();
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const reqBody = {
      user: activeUser[0].fullname,
      comment,
      businessId: id,
    };
    const resComment = await axios.post(
      "http://localhost:1337/comments",
      reqBody
    );
    setComments([...comments, resComment.data]);
  };
  return (
    <section className={"container"}>
      <div className={"details"}>
        <h4>{businessDetail[0].name}</h4>
        <div className={"location"}>
          <p>Call:{businessDetail[0].phone}</p>
          <p>City: {businessDetail[0].city}</p>
          <p>Street: {businessDetail[0].street}</p>
        </div>
      </div>
      <div className={"comments"}>
        {comments?.length > 0 ? (
          <div>
            {comments.map((comment) => (
              <p>
                <span>{comment.user}: </span>
                {comment.comment}
              </p>
            ))}
          </div>
        ) : (
          <p>No comments</p>
        )}
        <form action="" onSubmit={(e) => handleSumbit(e)}>
          <textarea
            name=""
            id=""
            cols="40"
            rows="3"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className={"btn-info"}>
            {isLoggedIn ? "Send" : <Link to="/signin">Send</Link>}
          </button>
        </form>
      </div>
    </section>
  );
}
export default BusinessDetails;
