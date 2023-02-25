import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "../components/Listitem";
import { AuthContext } from "../content/auth-context";

const data = [
  {
    id: "63f4ca0aaef3330fcdf6d053",
    email: "hello1223@place.com",
    description: "three",
  },
  {
    id: "63f4ca47243ad142fbac53a1",
    email: "hello1223@place.com",
    description: "three",
  },
];

const List = () => {
  const navigate=useNavigate();
  const { message, setmessageHandler, setDetailHandler, detailList } =
    useContext(AuthContext);


      useEffect(() => {
        fetch("http://localhost:5000/getlist")
          .then((response) => response.json())
          .then((data) => {
            setDetailHandler(data);
            // console.log(data);
          })
          .catch((error) => {
            setmessageHandler(error.message);
             navigate('/create');
             setTimeout(() => {
              setmessageHandler('')
              
             }, 2000);
           
          });
      }, []);
      
   

  

  // console.log(detailList)

  if (detailList === 'No data is Found' ){
    return (
      <div>
        <h1>List Empty</h1>
        
      </div>
    );
  }
 
  return (
    <div>
      {detailList && (
        <div>
          {detailList.map((d) => {
            return (
              <ListItem
                id={d._id}
                email={d.email}
                description={d.description}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
