import { Link } from "react-router-dom";
function Header(props) {
  const { isLoggedIn, setLoggedIn, setActiveUser } = props;

  const handleLogout = () => {
    setLoggedIn((prev) => !prev);
    setActiveUser([]);
  };
  return (
    <header>
      <div className={"logo"}>
        <h4>Biza</h4>
      </div>
      <div className={"navbar"}>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/business"> Business </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li onClick={handleLogout}>Logout</li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin"> Signin </Link>
              </li>
              <li>
                <Link to="/signup"> Signup </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
export default Header;
