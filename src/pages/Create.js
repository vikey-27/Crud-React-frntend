import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../content/auth-context";

const Create = (props) => {
  const [email, setEmail] = useState("");
  const [description, setDesc] = useState("");
  const {idchangeHandler,message,setmessageHandler}=useContext(AuthContext);
  const navigate=useNavigate();


  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const formsubmitHandler = (e) => {
    e.preventDefault();
    const data={email,description};
    fetch("http://localhost:5000/createlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
       idchangeHandler(data.id);
       setmessageHandler(data.message);
       setTimeout(() => {
        navigate('/List')
        setmessageHandler('');
        
       }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <React.Fragment>
      <Wrapper>
        <div className="container">
          <form onSubmit={formsubmitHandler}>
            <div className="form-group">
              <div className="form-control">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={emailChangeHandler}
                ></input>
              </div>
              <div className="form-control">
                <label>description</label>
                <input
                  type="text"
                  value={description}
                  onChange={descChangeHandler}
                ></input>
              </div>
              <div className="form-control">
                <button>submit</button>
              </div>
            </div>
          </form>
        </div>
        {message}
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.div`
  background: lightblue;
  border-radius: 10px;
  padding: 2rem;
  margin: 18rem 4rem 0 4rem;
  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  label {
    margin-right: 10px;
  }
  input {
    width: 80%;
  }
`;

export default Create;
