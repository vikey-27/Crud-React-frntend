import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Link to="/">
          <div className="nav-header">
            <h1>Navbar</h1>
          </div>
        </Link>
        <div className="nav-links">
          <div className="nav-link">
            <Link to="/"> Create</Link>
          </div>
          <div className="nav-link">
            <Link to="/List">List</Link>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.nav`
  background-color: lightblue;
  padding: 2rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  .nav-links {
    display: flex;
    align-content: flex-end;
  }
  .nav-link {
    margin: 0 2rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Navbar;
