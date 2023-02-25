import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../content/auth-context";

const Edit = () => {
  const { email, desc, id, emailHandler, descHandler, idChangeHandler,setmessageHandler,message } =
    useContext(AuthContext);

    const navigate=useNavigate();

//   console.log(email, desc, id);

  const data = { email:email,description:desc };
  

  const editformHandler = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/editlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => 
        response.json()
      )
      .then((data) => {
        setmessageHandler(data.message);

        setTimeout(() => {
         if(data.id)
          navigate('/List')
         setmessageHandler('');
         
        }, 1000);

      }).catch((error)=>{
        setmessageHandler(error.message);
      })
  };

  return (
    <React.Fragment>
      <Wrapper>
        <div className="container">
          <form onSubmit={editformHandler}>
            <div className="form-group">
              <div className="form-control">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    emailHandler(e.target.value);
                  }}
                ></input>
              </div>
              <div className="form-control">
                <label>description</label>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => {
                    descHandler(e.target.value);
                  }}
                ></input>
              </div>
              {message}
              <div className="form-control">
                <button>Update</button>
              </div>
            </div>
          </form>
        </div>
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

export default Edit;
