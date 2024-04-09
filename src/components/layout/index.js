import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavIcon from "../Icons";

const Layout = ({ children, setSearchQuery }) => {
  const [value, setvalue] = useState("");

  const location = useLocation();
  const naviagte = useNavigate();

  const handleSearch = () => {
    if (location?.pathname.includes("movie-detail")) {
      naviagte("/");
      setSearchQuery(value);
    } else {
      setSearchQuery(value);
    }
  };

  const handleCheckClearInput = (event) => {
    // -> when  total input field was clear without clicking on clear button it will directly clear the search
    // value to be empty string
    // if (value === "") {
      // setSearchQuery("");
    // }
    // console.log(event.key)
    // setSearchQuery(value)
    if (event.key === 'Backspace') {
      setSearchQuery(value)
    }
  };
  return (
    <div className="movie-items">
      <nav className="navber">
        <h1 ><Link className="nav-content nav-home" to="/">Movie DB</Link></h1>
        <ul
          className="nav-link"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <li className="nav-content">
            <Link to={"/"} className="nav-text">
              Popular
            </Link>
          </li>
          <li className="nav-content">
            <Link to={"/top-rated"} className="nav-text">
              Top Rated
            </Link>
          </li>
          <li className="nav-content">
            <Link to={"/upcoming"} className="nav-text">
              Upcoming
            </Link>
          </li>
          <li className="nav-content search-container">
            <div
              className="input-container relative w-full"
            >
              <input
                className="search-input"
                placeholder="Search Movies..."
                
                value={value}
                onKeyUp={handleCheckClearInput}
                onChange={(e) => setvalue(e.target.value)}
              />
              <span
                className="input-cancal"
                onClick={() => {
                  setSearchQuery("");
                  setvalue("");
                }}
              >
                {value && "x"}
              </span>
            </div>
            <button className="button btn-button" onClick={handleSearch}>Search</button>
          </li>
        </ul>
        <div className="devices">
              <NavIcon />
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
