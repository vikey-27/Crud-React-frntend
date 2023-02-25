import React, { useState } from "react";
export const AuthContext = React.createContext();

export const ContextProvider = (props) => {
  const [detailList, setDetailList] = useState([]);
  const [id, setId] = useState("");
  const [message, setmessage] = useState("");
  const [email,setEmail]=useState('')
  const [desc,setDesc]=useState('');

  const setDetailHandler = (list) => {
    setDetailList(list);
  };
  const setmessageHandler = (message) => {
    setmessage(message);
  };
  const idchangeHandler = (id) => {
    setId(id);
  };
  const emailHandler=(email)=>{
    setEmail(email);
  }
  const descHandler=(desc)=>{
    setDesc(desc);
  }
  return (
    <AuthContext.Provider
      value={{
        emailHandler,
        descHandler,
        email,
        desc,
        idchangeHandler,
        id,
        message,
        setmessageHandler,
        setDetailHandler,
        detailList,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
