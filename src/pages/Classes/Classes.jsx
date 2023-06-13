import { useState } from "react";
import { useEffect } from "react";
import Class from "../../component/Class/Class";

const Classes = () => {

  const [classes, setClasses]=useState([])
  useEffect(() => {
    fetch("https://summer-camp-server-brown.vercel.app/classes/approved")
      .then(res => res.json())
      .then(data => {
      setClasses(data);
    })
  },[])
    
    
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center my-10">All Classes: {classes.length}</h1>
        {classes.length && (
          <div className="flex flex-wrap">
            {classes.map((item) => (
              <Class key={item._id} item={item}></Class>
            ))}
          </div>
        )}
      </div>
    );
};

export default Classes;