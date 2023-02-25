import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../content/auth-context";

const ListItem = (props) => {
  const {
    message,
    setmessageHandler,
    emailHandler,
    descHandler,
    email,
    desc,
    idchangeHandler,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteHandler = (id,e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/deletelist/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setmessageHandler(data.message);
        // console.log(data);
        if (data.id) {
          setTimeout(() => {
            window.location.reload(false);
            // navigate('/List');
            setmessageHandler("");
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editHandler = (id,email,desc) => {
    emailHandler(email);
    descHandler(desc);
    idchangeHandler(id);
    setTimeout(() => {
      navigate(`/edit/${id}`);
      
    }, 500);

  };
  return (
    <div>
      <Wrapper>
        <div className="container">
          <ul key={props.id}>
            <li>{props.email}</li>
            <li>{props.description}</li>
            <span>{message}</span>
          </ul>

          <button
            onClick={() => {
              deleteHandler(props.id);
            }}
          >
            Delete
          </button>
          <button onClick={() => {editHandler(props.id,props.email,props.description)}}>Edit</button>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  background: lightblue;
  margin: 1rem;

  ul {
    background: lightblue;
    padding: 2rem;
  }
  button {
    margin: 0 1rem 0.5rem 1rem;
  }
`;

export default ListItem;
